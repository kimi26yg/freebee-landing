"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(".anim-section");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
