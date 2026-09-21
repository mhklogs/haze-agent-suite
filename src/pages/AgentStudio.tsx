import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  Copy,
  Check,
  Cpu,
  Play,
  Clock,
  Trash2,
  Database,
  Sparkles,
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import { getAgent, AGENTS } from "../agents/config";
import { runAgentStreaming, hasApiKey, AUTH_MESSAGE, MODEL } from "../lib/gemini";
import { GEO_SAMPLES, SUPPORT_TICKETS, SKU_ROWS } from "../data/samples";
import { AgentLogo } from "../agents/logos";

interface Run {
  id: number;
  agent: string;
  input: string;
  output: string;
  ts: number;
  status: "running" | "done" | "error";
}

function buildDatasetPrompt(agentId: string): string {
  if (agentId === "geoengine") {
    return GEO_SAMPLES.map(
      (s) => `SAMPLE SITE: ${s.name} (${s.industry})\nCONTENT:\n${s.text}`
    ).join("\n\n---\n\n");
  }
  if (agentId === "supportops") {
    return SUPPORT_TICKETS.map(
      (t) =>
        `TICKET ${t.id} · ${t.subject}\nCustomer: ${t.customer} (${t.company}, ${t.tier})\nSentiment: ${t.sentiment}\n\n${t.body}`
    ).join("\n\n---\n\n");
  }
  if (agentId === "pricepilot") {
    return SKU_ROWS.map(
      (r) =>
        `${r.sku} · ${r.segment} · cost ${r.cost} · price ${r.price} · units/mo ${r.units}`
    ).join("\n");
  }
  return "";
}

