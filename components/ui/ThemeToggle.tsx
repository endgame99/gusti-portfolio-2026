"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";

const themeEvent = "gustiansyah-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(themeEvent, callback);
  return () => window.removeEventListener(themeEvent, callback);
}

function getThemeSnapshot() {
  return window.localStorage.getItem("theme") === "dark";
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getThemeSnapshot, () => false);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  function toggleTheme() {
    const nextTheme = dark ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event(themeEvent));
  }

  return (
    <button
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-background text-ink transition-colors hover:border-ink"
      onClick={toggleTheme}
      type="button"
    >
      {dark ? (
        <svg aria-hidden="true" className="size-[18px]" fill="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6 16 16M16 4l-1.4 1.4M5.4 14.6 4 16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
      ) : (
        <svg aria-hidden="true" className="size-[18px]" fill="none" viewBox="0 0 20 20">
          <path
            d="M16.8 12.5A7 7 0 0 1 7.5 3.2a7 7 0 1 0 9.3 9.3Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </button>
  );
}
