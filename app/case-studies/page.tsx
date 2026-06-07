import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default function CaseStudiesPage() {
  return (
    <section className="min-h-[78vh] pb-28 pt-36 sm:pb-36 sm:pt-44">
      <Container>
        <Reveal className="grid gap-14 border-t border-line pt-6 lg:grid-cols-[1fr_1.4fr]">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Case Studies
          </p>
          <div>
            <h1 className="max-w-4xl text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Stories in progress.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-8 text-muted">
              Case study content and visual systems are coming soon.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
