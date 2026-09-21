import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AGENTS } from "../agents/config";
import { SuiteLogo, AgentLogo } from "../agents/logos";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const agent = AGENTS.find((a) => pathname.startsWith(`/agents/${a.id}`));

  return (
    <header className="lg:hidden sticky top-0 z-40 glass-strong">
      <div className="flex h-16 items-center gap-3 px-4">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 hover:bg-white/5"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link to="/" className="flex items-center gap-2.5">
          <span className="logo-tile flex h-9 w-9 items-center justify-center">
            <SuiteLogo size={26} />
          </span>
          <div className="min-w-0">
            <p className="font-head text-sm font-bold tracking-[0.08em] leading-none">
              HAZE AGENT SUITE
            </p>
            {agent ? (
              <p className="mt-0.5 flex items-center gap-1 font-mono text-[10px] text-muted">
                <AgentLogo id={agent.id} size={12} stroke={false} />
                {agent.name} · {agent.code}
              </p>
            ) : (
              <p className="mt-0.5 truncate font-mono text-[10px] text-muted">
                {AGENTS.length} agents · one command center
              </p>
            )}
          </div>
        </Link>
        <Link
          to="/agents/geoengine"
          className="ml-auto shrink-0 rounded-lg bg-haze px-3 py-1.5 font-head text-xs font-semibold text-white"
        >
          Free trial
        </Link>
      </div>

      {open && (
        <div className="glass-strong max-h-[70vh] space-y-1 overflow-y-auto border-t border-line px-3 py-3">
          {[
            { to: "/", label: "Command Center" },
            { to: "/pricing", label: "Pricing & Trials" },
            { to: "/docs", label: "Docs" },
            ...AGENTS.map((a) => ({ to: `/agents/${a.id}`, label: a.name })),
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={
                pathname === item.to
                  ? "flex items-center gap-2 rounded-lg border border-haze/40 bg-haze/15 px-3 py-2.5 text-sm"
                  : "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-white/5 hover:text-white"
              }
            >
              {item.to.startsWith("/agents/") && (
                <AgentLogo id={item.to.split("/")[2]} size={18} stroke={false} />
              )}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}