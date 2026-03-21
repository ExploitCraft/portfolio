"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Animates from 0 → target over `duration` ms using requestAnimationFrame.
 * Returns the current display value as a string (e.g. "1,234").
 */
export function useCountUp(target: number | null, duration = 900): string {
  const [display, setDisplay] = useState("–");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (target === null) return;
    if (target === 0) { setDisplay("0"); return; }

    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(current.toLocaleString());
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return display;
}
