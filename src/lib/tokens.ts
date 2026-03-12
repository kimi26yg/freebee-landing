export const colors = {
  ink: "#251B10",
  inkSoft: "#7A6A58",
  paper: "#FFFCF7",
  paperWarm: "#FFF6DC",
  paperTint: "#F8F4EA",
  line: "#EFD9A2",
  gold: "#F3C742",
  goldSoft: "#FFF0C2",
  cocoa: "#3B2514",
  green: "#21875D",
  blue: "#3465A4",
} as const;

export const spacing = {
  pageX: "clamp(1.25rem, 3vw, 2.5rem)",
  sectionY: "clamp(4rem, 9vw, 7rem)",
  sectionYCompact: "clamp(2.5rem, 6vw, 4rem)",
  contentMax: "1180px",
  proseMax: "720px",
  deckMax: "1280px",
} as const;

export const radii = {
  sm: "16px",
  md: "24px",
  lg: "32px",
  pill: "999px",
  asym: "24px 0 24px 24px",
} as const;

export const shadows = {
  soft: "0 12px 32px rgba(37, 27, 16, 0.08)",
  lift: "0 20px 60px rgba(37, 27, 16, 0.12)",
} as const;

export const motion = {
  fast: "180ms",
  base: "320ms",
  slow: "640ms",
  delayXs: "80ms",
  delaySm: "160ms",
  delayMd: "240ms",
  delayLg: "360ms",
} as const;

export const deckScale = {
  eyebrow: "0.875rem",
  title: "clamp(2.75rem, 5.5vw, 5.5rem)",
  lead: "clamp(1.125rem, 1.7vw, 1.5rem)",
  body: "1rem",
  metric: "clamp(2.25rem, 4vw, 4rem)",
} as const;

export const landingScale = {
  eyebrow: "0.8125rem",
  title: "clamp(2.5rem, 6vw, 5rem)",
  subtitle: "clamp(1.0625rem, 1.7vw, 1.35rem)",
  sectionTitle: "clamp(1.875rem, 3vw, 3rem)",
} as const;
