"use client";

import { useState, useEffect } from "react";
import { PERSON } from "@/lib/data";

const links = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Stack",    href: "#stack"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm text-primary font-medium tracking-wider hover:text-highlight transition-colors"
        >
          {PERSON.handle}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-dim hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={PERSON.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono text-dim hover:text-accent transition-colors border border-border px-3 py-1.5 rounded-md hover:border-muted"
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}
