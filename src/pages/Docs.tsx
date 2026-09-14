import { Link } from "react-router-dom";
import { Boxes, Cpu, KeyRound, Terminal, FolderTree, Rocket } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Boxes;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0B0B0C] p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E50914]/15 text-[#E50914]">
            <Icon className="h-5 w-5" />
          </span>
          <h2 className="font-condensed text-xl uppercase tracking-wider">{title}</h2>
        </div>
        <div className="mt-5 text-sm leading-relaxed text-[#A7A7AC]">{children}</div>
      </div>
    </ScrollReveal>
  );
}

const ARCH = `
\`\`\`mermaid
flowchart LR
  A[Browser UI] --> B[React 19 + Vite SPA]
  B --> C[Agent Runner lib/gemini.ts]
  C --> D[GoogleGenAI SDK]
  D --> E[(Gemini 2.5 Flash)]
  C --> F[Agent prompts<br/>agents/config.ts]
  F --> C
  B --> G[Data layer<br/>data/samples.ts]
  G --> C
\`\`\`
`;

const HOW = `
Every agent in the suite is the same reliable machine with a different brain:

1. **Agent registry** (\`agents/config.ts\`) — 14 pinned system prompts, each a distilled version of a focused product.
2. **Shared runner** (\`lib/gemini.ts\`) — streaming \`generateContentStream\`, deterministic \`temperature\`, graceful API-key guard.
3. **Provider hook** — swap OpenAI / Groq / Claude by replacing one file.
4. **QA by design** — rubrics, boundary examples and caveats are baked into every prompt (SSEP discipline).
`;

const RUN = `
\`\`\`bash
# 1. install
npm install

# 2. add your key from Google AI Studio
cp .env.example .env.local   # set VITE_GEMINI_API_KEY + VITE_GEMINI_MODEL

# 3. run locally
npm run dev                  # http://localhost:5173

# 4. ship to Vercel
npm run build                # type-safe production build
vercel --prod                # authenticated CLI
\`\`\`
`;

export default function Docs() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <ScrollReveal>
        <div>
          <p className="font-hand text-2xl text-[#FF2E3A]">read the manual</p>
          <h1 className="font-display text-4xl uppercase tracking-tight md:text-5xl">
            Docs &amp; architecture
          </h1>
          <p className="mt-3 max-w-2xl text-[#A7A7AC]">
            One codebase, 14 agents, zero duplicated logic. Everything you need to run,
            fork, or white-label the suite.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        <Block icon={FolderTree} title="Project structure">
          <pre className="overflow-x-auto rounded-xl bg-[#101012] p-4 font-code text-xs text-[#d7d7da]">
{`src/
├── agents/config.ts        # 14 agent definitions + system prompts
├── lib/gemini.ts           # streaming Gemini runner + provider switch
├── data/samples.ts         # GEO sites, support tickets, SKU rows
├── components/             # ParticleField (three.js), Sidebar, Topbar, TiltCard, ScrollReveal
├── pages/                  # Home · AgentStudio · Pricing · Pitch · Docs
└── theme/scheme.ts         # on-brand tokens (#0D0D0D / #E50914)`}
          </pre>
        </Block>

        <Block icon={Cpu} title="Agent architecture">
          <pre className="overflow-x-auto rounded-xl bg-[#101012] p-4 font-code text-xs text-[#d7d7da]">
{ARCH}
          </pre>
        </Block>

        <Block icon={Boxes} title="How an agent runs">
          <div className="md-body">{HOW}</div>
        </Block>

        <Block icon={KeyRound} title="Environments & keys">
          <div className="md-body">
            - Requires a Google AI Studio key: `VITE_GEMINI_API_KEY`
            - Optional model override: `VITE_GEMINI_MODEL` (default `gemini-2.5-flash`)
            - If no key is present, the app still renders fully and shows a friendly
              setup message — nothing crashes.
            - For production, set these as **Vercel Project Environment Variables**
              (build-time), never commit `.env.local`.
          </div>
        </Block>

        <Block icon={Terminal} title="Run it yourself">
          <pre className="overflow-x-auto rounded-xl bg-[#101012] p-4 font-code text-xs text-[#d7d7da]">
{RUN}
          </pre>
        </Block>

        <Block icon={Rocket} title="Roadmap">
          <div className="md-body">
            1. **v1.2** — conversation memory per agent (session history)
            2. **v1.3** — output-to-file exports (PDF/Markdown) & preset sharing
            3. **v2.0** — team workspaces, audit logs, and an API surface
            4. **v2.1** — multimodal uploads (drag-drop image/audio/PDF)
          </div>
        </Block>
      </div>

      <ScrollReveal>
        <div className="mt-12 text-center">
          <Link
            to="/agents/geoengine"
            className="inline-flex items-center gap-2 rounded-xl bg-[#E50914] px-8 py-3.5 font-semibold transition hover:bg-[#FF2E3A]"
          >
            Open the suite →
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}