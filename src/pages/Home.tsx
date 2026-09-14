import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Activity, Layers, ShieldCheck } from "lucide-react";
import ParticleField from "../components/ParticleField";
import TiltCard from "../components/TiltCard";
import ScrollReveal from "../components/ScrollReveal";
import { AGENTS } from "../agents/config";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-3xl md:text-4xl text-glow-white shimmer">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#8E8E93]">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ParticleField density={900} />
          <div className="absolute inset-0 hero-grid" />
          <div className="absolute -bottom-10 left-1/2 h-64 w-[130%] -translate-x-1/2 rounded-[100%] bg-[#E50914]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wide">
              <span className="pulse-dot flex h-2 w-2 rounded-full bg-[#E50914]" />
              HAZE LABS · MULTI-AGENT PLATFORM
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="mt-8 font-display text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl">
              Fourteen agents.
              <br />
              <span className="text-glow text-[#E50914]">One command center.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#A7A7AC] md:text-lg">
              GEO audits, support triage, dynamic pricing, content relevance, code
              migration, research synthesis, test generation, finance, prioritization,
              campaigns, legal, and podcast production — every AI agent your business
              will ever need, unified in a cinematic 3D workspace.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/agents/geoengine"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#E50914] px-7 py-3.5 font-semibold text-white shadow-[0_0_40px_-8px_rgba(229,9,20,0.8)] transition hover:bg-[#FF2E3A]"
              >
                Launch the first agent
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-semibold text-white transition hover:bg-white/5"
              >
                Read the docs
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <Stat value="14" label="AI agents" />
              <Stat value="6" label="audit dimensions" />
              <Stat value="40+" label="features" />
              <Stat value="100%" label="on-brand" />
            </div>
          </ScrollReveal>
        </div>

        <div className="relative flex justify-center pb-8">
          <ChevronDown className="h-6 w-6 animate-bounce text-[#8E8E93]" />
        </div>
      </section>

      {/* ================= AGENT GRID ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ScrollReveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-hand text-2xl text-[#FF2E3A]">pick your weapon</p>
              <h2 className="font-display text-4xl uppercase tracking-tight md:text-5xl">
                The agent roster
              </h2>
            </div>
            <div className="hidden items-center gap-2 rounded-full glass px-4 py-2 text-xs text-[#A7A7AC] md:flex">
              <Layers className="h-4 w-4 text-[#E50914]" />
              Built on Gemini 2.5 Flash
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <ScrollReveal key={agent.id} delay={(i % 3) * 90}>
                <Link to={`/agents/${agent.id}`} className="group block h-full">
                  <TiltCard className="h-full p-6 transition group-hover:border-[#E50914]/40">
                    <div className="flex items-start justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: `${agent.accent}1a`, color: agent.accent }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-code text-xs text-[#8E8E93]">{agent.code}</span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl uppercase tracking-wide">
                      {agent.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#FF2E3A]">
                      {agent.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#A7A7AC]">
                      {agent.blurb}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#E50914]">
                      Run agent
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </TiltCard>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURES BAND ================= */}
      <section className="border-y border-[rgba(255,255,255,0.08)] bg-[#0B0B0C] py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-3">
          {[
            {
              icon: Activity,
              title: "Live streaming output",
              body: "Every agent streams responses token-by-token, with copyable markdown output and instant sample-injection for zero-click demos.",
            },
            {
              icon: Layers,
              title: "One workflow, 12 superpowers",
              body: "A shared runner means one mental model to master. Swap an agent in or out of your pipeline without ever leaving the cockpit.",
            },
            {
              icon: ShieldCheck,
              title: "Deterministic QA discipline",
              body: "Every prompt is system-pinned with scoring rubrics and audit rules — the agent quality bar is a feature, not an accident.",
            },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="glass rounded-2xl p-7 h-full">
                  <Icon className="h-7 w-7 text-[#E50914]" />
                  <h3 className="mt-5 font-condensed text-xl tracking-wider">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A7A7AC]">{f.body}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-24 text-center">
        <div className="absolute inset-0 -z-10">
          <ParticleField density={360} speed={0.0002} />
          <div className="absolute inset-0 hero-grid" />
        </div>
        <ScrollReveal>
          <p className="font-hand text-2xl text-[#FF2E3A]">ready when you are</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl uppercase tracking-tight md:text-6xl">
            Command every agent from one suite
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-[#E50914] px-8 py-3.5 font-semibold transition hover:bg-[#FF2E3A]"
            >
              See pricing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/pitch"
              className="inline-flex items-center gap-2 rounded-xl glass px-8 py-3.5 font-semibold transition hover:bg-white/5"
            >
              Investor pitch
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}