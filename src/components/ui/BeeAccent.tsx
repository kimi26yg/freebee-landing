import Image from "next/image";

type BeeAccentProps = {
  size?: number;
  className?: string;
};

export function BeeAccent({ size = 88, className }: BeeAccentProps) {
  return (
    <div
      className={`bee-accent ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image src="/bee.svg" alt="" fill sizes={`${size}px`} />
    </div>
  );
}
