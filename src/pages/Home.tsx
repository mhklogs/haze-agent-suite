import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  CircleCheck,
  Users,
  Repeat,
  FileSearch,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { AGENTS } from "../agents/config";
import { AgentLogo, SuiteLogo } from "../agents/logos";

const HOW = [
  {
    n: "01",
    title: "Pick a mission",
    text: "Audit, triage, reprice, draft, produce — choose the agent that owns the job you are doing today.",
  },
  {
    n: "02",
    title: "Run a free trial",
    text: "Every agent gets one full free trial. Paste your real work, not a demo file. No card, no friction.",
  },
  {
    n: "03",
    title: "Bring it into your week",
    text: "One plan unlocks every agent. Keep the ones that change your workflow, add the rest when you are ready.",
  },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Audited output, by default",
    text: "Each agent ships with a pinned scoring rubric and a critique loop, so results come back scored, cited and ready to act on — not stream-of-consciousness text.",
  },
  {
    icon: Repeat,
    title: "Runs on your real data",
    text: "Feed in your website copy, your tickets, your SKUs, your contracts. Every agent works on the actual context you bring, not canned examples.",
  },
  {
    icon: Users,
    title: "One team, fourteen roles",
    text: "One shared workspace means one mental model. Swap agents in and out of your workflow without learning a new tool for every task.",
  },
];

