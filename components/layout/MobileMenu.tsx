"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  expertiseNavigation,
  workNavigation,
} from "@/data/navigation";
import { site } from "@/data/site";

type MobileMenuProps = {
  activePath: string;
  onNavigate: () => void;
  open: boolean;
};

type MenuSection = "work" | "expertise";

export function MobileMenu({
  activePath,
  onNavigate,
  open,
}: MobileMenuProps) {
  const reduceMotion = useReducedMotion();
  const [openSection, setOpenSection] = useState<MenuSection | null>("work");

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onNavigate();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onNavigate, open]);

  function toggleSection(section: MenuSection) {
    setOpenSection((current) => (current === section ? null : section));
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 overflow-y-auto bg-background px-5 pb-6 pt-[clamp(6.5rem,16vh,8rem)] sm:px-8 xl:hidden"
          exit={{ opacity: 0 }}
          id="mobile-menu"
          initial={reduceMotion ? false : { opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex min-h-full w-full max-w-[1600px] flex-col"
          >
            <div className="border-b border-line">
              <MenuRow
                active={activePath.startsWith("/work")}
                expanded={openSection === "work"}
                href="/work"
                label="Work"
                onNavigate={onNavigate}
                onToggle={() => toggleSection("work")}
              />
              <Submenu
                items={workNavigation}
                onNavigate={onNavigate}
                open={openSection === "work"}
              />
            </div>

            <Link
              aria-current={activePath.startsWith("/case-studies") ? "page" : undefined}
              className={`border-b border-line py-5 text-[clamp(2rem,8vw,4rem)] leading-none tracking-[-0.05em] ${
                activePath.startsWith("/case-studies") ? "text-accent" : "text-ink"
              }`}
              href="/case-studies"
              onClick={onNavigate}
            >
              Case Studies
            </Link>

            <div className="border-b border-line">
              <MenuRow
                active={activePath.startsWith("/expertise")}
                expanded={openSection === "expertise"}
                href="/expertise"
                label="Expertise"
                onNavigate={onNavigate}
                onToggle={() => toggleSection("expertise")}
              />
              <Submenu
                items={expertiseNavigation}
                onNavigate={onNavigate}
                open={openSection === "expertise"}
              />
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 pt-10">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <Link
              className="mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-ink px-6 text-base font-medium text-on-ink transition-colors hover:bg-accent"
              href={site.contactHref}
              onClick={onNavigate}
            >
              Hire Me
            </Link>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

type MenuRowProps = {
  active: boolean;
  expanded: boolean;
  href: string;
  label: string;
  onNavigate: () => void;
  onToggle: () => void;
};

function MenuRow({
  active,
  expanded,
  href,
  label,
  onNavigate,
  onToggle,
}: MenuRowProps) {
  return (
    <div className="flex items-center gap-4">
      <Link
        aria-current={active ? "page" : undefined}
        className={`min-w-0 flex-1 py-5 text-[clamp(2rem,8vw,4rem)] leading-none tracking-[-0.05em] ${
          active ? "text-accent" : "text-ink"
        }`}
        href={href}
        onClick={onNavigate}
      >
        {label}
      </Link>
      <button
        aria-expanded={expanded}
        aria-label={`${expanded ? "Collapse" : "Expand"} ${label} links`}
        className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-line"
        onClick={onToggle}
        type="button"
      >
        <svg
          aria-hidden="true"
          className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 16 16"
        >
          <path d="m3.5 6 4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      </button>
    </div>
  );
}

type SubmenuProps = {
  items: ReadonlyArray<{ href: string; label: string }>;
  onNavigate: () => void;
  open: boolean;
};

function Submenu({ items, onNavigate, open }: SubmenuProps) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-300 ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className="grid gap-1 pb-6 pl-[clamp(0rem,5vw,4rem)] sm:grid-cols-2">
          {items.map((item) => (
            <Link
              className="py-2.5 text-base text-muted transition-colors hover:text-ink"
              href={item.href}
              key={item.label}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
