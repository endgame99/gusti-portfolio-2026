"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

type MobileMenuProps = {
  activePath: string;
  onNavigate: () => void;
  open: boolean;
};

export function MobileMenu({
  activePath,
  onNavigate,
  open,
}: MobileMenuProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex bg-white px-5 pb-10 pt-32 sm:px-8 lg:hidden"
          exit={{ opacity: 0 }}
          id="mobile-menu"
          initial={reduceMotion ? false : { opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <nav
            aria-label="Mobile navigation"
            className="flex w-full flex-col justify-between"
          >
            <div className="flex flex-col">
              {navigation.map((item, index) => {
                const active =
                  item.href === "/"
                    ? activePath === "/"
                    : activePath.startsWith(item.href);

                return (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    key={item.label}
                    transition={{ delay: index * 0.04, duration: 0.35 }}
                  >
                    <Link
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between border-t border-line py-5 text-[clamp(2rem,8vw,3.5rem)] leading-none tracking-[-0.045em] ${
                        active ? "text-accent" : "text-ink"
                      }`}
                      href={item.href}
                      onClick={onNavigate}
                    >
                      {item.label}
                      <span className="text-xs tracking-normal text-muted">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-white"
              href={site.contactHref}
              onClick={onNavigate}
            >
              Say Hello
            </Link>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
