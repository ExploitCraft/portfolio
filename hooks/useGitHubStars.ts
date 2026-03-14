"use client";

import { useState, useEffect } from "react";

export function useGitHubStars(owner: string, repo: string) {
  const [stars, setStars] = useState<string | number>("–");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
        setStars("–");
      } finally {
        setLoading(false);
      }
    }

    fetchStars();
  }, [owner, repo]);

  return { stars, loading };
}
