"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  label: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-text-primary">{label}</span>
        <span className="text-accent-green">{value}%</span>
      </div>
      <div className="h-2 bg-bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent-green to-accent-cyan relative"
        >
          <div className="absolute right-0 top-0 h-full w-1 bg-white blur-[2px]" />
        </motion.div>
      </div>
    </div>
  );
}
