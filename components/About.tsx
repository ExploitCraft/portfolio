"use client";

import { useEffect, useRef } from "react";
import { PERSON } from "@/lib/data";

export default function About() {
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
      id="about"
      ref={ref}
      className="section-fade py-32 px-6 max-w-5xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-mono text-highlight text-xs tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary leading-tight">
            Building things<br />that actually work.
          </h2>
        </div>

        <div className="space-y-5 text-muted leading-relaxed">
          <p>{PERSON.bio}</p>
          <p>
            Under the <span className="text-accent">ExploitCraft</span> brand,
            I build Python security tools — tested, documented, and open source.
            Every project ships with CI/CD, proper test suites, and real documentation.
          </p>
          <p>
            Currently focused on growing the ExploitCraft toolkit and learning
            Next.js, network security, and penetration testing.
          </p>

          <div className="pt-4 grid grid-cols-2 gap-4">
            {[
              ["Location",  PERSON.location],
              ["Age",       "13 years old"],
              ["Focus",     "Security tooling"],
              ["Status",    "Open to collaborate"],
            ].map(([label, value]) => (
              <div key={label} className="border border-border rounded-md p-4">
                <p className="font-mono text-xs text-dim mb-1">{label}</p>
                <p className="text-sm text-accent">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
