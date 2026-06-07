import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { expertise } from "@/data/expertise";

export const metadata: Metadata = {
  title: "Expertise",
};

export default function ExpertisePage() {
  return (
    <section className="pb-28 pt-36 sm:pb-36 sm:pt-44">
      <Container>
        <Reveal className="grid gap-14 border-t border-line pt-6 lg:grid-cols-[1fr_1.4fr]">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Expertise
          </p>
          <div>
            <h1 className="max-w-4xl text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Visual direction, built with purpose.
            </h1>
            <div className="mt-16 divide-y divide-line border-t border-line">
              {expertise.map((item, index) => (
                <div
                  className="grid grid-cols-[3rem_1fr] gap-5 py-6 sm:grid-cols-[5rem_1fr]"
                  key={item}
                >
                  <span className="text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xl tracking-[-0.02em] sm:text-2xl">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
