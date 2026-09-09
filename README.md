# Kadir Akdoğan — Professional Personal Website & Portfolio

A production-grade, Apple/Microsoft enterprise-tier personal website and CV portfolio for **Kadir Akdoğan** (IT Support Specialist / Network & Systems Administrator). Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes**, deployed seamlessly to **Vercel**.

---

## 🌟 Key Features & Architecture

### 1. Multi-Page Architecture (App Router)
- **`/` (Overview / Home)**: Condensed hero with headshot, summary, field highlights, career previews, and fast actions.
- **`/experience`**: Comprehensive reverse-chronological work history with detailed tasks and technology tags.
- **`/skills`**: Categorized technical capability matrix across Systems, Networking, Security, Infrastructure, ERP, and Support.
- **`/certifications`**: Certifications & formal vocational education showcase (ready schema for future accreditations).
- **`/references`**: Professional references with privacy-conscious phone number masking and click-to-reveal toggle.
- **`/contact`**: Interactive contact form powered by Next.js Serverless API Route (`/api/contact`) and Resend email delivery.
- **`/cv`**: Dedicated CV viewer with inline `<object>` PDF embedding, fallback iframe, `@media print` styling, and direct download.

### 2. Design System & Typography
- **Strict Monochrome Palette**:
  - Light mode: `#FAFAFA` background, `#FFFFFF` cards, `#111111` text, `gray-200` borders.
  - Dark mode: `#0A0A0A` background, `#121212` cards, `#F5F5F5` text, `gray-800` borders.
  - Zero arbitrary color accents — pure typographic hierarchy and deliberate spacing.
- **Modern Typography**:
  - Headings: `Space Grotesk` (bold, tight tracking).
  - Body: `Inter` (optimal legibility).
  - Code & Metadata: `JetBrains Mono`.
- **Micro-Interactions**:
  - Apple-style blurred sticky header (`backdrop-blur-md`).
  - Framer Motion scroll reveals (350ms, ease-out, respecting `prefers-reduced-motion`).

### 3. Bilingual Support (Turkish / English)
- Client-side React Context (`LanguageProvider`) without page reload.
- Full type-safe content stored in `src/data/content.tr.ts` and `src/data/content.en.ts`.
- Persistent language state in `localStorage` (default: Turkish `tr`).

### 4. Enterprise Hardening & SEO
- **Security Headers**: Content-Security-Policy (CSP) configured to permit same-origin PDF embedding, HSTS, X-Frame-Options (`SAMEORIGIN`), X-Content-Type-Options (`nosniff`).
- **Structured Data**: JSON-LD `Person` schema in root layout.
- **Search Engine Assets**: `sitemap.ts`, `robots.ts`, `manifest.ts`.
- **Analytics**: Integrated `@vercel/analytics`.

---

## 📁 Project Structure

```
.
├── public/
│   ├── cv/
│   │   └── kadir-akdogan-cv.pdf    # CV PDF document
│   ├── images/
│   │   └── profile.jpg             # High-resolution headshot
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts    # Resend email API handler with honeypot
│   │   ├── certifications/page.tsx # Certifications & Education page
│   │   ├── contact/page.tsx        # Contact page with interactive form
│   │   ├── cv/page.tsx             # PDF preview & download page
│   │   ├── experience/page.tsx     # Work history page
│   │   ├── references/page.tsx     # References page with privacy masking
│   │   ├── skills/page.tsx         # Technical skills breakdown page
│   │   ├── globals.css             # Monochrome variables & print stylesheet
│   │   ├── layout.tsx              # Root layout with persistent nav, footer & JSON-LD
│   │   ├── loading.tsx             # Route transition skeleton
│   │   ├── manifest.ts             # Web manifest
│   │   ├── not-found.tsx           # Custom 404 page
│   │   ├── page.tsx                # Home overview page
│   │   ├── robots.ts               # Robots.txt generator
│   │   └── sitemap.ts              # XML sitemap generator
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.tsx           # Monochromatic tag pill
│   │   │   ├── Button.tsx          # Accessible polymorphic button / link
│   │   │   ├── Card.tsx            # 1px border container
│   │   │   └── SectionHeading.tsx  # Editorial section heading
│   │   ├── Footer.tsx              # Multi-column enterprise footer
│   │   ├── Header.tsx              # Sticky header with navigation & toggles
│   │   ├── Providers.tsx           # ThemeProvider + LanguageProvider wrapper
│   │   └── ScrollReveal.tsx        # Framer Motion scroll animator
│   ├── context/
│   │   └── LanguageContext.tsx     # Bilingual context & localStorage handler
│   ├── data/
│   │   ├── certifications.ts       # Certifications data schema
│   │   ├── content.en.ts           # English translations
│   │   ├── content.tr.ts           # Turkish primary content
│   │   └── references.ts           # References data schema
│   └── lib/
│       └── types.ts                # TypeScript interfaces
├── next.config.mjs                 # Security headers & Next.js config
├── tailwind.config.ts              # Tailwind tokens & dark mode config
└── tsconfig.json
```

---

## 🛠️ How to Add Content

### 1. Adding a New Work Experience Entry
Open `src/data/content.tr.ts` and `src/data/content.en.ts`, locate `experiencePage.items`, and add your new position at the top of the array:

```ts
{
  company: "Firma Adı",
  role: "Pozisyon Unvanı",
  startDate: "01/06/2026",
  endDate: "Güncel",
  bullets: [
    "Yapılan temel operasyon veya görev tanımı",
    "Sistem veya ağ üzerinde gerçekleştirilen optimizasyon",
  ],
  technologies: ["MikroTik", "Windows Server", "Cat6"],
}
```

### 2. Adding a New Certification
Open `src/data/certifications.ts` and append your credential:

```ts
export const certifications: CertificationItem[] = [
  {
    id: "mtcna-2026",
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    issueDate: "2026",
    credentialId: "MT-123456",
    credentialUrl: "https://mikrotik.com/certificate/...",
  },
];
```

### 3. Adding a Reference
Open `src/data/references.ts` and add:

```ts
{
  id: "referans-id",
  name: "Ad Soyad",
  company: "Şirket Adı",
  role: "Unvan",
  phone: "+90 (5XX) XXX XX XX",
  email: "ornek@sirket.com",
}
```

---

## 📬 Setting Up the Contact Form (Resend API)

The contact form at `/contact` connects to `/api/contact/route.ts`. To receive emails directly in your inbox:

1. Create a free account at [Resend.com](https://resend.com).
2. Go to **API Keys** and generate a new API key.
3. In your local development environment, create a `.env.local` file:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
4. In **Vercel Dashboard**:
   - Go to your Project -> **Settings** -> **Environment Variables**.
   - Add `RESEND_API_KEY` with your API key value.
   - Save and redeploy.

*(Note: If `RESEND_API_KEY` is not provided, the API route operates in developer mock mode, logging submissions safely to the server console without throwing errors).*

---

## 🚀 Deployment to Vercel

The site is configured for 1-click zero-config deployment on Vercel:

1. Push your changes to GitHub:
   ```bash
   git add -A
   git commit -m "feat: release enterprise multi-page website"
   git push origin main
   ```
2. In Vercel ([vercel.com/new](https://vercel.com/new)):
   - Select the `kadirakdogan/my-site` repository.
   - Framework preset will automatically detect **Next.js**.
   - Add your `RESEND_API_KEY` under Environment Variables.
   - Click **Deploy**.

Every future push to `main` will automatically build and deploy the latest version.
