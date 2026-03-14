"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio.config";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { Github, CheckCircle2, Star, Download } from "lucide-react";
import { SiPypi } from "react-icons/si";
import { useGitHubStars } from "@/hooks/useGitHubStars";
import { usePyPIStats } from "@/hooks/usePyPIStats";
import { cn } from "@/lib/utils";

function ProjectStats({ githubUrl, pypiSlug, accentColor = "green" }: { githubUrl: string, pypiSlug?: string, accentColor?: "green" | "cyan" }) {
  const repoParts = githubUrl.replace("https://github.com/", "").split("/");
  const owner = repoParts[0];
  const repo = repoParts[1];

  const { stars, loading: starsLoading } = useGitHubStars(owner, repo);
  const { downloads, loading: pypiLoading } = usePyPIStats(pypiSlug || "");

  const accentClass = accentColor === "green" ? "text-accent-green" : "text-accent-cyan";

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-text-muted flex items-center gap-2">
          <Star size={14} /> GitHub Stars
        </span>
        <span className={cn("font-mono", starsLoading ? "animate-pulse bg-bg-border h-4 w-8 rounded" : accentClass)}>
          {!starsLoading && stars}
        </span>
      </div>
      {pypiSlug && (
        <div className="flex justify-between items-center">
          <span className="text-text-muted flex items-center gap-2">
            <Download size={14} /> Monthly Downloads
          </span>
          <span className={cn("font-mono", pypiLoading ? "animate-pulse bg-bg-border h-4 w-12 rounded" : accentClass)}>
            {!pypiLoading && downloads}
          </span>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const featuredProject = portfolioConfig.projects.find((p) => p.featured);
  const otherProjects = portfolioConfig.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-bg-base grid-bg">
      <div className="container mx-auto px-6">
        <div className="relative inline-block mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute -bottom-2 left-0 h-1 bg-accent-green"
          />
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <GlowCard className="p-8 md:p-12 border-accent-green/20 shadow-[0_0_30px_rgba(0,255,136,0.05)]">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-4xl">{featuredProject.emoji}</span>
                    <h3 className="text-3xl font-bold text-accent-green text-glow">
                      {featuredProject.name}
                    </h3>
                    <Badge variant="green">{featuredProject.version}</Badge>
                    <Badge variant="cyan">{featuredProject.status}</Badge>
                  </div>

                  <p className="text-xl text-text-primary leading-relaxed">
                    {featuredProject.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.modules.map((mod) => (
                      <Badge key={mod} variant="cyan">
                        {mod}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuredProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-text-muted">
                        <CheckCircle2 className="text-accent-green shrink-0" size={18} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-accent-green text-bg-base font-bold rounded-lg flex items-center gap-2 hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all"
                    >
                      <Github size={18} /> GitHub ↗
                    </a>
                    <a
                      href={featuredProject.pypi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-accent-cyan text-accent-cyan font-bold rounded-lg flex items-center gap-2 hover:bg-accent-cyan/10 transition-all"
                    >
                      <SiPypi size={18} /> PyPI ↗
                    </a>
                  </div>
                </div>

                <div className="lg:w-1/3 space-y-6">
                  <div className="bg-bg-base/50 border border-bg-border rounded-xl p-6 space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted">
                      Live Stats
                    </h4>
                    <ProjectStats githubUrl={featuredProject.github} pypiSlug={featuredProject.pypiSlug} />
                  </div>

                  <div className="bg-bg-base/50 border border-bg-border rounded-xl p-6 space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlowCard className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-2xl">{project.emoji}</span>
                  <h3 className="text-xl font-bold text-text-primary">{project.name}</h3>
                  <Badge variant="green" className="text-[10px]">
                    {project.version}
                  </Badge>
                </div>

                <p className="text-text-muted text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mb-6 pt-4 border-t border-bg-border/50">
                  <ProjectStats githubUrl={project.github} pypiSlug={project.pypiSlug} accentColor="cyan" />
                </div>

                <div className="space-y-3 mb-6">
                  {project.features.slice(0, 4).map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-text-muted">
                      <CheckCircle2 className="text-accent-green shrink-0" size={14} />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 4 && (
                    <div className="text-xs text-accent-green pl-6">
                      + {project.features.length - 4} more
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech: string) => (
                    <Badge key={tech} variant="outline" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-bg-border text-text-primary text-sm font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-accent-green hover:text-bg-base transition-all"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 border border-bg-border text-text-muted text-sm font-bold rounded-lg flex items-center justify-center gap-2 hover:border-accent-cyan hover:text-accent-cyan transition-all"
                  >
                    <SiPypi size={16} /> PyPI
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
