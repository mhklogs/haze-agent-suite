import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ShieldCheck, CircleCheck, Terminal, Repeat } from "lucide-react";
import ParticleField from "../components/ParticleField";
import TiltCard from "../components/TiltCard";
import ScrollReveal from "../components/ScrollReveal";
import { AGENTS } from "../agents/config";
import { AgentLogo, SuiteLogo } from "../agents/logos";

const HOW = [
  {
    n: "01",
    title: "Pick a mission",
    text: "Audit, triage, reprice, migrate, test, draft, produce — choose the agent that owns the job you are doing today.",
  },
  {
    n: "02",
    title: "Run a free trial",
    text: "Every agent gets one full free trial. Paste your real work, not a demo file. No card, no account friction.",
  },
  {
    n: "03",
    title: "Put it on shift",
    text: "One plan unlocks every agent. Keep the ones that change your workflow, add the rest when you are ready.",
  },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Audited output, by default",
    text: "Each agent ships with a pinned scoring rubric and an agent-critic loop, so results come back scored, cited and ready to act on — not stream-of-consciousness text.",
  },
  {
    icon: Repeat,
    title: "Runs on your real data",
    text: "Feed in your website copy, your tickets, your SKUs, your contracts. Every agent works on the actual context you bring, not canned examples.",
  },
  {
    icon: Terminal,
    title: "One brain, fourteen roles",
    text: "One shared runner means one mental model. Swap agents in and out of your workflow without relearning a new tool for every task.",
  },
];

const PRAISE = [
  {
    q: "We ran the GEO audit on launch copy before publishing. It caught the exact fragments an LLM would never have quoted, and the suggested rewrites were directly usable.",
    n: "Growth Lead",
    c: "B2B SaaS, 40-person team",
  },
  {
    q: "SupportOps handled the first pass on every escalated ticket last month. Tiering, root-cause guesses and a draft reply in under a minute — the team only touches the queue now.",
    n: "Head of Customer Ops",
    c: "Fintech scale-up",
  },
  {
    q: "I described a 40-step checkout flow once and TestForge produced a Playwright suite that ran clean on the first pass. That alone pays for the subscription.",
    n: "Staff SDET",
    c: "E-commerce marketplace",
  },
];

