"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "green" | "cyan";
}

export function GlowCard({ children, className, glowColor = "green" }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "relative bg-bg-surface border border-bg-border rounded-xl overflow-hidden transition-all duration-300",
        glowColor === "green" ? "hover:border-accent-green/30 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]" : "hover:border-accent-cyan/30 hover:shadow-[0_0_20px_rgba(0,204,255,0.1)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
