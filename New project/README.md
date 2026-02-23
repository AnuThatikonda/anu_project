# Anu Thatikonda Portfolio (Next.js 14 + Tailwind CSS)

Professional personal portfolio website built with:

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  about.tsx
  contact.tsx
  experience.tsx
  footer.tsx
  hero.tsx
  navbar.tsx
  reveal.tsx
  section-heading.tsx
  skills.tsx
lib/
  portfolio-data.ts
next-env.d.ts
next.config.mjs
package.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.json
```

## Customization

Update content in `lib/portfolio-data.ts` and the design/theme in:

- `app/globals.css`
- `tailwind.config.ts`
