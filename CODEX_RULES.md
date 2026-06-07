# CODEX_RULES.md
# Strict Rules for Codex Implementation

## 1. Read First

Before writing or changing code, read:

```txt
PROJECT_BLUEPRINT.md
CODEX_RULES.md
FIRST_CODEX_PROMPT.md
```

The website must follow the blueprint. Do not freestyle into a generic portfolio template.

---

## 2. Core Principle

This is not a generic CV portfolio.

This is a premium, clean, AKQA-led portfolio website with Gemini-like readability and smoothness.

Main priorities:
```txt
1. Easy to consume
2. Premium agency feel
3. Clean white homepage
4. Smooth but lightweight motion
5. Flexible case-study system
6. Responsive mobile/tablet/desktop
7. Fast loading
8. Easy content editing through data files
```

---

## 3. Forbidden Content

Never add these unless the user explicitly asks:

```txt
Carlos
fashion designer
WordPress
PHP
Bootstrap template
random portfolio template
fake client names
fake metrics
fake awards
fake testimonials
fake resume content
fake blog posts
pricing page
services sales page
unrequested menu items
unrelated project names
unrelated stock photos
```

---

## 4. No Assumption Rule

If information is missing, use:

```txt
TBD
Content coming soon
Case study coming soon
Visuals TBD
Category TBD
```

Do not invent:
- project descriptions
- project results
- project metrics
- categories
- years, except STARMAP 2026
- client details
- tools used
- contact information
- CV download link

---

## 5. Navigation Rules

Main navigation must be exactly:

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

Do not add:
```txt
Blog
Services
Resume
Testimonials
Pricing
Shop
Careers
Studios
```

---

## 6. Homepage Rules

Homepage must include:

```txt
Navigation
Hero
Selected Work
Expertise Preview
Closing CTA
Footer
```

Hero direction:
- white base
- clean Gemini-like layout
- left identity/title
- right short intro
- visible CTA
- no generic CV hero
- no long biography

Selected Work:
- use the four user-approved project names only:
  - STARMAP
  - ALFAS FRAGRANCE
  - FABIL NATURAL
  - FAT SPORT
- default style should be AKQA-like premium work listing
- do not create a tiny generic grid

---

## 7. Case Study Rules

Default case-study page follows AKQA-style editorial structure.

Use ZCOOL-style dense modules only inside relevant detail pages, especially e-commerce/product-heavy projects.

Use Sofi-like lookbook modules only when contextually useful.

Do not make every page visually dense.

---

## 8. Visual Style Rules

Use:
```txt
white background
black text
muted gray text
subtle Gemini-like blue accent
premium spacing
large visual cards
minimal borders
clean typography
```

Do not use:
```txt
random gradients
dark-heavy homepage
neon theme
overly colorful UI
template decoration
unnecessary icons
tiny text
crowded cards
```

---

## 9. Motion Rules

Use Motion / Framer Motion for first build.

Allowed:
```txt
subtle fade-in
short section reveal
gentle image reveal
card hover
arrow hover
mobile-safe menu transition
```

Not allowed in first build:
```txt
heavy GSAP
complex parallax
cursor gimmick
scroll-jacking
motion that delays reading
animation that breaks mobile
```

Always respect:
```txt
prefers-reduced-motion
```

---

## 10. Tech Stack Rules

Use:
```txt
Next.js App Router
TypeScript
Tailwind CSS
Motion / Framer Motion
```

Do not install extra packages unless necessary.

Do not use:
```txt
WordPress
PHP
jQuery
Bootstrap
random UI kits
paid fonts
paid templates
```

---

## 11. Content Structure Rules

Content must live in data files:

```txt
data/site.ts
data/navigation.ts
data/works.ts
data/expertise.ts
```

Do not hardcode project content across many components.

The user must be able to update content easily later.

---

## 12. Component Rules

Create reusable components:

```txt
Navigation
MobileMenu
Hero
SelectedWork
WorkCard
ExpertisePreview
ClosingCTA
Footer
Button
ArrowLink
Reveal
Container
CaseStudyHeader
CaseStudyGallery
DenseVisualModule
RelatedWork
```

Keep components clean and focused.

---

## 13. Responsive Rules

Must work on:

```txt
390px mobile
768px tablet
1024px tablet/desktop boundary
desktop 100% zoom
large desktop
```

If navigation becomes cramped before desktop width, switch to mobile menu earlier.

No horizontal scrolling.

---

## 14. Quality Rules

Before finishing a task:
- run lint/build if available
- check TypeScript errors
- check responsive layout
- remove unused imports
- remove fake data
- ensure buttons do not point to broken links
- ensure CV is not active unless file exists
- ensure internal anchors work

---

## 15. Development Workflow

Build in small steps.

Do not build the whole website at once.

Recommended first task:
```txt
Set up base project, global styles, navigation, hero, selected work, and placeholder data.
```

Then wait for review before continuing with detail pages.

---

## 16. Final Check

The website should feel:

```txt
AKQA structure
Gemini readability
ZCOOL density only where needed
Sofi lookbook only where needed
not generic
not noisy
not fake
not overbuilt
```
