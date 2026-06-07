"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { Work } from "@/data/works";

type WorkCardProps = {
  index: number;
  work: Work;
};

export function WorkCard({ index, work }: WorkCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Link className="group block" href={`/work/${work.slug}`}>
      <motion.div
        className="relative aspect-[4/3] overflow-hidden bg-background"
        transition={{ duration: 0.35, ease: "easeOut" }}
        whileHover={reduceMotion ? undefined : { y: -4 }}
      >
        <div className="absolute inset-5 border border-line sm:inset-7">
          <span className="absolute left-5 top-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Visuals TBD
          </span>
          <span className="absolute bottom-5 right-5 text-xs font-medium tracking-[0.16em] text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </motion.div>

      <div className="mt-5 flex items-start justify-between gap-6 border-t border-line pt-5">
        <div className="min-w-0">
          <h3 className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
            {work.title}
          </h3>
          <p className="mt-2 text-sm text-muted">
            {work.category} / {work.year}
          </p>
          <p className="mt-1 text-sm text-muted">{work.summary}</p>
        </div>
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-on-ink"
        >
          <svg
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
