import type { JSX } from "react";

/**
 * Haze Agent Suite — bespoke vector logos.
 * Each agent gets a hand-drawn geometric glyph rendered as inline SVG,
 * plus a shared SuiteLogo prism mark. No external icon library, no emoji.
 */

export const LOGO_COLORS: Record<string, string> = {
  geoengine: "var(--haze-accent)",
  supportops: "var(--haze-accent)",
  pricepilot: "var(--haze-accent)",
  relevnt: "var(--haze-accent)",
  codebridge: "var(--haze-accent)",
  researchsynth: "var(--haze-accent)",
  testforge: "var(--haze-accent)",
  edgemint: "var(--haze-accent)",
  focusrank: "var(--haze-accent)",
  marketforge: "var(--haze-accent)",
  legalbeacon: "var(--haze-accent)",
  podcastforge: "var(--haze-accent)",
  recruitauditor: "var(--haze-accent)",
  sentienthub: "var(--haze-accent)",
  default: "var(--haze-accent)",
};

const S = {
  strokeWidth: 2.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
} as const;

const GLYPHS: Record<string, (c: string) => JSX.Element> = {
  geoengine: (c) => (
    <>
      <circle cx="24" cy="24" r="14" {...S} stroke={c} />
      <circle cx="24" cy="24" r="7" {...S} stroke={c} opacity="0.55" />
      <circle cx="24" cy="24" r="1.6" fill={c} />
      <path d="M24 3v8M24 37v8M3 24h8M37 24h8" {...S} stroke={c} strokeWidth="2" />
      <circle cx="33" cy="15" r="2.6" fill={c} />
    </>
  ),

  supportops: (c) => (
    <>
      <path d="M14 31v-8a10 10 0 0 1 20 0v8" {...S} stroke={c} />
      <path d="M10 31h4v10h-4a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4zM38 31h-4v10h4a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4z" {...S} stroke={c} />
      <path d="M24 8v4" {...S} stroke={c} strokeWidth="2" />
      <circle cx="24" cy="7" r="1.4" fill={c} />
      <path d="M19 34h10" {...S} stroke={c} strokeWidth="2" opacity="0.7" />
    </>
  ),

  pricepilot: (c) => (
    <>
      <path d="M8 36L20 24l6 6 12-13" {...S} stroke={c} />
      <path d="M38 11h5v5" {...S} stroke={c} />
      <path d="M9 16v-3a3 3 0 0 1 3-3h3M39 16v3a3 3 0 0 1-3 3h-3M30 11h-3a3 3 0 0 0-3 3" {...S} stroke={c} />
      <circle cx="24" cy="24" r="1.7" fill={c} />
    </>
  ),

  relevnt: (c) => (
    <>
      <circle cx="24" cy="24" r="16" {...S} stroke={c} />
      <path d="M24 8a16 16 0 0 1 13.1 6.6" {...S} stroke={c} opacity="0.5" />
      <path d="M24 24m0-6a6 6 0 1 0 0 12 6 6 0 1 0 0-12" {...S} stroke={c} />
      <circle cx="24" cy="24" r="2" fill={c} />
      <path d="M24 24l8 8" {...S} stroke={c} strokeWidth="2" />
      <circle cx="33" cy="33" r="1.6" fill={c} />
    </>
  ),

  codebridge: (c) => (
    <>
      <path d="M17 14L8 24l9 10" {...S} stroke={c} />
      <path d="M31 14l9 10-9 10" {...S} stroke={c} />
      <path d="M22 8l4 32" {...S} stroke={c} strokeWidth="2" />
      <path d="M22 26h8" {...S} stroke={c} strokeWidth="2" opacity="0.7" />
    </>
  ),

  researchsynth: (c) => (
    <>
      <path d="M14 8h20l-5 12v16" {...S} stroke={c} />
      <path d="M29 36v4M19 36v4" {...S} stroke={c} />
      <circle cx="12" cy="24" r="2" fill={c} />
      <circle cx="36" cy="16" r="2" fill={c} opacity="0.6" />
      <path d="M18 20l4-4 3 3 5-6" {...S} stroke={c} />
    </>
  ),

  testforge: (c) => (
    <>
      <rect x="8" y="8" width="32" height="32" rx="6" {...S} stroke={c} />
      <path d="M16 12h16v10H16z" fill={c} opacity="0.14" stroke={c} />
      <path d="M18 34h12" {...S} stroke={c} />
      <path d="M16 22l2.4 2.4L25.6 16" {...S} stroke={c} />
    </>
  ),

  edgemint: (c) => (
    <>
      <circle cx="24" cy="24" r="15" {...S} stroke={c} />
      <path d="M24 16v16M17 24l7 7 7-7" {...S} stroke={c} />
      <path d="M18 30l-2 2M30 30l2 2" {...S} stroke={c} opacity="0.6" />
      <circle cx="24" cy="24" r="2" fill={c} />
    </>
  ),

  focusrank: (c) => (
    <>
      <path d="M8 14h12M8 24h18M8 34h10" {...S} stroke={c} />
      <path d="M22 11l6 6M28 21l6 6M20 31l6 6" {...S} stroke={c} />
      <path d="M30 14h6M36 24h4M28 34h6" {...S} stroke={c} opacity="0.5" />
      <circle cx="36" cy="12" r="1.8" fill={c} />
      <circle cx="40" cy="22" r="1.8" fill={c} />
      <circle cx="34" cy="32" r="1.8" fill={c} />
    </>
  ),

  marketforge: (c) => (
    <>
      <path d="M10 26a14 14 0 0 0 28 0V22a14 14 0 0 0-28 0z" {...S} stroke={c} />
      <path d="M14 22c2.5 7 8 14 12 15" {...S} stroke={c} />
      <path d="M24 30v6M34 26h6M34 30h4" {...S} stroke={c} />
      <path d="M24 29v1" {...S} stroke={c} strokeWidth="2.6" />
    </>
  ),

  legalbeacon: (c) => (
    <>
      <path d="M24 6v36" {...S} stroke={c} />
      <circle cx="24" cy="6" r="1.8" fill={c} />
      <path d="M12 18h24" {...S} stroke={c} />
      <path d="M8 10h32l-8 8H16z" {...S} stroke={c} />
      <path d="M15 30h18M15 35h18" {...S} stroke={c} strokeWidth="2" />
      <path d="M24 18l-6 12h12z" {...S} fill={c} fillOpacity="0.16" stroke={c} />
    </>
  ),

  podcastforge: (c) => (
    <>
      <rect x="19" y="10" width="10" height="15" rx="5" {...S} stroke={c} />
      <path d="M12 22a12 12 0 0 0 24 0" {...S} stroke={c} />
      <path d="M15 27a9 9 0 0 1 18 0" {...S} stroke={c} opacity="0.6" />
      <path d="M24 27v9M20 38h8" {...S} stroke={c} />
      <circle cx="24" cy="17.5" r="1.5" fill={c} />
    </>
  ),

  recruitauditor: (c) => (
    <>
      <circle cx="21" cy="19" r="7" {...S} stroke={c} />
      <path d="M10 39a11 11 0 0 1 22 0" {...S} stroke={c} />
      <path d="M32 32l9 9" {...S} stroke={c} />
      <circle cx="34" cy="30" r="3" {...S} stroke={c} />
      <path d="M21 8V5M41 19h-3" {...S} stroke={c} strokeWidth="2" />
    </>
  ),

  sentienthub: (c) => (
    <>
      <circle cx="24" cy="24" r="6" {...S} stroke={c} />
      <circle cx="24" cy="24" r="2" fill={c} />
      <path d="M24 6v8M24 34v8M6 24h8M34 24h8" {...S} stroke={c} />
      <path d="M13 13h8M35 35h-8M35 13h-8M13 35h8" {...S} stroke={c} strokeWidth="2" opacity="0.6" />
      <path d="M8 8c0 4 0 4 4 4" {...S} stroke={c} strokeWidth="1.6" opacity="0.5" />
      <path d="M40 40c0-4 0-4-4-4" {...S} stroke={c} strokeWidth="1.6" opacity="0.5" />
    </>
  ),
};

export function AgentLogo({
  id,
  size = 48,
  stroke = true,
  className,
}: {
  id: string;
  size?: number;
  stroke?: boolean;
  className?: string;
}) {
  const color = LOGO_COLORS[id] ?? LOGO_COLORS.default;
  const glyph = GLYPHS[id] ?? GLYPHS.geoengine;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {stroke && <circle cx="24" cy="24" r="21.5" stroke={color} strokeOpacity="0.28" strokeWidth="1.4" strokeDasharray="2 5" />}
      {glyph(color)}
    </svg>
  );
}

export function SuiteLogo({
  size = 48,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 6l22 13v26L32 58 10 45V19z" stroke="var(--haze-accent)" strokeWidth="3.4" strokeLinejoin="round" fill="none" />
      <path d="M21 17h22M21 32h22M21 47h22" stroke="var(--haze-accent)" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="32" cy="32" r="6.5" stroke="var(--haze-accent)" strokeWidth="2.4" fill="color-mix(in srgb, var(--haze-accent) 10%, transparent)" />
      <circle cx="32" cy="32" r="1.6" fill="var(--haze-accent)" />
      <path d="M32 3.5v5M32 55.5v5" stroke="var(--haze-accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}