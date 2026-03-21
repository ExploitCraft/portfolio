"use client";

import { motion, AnimatePresence } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio.config";
import { Badge } from "@/components/ui/Badge";
import { StatusDot } from "@/components/ui/StatusDot";
import { GlowCard } from "@/components/ui/GlowCard";
import {
  Github,
  CheckCircle2,
  Star,
  Download,
  Pin,
  ExternalLink,
} from "lucide-react";
import { SiPypi } from "react-icons/si";
import { useGitHubRepo } from "@/hooks/useGitHubRepo";
import { usePyPIStats } from "@/hooks/usePyPIStats";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

// ── Rolling version tag ─────────────────────────────────────────────────────
function RollingVersion({
  fallback,
  live,
  accent = "green",
}: {
  fallback: string;
  live: string | null;
  accent?: "green" | "cyan";
}) {
  const display = live ?? fallback;
  const [prev, setPrev] = useState(display);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (live && live !== prev) {
      setPrev(live);
      setAnimKey((k) => k + 1);
    }
  }, [live, prev]);

  const cls =
    accent === "green"
      ? "bg-accent-green/10 text-accent-green border-accent-green/20"
      : "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20";

  return (
    <span
      className={cn(
        "relative overflow-hidden inline-flex px-2 py-0.5 text-xs font-medium border rounded-full",
        cls
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={animKey}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="block"
        >
          {display}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ── Animated star count ─────────────────────────────────────────────────────
function StarCount({ githubUrl, accent = "green" }: { githubUrl: string; accent?: "green" | "cyan" }) {
  const { stars, loading } = useGitHubRepo(githubUrl);
  const counted = useCountUp(stars);
  const accentCls = accent === "green" ? "text-accent-green" : "text-accent-cyan";

  return (
    <div className="flex justify-between items-center">
      <span className="text-text-muted flex items-center gap-2 text-sm">
        <Star size={13} /> GitHub Stars
      </span>
      <span
        className={cn(
          "font-mono text-sm",
          loading ? "animate-pulse bg-bg-border h-4 w-8 rounded" : accentCls
        )}
      >
        {!loading && counted}
      </span>
    </div>
  );
}

// ── Stats panel (stars + downloads) ─────────────────────────────────────────
function ProjectStats({
  githubUrl,
  pypiSlug,
  accent = "green",
}: {
  githubUrl: string;
  pypiSlug?: string;
  accent?: "green" | "cyan";
}) {
  const { downloads, loading: pypiLoading } = usePyPIStats(pypiSlug ?? "");
  const accentCls = accent === "green" ? "text-accent-green" : "text-accent-cyan";

  return (
    <div className="space-y-3">
      <StarCount githubUrl={githubUrl} accent={accent} />
      {pypiSlug && (
        <div className="flex justify-between items-center">
          <span className="text-text-muted flex items-center gap-2 text-sm">
            <Download size={13} /> Monthly Downloads
          </span>
          <span
            className={cn(
              "font-mono text-sm",
              pypiLoading
                ? "animate-pulse bg-bg-border h-4 w-12 rounded"
                : accentCls
            )}
          >
            {!pypiLoading && downloads}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Featured card ────────────────────────────────────────────────────────────
function FeaturedCard({ project }: { project: (typeof portfolioConfig.projects)[0] }) {
  const { latestVersion } = useGitHubRepo(project.github);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <GlowCard className="p-8 md:p-12 border-accent-green/20 shadow-[0_0_30px_rgba(0,255,136,0.05)] transition-all group-hover:border-accent-green/50 group-hover:shadow-[0_0_40px_rgba(0,255,136,0.12)] cursor-pointer">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-4xl">{project.emoji}</span>
                <h3 className="text-3xl font-bold text-accent-green text-glow">
                  {project.name}
                </h3>
                <RollingVersion fallback={project.version} live={latestVersion} accent="green" />
                <StatusDot status={project.status} showLabel />
                {project.pinned && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium border rounded-full bg-amber-500/10 text-amber-400 border-amber-400/20">
                    <Pin size={10} /> Pinned
                  </span>
                )}
                <ExternalLink
                  size={16}
                  className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                />
              </div>

              <p className="text-xl text-text-primary leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.modules.map((mod) => (
                  <Badge key={mod} variant="cyan">{mod}</Badge>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle2 className="text-accent-green shrink-0" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buttons — stop propagation so the card link doesn't also fire */}
              <div className="flex flex-wrap gap-4 pt-4" onClick={(e) => e.preventDefault()}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-accent-green text-bg-base font-bold rounded-lg flex items-center gap-2 hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all"
                >
                  <Github size={18} /> GitHub ↗
                </a>
                {project.pypi && (
                  <a
                    href={project.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-accent-cyan text-accent-cyan font-bold rounded-lg flex items-center gap-2 hover:bg-accent-cyan/10 transition-all"
                  >
                    <SiPypi size={18} /> PyPI ↗
                  </a>
                )}
              </div>
            </div>

            {/* Right */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-bg-base/50 border border-bg-border rounded-xl p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Live Stats
                </h4>
                <ProjectStats
                  githubUrl={project.github}
                  pypiSlug={project.pypiSlug}
                  accent="green"
                />
              </div>

              <div className="bg-bg-base/50 border border-bg-border rounded-xl p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </a>
    </motion.div>
  );
}

// ── Grid card ────────────────────────────────────────────────────────────────
function GridCard({
  project,
  index,
}: {
  project: (typeof portfolioConfig.projects)[0];
  index: number;
}) {
  const { latestVersion } = useGitHubRepo(project.github);
  const isInDev = project.status === "In Development";

  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
    >
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block group h-full"
      >
        <GlowCard
          className={cn(
            "p-8 h-full flex flex-col transition-all cursor-pointer",
            "group-hover:border-accent-green/40 group-hover:shadow-[0_0_25px_rgba(0,255,136,0.08)]",
            isInDev && "border-amber-400/15"
          )}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-2xl">{project.emoji}</span>
            <h3 className="text-xl font-bold text-text-primary flex-1">
              {project.name}
            </h3>
            <ExternalLink
              size={14}
              className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <RollingVersion
              fallback={project.version}
              live={latestVersion}
              accent="cyan"
            />
            <StatusDot status={project.status} showLabel />
            {project.pinned && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium border rounded-full bg-amber-500/10 text-amber-400 border-amber-400/20">
                <Pin size={9} /> Pinned
              </span>
            )}
          </div>

          <p className="text-text-muted text-sm mb-5 flex-grow leading-relaxed">
            {project.description}
          </p>

          {/* Stats */}
          <div className="mb-5 pt-4 border-t border-bg-border/50">
            <ProjectStats
              githubUrl={project.github}
              pypiSlug={project.pypiSlug}
              accent="cyan"
            />
          </div>

          {/* Features */}
          <div className="space-y-2 mb-5">
            {project.features.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-text-muted">
                <CheckCircle2 className="text-accent-green shrink-0 mt-0.5" size={13} />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
            {project.features.length > 4 && (
              <div className="text-xs text-accent-green pl-5">
                + {project.features.length - 4} more
              </div>
            )}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Buttons — prevent card link firing twice */}
          <div
            className="flex gap-3 mt-auto"
            onClick={(e) => e.preventDefault()}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 bg-bg-border text-text-primary text-sm font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-accent-green hover:text-bg-base transition-all"
            >
              <Github size={15} /> GitHub
            </a>
            {project.pypi ? (
              <a
                href={project.pypi}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 border border-bg-border text-text-muted text-sm font-bold rounded-lg flex items-center justify-center gap-2 hover:border-accent-cyan hover:text-accent-cyan transition-all"
              >
                <SiPypi size={15} /> PyPI
              </a>
            ) : (
              <span className="flex-1 py-2 border border-amber-400/20 text-amber-400/60 text-sm font-bold rounded-lg flex items-center justify-center gap-2 cursor-not-allowed select-none">
                🚧 In Dev
              </span>
            )}
          </div>
        </GlowCard>
      </a>
    </motion.div>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export function Projects() {
  // Pinned projects first, then rest in original order
  const sorted = [
    ...portfolioConfig.projects.filter((p) => p.pinned),
    ...portfolioConfig.projects.filter((p) => !p.pinned),
  ];

  const featured = sorted.find((p) => p.featured);
  const grid = sorted.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-bg-base grid-bg">
      <div className="container mx-auto px-6">
        <div className="relative inline-block mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute -bottom-2 left-0 h-1 bg-accent-green"
          />
        </div>

        {featured && <FeaturedCard project={featured} />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {grid.map((project, i) => (
            <GridCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
