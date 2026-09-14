import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { AGENTS } from "../agents/config";

const TIERS = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    tag: "for individuals",
    cta: "Start free",
    features: [
      { on: true, text: "All 14 agents · 25 requests / month" },
      { on: true, text: "Sample dataset injection" },
      { on: true, text: "Markdown output + copy" },
      { on: true, text: "Community support" },
      { on: false, text: "Unlimited streaming" },
      { on: false, text: "API access & webhooks" },
      { on: false, text: "Team workspaces & audit logs" },
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ month",
    tag: "most popular",
    cta: "Go Pro",
    highlight: true,
    features: [
      { on: true, text: "All 14 agents · 2,000 requests / month" },
      { on: true, text: "Unlimited streaming + history" },
      { on: true, text: "Choice of Gemini 2.5 Pro / Flash" },
      { on: true, text: "Batch runs + saved agent presets" },
      { on: true, text: "Export to PDF / Markdown" },
      { on: false, text: "API access & webhooks" },
      { on: false, text: "Team workspaces & audit logs" },
    ],
  },
  {
    name: "Business",
    price: "$49",
    period: "/ month",
    tag: "for teams",
    cta: "Contact sales",
    highlight: false,
    features: [
      { on: true, text: "Everything in Pro" },
      { on: true, text: "API access + webhooks" },
      { on: true, text: "Team workspaces & SSEP audit logs" },
      { on: true, text: "Custom agent prompts (white-label)" },
      { on: true, text: "Priority support, 99.9% SLA" },
      { on: true, text: "SOC2-aligned security questionnaire" },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <ScrollReveal>
        <div className="text-center">
          <p className="font-hand text-2xl text-[#FF2E3A]">fair &amp; transparent</p>
          <h1 className="font-display text-5xl uppercase tracking-tight md:text-6xl">
            Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[#A7A7AC]">
            One subscription unlocks every agent. No per-agent surprise billing —
            your whole command center for the price of a coffee.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TIERS.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 90}>
            <div
              className={
                t.highlight
                  ? "relative h-full rounded-2xl border border-[#E50914]/60 bg-[#0F0F11] p-7 neon-ring"
                  : "relative h-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0F0F11] p-7"
              }
            >
              {t.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-[#E50914] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  {t.tag}
                </span>
              )}
              <p className="font-condensed text-lg tracking-widest text-[#8E8E93] uppercase">
                {t.name}
              </p>
              <p className="mt-3 font-display text-5xl">
                {t.price}
                <span className="font-inter text-sm text-[#8E8E93]"> {t.period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-start gap-2.5 text-sm ${
                      f.on ? "text-[#d7d7da]" : "text-[#5c5c62]"
                    }`}
                  >
                    {f.on ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E50914]" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-[#3a3a3e]" />
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>
              <Link
                to="/pitch"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
                  t.highlight
                    ? "bg-[#E50914] text-white hover:bg-[#FF2E3A]"
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
        <div className="mt-16 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0B0B0C] p-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-[#E50914]" />
              <div>
                <p className="font-semibold">Wholesale for agencies</p>
                <p className="text-sm text-[#A7A7AC]">
                  Resell white-labeled agent workspaces to your clients. Volume pricing from 10 seats.
                </p>
              </div>
            </div>
            <Link
              to="/pitch"
              className="rounded-xl bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Talk to us →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["14 agents", `${AGENTS.length * 3}+ prompts`, "99.9% SLA", "SSEP-grade QA"].map((s) => (
              <div key={s} className="rounded-xl bg-white/5 p-4 text-center">
                <p className="font-display text-2xl text-glow-white">{s.split(" ")[0]}</p>
                <p className="text-[11px] uppercase tracking-wider text-[#8E8E93]">
                  {s.split(" ").slice(1).join(" ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}