import type { ReactNode } from "react";

type SurfaceCardProps = {
  children: ReactNode;
  accent?: "gold" | "blue" | "green" | "none";
  className?: string;
};

export function SurfaceCard({
  children,
  accent = "none",
  className,
}: SurfaceCardProps) {
  return <article className={`surface-card accent-${accent} ${className ?? ""}`}>{children}</article>;
}
