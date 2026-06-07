import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-ink text-on-ink hover:bg-accent"
      : "border border-line bg-background text-ink hover:border-ink";
  const className = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors duration-300 ${styles}`;

  if (!href || disabled) {
    return (
      <span aria-disabled="true" className={`${className} cursor-default opacity-55`}>
        {children}
      </span>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
