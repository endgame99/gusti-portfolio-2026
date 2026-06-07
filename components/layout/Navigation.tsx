"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="flex h-24 items-center justify-between">
        <Link
          aria-label="Gustiansyah home"
          className="relative z-50 text-base font-semibold tracking-[-0.025em]"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          {site.name}
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors hover:text-accent ${
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

        <div className="hidden lg:block">
          <Link
            className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm font-medium transition-colors hover:border-ink"
            href={site.contactHref}
          >
            Say Hello
          </Link>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-50 flex min-h-11 min-w-11 items-center justify-center lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0.5 h-px w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0.5 left-0 h-px w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? "-translate-y-[5px] -rotate-45" : ""
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
