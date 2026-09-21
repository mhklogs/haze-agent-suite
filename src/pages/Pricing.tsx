import { Link } from "react-router-dom";
import { Check, Minus, ArrowRight, CircleCheck, Gift } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { AGENTS } from "../agents/config";

const TIERS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    tag: "try before you buy",
    cta: "Start a free trial",
    highlight: false,
    features: [
      "All 14 agents, one free trial each",
      "Sample datasets to explore",
      "Markdown output + one-click copy",
      "3 starter requests / month after trials",
      "Community support",
    ],
    off: ["Unlimited streaming", "API access & webhooks", "Team workspaces & audit logs"],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ month",
    tag: "the favourite",
    cta: "Go Pro",
    highlight: true,
    features: [
      "Everything in Starter",
      "2,000 requests / month across all agents",
      "Unlimited streaming + run history",
      "Choice of Gemini 2.5 Pro / Flash",
      "Batch runs + saved agent presets",
      "Export to PDF / Markdown",
      "Priority support",
    ],
    off: ["API access & webhooks", "Team workspaces & audit logs"],
  },
  {
    name: "Business",
    price: "$49",
    period: "/ month",
    tag: "for teams",
    cta: "Contact sales",
    highlight: false,
    features: [
      "Everything in Pro",
      "API access + webhooks",
      "Team workspaces & audit logs",
      "Custom white-label agent prompts",
      "99.9% uptime SLA",
      "SOC2-aligned security review",
    ],
    off: [],
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-6">
      <ScrollReveal>
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
            <span className="pulse-dot flex h-2 w-2 rounded-full bg-haze" />
            one plan · every agent
          </p>
          <h1 className="mt-6 font-display text-4xl uppercase tracking-tight md:text-6xl">
            Every agent free to try.
            <br />
            <span className="text-glow-haze text-haze">One plan to run them.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-ink-soft md:text-lg">
            No per-agent billing, no surprise invoices. Every agent includes one free
            trial on your real work — then a single subscription unlocks all fourteen.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div className="accent-edge panel mt-12 flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="logo-tile flex h-12 w-12 shrink-0 items-center justify-center">
              <Gift className="h-5 w-5 text-mint" />
            </span>
            <div>
              <p className="font-head text-lg font-semibold">Try all {AGENTS.length} agents — one free trial each</p>
              <p className="mt-0.5 text-sm text-ink-soft">
                No credit card. Trials run on the data you paste, and the verdict is yours to keep.
              </p>
            </div>
          </div>
          <Link
            to="/agents/geoengine"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-haze px-6 py-3 font-head font-semibold text-white shadow-[0_0_36px_-10px_rgba(255,46,68,0.9)] transition hover:bg-[#FF4B5E]"
          >
            Claim a trial <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TIERS.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 90}>
            <div
              className={
                t.highlight
                  ? "relative h-full rounded-2xl border border-haze/60 bg-panel p-7 neon-ring"
                  : "relative h-full rounded-2xl border border-line bg-panel p-7"
              }
            >
              {t.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-haze px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                  {t.tag}
                </span>
              )}
              <p className="font-head text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                {t.name}
              </p>
              <p className="mt-3 font-display text-5xl">
                {t.price}
                <span className="font-sans text-sm text-muted"> {t.period}</span>
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                {t.tag}
              </p>

              <ul className="mt-6 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    {f}
                  </li>
                ))}
                {t.off.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted/70">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to={`/agents/${t.name === "Business" ? "pricing" : "geoengine"}`}
                onClick={(e) => {
                  if (t.name === "Business") {
                    e.preventDefault();
                    window.location.href = "mailto:ops@haze.labs?subject=Business plan";
                  }
                }}
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 font-head text-sm font-semibold transition ${
                  t.highlight
                    ? "bg-haze text-white hover:bg-[#FF4B5E]"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-16 rounded-2xl border border-line bg-abyss p-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
              <CircleCheck className="h-6 w-6 shrink-0 text-volt" />
              <div className="text-center sm:text-left">
                <p className="font-head font-semibold">Wholesale for agencies</p>
                <p className="mt-1 max-w-xl text-sm text-ink-soft">
                  Resell white-labeled agent workspaces to your own clients. Volume pricing, shared support and custom prompts from 10 seats.
                </p>
              </div>
            </div>
            <a
              href="mailto:ops@haze.labs?subject=Wholesale%20access"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-6 py-3 font-head text-sm font-semibold transition hover:bg-white/10"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: `${AGENTS.length}`, l: "agents included" },
              { v: "1", l: "free trial each" },
              { v: "99.9%", l: "uptime SLA (business)" },
              { v: "No", l: "per-agent fees" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white/5 p-4 text-center">
                <p className="font-display text-2xl text-glow-white">{s.v}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}