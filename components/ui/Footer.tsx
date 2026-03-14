import { portfolioConfig } from "@/config/portfolio.config";
import { Github, Twitter } from "lucide-react";
import { SiPypi } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-border bg-bg-base py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-text-muted text-sm">
          Built by {portfolioConfig.handle} · {currentYear}
        </div>

        <div className="flex items-center gap-6">
          <a
            href={portfolioConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-green transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={portfolioConfig.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-colors"
          >
            <SiPypi size={18} />
          </a>
          <a
            href={portfolioConfig.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-green transition-colors"
          >
            <Twitter size={18} />
          </a>
        </div>

        <div className="text-text-muted text-xs">
          MIT License
        </div>
      </div>
    </footer>
  );
}
