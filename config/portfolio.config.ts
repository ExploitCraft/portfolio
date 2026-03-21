export const portfolioConfig = {
  handle: "ExploitCraft",
  tagline: "Security Researcher & Python Developer",
  location: "Gazipur, Dhaka, Bangladesh",
  email: "emonkk06@gmail.com",
  github: "https://github.com/ExploitCraft",
  twitter: "https://x.com/ExploitCraft",
  pypi: "https://pypi.org/user/ExploitCraft/",
  availability: "Open to bug bounty collabs",

  experience: {
    from: 2024,
    to: 2026,
    years: 2,
    label: "2 Years of Security Tool Development",
  },

  about: `Self-taught developer and security researcher specializing in 
  Python-based penetration testing and reconnaissance tooling. 
  Started in 2024 and have been building production-grade open-source 
  security tools ever since. Focused on bug bounty hunting, credential 
  scanning, and automated recon frameworks — with clean code, 
  thorough testing, and professional documentation.`,

  skills: [
    { name: "Python", level: 90, category: "Language" },
    { name: "Bash Scripting", level: 80, category: "Language" },
    { name: "Penetration Testing", level: 85, category: "Security" },
    { name: "Reconnaissance", level: 90, category: "Security" },
    { name: "Bug Bounty Hunting", level: 80, category: "Security" },
    { name: "Credential Scanning", level: 85, category: "Security" },
    { name: "GitHub Actions / CI-CD", level: 75, category: "DevOps" },
    { name: "PyPI Publishing", level: 80, category: "DevOps" },
    { name: "JSON/HTML/Markdown Reporting", level: 85, category: "Tooling" },
    { name: "Entropy Analysis", level: 75, category: "Tooling" },
  ],

  stats: [
    { label: "Experience", value: "2 Years" },
    { label: "Tools Built", value: "2+" },
    { label: "Tests Passing", value: "707+" },
    { label: "Detection Patterns", value: "43" },
  ],

  projects: [
    {
      name: "ReconNinja",
      emoji: "🥷",
      version: "v6.0.0",
      status: "Active",
      pypiSlug: "reconinja",
      description:
        "A production-grade Python security reconnaissance framework built for penetration testers and bug bounty hunters.",
      longDescription:
        "ReconNinja automates the full recon pipeline — subdomain enumeration, live host filtering, URL collection, and vulnerability scanning — with rich multi-format reporting and a fully modular architecture.",
      modules: [
        "Shodan",
        "VirusTotal",
        "WHOIS",
        "Wayback Machine",
        "SSL Analysis",
      ],
      features: [
        "JSON / HTML / Markdown reporting",
        "CLI flags & resume logic",
        "707+ passing tests",
        "GitHub Actions CI/CD",
        "PyPI published",
      ],
      techStack: ["Python", "GitHub Actions", "PyPI"],
      github: "https://github.com/ExploitCraft/ReconNinja",
      pypi: "https://pypi.org/project/ReconNinja/",
      language: "Python",
      license: "MIT",
      featured: true,
    },
    {
      name: "VaultHound",
      emoji: "🐾",
      version: "v1.0.0",
      status: "Active",
      pypiSlug: "vaulthound",
      description:
        "A secret & credential scanner that hunts exposed keys, tokens, and sensitive strings across URLs, directories, and git history.",
      longDescription:
        "VaultHound detects leaked credentials before attackers do. With 43 built-in detection patterns and entropy-based false positive filtering, it covers the most critical secret types across all major cloud platforms and services.",
      modules: [],
      features: [
        "URL mode",
        "Directory mode",
        "Git history mode",
        "43 detection patterns",
        "Covers AWS, GCP, GitHub, Stripe, OpenAI, Anthropic, Slack, JWT, DB connection strings, private keys",
        "Entropy-based false positive filtering",
        "PyPI published",
      ],
      techStack: ["Python", "PyPI"],
      github: "https://github.com/ExploitCraft/VaultHound",
      pypi: "https://pypi.org/user/ExploitCraft/VaultHound",
      language: "Python",
      license: "MIT",
      featured: false,
    },
  ],

  seo: {
    title: "ExploitCraft — Security Researcher & Python Developer",
    description:
      "Portfolio of ExploitCraft, a self-taught security researcher and Python developer from Bangladesh. Builder of ReconNinja and VaultHound.",
    url: "https://exploitcraft.dev",
    ogImage: "/og-image.png",
  },
};
