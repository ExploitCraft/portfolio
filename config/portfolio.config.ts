export const portfolioConfig = {
  handle: "ExploitCraft",
  tagline: "Security Tool Builder & Self-Taught Developer",
  location: "Gazipur, Dhaka, Bangladesh",
  email: "emonkk06@gmail.com",
  github: "https://github.com/ExploitCraft",
  twitter: "https://x.com/ExploitCraft_",
  pypi: "https://pypi.org/user/ExploitCraft/",
  fiverr: "https://www.fiverr.com/emonwebdevbo",
  availability: "Open to bug bounty collabs",

  experience: {
    from: 2024,
    to: 2026,
    years: 2,
    label: "2 Years of Security Tool Development",
  },

  about: `Self-taught developer and security researcher from Bangladesh.
  Started at 13 and shipped production-grade open-source security tools
  with proper tests, CI/CD, and documentation. Focused on penetration testing,
  bug bounty hunting, credential scanning, and automated recon — building
  the ExploitCraft security toolkit one commit at a time.`,

  skills: [
    { name: "Python", level: 90, category: "Language" },
    { name: "TypeScript", level: 75, category: "Language" },
    { name: "Bash Scripting", level: 80, category: "Language" },
    { name: "Penetration Testing", level: 85, category: "Security" },
    { name: "Reconnaissance", level: 90, category: "Security" },
    { name: "Bug Bounty Hunting", level: 80, category: "Security" },
    { name: "Credential Scanning", level: 85, category: "Security" },
    { name: "Next.js", level: 70, category: "Web" },
    { name: "GitHub Actions / CI-CD", level: 75, category: "DevOps" },
    { name: "PyPI Publishing", level: 80, category: "DevOps" },
    { name: "JSON/HTML/Markdown Reporting", level: 85, category: "Tooling" },
    { name: "Entropy Analysis", level: 75, category: "Tooling" },
  ],

  stats: [
    { label: "Experience", value: "2 Years" },
    { label: "Tools Built", value: "5+" },
    { label: "Tests Passing", value: "533+" },
    { label: "Detection Patterns", value: "103+" },
  ],

  /**
   * pinned   → true  = shown first, gets a 📌 badge
   * status   → "Active"          → pulsing green dot
   *            "In Development"  → pulsing amber dot
   *            "Inactive"        → solid grey dot
   * version  → fallback shown before live GitHub release loads
   * github   → used to fetch live stars + latest release tag automatically
   * pypiSlug → used for /api/pypi/[slug] download stats
   */
  projects: [
    {
      name: "ReconNinja",
      emoji: "🥷",
      version: "v6.0.0",
      status: "Active" as const,
      pinned: true,
      pypiSlug: "reconinja",
      description:
        "A production-grade Python security reconnaissance framework built for penetration testers and bug bounty hunters.",
      longDescription:
        "ReconNinja automates the full recon pipeline across 21 phases — subdomain enumeration, live host filtering, port scanning (RustScan/Masscan/Nmap), web discovery (httpx/Nikto/Nuclei), CVE lookup, AI threat analysis, plugin system, resume support, and dark-mode HTML reports.",
      modules: [
        "Shodan",
        "VirusTotal",
        "WHOIS",
        "Wayback Machine",
        "SSL Analysis",
        "CVE Lookup",
        "AI Threat Analysis",
      ],
      features: [
        "21-phase automated recon pipeline",
        "Port scanning: RustScan / Masscan / Nmap",
        "Web discovery: httpx / Nikto / Nuclei",
        "JSON / HTML / Markdown reporting",
        "Plugin system & resume logic",
        "533 passing tests",
        "GitHub Actions CI/CD",
        "PyPI published",
      ],
      techStack: ["Python", "GitHub Actions", "PyPI"],
      github: "https://github.com/ExploitCraft/ReconNinja",
      pypi: "https://pypi.org/project/reconinja/",
      language: "Python",
      license: "MIT",
      featured: true,
    },
    {
      name: "VaultHound",
      emoji: "🐾",
      version: "v1.0.0",
      status: "Active" as const,
      pinned: false,
      pypiSlug: "vaulthound",
      description:
        "Secret & credential scanner — URL mode, directory mode, git history mode. 43 detection patterns with entropy-based false-positive filtering.",
      longDescription:
        "VaultHound detects leaked credentials before attackers do. 43 built-in patterns cover AWS, GCP, GitHub, Stripe, OpenAI, Anthropic, Slack, private keys, JWT, and DB strings, with entropy analysis to cut false positives.",
      modules: [],
      features: [
        "URL mode",
        "Directory mode",
        "Git history mode",
        "43 detection patterns",
        "AWS, GCP, GitHub, Stripe, OpenAI, Anthropic, Slack, JWT, DB strings",
        "Entropy-based false positive filtering",
        "PyPI published",
      ],
      techStack: ["Python", "PyPI"],
      github: "https://github.com/ExploitCraft/VaultHound",
      pypi: "https://pypi.org/project/vaulthound/",
      language: "Python",
      license: "MIT",
      featured: false,
    },
    {
      name: "envleaks",
      emoji: "🔐",
      version: "v1.0.0",
      status: "Active" as const,
      pinned: false,
      pypiSlug: "envleaks",
      description:
        "Secret & credential scanner for codebases, git history, and Docker images. 60+ patterns, SARIF output, CI/CD pipeline mode.",
      longDescription:
        "envleaks scans codebases, git history, and Docker images for exposed secrets. 60+ detection patterns cover AWS, GitHub, OpenAI, Anthropic, Stripe, Slack, private keys, JWT, and DB strings. SARIF output integrates directly with GitHub Advanced Security.",
      modules: [],
      features: [
        "Codebase / git history / Docker image scanning",
        "60+ detection patterns",
        "SARIF output for GitHub Advanced Security",
        "CI/CD pipeline mode",
        "PyPI published",
      ],
      techStack: ["Python", "PyPI", "GitHub Advanced Security"],
      github: "https://github.com/ExploitCraft/envleaks",
      pypi: "https://pypi.org/project/envleaks/",
      language: "Python",
      license: "MIT",
      featured: false,
    },
    {
      name: "wifi-passview",
      emoji: "📡",
      version: "v1.0.0",
      status: "Active" as const,
      pinned: false,
      pypiSlug: "wifi-passview",
      description:
        "Cross-platform CLI to dump saved WiFi credentials in one command. Linux, Windows, macOS. Terminal / JSON / CSV output with redact mode.",
      longDescription:
        "wifi-passview retrieves saved WiFi passwords on Linux (NetworkManager, wpa_supplicant, iwd), Windows (netsh), and macOS (Keychain). Outputs to terminal, JSON, or CSV — with a redact mode for safe screenshots.",
      modules: [],
      features: [
        "Linux: NetworkManager, wpa_supplicant, iwd",
        "Windows: netsh",
        "macOS: Keychain",
        "Terminal, JSON, and CSV output",
        "Redact mode for safe screenshots",
        "PyPI published",
      ],
      techStack: ["Python", "PyPI"],
      github: "https://github.com/ExploitCraft/wifi-passview",
      pypi: "https://pypi.org/project/wifi-passview/",
      language: "Python",
      license: "MIT",
      featured: false,
    },
    {
      name: "gitdork",
      emoji: "🎯",
      version: "v0.1.0",
      status: "In Development" as const,
      pinned: false,
      pypiSlug: "",
      description:
        "Google, Shodan & GitHub dork generator for pentesters and bug bounty hunters. Feed it a repo URL or domain — get ready-to-use dork queries.",
      longDescription:
        "gitdork generates targeted Google, Shodan, and GitHub dork queries from a repo URL or domain. Surfaces exposed secrets, sensitive files, open directories, and misconfigs — ready to paste into any search engine.",
      modules: [],
      features: [
        "Google / Shodan / GitHub dork generation",
        "Input: repo URL or domain",
        "Targets exposed secrets, sensitive files, misconfigs",
        "Built for pentesters & bug bounty hunters",
      ],
      techStack: ["Python"],
      github: "https://github.com/ExploitCraft/gitdork",
      pypi: "",
      language: "Python",
      license: "MIT",
      featured: false,
    },
  ],

  seo: {
    title: "ExploitCraft — Security Tool Builder & Self-Taught Developer",
    description:
      "Portfolio of ExploitCraft — a self-taught security researcher from Bangladesh. Builder of ReconNinja, VaultHound, envleaks, wifi-passview, and gitdork.",
    url: "https://emonpersonal.xyz",
    ogImage: "/og-image.png",
  },
};