const PRAISE = [
  {
    q: "We ran the GEO audit on launch copy before publishing. It caught the exact fragments an LLM would never have quoted, and the suggested rewrites were directly usable.",
    n: "Growth Lead",
    c: "B2B SaaS, 40-person team",
  },
  {
    q: "SupportOps handled the first pass on every escalated ticket last month. Tiering, root-cause notes and a draft reply in under a minute — the team only touches the queue now.",
    n: "Head of Customer Operations",
    c: "Fintech scale-up",
  },
  {
    q: "I described a 40-step checkout flow once and the testing agent produced a suite that ran clean on the first pass. That alone pays for the subscription.",
    n: "Staff Engineer",
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
    a: "A single plan unlocks all fourteen agents. There are no per-agent fees and no surprise billing when you switch to a different role.",
  },
  {
    q: "Where does my data go?",
    a: "Inputs you paste go to the model provider to produce a result and are not used to train anything. For sensitive work, the Business plan adds team workspaces and audit logging.",
  },
  {
    q: "Do I need to be technical to use it?",
    a: "No. Every agent accepts plain language and returns plain English. The verdicts, tables and fix lists are written for the person doing the job, not for a machine.",
  },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-4xl leading-none md:text-5xl">{value}</p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="aurora -top-40 left-1/4 h-96 w-96 bg-[#E2574B]/25" />
          <div className="aurora top-8 right-[6%] h-80 w-80 bg-[#8FAECF]/18" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 text-center md:px-6 md:pt-28">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-1.5">
              <span className="pulse-dot flex h-2 w-2 rounded-full bg-haze" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Haze Agent Suite
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={70}>
            <h1 className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-[1.06] md:text-7xl">
              Your team runs on{" "}
              <em className="text-haze-soft">fourteen focused agents.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              One quiet workspace that audits your search visibility, triages
              support, reprices for margin and produces your podcast. Pick an
              agent, run it free on your real work, and bring it into the team.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={210}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/agents/geoengine" className="btn btn-primary">
                Try any agent free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pricing" className="btn btn-ghost">
                View pricing
              </Link>
            </div>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CircleCheck className="h-3.5 w-3.5 text-mint" /> one free trial per agent
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CircleCheck className="h-3.5 w-3.5 text-mint" /> no credit card
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CircleCheck className="h-3.5 w-3.5 text-mint" /> runs on your data
              </span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={280}>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
              <Stat value="14" label="agents, one plan" />
              <Stat value="60s" label="to first result" />
              <Stat value="0" label="per-agent fees" />
              <Stat value="∞" label="your data, scored" />
            </div>
          </ScrollReveal>
        </div>

        <div className="relative flex justify-center pb-8">
          <ChevronDown className="h-5 w-5 text-muted" />
        </div>
      </section>

      {/* ================= ROSTER ================= */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-6">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-accent">the agents</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                Pick the agent, own the job
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                Fourteen specialists, one subscription. Every one of them runs a
                free trial on your actual work before you spend a cent.
              </p>
            </div>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-haze transition hover:text-haze-soft"
            >
              Compare plans <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {AGENTS.map((agent, i) => (
            <ScrollReveal key={agent.id} delay={(i % 3) * 80}>
              <Link to={`/agents/${agent.id}`} className="group block h-full">
                <div className="panel flex h-full flex-col p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-haze/25">
                  <div className="flex items-start justify-between">
                    <span
                      className="logo-tile flex h-14 w-14 items-center justify-center border"
                      style={{ borderColor: `${agent.accent}44` }}
                    >
                      <AgentLogo id={agent.id} size={34} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-snug">{agent.name}</h3>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: agent.accent }}>
                    {agent.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{agent.blurb}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-line-soft pt-4">
                    <span className="text-sm font-semibold" style={{ color: agent.accent }}>
                      Run free trial
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-muted transition group-hover:translate-x-1 group-hover:text-haze"
                    />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="border-y border-line bg-abyss py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <ScrollReveal>
            <p className="eyebrow-accent text-center">three steps</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-4xl leading-tight md:text-5xl">
              From idea to output in a minute
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {HOW.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 90}>
                <div className="panel h-full p-7">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-4xl text-muted">{s.n}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                      step {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-ink">{s.title}</h3>
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
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3">
                <span className="logo-tile flex h-14 w-14 items-center justify-center border" style={{ borderColor: "var(--line)" }}>
                  <SuiteLogo size={40} />
                </span>
                <div>
                  <p className="eyebrow-accent">why haze</p>
                  <h2 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
                    Built for work that ships
                  </h2>
                </div>
              </div>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                Haze is designed the way an ops or QA team actually works: score
                everything, prove everything, ship everything. The agents are
                careful where it matters and creative where it helps.
              </p>
              <Link
                to="/docs"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-haze transition hover:text-haze-soft"
              >
                Browse the docs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {PILLARS.map((f, i) => {
                const Icon = f.icon;
                return (
                  <ScrollReveal key={f.title} delay={i * 90}>
                    <div className="panel flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                      <span className="logo-tile flex h-12 w-12 shrink-0 items-center justify-center">
                        <Icon className="h-5 w-5 text-haze" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
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
      <section className="border-y border-line bg-abyss py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <ScrollReveal>
            <p className="eyebrow-accent text-center">from the teams</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-4xl leading-tight md:text-5xl">
              What teams do with the suite
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PRAISE.map((t, i) => (
              <ScrollReveal key={t.n} delay={i * 90}>
                <figure className="panel flex h-full flex-col p-7">
                  <blockquote className="flex-1 text-[15px] leading-relaxed text-ink-soft">
                    "{t.q}"
                  </blockquote>
                  <figcaption className="mt-7 border-t border-line-soft pt-5">
                    <p className="font-semibold text-ink">{t.n}</p>
                    <p className="mt-0.5 text-sm text-muted">{t.c}</p>
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
          <p className="eyebrow-accent text-center">straight answers</p>
          <h2 className="mt-3 text-center font-display text-4xl leading-tight md:text-5xl">
            Before you ask
          </h2>
        </ScrollReveal>

        <div className="mt-11 space-y-3">
          {FAQS.map((f, i) => (
            <ScrollReveal key={f.q} delay={i * 50}>
              <details className="panel group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-medium text-ink">
                  {f.q}
                  <span className="text-xl font-light leading-none text-haze transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-4xl px-5 pb-24 md:px-6">
        <ScrollReveal>
          <div className="accent-edge panel p-9 text-center md:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center">
              <FileSearch className="h-7 w-7 text-haze" />
            </div>
            <p className="eyebrow-accent mt-7">start tonight</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              Run your first agent on real work tonight
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              One free trial on every agent. Keep the ones that earn their place,
              then unlock the whole team with a single plan.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link to="/agents/geoengine" className="btn btn-primary">
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pricing" className="btn btn-ghost">
                See pricing
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}