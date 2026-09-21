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
      "Choose your preferred reasoning tier",
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
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-6">
      <ScrollReveal>
        <div className="text-center">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-1.5">
            <span className="pulse-dot flex h-2 w-2 rounded-full bg-haze" />
            <span className="label-meta">
              one plan · every agent
            </span>
          </p>
          <h1 className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.08] md:text-5xl">
            Every agent free to try.
            <br />
            <em className="text-haze not-italic">One plan to run them all.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            No per-agent billing, no surprise invoices. Every agent includes one
            free trial on your real work — then a single subscription unlocks all
            fourteen.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={90}>
        <div className="accent-edge panel mt-14 flex flex-col items-center gap-5 p-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <span className="logo-tile flex h-12 w-12 shrink-0 items-center justify-center">
              <Gift className="h-5 w-5 text-haze" />
            </span>
            <div>
              <p className="text-lg font-semibold text-ink">
                Try all {AGENTS.length} agents — one free trial each
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                No credit card. Trials run on the data you paste, and the result is yours to keep.
              </p>
            </div>
          </div>
          <Link
            to="/agents/geoengine"
            className="btn btn-primary shrink-0"
          >
            Claim a trial <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TIERS.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 80}>
            <div
              className={
                t.highlight
                  ? "relative flex h-full flex-col rounded-2xl border border-haze/45 bg-panel p-7"
                  : "relative flex h-full flex-col rounded-2xl border border-line bg-panel p-7"
              }
            >
              {t.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-haze px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F9F8F6]">
                  {t.tag}
                </span>
              )}
              <p className="label-meta">
                {t.name}
              </p>
              <p className="mt-4 font-display text-5xl leading-none">
                {t.price}
                <span className="font-sans text-base font-normal text-muted"> {t.period}</span>
              </p>
              <p className="mt-2 text-[13px] text-ink-soft">{t.tag}</p>

              <ul className="mt-7 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    {f}
                  </li>
                ))}
                {t.off.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted/80">
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
                className={
                  t.highlight
                    ? "btn btn-primary mt-8 w-full"
                    : "btn btn-ghost mt-8 w-full"
                }
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-16 rounded-2xl border border-line bg-abyss p-9">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <CircleCheck className="h-6 w-6 shrink-0 text-haze" />
              <div className="text-center sm:text-left">
                <p className="text-lg font-semibold text-ink">Wholesale for agencies</p>
                <p className="mt-1 max-w-xl text-sm text-ink-soft">
                  Resell white-labeled agent workspaces to your own clients. Volume
                  pricing, shared support and custom prompts from ten seats.
                </p>
              </div>
            </div>
            <a
              href="mailto:ops@haze.labs?subject=Wholesale%20access"
              className="btn btn-ghost shrink-0"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: `${AGENTS.length}`, l: "agents included" },
              { v: "1", l: "free trial each" },
              { v: "99.9%", l: "uptime SLA (business)" },
              { v: "No", l: "per-agent fees" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-line bg-panel p-5 text-center">
                <p className="font-display text-3xl">{s.v}</p>
                <p className="label-meta mt-1.5">
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