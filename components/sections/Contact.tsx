"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio.config";
import { GlowCard } from "@/components/ui/GlowCard";
import { Toast } from "@/components/ui/Toast";
import { Mail, Github, ExternalLink, Copy } from "lucide-react";
import { SiPypi } from "react-icons/si";

export function Contact() {
  const [showToast, setShowToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.email);
    setShowToast(true);
  };

  return (
    <section id="contact" className="py-24 bg-bg-surface">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-text-muted">
            Open to bug bounty collabs, security projects, and open-source contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlowCard className="p-8 flex flex-col items-center gap-4 h-full">
              <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green">
                <Mail size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold">Email</h3>
                <p className="text-sm text-text-muted">{portfolioConfig.email}</p>
              </div>
              <button
                onClick={copyEmail}
                className="mt-auto w-full py-2 bg-bg-base border border-bg-border rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:border-accent-green hover:text-accent-green transition-all"
              >
                <Copy size={16} /> Copy Email
              </button>
            </GlowCard>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlowCard className="p-8 flex flex-col items-center gap-4 h-full">
              <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green">
                <Github size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold">GitHub</h3>
                <p className="text-sm text-text-muted">github.com/{portfolioConfig.handle}</p>
              </div>
              <a
                href={portfolioConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-2 bg-bg-base border border-bg-border rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:border-accent-green hover:text-accent-green transition-all"
              >
                <ExternalLink size={16} /> Visit Profile
              </a>
            </GlowCard>
          </motion.div>

          {/* PyPI Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GlowCard className="p-8 flex flex-col items-center gap-4 h-full" glowColor="cyan">
              <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                <SiPypi size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold">PyPI</h3>
                <p className="text-sm text-text-muted">pypi.org/user/{portfolioConfig.handle}</p>
              </div>
              <a
                href={portfolioConfig.pypi}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-2 bg-bg-base border border-bg-border rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:border-accent-cyan hover:text-accent-cyan transition-all"
              >
                <ExternalLink size={16} /> Visit Profile
              </a>
            </GlowCard>
          </motion.div>
        </div>
      </div>

      <Toast
        message="Email copied! ✓"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
