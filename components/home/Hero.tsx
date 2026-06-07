import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="flex min-h-[min(760px,88svh)] items-center pb-[clamp(4.5rem,8vw,7rem)] pt-[clamp(7.5rem,12vw,10rem)]">
      <Container>
        <Reveal className="grid gap-[clamp(3rem,7vw,6rem)] lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-end">
          <div className="min-w-0">
            <p className="mb-[clamp(1.25rem,3vw,1.75rem)] text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Creative visual direction
            </p>
            <h1 className="max-w-full text-[clamp(3.9rem,11.5vw,11rem)] font-medium leading-[0.8] tracking-[-0.075em]">
              {site.name}
            </h1>
            <p className="mt-[clamp(2rem,4vw,2.75rem)] max-w-2xl text-[clamp(1.35rem,2.6vw,2.65rem)] leading-[1.12] tracking-[-0.035em]">
              {site.tagline}
            </p>
          </div>

          <div className="min-w-0 lg:pb-2">
            <p className="max-w-xl text-[clamp(1rem,1.5vw,1.125rem)] leading-8 text-muted">
              {site.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.contactHref}>Hire Me</Button>
              <Button disabled variant="secondary">
                Download CV
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
