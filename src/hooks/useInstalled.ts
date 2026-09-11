import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "hackerbyte:installed-extensions";

function readStore(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/**
 * Simulates a local "install queue" so extension install buttons feel real
 * without needing a backend. State is per-browser via localStorage.
 */
export function useInstalled() {
  const [installed, setInstalled] = useState<string[]>(() => readStore());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(installed));
    } catch {
      /* storage unavailable — fail silently, state still works in-memory */
    }
  }, [installed]);

  const isInstalled = useCallback((slug: string) => installed.includes(slug), [installed]);

  const toggleInstalled = useCallback((slug: string) => {
    setInstalled((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }, []);

  return { installed, isInstalled, toggleInstalled };
}
