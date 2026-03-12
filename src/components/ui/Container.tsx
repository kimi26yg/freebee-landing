import type { CSSProperties, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  maxWidth?: string;
  className?: string;
  style?: CSSProperties;
};

export function Container({
  children,
  maxWidth = "var(--content-max)",
  className,
  style,
}: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        width: "min(100% - 2 * var(--page-x), " + maxWidth + ")",
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
