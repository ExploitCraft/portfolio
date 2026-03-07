export const PERSON = {
  handle:   "ExploitCraft",
  location: "Bangladesh",
  email:    "emonkk06@gmail.com",
  github:   "https://github.com/ExploitCraft",
  twitter:  "https://x.com/Emon452432",
  bio:      "13-year-old self-taught developer from Bangladesh building open-source security tools. Started from zero — no courses, no bootcamp, just code. I build things that are tested, documented, and actually work.",
  tagline:  "Security tools. Open source. Built from scratch.",
};

export const PROJECTS = [
  {
    name:        "ReconNinja",
    version:     "v3.3.0",
    url:         "https://github.com/ExploitCraft/ReconNinja",
    description: "14-phase automated reconnaissance framework for security researchers.",
    details: [
      "Subdomain enumeration, RustScan, async TCP, Masscan, Nmap",
      "Web discovery — httpx, WhatWeb, Nikto, Feroxbuster, Nuclei, Aquatone",
      "CVE lookup via NVD API",
      "AI-powered threat analysis — Groq, Ollama, Gemini, OpenAI",
      "Plugin system, resume/checkpoint support, dark-mode HTML reports",
    ],
    tags:   ["Python", "Security", "CLI", "Open Source"],
    stats:  "533 tests · MIT",
  },
  {
    name:        "VaultHound",
    version:     "v1.0.0",
    url:         "https://github.com/ExploitCraft/VaultHound",
    description: "Secret and credential scanner that hunts exposed API keys, passwords, and tokens.",
    details: [
      "URL mode, directory mode, git history mode",
      "43 detection patterns — AWS, GCP, GitHub, Stripe, OpenAI, Anthropic, Slack",
      "Private keys, JWT tokens, database connection strings",
      "Entropy-based false positive filtering",
      "HTML, JSON, and text reports",
    ],
    tags:   ["Python", "Security", "CLI", "Open Source"],
    stats:  "43 patterns · MIT",
  },
];

export const STACK = {
  Languages: [
    "Python", "TypeScript", "JavaScript",
    "PHP", "HTML5", "CSS3", "PowerShell", "Markdown",
  ],
  Frameworks: ["Next.js", "Flask", "React"],
  Tools: [
    "Git", "GitHub", "Docker",
    "Nginx", "Apache", "GitLab CI", "NPM",
  ],
  Databases: ["MariaDB"],
  Other: [
    "Linux", "Tor", "Home Assistant",
    "Jellyfin", "Affinity Designer", "Affinity Photo",
  ],
};
