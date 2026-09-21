import { NavLink, useLocation, Link } from "react-router-dom";
import { Home, FileText, Rocket, Zap } from "lucide-react";
import { AGENTS } from "../agents/config";
import { SuiteLogo, AgentLogo } from "../agents/logos";

const NAV_MAIN = [
  { to: "/", label: "Command Center", icon: Home, end: true },
  { to: "/pricing", label: "Pricing & Trials", icon: Rocket, end: false },
  { to: "/docs", label: "Docs", icon: FileText, end: false },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex w-72 shrink-0 flex-col border-r border-line bg-abyss">
      <div className="flex items-center gap-3 border-b border-line px-5 h-16">
        <span className="logo-tile flex h-10 w-10 items-center justify-center">
          <SuiteLogo size={30} />
        </span>
        <div className="min-w-0">
          <p className="font-head text-base font-bold tracking-[0.08em] leading-none">
            HAZE AGENT SUITE
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            {AGENTS.length} agents · one command center
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto no-scrollbar px-3 py-4 space-y-6">
        <div>
          <p className="px-2 pb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            command deck
          </p>
          <div className="space-y-1">
            {NAV_MAIN.map((item) => {
              const Icon = item.icon;
              const active = item.end
                ? pathname === item.to
                : pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={
                    active
                      ? "flex items-center gap-3 rounded-xl border border-haze/40 bg-haze/15 px-3 py-2.5 text-sm text-white"
                      : "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ink-soft transition hover:bg-white/5 hover:text-white"
                  }
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>

        <div>
          <p className="px-2 pb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            the roster
          </p>
          <div className="space-y-1">
            {AGENTS.map((agent) => {
              const to = `/agents/${agent.id}`;
              const active = pathname.startsWith(to);
              return (
                <NavLink
                  key={agent.id}
                  to={to}
                  title={`${agent.name} — free trial`}
                  className={
                    active
                      ? "flex items-center gap-3 rounded-xl border border-line bg-white/5 px-3 py-2 text-sm text-white"
                      : "flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-ink-soft transition hover:bg-white/5 hover:text-white"
                  }
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center">
                    <AgentLogo id={agent.id} size={22} stroke={false} />
                  </span>
                  <span className="truncate">{agent.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="px-3 pb-4">
        <div className="accent-edge panel p-3">
          <div className="flex items-center gap-3">
            <span className="pulse-dot flex h-2.5 w-2.5 shrink-0 rounded-full bg-haze" />
            <div className="min-w-0 text-[11px] leading-tight">
              <p className="font-head font-semibold text-white">Your trial is ready</p>
              <p className="text-muted">Pick any agent to run it free</p>
            </div>
          </div>
          <Link
            to="/agents/geoengine"
            className="mt-3 block rounded-lg bg-haze px-3 py-2 text-center font-head text-xs font-semibold text-white transition hover:bg-[#FF4B5E]"
          >
            Start a free trial
          </Link>
        </div>
        <p className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
          <Zap className="h-3 w-3 text-haze" /> Gemini 2.5 Flash · v1.1
        </p>
      </div>
    </aside>
  );
}