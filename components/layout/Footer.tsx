import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  expertiseNavigation,
  workNavigation,
} from "@/data/navigation";
import { site } from "@/data/site";

const footerLinkClass =
  "text-sm text-muted transition-colors hover:text-ink";

export function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <Container className="grid gap-12 py-[clamp(3rem,7vw,6rem)] lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.8fr)_minmax(0,0.75fr)] lg:gap-8">
        <div className="flex flex-wrap content-start gap-3">
          <Link
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-on-ink transition-colors hover:bg-accent"
            href={site.contactHref}
          >
            Hire Me
          </Link>
          <button
            aria-disabled="true"
            className="inline-flex min-h-11 cursor-default items-center rounded-full border border-line px-5 text-sm font-medium text-muted"
            disabled
            type="button"
          >
            Download CV
          </button>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          <nav
            aria-label="Footer navigation"
            className="mt-8 hidden grid-cols-3 gap-x-8 lg:grid"
          >
            <FooterGroup href="/work" items={workNavigation} label="Work" />
            <div>
              <Link className="text-sm font-medium" href="/case-studies">
                Case Studies
              </Link>
            </div>
            <FooterGroup
              href="/expertise"
              items={expertiseNavigation}
              label="Expertise"
            />
          </nav>

          <nav aria-label="Footer navigation" className="mt-8 divide-y divide-line border-y border-line lg:hidden">
            <FooterDetails href="/work" items={workNavigation} label="Work" />
            <Link className="block py-5 text-base font-medium" href="/case-studies">
              Case Studies
            </Link>
            <FooterDetails
              href="/expertise"
              items={expertiseNavigation}
              label="Expertise"
            />
          </nav>
        </div>

        <Link
          className="h-fit text-xl font-semibold tracking-[-0.035em] lg:justify-self-end"
          href="/"
        >
          {site.name}
        </Link>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-line py-5 text-xs text-muted sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p>© 2026 {site.name}</p>
        <p>Indonesia</p>
        <p>Portfolio system in progress</p>
      </Container>
    </footer>
  );
}

type FooterGroupProps = {
  href: string;
  items: ReadonlyArray<{ href: string; label: string }>;
  label: string;
};

function FooterGroup({ href, items, label }: FooterGroupProps) {
  return (
    <div>
      <Link className="text-sm font-medium" href={href}>
        {label}
      </Link>
      <div className="mt-4 grid gap-2.5">
        {items.map((item) => (
          <Link className={footerLinkClass} href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterDetails({ href, items, label }: FooterGroupProps) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-medium">
        {label}
        <svg
          aria-hidden="true"
          className="size-4 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path d="m3.5 6 4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      </summary>
      <div className="grid gap-3 pb-5">
        <Link className={footerLinkClass} href={href}>
          View all {label.toLowerCase()}
        </Link>
        {items.map((item) => (
          <Link className={footerLinkClass} href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
