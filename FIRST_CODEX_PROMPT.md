# FIRST_CODEX_PROMPT.md
# First Prompt to Give Codex

Read `PROJECT_BLUEPRINT.md` and `CODEX_RULES.md` before doing anything.

You are building the foundation for a high-end personal portfolio website.

Do not create a generic portfolio or CV template.

## Goal for This First Task

Implement only the first foundation build:

```txt
1. Next.js App Router + TypeScript setup
2. Tailwind CSS setup
3. Motion / Framer Motion setup
4. Global visual style system
5. Data files
6. Navigation
7. Hero section
8. Selected Work section
9. Expertise preview
10. Closing CTA
11. Footer
12. Responsive mobile/tablet/desktop behavior
```

Do not build full case-study detail pages yet unless you need minimal route placeholders.

---

## Required Direction

The site must feel:

```txt
AKQA-led structure
Gemini-like clean white UI
short copy
smooth motion
premium spacing
easy to consume
not generic
```

---

## Main Navigation

Use exactly:

```txt
Home
Work
Case Studies
Expertise
```

Optional CTA:

```txt
Say Hello
```

Do not add unrequested menu items.

---

## Initial Projects

Use only these project placeholders:

```txt
STARMAP — 2026
ALFAS FRAGRANCE
FABIL NATURAL
FAT SPORT
```

For unknown data, use:

```txt
Case study coming soon
Category TBD
Visuals TBD
```

Do not invent project details, categories, metrics, client claims, or descriptions.

---

## Hero Direction

Hero layout must be inspired by the uploaded clean reference:
- white background
- clean top nav
- left identity/title
- right short intro
- CTA button
- large breathing room
- no generic CV hero

Use placeholder copy:

```txt
Gustiansyah
Visual systems for brands, products, and digital experiences.

I create visual stories that help brands look clear, sharp, and commercially useful.
```

CTA:
```txt
View Work
Say Hello
CV Coming Soon
```

`CV Coming Soon` must not be a broken download link.

---

## Selected Work Direction

Build a premium work section:
- large cards
- project title
- metadata
- arrow detail
- responsive:
  - desktop: 4-card row or balanced premium grid
  - tablet: 2 columns
  - mobile: 1 column

Do not use small generic portfolio cards.

---

## Visual Style

Use:
```txt
white background
black typography
muted gray text
subtle blue accent
large spacing
minimal borders
clean rounded cards only where useful
```

Do not use:
```txt
random gradients
dark-heavy homepage
neon colors
stock photos
fake images
template decorations
```

If images are missing, use clean placeholder surfaces that are easy to replace later.

---

## Motion

Use Motion / Framer Motion for:
```txt
subtle hero reveal
section reveal
card hover
mobile menu transition
```

Do not use GSAP in this first build.

Respect `prefers-reduced-motion`.

---

## Suggested File Structure

Create or follow this structure:

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  work/
    page.tsx
    [slug]/
      page.tsx
  case-studies/
    page.tsx
  expertise/
    page.tsx

components/
  layout/
    Navigation.tsx
    Footer.tsx
    MobileMenu.tsx
  home/
    Hero.tsx
    SelectedWork.tsx
    ExpertisePreview.tsx
    ClosingCTA.tsx
  work/
    WorkCard.tsx
    WorkGrid.tsx
  ui/
    Button.tsx
    ArrowLink.tsx
    Container.tsx
    Reveal.tsx

data/
  site.ts
  navigation.ts
  works.ts
  expertise.ts
```

---

## Quality Checklist Before Responding

Before finishing, verify:

```txt
No Carlos
No fashion designer
No WordPress
No PHP
No fake projects
No fake metrics
No broken CV link
Navigation works
Mobile menu works
Hero readable
CTA clear
Work cards clean
Responsive at 390px
Responsive at 768px–1024px
Desktop looks premium
Motion smooth but light
```

After implementation, summarize:
1. what files were created
2. what section was implemented
3. what still needs review
4. how to run locally
