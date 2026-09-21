import { NavLink, useLocation, Link } from "react-router-dom";
import { Home, LayoutList, BookOpen } from "lucide-react";
import { AGENTS } from "../agents/config";
import { SuiteLogo, AgentLogo } from "../agents/logos";

const NAV_MAIN = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/pricing", label: "Pricing", icon: LayoutList, end: false },
  { to: "/docs", label: "Docs", icon: BookOpen, end: false },
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
          <p className="font-display text-lg leading-none">Haze Agent Suite</p>
          <p className="label-meta mt-1.5">
            four focused agents · one plan
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto no-scrollbar px-3 py-5 space-y-7">
        <div>
          <p className="label-meta px-2 pb-2">
            workspace
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
                      ? "flex items-center gap-3 rounded-xl border border-haze/30 bg-haze/12 px-3 py-2.5 text-sm font-medium text-ink"
                      : "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ink-soft transition hover:bg-black/5 hover:text-ink"
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
          <p className="label-meta px-2 pb-2">
            agents
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
                      ? "flex items-center gap-3 rounded-xl border border-line bg-black/5 px-3 py-2 text-sm font-medium text-ink"
                      : "flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-ink-soft transition hover:bg-black/5 hover:text-ink"
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
        <div className="rounded-2xl border border-line bg-panel p-4">
          <div className="flex items-center gap-3">
            <span className="pulse-dot flex h-2.5 w-2.5 shrink-0 rounded-full bg-haze" />
            <div className="min-w-0 text-sm leading-tight">
              <p className="font-medium text-ink">One free trial on every agent</p>
              <p className="mt-0.5 text-[13px] text-muted">Run your real work, then decide</p>
            </div>
          </div>
          <Link
            to="/agents/geoengine"
            className="mt-4 block rounded-full bg-[#1A1A1A] py-2 text-center text-sm font-semibold text-[#F9F8F6] transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
          >
            Start a free trial
          </Link>
        </div>
      </div>
    </aside>
  );
}