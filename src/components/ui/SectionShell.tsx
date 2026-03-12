import type { CSSProperties, ReactNode } from "react";

import { Container } from "@/components/ui/Container";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
  style?: CSSProperties;
};

export function SectionShell({
  children,
  className,
  maxWidth,
  style,
}: SectionShellProps) {
  return (
    <section className={className} style={{ padding: "var(--section-y) 0", ...style }}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
}
