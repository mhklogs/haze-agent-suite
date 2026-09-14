import { NavLink, useLocation } from "react-router-dom";
import { Home, Sparkles, Rocket, FileText, Hexagon, Zap } from "lucide-react";
import { AGENTS } from "../agents/config";

const NAV_MAIN = [
  { to: "/", label: "Command Center", icon: Home, end: true },
  { to: "/pricing", label: "Pricing", icon: Sparkles, end: false },
  { to: "/pitch", label: "Investor Pitch", icon: Rocket, end: false },
  { to: "/docs", label: "Docs & Architecture", icon: FileText, end: false },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex w-72 shrink-0 flex-col border-r border-[rgba(255,255,255,0.08)] bg-[#0B0B0C]">
      <div className="flex items-center gap-3 px-5 h-16 border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E50914] neon-ring">
          <Hexagon className="h-5 w-5" strokeWidth={2.4} />
        </div>
        <div>
          <p className="font-condensed text-lg tracking-widest leading-none text-white">
            HAZE AGENT SUITE
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8E8E93]">
            14 agents · one command center
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto no-scrollbar px-3 py-4 space-y-6">
        <div>
          <p className="px-2 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#8E8E93]">
            Watchtower
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
                      ? "flex items-center gap-3 rounded-xl bg-[#E50914]/15 border border-[#E50914]/30 px-3 py-2.5 text-sm text-white"
                      : "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#A7A7AC] hover:text-white hover:bg-white/5 transition"
                  }
                >
                  <Icon className="h-4.5 w-4.5" />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>

        <div>
          <p className="px-2 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#8E8E93]">
            Agents
          </p>
          <div className="space-y-1">
            {AGENTS.map((agent) => {
              const Icon = agent.icon;
              const to = `/agents/${agent.id}`;
              const active = pathname.startsWith(to);
              return (
                <NavLink
                  key={agent.id}
                  to={to}
                  className={
                    active
                      ? "flex items-center gap-3 rounded-xl bg-[#E50914]/15 border border-[#E50914]/30 px-3 py-2.5 text-sm text-white"
                      : "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#A7A7AC] hover:text-white hover:bg-white/5 transition"
                  }
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-lg"
                    style={{ background: `${agent.accent}1f`, color: agent.accent }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="truncate">{agent.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="px-3 pb-4">
        <div className="glass rounded-xl p-3 flex items-center gap-3">
          <span className="pulse-dot flex h-2.5 w-2.5 rounded-full bg-[#E50914]" />
          <div className="text-[11px] leading-tight text-[#A7A7AC]">
            <p className="text-white font-semibold">All systems nominal</p>
            <p>Gemini 2.5 Flash · v1.1</p>
          </div>
          <Zap className="ml-auto h-4 w-4 text-[#E50914]" />
        </div>
      </div>
    </aside>
  );
}