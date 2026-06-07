import type { Metadata } from "next";
import { WorkGrid } from "@/components/work/WorkGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <section className="pb-28 pt-36 sm:pb-36 sm:pt-44">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Work
          </p>
          <div className="mt-8 max-w-4xl">
            <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              Selected projects.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              Project details and final visuals are being prepared.
            </p>
          </div>
        </Reveal>
        <div className="mt-20 sm:mt-28">
          <WorkGrid />
        </div>
      </Container>
    </section>
  );
}
