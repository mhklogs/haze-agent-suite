import { Link } from "react-router-dom";
import { Boxes, Cpu, KeyRound, Terminal, FolderTree, Rocket } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { SuiteLogo } from "../agents/logos";

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
      <div className="panel p-7">
        <div className="flex items-center gap-3">
          <span className="logo-tile flex h-10 w-10 items-center justify-center">
            <Icon className="h-5 w-5 text-haze" />
          </span>
          <h2 className="font-head text-xl font-semibold text-ink">{title}</h2>
        </div>
        <div className="mt-5 text-sm leading-relaxed text-ink-soft">{children}</div>
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
  D --> E[(Reasoning tier)]
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
4. **QA by design** — rubrics, boundary examples and caveats are baked into every prompt.
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
    <div className="mx-auto max-w-5xl px-5 py-14 md:px-6">
      <ScrollReveal>
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <span className="logo-tile flex h-16 w-16 shrink-0 items-center justify-center">
            <SuiteLogo size={40} />
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-haze">
              read the manual
            </p>
            <h1 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
              Docs & architecture
            </h1>
            <p className="mt-2 max-w-2xl text-ink-soft">
              One codebase, 14 agents, zero duplicated logic. Everything you need to
              run, fork, or white-label the suite.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        <Block icon={FolderTree} title="Project structure">
          <pre className="overflow-x-auto rounded-xl border border-line bg-void p-4 font-mono text-xs text-ink-soft">
{`src/
├── agents/config.ts        # 14 agent definitions + system prompts
├── agents/logos.tsx        # bespoke vector logos for the suite + agents
├── lib/gemini.ts           # streaming Gemini runner + provider switch
├── data/samples.ts         # GEO sites, support tickets, SKU rows
├── components/             # Sidebar, Topbar, ScrollReveal
├── pages/                  # Home · AgentStudio · Pricing · Docs
└── theme/scheme.ts         # brand tokens (void / ember accent)`}
          </pre>
        </Block>

        <Block icon={Cpu} title="Agent architecture">
          <pre className="overflow-x-auto rounded-xl border border-line bg-void p-4 font-mono text-xs text-ink-soft">
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
          <pre className="overflow-x-auto rounded-xl border border-line bg-void p-4 font-mono text-xs text-ink-soft">
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
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            to="/agents/geoengine"
            className="btn btn-primary"
          >
            Open the suite
          </Link>
          <Link
            to="/pricing"
            className="btn btn-ghost"
          >
            Pricing & trials
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}