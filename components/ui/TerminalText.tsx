"use client";

import { useState, useEffect } from "react";

interface TerminalTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TerminalText({ text, delay = 50, className }: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay + Math.random() * 50); // Add some randomness for realism

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{displayedText}</span>;
}
