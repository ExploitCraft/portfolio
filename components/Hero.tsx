"use client";

import { useEffect, useRef } from "react";
import { PERSON } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.classList.add("opacity-100", "translate-y-0");
    }, 100);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167,139,250,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,139,250,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div
        ref={ref}
        className="relative opacity-0 translate-y-6 transition-all duration-700 ease-out"
      >
        <p className="font-mono text-highlight text-sm mb-6 tracking-widest uppercase">
          — Security Tool Builder
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold text-primary leading-tight tracking-tight mb-6">
          ExploitCraft
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10">
          {PERSON.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-primary text-bg text-sm font-medium rounded-md hover:bg-accent transition-colors"
          >
            View Projects
          </a>
          <a
            href={PERSON.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border text-dim text-sm rounded-md hover:border-muted hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
        </div>

        <div className="mt-20 flex items-center gap-6 text-xs font-mono text-muted">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-highlight inline-block" />
            Bangladesh
          </span>
          <span>2 tools shipped</span>
          <span>533 tests</span>
          <span>Open source</span>
        </div>
      </div>
    </section>
  );
}
