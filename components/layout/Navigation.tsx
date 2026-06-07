"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="grid h-[clamp(4.75rem,6vw,6rem)] grid-cols-[1fr_auto] items-center xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link
          aria-label="Gustiansyah home"
          className="relative z-50 w-fit text-base font-semibold tracking-[-0.025em]"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-3 xl:flex">
          <ThemeToggle />
          <nav aria-label="Primary navigation" className="flex items-center gap-7 2xl:gap-9">
            {navigation.map((item) => {
              const active = pathname.startsWith(item.href);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap text-sm transition-colors hover:text-accent ${
                    active ? "text-ink" : "text-muted"
                  }`}
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center justify-self-end gap-2 xl:flex 2xl:gap-3">
          <LanguageToggle />
          <Link
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-ink px-5 text-sm font-medium text-on-ink transition-colors hover:bg-accent"
            href={site.contactHref}
          >
            Hire Me
          </Link>
          <button
            aria-disabled="true"
            className="inline-flex min-h-11 cursor-default items-center justify-center whitespace-nowrap rounded-full border border-line px-5 text-sm font-medium text-muted"
            disabled
            type="button"
          >
            Download CV
          </button>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-50 flex min-h-11 min-w-11 items-center justify-center justify-self-end xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-1 h-px w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 h-px w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <MobileMenu
        activePath={pathname}
        onNavigate={() => setMenuOpen(false)}
        open={menuOpen}
      />
    </header>
  );
}
