"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio.config";
import { TerminalText } from "@/components/ui/TerminalText";
import { Badge } from "@/components/ui/Badge";
import { ArrowDown, Github } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden scanlines">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-green/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random(),
            }}
            animate={{
              y: [null, Math.random() * 100 + "%"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl bg-bg-surface border border-bg-border rounded-lg overflow-hidden mb-12 shadow-2xl"
        >
          <div className="bg-bg-border/50 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs text-text-muted font-mono">bash — 80x24</span>
          </div>
          <div className="p-6 text-left font-mono text-sm md:text-base space-y-2">
            <div className="flex gap-2">
              <span className="text-accent-green">$</span>
              <TerminalText text="whoami" delay={100} />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-text-primary"
            >
              &gt; {portfolioConfig.handle}
            </motion.div>
            
            <div className="flex gap-2 pt-2">
              <span className="text-accent-green">$</span>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                <TerminalText text="location" delay={100} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="text-text-primary"
            >
              &gt; {portfolioConfig.location.split(',')[0]}, Bangladesh
            </motion.div>

            <div className="flex gap-2 pt-2">
              <span className="text-accent-green">$</span>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
                <TerminalText text="tools" delay={100} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="text-text-primary"
            >
              &gt; {portfolioConfig.projects.map(p => `${p.name} ${p.version}`).join(" · ")}
            </motion.div>

            <div className="flex gap-2 pt-2">
              <span className="text-accent-green">$</span>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }}>
                <TerminalText text="status" delay={100} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5 }}
              className="text-text-primary flex items-center gap-1"
            >
              &gt; Bug hunting... <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }} className="w-2 h-4 bg-accent-green inline-block" />
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-accent-green text-glow mb-4"
        >
          {portfolioConfig.handle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-text-primary mb-6"
        >
          {portfolioConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-10"
        >
          <Badge variant="green" className="text-sm py-1 px-4">
            ⚡ {portfolioConfig.experience.years} Years · {portfolioConfig.experience.from} – {portfolioConfig.experience.to}
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent-green text-bg-base font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all"
          >
            View Projects
          </a>
          <a
            href={portfolioConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent-green text-accent-green font-bold rounded-lg hover:bg-accent-green/10 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all flex items-center gap-2"
          >
            <Github size={20} /> GitHub ↗
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent-green"
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
