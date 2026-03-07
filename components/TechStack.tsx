"use client";

import { useEffect, useRef } from "react";
import { STACK } from "@/lib/data";

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stack"
      ref={ref}
      className="section-fade py-32 px-6 max-w-5xl mx-auto"
    >
      <p className="font-mono text-highlight text-xs tracking-widest uppercase mb-4">
        Stack
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-16">
        Tools I work with.
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(STACK).map(([category, items]) => (
          <div key={category}>
            <p className="font-mono text-xs text-dim uppercase tracking-widest mb-4 border-b border-border pb-2">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-muted border border-border px-3 py-1.5 rounded-md hover:border-muted hover:text-accent transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
