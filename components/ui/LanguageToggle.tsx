"use client";

import { useSyncExternalStore } from "react";

type Language = "ID" | "EN";

const languageEvent = "gustiansyah-language-change";

function subscribe(callback: () => void) {
  window.addEventListener(languageEvent, callback);
  return () => window.removeEventListener(languageEvent, callback);
}

function getLanguageSnapshot(): Language {
  return window.localStorage.getItem("language") === "EN" ? "EN" : "ID";
}

export function LanguageToggle() {
  const language = useSyncExternalStore(
    subscribe,
    getLanguageSnapshot,
    () => "ID",
  );

  function selectLanguage(nextLanguage: Language) {
    window.localStorage.setItem("language", nextLanguage);
    window.dispatchEvent(new Event(languageEvent));
  }

  return (
    <div
      aria-label="Language preference"
      className="inline-flex min-h-11 items-center rounded-full border border-line bg-background p-1"
      role="group"
    >
      {(["ID", "EN"] as const).map((option) => (
        <button
          aria-pressed={language === option}
          className={`min-h-9 rounded-full px-2.5 text-xs font-medium transition-colors ${
            language === option
              ? "bg-ink text-on-ink"
              : "text-muted hover:text-ink"
          }`}
          key={option}
          onClick={() => selectLanguage(option)}
          type="button"
        >
          <span aria-hidden="true">{option === "ID" ? "🇮🇩" : "🇬🇧"}</span>{" "}
          {option}
        </button>
      ))}
    </div>
  );
}