export default function AgentStudio() {
  const { id = "geoengine" } = useParams();
  const agent = getAgent(id);

  const [input, setInput] = useState("");
  const [runs, setRuns] = useState<Run[]>([]);
  const [streaming, setStreaming] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const outRef = useRef<HTMLDivElement>(null);
  const runId = useRef(0);

  const datasetPrompt = useMemo(() => buildDatasetPrompt(agent.id), [agent.id]);
  const hasDataset = datasetPrompt.length > 0;

  useEffect(() => {
    setRuns([]);
    setInput("");
  }, [agent.id]);

  useEffect(() => {
    outRef.current?.scrollTo({ top: outRef.current.scrollHeight, behavior: "smooth" });
  }, [runs]);

  const injectSample = () => setInput(agent.sample);
  const injectDataset = () => {
    setInput((prev) =>
      prev.trim() ? `${datasetPrompt}\n\n---\n\n${prev}` : datasetPrompt
    );
  };

  const run = async (override?: string) => {
    const prompt = (override ?? input).trim();
    if (!prompt) return;

    const myId = ++runId.current;
    setStreaming(true);
    setRuns((prev) => [
      ...prev,
      { id: myId, agent: agent.id, input: prompt, output: "", ts: Date.now(), status: "running" },
    ]);

    if (!hasApiKey()) {
      setRuns((prev) =>
        prev.map((r) =>
          r.id === myId
            ? { ...r, status: "error", output: `> ${AUTH_MESSAGE}` }
            : r
        )
      );
      setStreaming(false);
      return;
    }

    try {
      const final = await runAgentStreaming({
        system: agent.system,
        prompt,
        temperature: 0.55,
        onDelta: (chunk) => {
          setRuns((prev) =>
            prev.map((r) => (r.id === myId ? { ...r, output: r.output + chunk, status: "running" } : r))
          );
        },
      });
      setRuns((prev) =>
        prev.map((r) =>
          r.id === myId ? { ...r, output: final.length >= r.output.length ? final : r.output, status: "done" } : r
        )
      );
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setRuns((prev) =>
        prev.map((r) => (r.id === myId ? { ...r, status: "error", output: `> Error: ${msg}` } : r))
      );
    } finally {
      setStreaming(false);
    }
  };

  const copy = async (r: Run) => {
    try {
      await navigator.clipboard.writeText(r.output);
      setCopied(r.id);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const last = runs[runs.length - 1];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <span
          className="logo-tile flex h-16 w-16 shrink-0 items-center justify-center"
          style={{ borderColor: `${agent.accent}55`, boxShadow: `0 0 34px -10px ${agent.accent}88` }}
        >
          <AgentLogo id={agent.id} size={40} />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {agent.code} · autonomous module
            </p>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white"
              style={{ background: `${agent.accent}26`, color: agent.accent }}
            >
              <CircleCheck className="h-3 w-3" /> Free trial · one per agent
            </span>
          </div>
          <h1 className="mt-1 font-display text-3xl uppercase tracking-tight md:text-5xl">
            {agent.name}
          </h1>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: agent.accent }}>
            {agent.tagline}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {agent.blurb}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Composer */}
        <div className="panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="font-head text-sm font-semibold text-white">
              {agent.inputLabel}
            </label>
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
              <Cpu className="h-3 w-3" style={{ color: agent.accent }} /> {MODEL}
            </span>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={agent.inputPlaceholder}
            rows={8}
            className="mt-3 w-full resize-y rounded-xl border border-line bg-void p-4 font-mono text-sm text-white placeholder:text-muted/60 focus:border-haze/60 focus:outline-none focus:ring-2 focus:ring-haze/20"
          />

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              onClick={injectSample}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-ink-soft transition hover:bg-white/10"
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: agent.accent }} /> Inject sample
            </button>
            {hasDataset && (
              <button
                onClick={injectDataset}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-ink-soft transition hover:bg-white/10"
              >
                <Database className="h-3.5 w-3.5" style={{ color: agent.accent }} />{" "}
                {agent.id === "geoengine"
                  ? "Inject 3 audit sites"
                  : agent.id === "supportops"
                    ? "Inject 3 tickets"
                    : "Inject 5 SKUs"}
              </button>
            )}
            <button
              onClick={() => setInput("")}
              className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-muted transition hover:text-white"
            >
              <Trash2 className="h-3.5 w-3.5" /> Clear
            </button>
          </div>

          <button
            onClick={() => run()}
            disabled={streaming || !input.trim()}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-haze px-6 py-3.5 font-head font-semibold text-white shadow-[0_0_36px_-10px_rgba(255,46,68,0.9)] transition hover:bg-[#FF4B5E] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Play className="h-4 w-4" />
            {streaming ? "Agent is reasoning…" : `Launch ${agent.name} trial`}
            {!streaming && <ArrowRight className="h-4 w-4" />}
          </button>
        </div>

        {/* Output panel */}
        <div
          ref={outRef}
          className="panel h-[440px] overflow-y-auto p-5 md:h-[460px]"
        >
          {!last && (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="logo-tile flex h-16 w-16 items-center justify-center opacity-80">
                <AgentLogo id={agent.id} size={40} stroke={false} />
              </div>
              <p className="mt-5 font-head text-xl font-semibold uppercase tracking-wide text-ink-soft">
                Output will render here
              </p>
              <p className="mt-2 max-w-xs text-xs text-muted">
                Paste your context, inject a sample, or pull the bundled dataset, then
                launch your free trial of {agent.name}.
              </p>
            </div>
          )}

          {runs.map((r) => (
            <div key={r.id} className="mb-6">
              <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
                <span
                  className={`h-2 w-2 rounded-full ${
                    r.status === "done"
                      ? "bg-mint"
                      : r.status === "error"
                        ? "bg-haze"
                        : "animate-pulse bg-haze"
                  }`}
                />
                <span>{r.status === "running" ? "streaming…" : r.status}</span>
                <span className="ml-auto flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {new Date(r.ts).toLocaleTimeString()}
                </span>
                {r.status === "done" && (
                  <button
                    onClick={() => copy(r)}
                    className="ml-2 inline-flex items-center gap-1 text-muted transition hover:text-white"
                    title="Copy output"
                  >
                    {copied === r.id ? (
                      <Check className="h-3.5 w-3.5 text-mint" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                )}
              </div>
              <div className="md-body mt-3 rounded-xl border border-line bg-void p-4">
                <ReactMarkdown>
                  {r.output ||
                    (r.status === "running" ? "*Reasoning…*" : "*No output*")}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent switcher */}
      <div className="mt-10">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            switch agents instantly
          </p>
          <Link
            to="/pricing"
            className="inline-block font-head text-xs font-semibold text-haze transition hover:text-haze-soft"
          >
            One plan, all {AGENTS.length} agents →
          </Link>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {AGENTS.map((a) => {
            const active = a.id === agent.id;
            return (
              <Link
                key={a.id}
                to={`/agents/${a.id}`}
                title={`Run ${a.name} trial`}
                className={
                  active
                    ? "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-head font-semibold text-white"
                    : "inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-ink-soft transition hover:bg-white/10 hover:text-white"
                }
                style={active ? { background: a.accent, boxShadow: `0 0 26px -8px ${a.accent}` } : undefined}
              >
                <AgentLogo id={a.id} size={20} stroke={false} />
                <span className="hidden sm:inline">{a.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}