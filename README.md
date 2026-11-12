# [COMPANY NAME] — Corporate Website

Electrical / MEP engineering company website for Cambodia. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **Lucide React**.

Everything company-specific is a clearly marked `[PLACEHOLDER]`. Nothing here claims real projects, clients, certifications, awards or years of experience.

---

## 1. Run locally

Requires **Node.js 18.18+** (20 or 22 recommended).

```bash
npm install
cp .env.example .env.local     # then edit values
npm run dev                    # http://localhost:3000
```

Other commands:

```bash
npm run build       # production build
npm run start       # serve the production build
npm run typecheck   # TypeScript check
npm run lint        # ESLint
```

---

## 2. Make it yours (placeholder checklist)

All content lives in `src/data/`, so you rarely need to touch components.

| File | What to replace |
|---|---|
| `src/data/site.ts` | Company name, address, phone, email, Telegram, Facebook, business hours, Google Maps embed URL, hero photo, certifications, real stats |
| `src/data/projects.ts` | The 6 sample projects → your real projects (then delete `placeholder: true`) |
| `src/data/team.ts` | Team members and photos |
| `src/data/content.ts` | Review all copy: values, "why choose us", process, capabilities. Add real `testimonials` |
| `src/data/services.ts` | Review service descriptions and scope lists for accuracy |
| `src/components/ui/Logo.tsx` | Replace the placeholder mark with your logo (`<Image src="/logo.svg" …/>`) |
| `.env.local` | `NEXT_PUBLIC_SITE_URL` (your real domain) and `CONTACT_WEBHOOK_URL` |

Behaviour worth knowing:

- Placeholder phone/email/links are shown as plain amber text, **not** as `tel:`/`mailto:` links, and are **left out of SEO schema markup** until you replace them.
- Placeholder projects are `noindex` and excluded from `sitemap.xml`. They become indexable automatically once you remove `placeholder: true`.
- Stats set to `null` display `[XX]`. Set real numbers in `site.stats`. "Engineering Services" is counted from the service list.
- The certifications block on the About page stays empty until you add real entries to `site.certifications`.

### Adding images

1. Put files in `public/` (e.g. `public/projects/my-project/01.jpg`, `public/team/jane.jpg`, `public/images/hero.jpg`).
2. Reference them: `images: ["/projects/my-project/01.jpg", …]` on a project, `photo: "/team/jane.jpg"` for a team member, `heroImage: "/images/hero.jpg"` in `site.ts`.
3. Until then the site shows labelled blueprint-style SVG placeholders (SLD, floor plan, solar array, panel, HVAC, BIM).

Use real photos of your own work. Stock photos of other companies' buildings would misrepresent your portfolio.

---

## 3. Forms (contact + quote)

Both forms POST to `src/app/api/contact/route.ts`, which validates server-side (name, email/phone, message, project type, services, file type and 10 MB limit), has a honeypot against bots, and forwards to a webhook.

**You must configure delivery before launch.** Set `CONTACT_WEBHOOK_URL` to any endpoint that accepts `multipart/form-data` — e.g. a Make / Zapier / n8n webhook, a Google Apps Script web app, or your own API. Fields sent: `kind` (`quote` | `contact`), `submittedAt`, `name`, `company`, `phone`, `email`, `projectType`, `projectLocation`, `services`, `message`, and `file` (if uploaded).

- **Without a webhook**, development just logs the submission; **production returns an error to the visitor** (so leads are never silently lost).
- Prefer email delivery? Replace the `fetch(webhook…)` block in the route with Resend, Postmark, SendGrid or Nodemailer.
- Consider adding rate limiting (e.g. Upstash) or a CAPTCHA (Cloudflare Turnstile) if you see spam.

---

## 4. Deploy

### Vercel (easiest)
1. Push the project to GitHub.
2. Import it at vercel.com → **Add New Project**. Framework is auto-detected.
3. Add environment variables `NEXT_PUBLIC_SITE_URL` and `CONTACT_WEBHOOK_URL`.
4. Deploy, then add your custom domain under **Settings → Domains**.

### Any Node.js server / VPS
```bash
npm ci
npm run build
npm run start -- -p 3000     # put nginx / Caddy in front for HTTPS
```
Keep it running with `pm2` or a systemd service. Set the environment variables in the service environment.