const FAQS = [
  {
    q: "Is every agent really free to try?",
    a: "Yes — each agent includes one free trial run so you can test it on your real work before committing. After the trial, usage counts against the limits of your plan.",
  },
  {
    q: "What does one subscription cover?",
    a: "A single plan unlocks all fourteen agents. There is no per-agent seat fee and no surprise billing when you switch to a different role.",
  },
  {
    q: "Where does my data go?",
    a: "Inputs you paste go to the model provider to produce a result and are not used to train anything. For sensitive work, the Business plan adds team workspaces and audit logging.",
  },
  {
    q: "Do I need to be technical to use it?",
    a: "No. Every agent accepts plain language and returns plain English results. The verdicts, tables and fix lists are written for the person doing the job, not for a machine.",
  },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-3xl text-glow-white md:text-4xl">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ParticleField density={520} />
          <div className="absolute inset-0 hud-grid" />
          <div className="aurora -top-32 left-1/4 h-80 w-80 bg-[#FF2E44]/18" />
          <div className="aurora top-10 right-[8%] h-72 w-72 bg-[#4DE3FF]/12" />
          <div className="absolute -bottom-16 left-1/2 h-64 w-[130%] -translate-x-1/2 rounded-[100%] bg-[#FF2E44]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 text-center md:px-6 md:pt-24">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-xs tracking-wide">
              <span className="pulse-dot flex h-2 w-2 rounded-full bg-haze" />
              <span className="font-head font-semibold uppercase tracking-[0.18em] text-ink-soft">
                Haze Agent Suite · 14 autonomous operatives
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="mx-auto mt-8 max-w-4xl font-display text-4xl uppercase leading-[1.02] tracking-tight md:text-7xl">
              Your team runs on{" "}
              <span className="text-glow-haze text-haze">fourteen AI agents.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              One command center that audits your search visibility, triages support,
              reprices for margin, migrates your code, drafts your contracts and
              produces your podcast. Pick an agent, run it free on your real work,
              and put it on the shift.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/agents/geoengine"
                className="group inline-flex items-center gap-2 rounded-xl bg-haze px-7 py-3.5 font-head font-semibold text-white shadow-[0_0_44px_-10px_rgba(255,46,68,0.9)] transition hover:bg-[#FF4B5E]"
              >
                Try any agent free
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-head font-semibold text-white transition hover:bg-white/5"
              >
                View pricing
              </Link>
            </div>
            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-muted">
              <span className="flex items-center gap-1.5">
                <CircleCheck className="h-3.5 w-3.5 text-mint" /> One free trial per agent
              </span>
              <span className="flex items-center gap-1.5">
                <CircleCheck className="h-3.5 w-3.5 text-mint" /> No credit card to start
              </span>
              <span className="flex items-center gap-1.5">
                <CircleCheck className="h-3.5 w-3.5 text-mint" /> Runs on your data
              </span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-line/60 pt-8 sm:grid-cols-4">
              <Stat value="14" label="agents, one plan" />
              <Stat value="60s" label="to first result" />
              <Stat value="0" label="per-agent fees" />
              <Stat value="∞" label="your data, scored" />
            </div>
          </ScrollReveal>
        </div>

        <div className="relative flex justify-center pb-8">
          <ChevronDown className="h-6 w-6 animate-bounce text-muted" />
        </div>
      </section>

      {/* ================= ROSTER ================= */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-6">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-head text-sm font-semibold uppercase tracking-[0.24em] text-haze">
                the roster
              </p>
              <h2 className="mt-1 font-display text-3xl uppercase tracking-tight md:text-5xl">
                Pick the agent, own the job
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                Fourteen specialists, one subscription. Every one of them runs a free
                trial on your actual work before you spend a cent.
              </p>
            </div>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 font-head text-sm font-semibold text-haze transition hover:text-haze-soft"
            >
              Compare plans <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {AGENTS.map((agent, i) => (
            <ScrollReveal key={agent.id} delay={(i % 3) * 90}>
              <Link to={`/agents/${agent.id}`} className="group block h-full">
                <TiltCard className="panel hover-glow h-full p-6">
                  <div className="flex items-start justify-between">
                    <span
                      className="logo-tile flex h-14 w-14 items-center justify-center transition group-hover:scale-105"
                      style={{ borderColor: `${agent.accent}55` }}
                    >
                      <AgentLogo id={agent.id} size={34} />
                    </span>
                    <span className="font-mono text-xs text-muted">{agent.code}</span>
                  </div>
                  <h3 className="mt-5 font-head text-xl font-semibold uppercase tracking-wide">
                    {agent.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: agent.accent }}>
                    {agent.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{agent.blurb}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-4">
                    <span className="font-head text-sm font-semibold" style={{ color: agent.accent }}>
                      Run free trial
                    </span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" style={{ color: agent.accent }} />
                  </div>
                </TiltCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="border-y border-line/60 bg-abyss py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <ScrollReveal>
            <p className="text-center font-head text-sm font-semibold uppercase tracking-[0.24em] text-volt">
              three steps
            </p>
            <h2 className="mx-auto mt-2 max-w-2xl text-center font-display text-3xl uppercase tracking-tight md:text-5xl">
              From idea to output in a minute
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HOW.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 100}>
                <div className="panel p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl text-line opacity-80" style={{ color: "var(--muted)" }}>
                      {s.n}
                    </span>
                    {i < 2 && <ArrowRight className="hidden h-5 w-5 text-muted md:block" />}
                  </div>
                  <h3 className="mt-4 font-head text-lg font-semibold uppercase tracking-wide">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-6">
        <ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="logo-tile flex h-14 w-14 items-center justify-center">
                  <SuiteLogo size={40} />
                </span>
                <div>
                  <p className="font-head text-sm font-semibold uppercase tracking-[0.24em] text-haze">
                    why haze
                  </p>
                  <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
                    Built for work that ships
                  </h2>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft md:text-base">
                Haze is designed the way your ops or QA team actually works: score
                everything, prove everything, ship everything. The agents are
                deterministic where it matters and creative where it helps.
              </p>
              <Link
                to="/docs"
                className="mt-6 inline-flex items-center gap-2 font-head text-sm font-semibold text-volt transition hover:text-white"
              >
                Read the technical docs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {PILLARS.map((f, i) => {
                const Icon = f.icon;
                return (
                  <ScrollReveal key={f.title} delay={i * 90}>
                    <div className="accent-edge panel flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                      <span className="logo-tile flex h-12 w-12 shrink-0 items-center justify-center" style={{ borderColor: "var(--line)" }}>
                        <Icon className="h-5 w-5 text-haze" />
                      </span>
                      <div>
                        <h3 className="font-head text-lg font-semibold">{f.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.text}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= PRAISE ================= */}
      <section className="border-y border-line/60 bg-abyss py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <ScrollReveal>
            <p className="text-center font-head text-sm font-semibold uppercase tracking-[0.24em] text-mint">
              team reports
            </p>
            <h2 className="mx-auto mt-2 max-w-2xl text-center font-display text-3xl uppercase tracking-tight md:text-4xl">
              What teams do with the suite
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRAISE.map((t, i) => (
              <ScrollReveal key={t.n} delay={i * 90}>
                <figure className="panel flex h-full flex-col p-7">
                  <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
                    "{t.q}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line/60 pt-4">
                    <p className="font-head text-sm font-semibold">{t.n}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted">{t.c}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-6">
        <ScrollReveal>
          <p className="text-center font-head text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            straight answers
          </p>
          <h2 className="mt-2 text-center font-display text-3xl uppercase tracking-tight md:text-4xl">
            Before you ask
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <ScrollReveal key={f.q} delay={i * 60}>
              <details className="panel group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-head font-semibold">
                  {f.q}
                  <span className="text-xl leading-none text-haze transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden pb-24">
        <div className="absolute inset-0 -z-10">
          <ParticleField density={220} speed={0.0002} />
          <div className="absolute inset-0 hud-grid" />
        </div>
        <ScrollReveal>
          <div className="accent-edge panel mx-auto max-w-4xl p-8 text-center md:p-12">
            <p className="font-head text-sm font-semibold uppercase tracking-[0.24em] text-haze">
              go operational
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl uppercase tracking-tight md:text-5xl">
              Run your first agent on real work tonight
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
              One free trial on every agent. Keep the ones that earn their pay, then
              unlock the whole roster with a single plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/agents/geoengine"
                className="inline-flex items-center gap-2 rounded-xl bg-haze px-8 py-3.5 font-head font-semibold text-white shadow-[0_0_44px_-10px_rgba(255,46,68,0.9)] transition hover:bg-[#FF4B5E]"
              >
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-xl glass px-8 py-3.5 font-head font-semibold transition hover:bg-white/5"
              >
                See pricing
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}