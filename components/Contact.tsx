"use client";

import { useEffect, useRef } from "react";
import { PERSON } from "@/lib/data";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("visible"),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="section-fade py-32 px-6 max-w-5xl mx-auto"
    >
      <div className="border border-border rounded-2xl p-12 md:p-16 text-center">
        <p className="font-mono text-highlight text-xs tracking-widest uppercase mb-6">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
          Get in touch.
        </h2>
        <p className="text-muted max-w-md mx-auto mb-10 leading-relaxed">
          Open to collaborations, contributions, and conversations about
          security tooling and open source.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${PERSON.email}`}
            className="px-6 py-3 bg-primary text-bg text-sm font-medium rounded-md hover:bg-accent transition-colors"
          >
            {PERSON.email}
          </a>
          <a
            href={PERSON.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-dim text-sm rounded-md hover:border-muted hover:text-accent transition-colors"
          >
            Twitter / X ↗
          </a>
          <a
            href={PERSON.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-dim text-sm rounded-md hover:border-muted hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