### Docker (outline)
Use a `node:22-alpine` image: `npm ci` → `npm run build` → `npm run start`. Pass the env vars at runtime.

> Note: the forms need the API route, so this site needs a Node runtime. A pure static export (`output: "export"`) would drop the form backend unless you point the forms at an external service.

### After going live
- Confirm `NEXT_PUBLIC_SITE_URL` is your real domain (drives canonical URLs, `sitemap.xml`, `robots.txt`, schema).
- Submit `https://your-domain/sitemap.xml` in Google Search Console.
- Create a Google Business Profile — it matters a lot for local searches like "MEP contractor Cambodia".
- Send a test quote request end to end.

---

## 5. SEO

- Per-page `<title>` and meta description (`src/lib/seo.ts`), canonical URLs, Open Graph / Twitter tags.
- One `<h1>` per page with logical H2/H3 structure; descriptive image alt text.
- JSON-LD: `ProfessionalService` (site-wide), `Service` + `BreadcrumbList` (service pages), `ItemList` (services), `BreadcrumbList` (projects).
- 12 dedicated service pages (`/services/hvac-system`, `/services/solar-pv`, …) each targeting a search phrase such as *HVAC Contractor Cambodia* or *BIM Revit Cambodia*.
- `sitemap.xml`, `robots.txt`, clean URLs, static generation, self-hosted fonts (no third-party font requests).

Ranking depends on real content: replace placeholders with real projects, add real photos, and write specific project descriptions.

Not included: Khmer-language version. If you want one, add Next.js i18n routing and translate `src/data/*`.

---

## 6. Accessibility & performance

Skip link, semantic landmarks, keyboard-accessible menu / filters / gallery lightbox (Esc and arrow keys, focus return), ARIA-wired form errors and live status messages, visible focus rings, and `prefers-reduced-motion` respected for all animation and smooth scrolling. Pages are statically generated; JS is limited to the interactive parts.

---

## 7. Folder structure

```
.
├── public/                      # static files (images, logo, favicon assets)
├── src/
│   ├── app/                     # routes (App Router)
│   │   ├── layout.tsx           # fonts, navbar, footer, site-wide schema
│   │   ├── page.tsx             # Home
│   │   ├── about/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx         # service list
│   │   │   └── [slug]/page.tsx  # service detail
│   │   ├── projects/
│   │   │   ├── page.tsx         # portfolio + filters
│   │   │   └── [slug]/page.tsx  # project detail
│   │   ├── team/page.tsx
│   │   ├── contact/page.tsx     # contact + quote forms, map
│   │   ├── api/contact/route.ts # form endpoint
│   │   ├── sitemap.ts · robots.ts · not-found.tsx · icon.svg · globals.css
│   ├── components/
│   │   ├── Navbar.tsx · Footer.tsx · Hero.tsx
│   │   ├── ServiceCard.tsx · ProjectCard.tsx · TeamCard.tsx · StatCard.tsx
│   │   ├── CTASection.tsx · PageHeader.tsx · ProcessTimeline.tsx
│   │   ├── ProjectExplorer.tsx  # category filter
│   │   ├── Gallery.tsx          # lightbox gallery
│   │   ├── ContactInfo.tsx · ContactTabs.tsx
│   │   ├── forms/               # ContactForm, QuoteForm, Field, hook
│   │   ├── sections/            # home page sections
│   │   ├── art/BlueprintArt.tsx # placeholder engineering drawings (SVG)
│   │   └── ui/                  # Reveal, SectionHeading, Logo, JsonLd, …
│   ├── data/                    # ALL editable content
│   │   ├── site.ts · services.ts · projects.ts · team.ts · content.ts
│   └── lib/                     # seo.ts, validation.ts, content.ts
├── tailwind.config.ts           # design tokens (navy / steel / volt blue / amber)
├── next.config.mjs
└── .env.example
```

---

## 8. Design notes

Dark navy and white with a single electric-blue accent; amber is reserved for placeholders and the sun in the solar drawing. Sharp corners, hairline borders, a blueprint grid, monospaced "drawing label" captions and corner tick marks give it an engineering-drawing identity rather than a generic template look. Typography: Manrope (headings and body) and JetBrains Mono (labels), both self-hosted.
