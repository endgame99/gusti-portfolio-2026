import { Reveal } from "@/components/ui/Reveal";
import { works } from "@/data/works";
import { WorkCard } from "./WorkCard";

export function WorkGrid() {
  return (
    <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 xl:gap-x-8 xl:gap-y-20">
      {works.map((work, index) => (
        <Reveal delay={index * 0.05} key={work.slug}>
          <WorkCard index={index} work={work} />
        </Reveal>
      ))}
    </div>
  );
}
