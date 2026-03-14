"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio.config";
import { ProgressBar } from "@/components/ui/ProgressBar";

const categories = ["All", "Language", "Security", "DevOps", "Tooling"];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = portfolioConfig.skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 bg-bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="relative inline-block mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-1 bg-accent-green"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "bg-accent-green text-bg-base border-accent-green"
                    : "bg-bg-base text-text-muted border-bg-border hover:border-accent-green/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProgressBar label={skill.name} value={skill.level} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
