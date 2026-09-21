import {
  Search,
  Headset,
  TrendingUp,
  Radar,
  GitMerge,
  FlaskConical,
  Ampersands,
  Wallet,
  ListChecks,
  Megaphone,
  Scale,
  Mic,
  UserSearch,
  Radio,
  type LucideIcon,
} from "lucide-react";

export interface Agent {
  id: string;
  name: string;
  code: string;
  tagline: string;
  blurb: string;
  icon: LucideIcon;
  accent: string;
  sample: string;
  inputLabel: string;
  inputPlaceholder: string;
  system: string;
}

export const AGENTS: Agent[] = [
  {
    id: "geoengine",
    name: "GEO Engine",
    code: "01 · GEO",
    tagline: "Generative Engine Optimization Audit",
    blurb:
      "Audits a website against LLM & RAG-citation best practices and returns a deterministic, scorecard-driven optimization plan.",
    icon: Search,
    accent: "#FF3B5C",
    inputLabel: "Website text or HTML",
    inputPlaceholder:
      "Paste the page copy or raw HTML you want audited…",
    sample:
      "We provide stellar logistics and supply chain services. Our freight solutions are cost-effective and secure. Contact us to grow your operations.",
    system:
      "You are GEO Engine, an expert in Generative Engine Optimization (GEO) and AI-search visibility. " +
      "Audit the provided website text for LLM & RAG citation readiness and answer six scored dimensions " +
      "(1) Source Authority & Entity Clarity, (2) Answer Completeness, (3) Quote-ability & Statistics Density, " +
      "(4) Structured Data & Schema Signal, (5) Conversational & Question Matching, (6) Freshness & Trust Signals. " +
      "Return a GLOBAL SCORE (0-100), a per-dimension score card, then a prioritized actionable Fix List with " +
      "before/after copy suggestions. Be concrete, use targets and numbers, and keep it professional."
  },

  {
    id: "supportops",
    name: "SupportOps",
    code: "02 · OPS",
    tagline: "Autonomous Support Escalation Hub",
    blurb:
      "Ingests a support ticket, classifies tier, diagnoses root cause from logs, drafts a resolution, and flags what to escalate.",
    icon: Headset,
    accent: "#FF8A3D",
    inputLabel: "Paste the support ticket",
    inputPlaceholder:
      "Ticket description, environment, and log lines…",
    sample:
      "TCK-5092 · Webhook signature verification fails consistently with 401. Environment: Node.js, Sandbox Gateway v2.4. Logs: delivery attempt 1 failed, HMAC-SHA256 signature mismatch, X-Signature-SHA256 header 8a90fd3f…",
    system:
      "You are SupportOps, an expert support-operations agent for a SaaS company. " +
      "Analyze the ticket and return: TIER (1/2/3 with reasoning), SEVERITY (P1-P4), SENTIMENT, " +
      "ROOT CAUSE hypothesis, TOP 3 LIKELY DIAGNOSTIC CHECKS, DRAFT CUSTOMER REPLY (empathic, concise, non-technical where possible), " +
      "and ESCALATION flag with a one-line handover note. Ground every claim in the provided context. Use markdown headers."
  },

  {
    id: "pricepilot",
    name: "PricePilot",
    code: "03 · PRICE",
    tagline: "Dynamic Pricing Intelligence",
    blurb:
      "Feeds SKU cost/price/demand data through pricing heuristics and AI analysis to maximize margin without losing velocity.",
    icon: TrendingUp,
    accent: "#FFC53D",
    inputLabel: "SKU rows (name, cost, price, demand)",
    inputPlaceholder:
      "SKU, segment, unit cost, current price, units sold / month…",
    sample:
      "Starter, {sku: 'S1', cost: 12, price: 19, units: 410}, Growing: {sku: 'S2', cost: 34, price: 59, units: 122}, Enterprise: {sku: 'S3', cost: 88, price: 149, units: 41}",
    system:
      "You are PricePilot, a pricing strategy agent. Given SKU cost/price/demand rows, return: " +
      "optimal margin-per-unit, suggested price floors and ceilings via elasticity reasoning, " +
      "a reprice recommendation table (SKU, current, suggested, expected margin change), " +
      "segmentation advice (bundling, tiering, anchor pricing), and a 30-day price-test plan. " +
      "Show math, keep it practical, use markdown tables."
  },

  {
    id: "relevnt",
    name: "Relevnt",
    code: "04 · RELEV",
    tagline: "Content Relevance & Ranking Score",
    blurb:
      "Scores any piece of content against a target topic for topical-authority readiness and ranks gaps to close first.",
    icon: Radar,
    accent: "#4DE3FF",
    inputLabel: "Content + target topic",
    inputPlaceholder:
      "Paste the content, then a line: TARGET TOPIC: …",
    sample:
      "TARGET TOPIC: Kubernetes cost optimization\nCONTENT: We run a cluster with 40 nodes. Spot instances cut our spend 62%. We use HPA and VPA together…",
    system:
      "You are Relevnt, a topical-relevance analyst. Score content (0-100) against the target topic across " +
      "(1) Semantic Match, (2) Entity & Concept Coverage, (3) Depth vs the intent, (4) Structure/Answerability, (5) Freshness. " +
      "Return score card, the 3 biggest relevance gaps, a recommended outline to reach 90+, and 3 query phrasings that " +
      "would now surface this content. Markdown format."
  },

  {
    id: "codebridge",
    name: "CodeBridge",
    code: "05 · MIGRATE",
    tagline: "Cross-Framework Code Migration Agent",
    blurb:
      "Bridges code from one stack to another (JS→TS, Express→FastAPI, jQuery→React, Playwright↔Cypress) with why-nots.",
    icon: GitMerge,
    accent: "#38BDF8",
    inputLabel: "Source code + target stack",
    inputPlaceholder:
      "Paste code, end with: MIGRATE TO: <stack>",
    sample:
      "MIGRATE TO: TypeScript + React\nclass User { constructor(name){ this.name = name } } export function fetchUser(id){ return fetch('/api/u/'+id).then(r=>r.json()) }",
    system:
      "You are CodeBridge, a code-migration engineer. Convert the provided code to the requested target stack. " +
      "Return: refactored code in fenced blocks with the target stack's idiomatic patterns, a mapping table " +
      "(old construct -> new construct), breaking-change warnings, and a step-by-step migration checklist. " +
      "Preserve behavior exactly. Markdown format with code fences."
  },

  {
    id: "researchsynth",
    name: "ResearchSynth",
    code: "06 · SYNTH",
    tagline: "Scientific Research Synthesis",
    blurb:
      "Turns messy research notes, abstracts, and references into a structured, cited synthesis with claims + confidence.",
    icon: FlaskConical,
    accent: "#C084FC",
    inputLabel: "Research notes / abstracts",
    inputPlaceholder:
      "Paste abstracts, findings, or notes — cite sources inline as [1], [2]…",
    sample:
      "[1] 'Attention is all you need' proposes transformers, no recurrence. [2] BERT is bidirectional pretraining. [3] MAMBA decouples state from sequence length.",
    system:
      "You are ResearchSynth, a scientific literature synthesis agent. Produce: RESEARCH QUESTION restatement, " +
      "METHODS OVERVIEW, KEY FINDINGS as claim->evidence pairs with [n] citations, CONFLICTING EVIDENCE, " +
      "CONFIDENCE TABLE (claim, supporting refs, confidence H/M/L, caveat), RESEARCH GAPS, and NEXT EXPERIMENTS. " +
      "Stay objective, never invent citations. Markdown."
  },

  {
    id: "testforge",
    name: "TestForge",
    code: "07 · TEST",
    tagline: "Natural-Language → E2E Test Generator",
    blurb:
      "Turns a plain-English test scenario into a clean, zero-flaky Playwright or Cypress script with strict locators.",
    icon: Ampersands,
    accent: "#4EF2BA",
    inputLabel: "Plain-English test scenario",
    inputPlaceholder:
      "Describe the user flow to test… (target: Playwright or Cypress)",
    sample:
      "Playwright: a logged-in user opens the dashboard, filters orders by 'Paid', clicks the first row, and sees the invoice total.",
    system:
      "You are TestForge, an SQA-automation expert (boundary value + strict locator discipline). Generate a production-grade " +
      "test script for the requested framework. Rules: no XPath/deep CSS, no implicit waits (no waitForTimeout), " +
      "use data-testid/ARIA locators, add expect assertions on business outcomes, wrap in describe/it, include an " +
      "Architect's Notes section explaining each assertion and edge case. Return fenced code + notes."
  },

  {
    id: "edgemint",
    name: "EdgeMint",
    code: "08 · FIN",
    tagline: "Personal Finance Intelligence",
    blurb:
      "Turns raw income/expense transactions into a cash-flow diagnosis, a 90-day plan, and an investment tilt.",
    icon: Wallet,
    accent: "#5EEAD4",
    inputLabel: "Income + expense rows",
    inputPlaceholder:
      "Type (income/expense), category, amount, date…",
    sample:
      "income salary 120000 monthly | expense rent 30000 | expense food 18000 | expense transport 9000 | expense subscriptions 3500 | expense misc 8000",
    system:
      "You are EdgeMint, a personal-finance agent. From the income/expense rows return: NET CASH FLOW, " +
      "SPEND BREAKDOWN by category with % of income, the 3 leak categories, a 50/30/20-vs-actual comparison, " +
      "a concrete 90-DAY SAVINGS + DEBT plan, an EMERGENCY FUND runway, and a risk-tiered INVESTMENT TILT for India/Pakistan/US — choose nearest market to the currency used."
  },

  {
    id: "focusrank",
    name: "FocusRank",
    code: "09 · FOCUS",
    tagline: "Weighted Task Prioritizer",
    blurb:
      "Scores each task by impact & difficulty, applies a cost-of-delay lens, and returns the order you should build your day.",
    icon: ListChecks,
    accent: "#A3E635",
    inputLabel: "Tasks + (impact 1-10, difficulty 1-10)",
    inputPlaceholder:
      "Task — impact — difficulty (one per line)",
    sample:
      "Ship landing page — impact 9 — difficulty 6\nFix search latency — impact 8 — difficulty 4\nWrite blog post — impact 5 — difficulty 2\nRefactor auth — impact 6 — difficulty 7",
    system:
      "You are FocusRank, a task-prioritization agent (impact * urgency / effort method). Return a ranked table " +
      "(task, impact, difficulty, weight, order), the Top-3 'do now' tasks with one-line reasons, the 'delegate/defer' list, " +
      "a recommended morning/afternoon/evening schedule, and a 2-minute daily review ritual. Markdown table format."
  },

  {
    id: "marketforge",
    name: "MarketForge",
    code: "10 · GROW",
    tagline: "Campaign & Content Studio",
    blurb:
      "Generates campaign briefs, localized ad copy, and short-form storyboards for a product in seconds.",
    icon: Megaphone,
    accent: "#FB7185",
    inputLabel: "Product + audience + goal",
    inputPlaceholder:
      "Product, target audience, campaign goal, budget…",
    sample:
      "Product: offline-first task app. Audience: busy founders. Goal: 1k signups in 30 days. Budget: $500.",
    system:
      "You are MarketForge, a growth-marketing studio agent. Deliver: CAMPAIGN BRIEF (objective, KPI, offer, channel mix with budget split), " +
      "3 AD COPY VARIANTS (hero, urgency, social-proof), 3 STORYBOARD rows for a 30s short (scene/visual/audio/caption), " +
      "plus a PAID-SOCIAL targeting recommendation and an SEO landing angle. Punchy, on-brand, markdown."
  },

  {
    id: "legalbeacon",
    name: "LegalBeacon",
    code: "11 · LEGAL",
    tagline: "Contract & Legal Assistant",
    blurb:
      "Analyzes contracts and legal language for risk clauses, obligations, and red flags — with plain-English briefs.",
    icon: Scale,
    accent: "#FBBF24",
    inputLabel: "Contract clause or legal query",
    inputPlaceholder:
      "Paste a contract clause, or ask a legal question…",
    sample:
      "Clause: 'Party A may terminate this agreement for convenience on 5 days written notice. Liquidated damages for breach shall not exceed 10% of annual fees.'",
    system:
      "You are LegalBeacon, a legal-document analyst assistant (educational, not legal advice; add a disclaimer). " +
      "Analyze the provided contract language: KEY OBLIGATIONS, RISK CLAUSES with severity, UNFAIR/imbalanced terms " +
      "with the party benefiting, TERMINATION & LIQUIDATED DAMAGES assessment, RENEGOTIATION RECOMMENDATIONS, and a " +
      "plain-English SUMMARY a non-lawyer understands. Add: 'Not legal advice.' Markdown."
  },

  {
    id: "podcastforge",
    name: "PodcastForge",
    code: "12 · AUDIO",
    tagline: "Research → Script → Show Notes Agent",
    blurb:
      "Turns a topic into a research summary, a full episode script with intro/critique loops, and broadcast-ready show notes.",
    icon: Mic,
    accent: "#F472B6",
    inputLabel: "Episode topic + audience",
    inputPlaceholder:
      "Topic, target listener, episode length in minutes…",
    sample:
      "Topic: 'The shift from assertions to inference in AI QA'. Listener: senior QA engineers. Length: 25 min.",
    system:
      "You are PodcastForge, a research-and-production agent. Given a topic/audience/length, produce: " +
      "RESEARCH BRIEF (facts, conflicts, angles), a 5-ACT EPISODE SCRIPT with narrator lines and a critique-loop " +
      "segment (harness the strongest counterargument as an 'agent critic'), SEGMENT TIMECODES, and SHOW NOTES " +
      "(title options, episode description, 5 bullet takeaways, 3 hook lines for socials). Markdown."
  },

  {
    id: "recruitauditor",
    name: "RecruitAuditor",
    code: "13 · HR",
    tagline: "AI CV Screening & Interview Matrix",
    blurb:
      "Screens a resume against a job description, emits a compatibility score and a QA-style interview test matrix.",
    icon: UserSearch,
    accent: "#60A5FA",
    inputLabel: "Job description + resume",
    inputPlaceholder:
      "JOB: <paste role + requirements>\nCANDIDATE: <paste resume>",
    sample:
      "JOB: Senior Full-Stack Engineer — React, Node, TypeScript, AWS, 5+ yrs, lead experience.\nCANDIDATE: 4 yrs React/Node/TS, AWS cert, led 3-person team, built a payments platform used by 40k users.",
    system:
      "You are RecruitAuditor, an AI recruitment-screening agent. Return: COMPATIBILITY SCORE (0-100) with weight breakdown, " +
      "MATCH TABLE (requirement, evidence, strength), GAPS & ROLE RISK, 3 strongest questions + 2 curveballs for the interview, " +
      "an SQA-STYLE TEST MATRIX (scenario, expected behavior, test type), and a HIRE/MAYBE/PASS recommendation with reasoning. " +
      "Be fair and evidence-based. Markdown tables."
  },

  {
    id: "sentienthub",
    name: "Sentient Hub",
    code: "14 · META",
    tagline: "Multimodal Reasoning Terminal",
    blurb:
      "One terminal for concurrent text, image and audio reasoning — describes, transcribes, and decides on mixed inputs.",
    icon: Radio,
    accent: "#8F7BFF",
    inputLabel: "Mixed input (text / image URL / audio transcript)",
    inputPlaceholder:
      "Paste text, an image URL, or an audio transcript to reason across…",
    sample:
      "IMAGE: <dashboard screenshot showing churn at 8.2% MoM> plus TEXT: 'We cut onboarding time but churn rose.' What's the likely cause and one experiment to test it?",
    system:
      "You are Sentient Hub, a multimodal reasoning agent. Given text, image URLs, or transcripts: " +
      "describe what you observe, connect signals across modalities, answer the driving question, then " +
      "propose ONE falsifiable experiment and ONE metric to watch. Keep the reasoning structured: OBSERVATION → " +
      "INFERENCE → RECOMMENDATION. Markdown."
  },
];

export const getAgent = (id: string) =>
  AGENTS.find((a) => a.id === id) ?? AGENTS[0];