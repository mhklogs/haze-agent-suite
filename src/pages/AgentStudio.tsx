import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  ArrowRight,
  Copy,
  Check,
  Cpu,
  Play,
  Clock,
  Trash2,
  Database,
  Sparkles,
} from "lucide-react";
import { getAgent } from "../agents/config";
import { runAgentStreaming, hasApiKey, AUTH_MESSAGE, MODEL } from "../lib/gemini";
import { GEO_SAMPLES, SUPPORT_TICKETS, SKU_ROWS } from "../data/samples";

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
  const Icon = agent.icon;
  const IconNext = agent.icon;

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
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}
      <div className="flex items-start gap-5">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl neon-ring"
          style={{ background: `${agent.accent}1a`, color: agent.accent }}
        >
          <Icon className="h-7 w-7" />
        </span>
        <div className="min-w-0">
          <p className="font-code text-xs text-[#8E8E93]">{agent.code} · module</p>
          <h1 className="font-display text-4xl uppercase tracking-tight">{agent.name}</h1>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#FF2E3A]">
            {agent.tagline}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#A7A7AC]">
            {agent.blurb}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Composer */}
        <div className="glass rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-white">{agent.inputLabel}</label>
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#8E8E93]">
              <Cpu className="h-3 w-3 text-[#E50914]" /> {MODEL}
            </span>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={agent.inputPlaceholder}
            rows={8}
            className="mt-3 w-full resize-y rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#101012] p-4 font-code text-sm text-white placeholder:text-[#5c5c62] focus:border-[#E50914]/60 focus:outline-none focus:ring-2 focus:ring-[#E50914]/20"
          />

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              onClick={injectSample}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-[#A7A7AC] transition hover:bg-white/10"
            >
              <Sparkles className="h-3.5 w-3.5" /> Inject sample
            </button>
            {hasDataset && (
              <button
                onClick={injectDataset}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-[#A7A7AC] transition hover:bg-white/10"
              >
                <Database className="h-3.5 w-3.5" /> Inject {agent.id === "geoengine" ? "3 audit sites" : agent.id === "supportops" ? "3 tickets" : "5 SKUs"}
              </button>
            )}
            <button
              onClick={() => setInput("")}
              className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-[#8E8E93] transition hover:text-white"
            >
              <Trash2 className="h-3.5 w-3.5" /> Clear
            </button>
          </div>

          <button
            onClick={() => run()}
            disabled={streaming || !input.trim()}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E50914] px-6 py-3.5 font-semibold text-white shadow-[0_0_36px_-8px_rgba(229,9,20,0.9)] transition hover:bg-[#FF2E3A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Play className="h-4 w-4" />
            {streaming ? "Agent is reasoning…" : `Run ${agent.name}`}
            {!streaming && <ArrowRight className="h-4 w-4" />}
          </button>
        </div>

        {/* Output panel */}
        <div ref={outRef} className="glass-strong h-[460px] overflow-y-auto rounded-2xl p-5">
          {!last && (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <IconNext className="h-12 w-12 text-[#E50914]/40" />
              <p className="mt-4 font-hand text-2xl text-[#A7A7AC]">
                Output will render here
              </p>
              <p className="mt-1 max-w-xs text-xs text-[#5c5c62]">
                Paste context, inject a sample, or pull the bundled dataset, then launch {agent.name}.
              </p>
            </div>
          )}

          {runs.map((r) => (
            <div key={r.id} className="mb-6">
              <div className="flex items-center gap-2 text-[11px] text-[#8E8E93]">
                <span
                  className={`h-2 w-2 rounded-full ${
                    r.status === "done"
                      ? "bg-emerald-400"
                      : r.status === "error"
                        ? "bg-[#E50914]"
                        : "animate-pulse bg-[#E50914]"
                  }`}
                />
                <span className="font-code">
                  {r.status === "running" ? "streaming…" : r.status}
                </span>
                <span className="ml-auto flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {new Date(r.ts).toLocaleTimeString()}
                </span>
                {r.status === "done" && (
                  <button
                    onClick={() => copy(r)}
                    className="ml-2 inline-flex items-center gap-1 text-[#8E8E93] transition hover:text-white"
                    title="Copy output"
                  >
                    {copied === r.id ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                )}
              </div>
              <div className="md-body mt-3 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0F0F11] p-4">
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
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#8E8E93]">
          Switch agents instantly
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(["geoengine", "supportops", "pricepilot", "relevnt", "codebridge", "researchsynth", "testforge", "edgemint", "focusrank", "marketforge", "legalbeacon", "podcastforge", "recruitauditor", "sentienthub"] as const).map(
            (aid) => {
              const a = getAgent(aid);
              const A = a.icon;
              const active = a.id === agent.id;
              return (
                <Link
                  key={a.id}
                  to={`/agents/${a.id}`}
                  className={
                    active
                      ? "inline-flex items-center gap-2 rounded-xl bg-[#E50914] px-4 py-2 text-sm font-semibold"
                      : "inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-[#A7A7AC] transition hover:bg-white/10 hover:text-white"
                  }
                >
                  <A className="h-4 w-4" />
                  {a.name}
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}