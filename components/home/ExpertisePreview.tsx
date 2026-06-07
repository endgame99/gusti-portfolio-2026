import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { expertise } from "@/data/expertise";

export function ExpertisePreview() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionLabel index="Editable focus areas">Expertise</SectionLabel>
        <div className="mt-14 grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <h2 className="max-w-xl text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
              Clear visual thinking across every touchpoint.
            </h2>
            <div className="mt-10">
              <ArrowLink href="/expertise">View expertise</ArrowLink>
            </div>
          </Reveal>

          <Reveal className="divide-y divide-line border-y border-line" delay={0.08}>
            {expertise.map((item, index) => (
              <div
                className="grid grid-cols-[3rem_1fr] gap-5 py-5 sm:grid-cols-[5rem_1fr] sm:py-6"
                key={item}
              >
                <span className="text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-xl tracking-[-0.025em] sm:text-2xl">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
