import { ClosingCTA } from "@/components/home/ClosingCTA";
import { ExpertisePreview } from "@/components/home/ExpertisePreview";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ExpertisePreview />
      <ClosingCTA />
    </>
  );
}
