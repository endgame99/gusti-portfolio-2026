import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function ClosingCTA() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32 lg:py-40" id="contact">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
            Start a conversation
          </p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <h2 className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
              Let&apos;s make the next idea clear.
            </h2>
            <div className="lg:justify-self-end">
              <p className="max-w-sm text-lg leading-8 text-white/65">
                Contact details are coming soon. For now, the conversation can
                start here.
              </p>
              <Link
                className="mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-medium text-ink transition-colors hover:bg-[#dbe9ff]"
                href={site.contactHref}
              >
                Say Hello
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
