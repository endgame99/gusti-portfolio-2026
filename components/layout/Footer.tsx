import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8 sm:py-10">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <Link className="font-semibold tracking-[-0.025em]" href="/">
          {site.name}
        </Link>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
          {navigation.map((item) => (
            <Link
              className="text-sm text-muted transition-colors hover:text-ink"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted sm:text-right">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
