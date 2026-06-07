import Link from "next/link";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  children: ReactNode;
  href: string;
};

export function ArrowLink({ children, href }: ArrowLinkProps) {
  return (
    <Link
      className="group inline-flex min-h-11 items-center gap-3 text-sm font-medium"
      href={href}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-flex size-9 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white"
      >
        <svg
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" />
        </svg>
      </span>
    </Link>
  );
}
