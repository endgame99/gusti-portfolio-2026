import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WorkGrid } from "@/components/work/WorkGrid";

export function SelectedWork() {
  return (
    <section
      className="scroll-mt-10 bg-surface py-24 sm:py-32 lg:py-40"
      id="selected-work"
    >
      <Container>
        <Reveal>
          <SectionLabel index="01 — 04">Selected Work</SectionLabel>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Work with room to speak.
            </h2>
            <p className="max-w-md text-lg leading-8 text-muted lg:justify-self-end">
              Four selected projects. Full case studies and final visuals are
              being prepared.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 sm:mt-24">
          <WorkGrid />
        </div>
      </Container>
    </section>
  );
}
