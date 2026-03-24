# Portfolio Website Plan

## 1. Recommended Tech Stack

**Primary: Astro + Tailwind CSS**

- **Astro** — Static site generator purpose-built for content-focused sites. Ships zero JS by default, has excellent performance scores, component-based architecture, and deploys easily to Vercel/Netlify.
- **Tailwind CSS** — Utility-first CSS for rapid, consistent styling without writing custom CSS files.
- **No framework component layer needed** — Plain Astro components are sufficient for a static portfolio. If animations are desired later, Alpine.js can be added with minimal overhead.

**Why not Next.js or plain HTML?**
- Next.js is overkill for a static portfolio (server features unused, heavier bundle).
- Plain HTML/CSS scales poorly as content grows and lacks component reuse.
- Astro hits the sweet spot: component model + static output.

**Deployment: Vercel or Netlify** (both have free tiers, connect to GitHub, auto-deploy on push)

---

## 2. File Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── avatar.jpg          # Profile photo
│       └── projects/
│           ├── project-1.png
│           ├── project-2.png
│           ├── project-3.png
│           └── project-4.png
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── About.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML shell, meta tags
│   ├── data/
│   │   └── projects.ts         # Project data array
│   └── pages/
│       └── index.astro         # Single-page app entry
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 3. Design Considerations

**Visual Style**
- Clean, minimal design — let the work speak for itself.
- Dark or light theme (pick one; dark is currently trending in dev portfolios).
- Consistent spacing using Tailwind's spacing scale (4px base unit).
- One accent color (e.g., indigo, emerald, or amber) for CTAs and highlights.

**Typography**
- Heading font: Inter or Geist (modern, readable, free via Google Fonts or Fontsource).
- Body font: Same family at lighter weight — keeps it cohesive.
- Clear hierarchy: H1 (hero name) → H2 (section titles) → H3 (project titles) → body.

**Layout**
- Single-page with smooth scroll between sections.
- Max content width ~1100px centered with horizontal padding.
- Mobile-first responsive: stack columns on small screens, grid on large.

**Hero Section**
- Name in large display text (4xl–6xl).
- Tagline as subtitle (xl–2xl), possibly with a short animated typing effect.
- Optional: subtle background gradient or geometric pattern.

**Projects Section**
- 2×2 grid on desktop, 1-column stack on mobile.
- Each card: thumbnail image, project name, 1-line description, tech tags, and links (live + GitHub).

**About Section**
- 2-column layout: photo left, bio text right (stacked on mobile).
- Keep bio concise: who you are, what you do, what you're interested in (3–4 sentences).

**Contact Section**
- Simple centered block with Twitter and LinkedIn icon links.
- Optional: brief CTA line ("Open to opportunities" or "Let's connect").
- Icons from `@astrojs/svg` or inline SVGs for Twitter (X) and LinkedIn logos.

**Accessibility**
- Semantic HTML (nav, main, section, footer).
- Alt text on all images.
- Sufficient color contrast (WCAG AA minimum).
- Focus-visible styles for keyboard navigation.

---

## 4. Step-by-Step Implementation Plan

### Step 1 — Project Initialization
```bash
npm create astro@latest . -- --template minimal --typescript strict
npx astro add tailwind
```

### Step 2 — Base Layout
- Create `src/layouts/Layout.astro` with HTML shell, meta tags (title, description, OG tags), and global font import.
- Set Tailwind base styles (background color, default text color, font family).

### Step 3 — Data Layer
- Create `src/data/projects.ts` exporting an array of 4 project objects:
  ```ts
  { title, description, tags, image, liveUrl, githubUrl }
  ```

### Step 4 — Build Components (in order)
1. `Hero.astro` — name, tagline, optional CTA button ("View my work" → scrolls to projects).
2. `ProjectCard.astro` — accepts a single project object as props, renders card UI.
3. `Projects.astro` — imports data, maps over projects, renders `ProjectCard` in a grid.
4. `About.astro` — photo + bio text in two-column layout.
5. `Contact.astro` — Twitter and LinkedIn links with SVG icons.

### Step 5 — Assemble Page
- In `src/pages/index.astro`, import `Layout` and all section components.
- Add `id` attributes to each section (`#hero`, `#projects`, `#about`, `#contact`) for anchor links.
- Add a simple sticky nav with smooth-scroll links.

### Step 6 — Content & Assets
- Add real name, tagline, and bio text.
- Add project screenshots to `public/images/projects/`.
- Add profile photo to `public/images/avatar.jpg`.
- Fill in Twitter and LinkedIn URLs.

### Step 7 — Polish
- Check responsive layout at 375px (mobile), 768px (tablet), 1280px (desktop).
- Run Lighthouse audit — Astro should score 95+ Performance out of the box.
- Add `<meta>` OG tags for social sharing previews.

### Step 8 — Deploy
- Push to GitHub repository.
- Connect repo to Vercel (or Netlify) — zero config needed for Astro.
- Set custom domain if available.

---

## Estimated File Count
~10 source files total. Deliberately minimal — no unnecessary abstractions.
