"use client";

import { useState } from "react";

import { SectionShell } from "@/components/ui/SectionShell";

const items = ["소개", "플로우", "시스템", "문의"];

export function LandingMobileTabBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionShell style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
      <div className="landing-tabbar-preview">
        <span
          className="landing-tabbar-preview-indicator"
          aria-hidden="true"
          style={{
            width: `${23.9}%`,
            transform: `translateX(${activeIndex * 103.1}%)`,
          }}
        />
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </SectionShell>
  );
}
