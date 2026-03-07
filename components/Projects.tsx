"use client";

import { useEffect, useRef } from "react";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
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
      id="projects"
      ref={ref}
      className="section-fade py-32 px-6 max-w-5xl mx-auto"
    >
      <p className="font-mono text-highlight text-xs tracking-widest uppercase mb-4">
        Projects
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-16">
        What I've built.
      </h2>

      <div className="space-y-6">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-border rounded-xl p-8 hover:border-muted transition-all duration-300 hover:bg-surface"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-highlight transition-colors">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-dim border border-border px-2 py-0.5 rounded">
                    {p.version}
                  </span>
                </div>
                <p className="text-muted text-sm">{p.description}</p>
              </div>
              <span className="text-dim group-hover:text-accent transition-colors text-lg ml-4 mt-1">
                ↗
              </span>
            </div>

            <ul className="space-y-1.5 mb-6">
              {p.details.map((d) => (
                <li key={d} className="text-sm text-dim flex items-start gap-2">
                  <span className="text-highlight mt-0.5 shrink-0">—</span>
                  {d}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-dim border border-border px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="font-mono text-xs text-dim">{p.stats}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
