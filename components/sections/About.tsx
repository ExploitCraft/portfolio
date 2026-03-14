"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { useCountUp } from "@/hooks/useCountUp";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-bg-base grid-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-2 left-0 h-1 bg-accent-green"
              />
            </div>
            
            <p className="text-text-primary leading-relaxed text-lg">
              {portfolioConfig.about}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Badge variant="green" className="text-sm py-1 px-3">
                {portfolioConfig.availability}
              </Badge>
              <div className="text-text-muted flex items-center gap-2">
                <span>🗓</span>
                <span>{portfolioConfig.experience.from} – {portfolioConfig.experience.to} · {portfolioConfig.experience.years} Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <div ref={ref} className="flex-1 w-full grid grid-cols-2 gap-4">
            {portfolioConfig.stats.map((stat, index) => (
              <StatCard key={index} stat={stat} isInView={isInView} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isInView, index }: { stat: any, isInView: boolean, index: number }) {
  // Extract numeric value for counting animation
  const numericValue = parseInt(stat.value.replace(/\D/g, ""));
  const suffix = stat.value.replace(/[0-9]/g, "");
  const count = useCountUp(numericValue, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <GlowCard className="p-6 text-center h-full flex flex-col justify-center">
        <div className="text-4xl font-bold text-accent-green mb-2">
          {count}{suffix}
        </div>
        <div className="text-sm text-text-muted uppercase tracking-wider">
          {stat.label}
        </div>
      </GlowCard>
    </motion.div>
  );
}
