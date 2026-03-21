"use client";

import { useState, useEffect } from "react";

interface GitHubRepoData {
  stars: number | null;
  latestVersion: string | null;
  loading: boolean;
}

export function useGitHubRepo(githubUrl: string): GitHubRepoData {
  const [stars, setStars] = useState<number | null>(null);
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parts = githubUrl.replace("https://github.com/", "").split("/");
    const owner = parts[0];
    const repo = parts[1];

    if (!owner || !repo) { setLoading(false); return; }

    let cancelled = false;

    async function fetchData() {
      try {
        const res = await fetch(`/api/github/${owner}/${repo}`);
        if (!res.ok) throw new Error(`${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setStars(data.stars ?? null);
          setLatestVersion(data.latestVersion ?? null);
        }
      } catch (err) {
        console.error("[useGitHubRepo]", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, [githubUrl]);

  return { stars, latestVersion, loading };
}
