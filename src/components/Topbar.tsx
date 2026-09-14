import { Menu, X, Hexagon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AGENTS } from "../agents/config";

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
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E50914]">
            <Hexagon className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <div>
            <p className="font-condensed text-base tracking-widest leading-none">
              HAZE AGENT SUITE
            </p>
            {agent && (
              <p className="text-[10px] text-[#8E8E93] truncate max-w-[60vw]">
                {agent.name} · {agent.code}
              </p>
            )}
          </div>
        </Link>
      </div>

      {open && (
        <div className="glass-strong border-t border-[rgba(255,255,255,0.08)] max-h-[70vh] overflow-y-auto px-3 py-3 space-y-1">
          {[
            { to: "/", label: "Command Center" },
            { to: "/pricing", label: "Pricing" },
            { to: "/pitch", label: "Investor Pitch" },
            { to: "/docs", label: "Docs & Architecture" },
            ...AGENTS.map((a) => ({ to: `/agents/${a.id}`, label: a.name })),
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={
                pathname === item.to
                  ? "block rounded-lg bg-[#E50914]/15 border border-[#E50914]/30 px-3 py-2.5 text-sm"
                  : "block rounded-lg px-3 py-2.5 text-sm text-[#A7A7AC] hover:text-white hover:bg-white/5"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}