"use client";

import { useEffect, useState } from "react";

const words = ["Inteligente", "Estratégico", "Analítico"] as const;
const WORD_DURATION = 3000;

export function AnimatedWord() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % words.length);
    }, WORD_DURATION);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="animated-word" aria-hidden="true">
      <span className="animated-word__sizer">Estratégico</span>
      <span key={activeWord} className="animated-word__item">
        {words[activeWord]}
      </span>
    </span>
  );
}
