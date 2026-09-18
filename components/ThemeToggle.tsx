"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="inline-flex h-10 w-10" aria-hidden="true" />;
  }

  function toggleTheme() {
    const html = document.documentElement;
    const dark = !html.classList.contains("dark");
    html.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    setIsDark(dark);
  }

  // ── Circular glassy toggle (matches your screenshot) ──
  if (!withLabel) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/40 active:scale-95"
      >
        {isDark ? (
          // Moon icon
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        ) : (
          // Sun icon
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </button>
    );
  }

  // ── Menu list variant (with "Dark Mode / Light Mode" text) ──
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 font-semibold text-dp-yellow"
    >
      {isDark ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}