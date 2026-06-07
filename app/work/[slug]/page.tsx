import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { works } from "@/data/works";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return works.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);

  return { title: work?.title ?? "Work" };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <section className="min-h-[78vh] pb-28 pt-36 sm:pb-36 sm:pt-44">
      <Container>
        <div className="grid gap-16 border-t border-line pt-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {work.category} / {work.year}
            </p>
          </div>
          <div>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              {work.title}
            </h1>
            <p className="mt-8 text-xl leading-8 text-muted">{work.summary}</p>
            <div className="mt-14 aspect-[16/9] bg-surface p-6">
              <div className="flex h-full items-end border border-black/8 p-5">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Visuals TBD
                </span>
              </div>
            </div>
            <div className="mt-10">
              <ArrowLink href="/work">Back to work</ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
