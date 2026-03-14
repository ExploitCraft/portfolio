"use client";

import { useState, useEffect } from "react";

export function usePyPIStats(slug: string) {
  const [downloads, setDownloads] = useState<string>("–");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDownloads() {
      try {
        const response = await fetch(`/api/pypi/${slug}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        // data.data.last_month is the field we want
        const count = data.data.last_month;
        setDownloads(count.toLocaleString());
      } catch (error) {
        console.error("Error fetching PyPI stats:", error);
        setDownloads("–");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchDownloads();
    } else {
      setLoading(false);
    }
  }, [slug]);

  return { downloads, loading };
}
