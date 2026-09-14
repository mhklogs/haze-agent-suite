import { Link } from "react-router-dom";
import { TrendingUp, Users, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import ParticleField from "../components/ParticleField";

export default function Pitch() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ParticleField density={520} />
          <div className="absolute inset-0 hero-grid" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <ScrollReveal>
            <p className="font-hand text-2xl text-[#FF2E3A]">the thesis</p>
            <h1 className="mx-auto mt-3 max-w-4xl font-display text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl">
              Every AI agent your business needs.
              <span className="text-glow text-[#E50914]"> One surface.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[#A7A7AC] md:text-lg">
              Haze Agent Suite consolidates the fragmented AI-agent market — the audited,
              deterministic, QA-grade toolkit for growth, ops, engineering and finance teams.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Globe,
              kpi: "$1.2T",
              label: "AI-agent software spend by 2030",
              body: "But the market is fragmented: teams juggle 8+ point tools for audit, support, pricing, content.",
            },
            {
              icon: Users,
              kpi: "12→14",
              label: "agents in one subscription",
              body: "Instead of per-agent seat fees, Haze gives every profile — marketer, engineer, ops — the whole roster.",
            },
            {
              icon: TrendingUp,
              kpi: "SaaS + MVP",
              label: "revenue model in two tiers",
              body: "Self-serve Pro ($19/mo) then white-label Business ($49/mo) for agencies and consultants.",
            },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <ScrollReveal key={c.label} delay={i * 90}>
                <div className="glass h-full rounded-2xl p-7">
                  <Icon className="h-8 w-8 text-[#E50914]" />
                  <p className="mt-5 font-display text-4xl text-glow-white shimmer">{c.kpi}</p>
                  <p className="mt-1 font-condensed text-lg uppercase tracking-wider">{c.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#A7A7AC]">{c.body}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <ScrollReveal>
          <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#0B0B0C] p-8 md:p-10">
            <p className="font-condensed text-xl uppercase tracking-widest text-[#FF2E3A]">
              The unfair advantage
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase tracking-tight md:text-4xl">
              SSEP-grade QA, built in
            </h2>
            <p className="mt-4 max-w-3xl text-[#A7A7AC]">
              Most AI tools are black boxes with hallucination risk. Haze's founder is an
              SQA specialist: every agent ships with pinned scoring rubrics, boundary-value
              discipline, deterministic audit dimensions, and a dedicated "agent critic"
              loop — so outputs are audited by design, not by accident.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [ShieldCheck, "Pinned rubric", "every agent scored on fixed dimensions"],
                [Users, "14 agents, 1 plan", "the full roster, one price"],
                [TrendingUp, "Self-serve → white-label", "Pro lands users, Business monetizes"],
                [Globe, "Vercel-native", "one-click deploys, zero infra drama"],
              ].map(([Icon, title, body], i) => {
                const I = Icon as typeof ShieldCheck;
                return (
                  <div key={i} className="glass rounded-xl p-5">
                    <I className="h-6 w-6 text-[#E50914]" />
                    <p className="mt-3 font-semibold">{title as string}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#8E8E93]">{body as string}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/agents/geoengine"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E50914] px-7 py-3.5 font-semibold transition hover:bg-[#FF2E3A]"
              >
                See it live <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-semibold transition hover:bg-white/5"
              >
                Architecture & docs
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}