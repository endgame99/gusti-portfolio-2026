import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="min-h-[88svh] pb-20 pt-36 sm:pb-28 sm:pt-44 lg:flex lg:min-h-[900px] lg:items-end lg:pb-24">
      <Container>
        <Reveal className="grid gap-16 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Creative visual direction
            </p>
            <h1 className="max-w-5xl text-[clamp(4.2rem,12vw,11rem)] font-medium leading-[0.78] tracking-[-0.075em]">
              {site.name}
            </h1>
            <p className="mt-10 max-w-2xl text-[clamp(1.45rem,2.6vw,2.65rem)] leading-[1.12] tracking-[-0.035em]">
              {site.tagline}
            </p>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-muted">{site.intro}</p>
            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <Button href="#selected-work">View Work</Button>
              <Button href={site.contactHref} variant="secondary">
                Say Hello
              </Button>
              <Button disabled variant="secondary">
                CV Coming Soon
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
