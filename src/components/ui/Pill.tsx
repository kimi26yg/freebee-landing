import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  tone?: "default" | "gold" | "ink";
};

export function Pill({ children, tone = "default" }: PillProps) {
  return <span className={`pill pill-${tone}`}>{children}</span>;
}
