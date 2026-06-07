export type Work = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  coverImage: null;
  template: "akqa-default" | "ecommerce-dense-optional";
  status: "coming-soon";
};

export const works: Work[] = [
  {
    slug: "starmap",
    title: "STARMAP",
    year: "2026",
    category: "Category TBD",
    summary: "Case study coming soon.",
    coverImage: null,
    template: "akqa-default",
    status: "coming-soon",
  },
  {
    slug: "alfas-fragrance",
    title: "ALFAS FRAGRANCE",
    year: "TBD",
    category: "Category TBD",
    summary: "Case study coming soon.",
    coverImage: null,
    template: "akqa-default",
    status: "coming-soon",
  },
  {
    slug: "fabil-natural",
    title: "FABIL NATURAL",
    year: "TBD",
    category: "Category TBD",
    summary: "Case study coming soon.",
    coverImage: null,
    template: "ecommerce-dense-optional",
    status: "coming-soon",
  },
  {
    slug: "fat-sport",
    title: "FAT SPORT",
    year: "TBD",
    category: "Category TBD",
    summary: "Case study coming soon.",
    coverImage: null,
    template: "akqa-default",
    status: "coming-soon",
  },
];
