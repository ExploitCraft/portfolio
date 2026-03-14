"use client";

import { motion } from "framer-motion";
import { TerminalText } from "@/components/ui/TerminalText";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio.config";

export function NotFoundUI() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center p-6 scanlines">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-bg-surface border border-bg-border rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="bg-bg-border/50 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs text-text-muted font-mono">error — 404</span>
          </div>
          <div className="p-8 font-mono text-sm md:text-base space-y-4">
            <div className="flex gap-2">
              <span className="text-accent-green">$</span>
              <TerminalText text="cd /page-you-wanted" delay={50} />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-accent-red"
            >
              &gt; Error 404: Directory not found
            </motion.div>

            <div className="flex gap-2 pt-4">
              <span className="text-accent-green">$</span>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
                <TerminalText text="ls /valid-pages" delay={50} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="text-accent-cyan grid grid-cols-2 md:grid-cols-5 gap-2"
            >
              <span>home</span>
              <span>about</span>
              <span>skills</span>
              <span>projects</span>
              <span>contact</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5 }}
              className="pt-8"
            >
              <Link
                href="/"
                className="inline-block px-6 py-2 bg-accent-green text-bg-base font-bold rounded hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all"
              >
                Go Home
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
