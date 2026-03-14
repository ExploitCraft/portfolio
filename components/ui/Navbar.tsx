"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio.config";
import { cn } from "@/lib/utils";
import { Github, Menu, X } from "lucide-react";
import { SiPypi } from "react-icons/si";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-base/50 backdrop-blur-md border-b border-bg-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold flex items-center gap-0">
          <span className="text-accent-green">&gt;</span>
          <span>{portfolioConfig.handle}_</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
            className="w-2 h-5 bg-accent-green inline-block ml-1"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-text-muted hover:text-accent-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-bg-border pl-8">
            <a
              href={portfolioConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-green transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioConfig.pypi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-cyan transition-colors"
            >
              <SiPypi size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface border-b border-bg-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-text-muted hover:text-accent-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-bg-border">
                <a
                  href={portfolioConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted"
                >
                  <Github size={20} /> GitHub
                </a>
                <a
                  href={portfolioConfig.pypi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted"
                >
                  <SiPypi size={20} /> PyPI
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
