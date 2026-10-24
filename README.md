# GONCHAROVA.EXPERT
## Premium Real Estate Inspection, Renovation Supervision & Turnkey Renovation Platform (Tashkent, Uzbekistan)

A bespoke digital platform engineered for **Anna Goncharova** (`@goncharova.expert`), independent construction quality and apartment inspection expert operating in Tashkent, Uzbekistan.

---

## 🏛️ Brand & Creative Direction
- **Brand Identity**: High-end international architecture & construction consultancy aesthetic.
- **Visual System**:
  - Primary Background: Warm Ivory (`#F5F2EC`)
  - Secondary Background: Sand / Stone (`#EAE5DC`)
  - Primary Typography & Accents: Deep Graphite (`#20211F`) & Muted Bronze (`#A8794A`)
  - Typography: Editorial Serif (`Cormorant Garamond`) + Modern Precision Sans (`Inter`)
- **Tone**: Authoritative, calm, legally and technically grounded, no cheap marketing clichés.

---

## ⚡ Core Revenue Services Covered
1. **Apartment Handover Inspection** (`/apartment-inspection`): Comprehensive instrumental inspection before signing the acceptance deed with the developer. Generation of official defect acts adhering to Uzbek construction codes (ШНК / КМК).
2. **Renovation Technical Supervision** (`/renovation-supervision`): Quality control of rough and hidden works (electrics, plumbing, waterproofing, geometry) to protect the owner from costly contractor errors.
3. **Turnkey Renovation** (`/turnkey-renovation`): Full-cycle realization from empty shell to finished interior with fixed estimate, transparent reporting, and expert oversight.

---

## 🌐 Full Website Architecture
- `/` — Homepage (Cinematic hero, trust bar, 3 core services, why expert, working timeline, portfolio preview, expert biography, reviews, FAQ, high-contrast CTA)
- `/services` — Services overview & comparison
- `/apartment-inspection` — Dedicated conversion page for apartment buyers + interactive checklist
- `/renovation-supervision` — Dedicated page for renovation quality control + sample report preview
- `/turnkey-renovation` — Dedicated turnkey renovation page with full journey walkthrough
- `/portfolio` — Editorial case study gallery with real-time category filtering
- `/portfolio/[slug]` — Individual detailed project case study with technical findings
- `/about` — Anna Goncharova biography, professional journey, core principles
- `/reviews` — Verified client reviews & testimonials
- `/faq` — Searchable interactive FAQ with category filters
- `/contact` — Contact channels, Telegram direct, consultation booking form
- `/privacy` — Privacy and personal data processing policy
- `/api/consultation` — Server-side lead intake endpoint with honeypot anti-spam and optional Telegram bot forwarder

---

## 🇺🇿 Multilingual Support (RU & UZ)
Built with an integrated `LanguageProvider` supporting instant switching between **Russian** (primary market) and **Uzbek** (Latin orthography). The switcher preserves the current route and stores user language preference in `localStorage`.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Animation Primitives**: Framer Motion & CSS keyframe transitions
- **SEO & Discovery**: Dynamic XML Sitemap (`sitemap.ts`), Robots (`robots.ts`), Open Graph metadata, semantic HTML5, zero broken links.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## ⚙️ Environment Configuration (`.env.local`)
Create a `.env.local` file in the project root:

```env
# Optional: Forward leads directly into your private Telegram group or admin chat
TELEGRAM_BOT_TOKEN="your_bot_token_from_botfather"
TELEGRAM_CHAT_ID="your_telegram_chat_id"
```

If these environment variables are omitted, the form gracefully logs leads on the server and provides visitors with a direct Telegram link to `@Anna_040506`.

---

## 📁 Managing Content & Assets
- **Business details & Social Links**: Modify `src/content/config.ts`.
- **Translations (RU / UZ)**: Modify `src/content/translations.ts`.
- **Portfolio Projects & Cases**: Add or edit objects in `src/content/portfolio.ts`.
- **Client Reviews**: Edit `src/content/reviews.ts`.
- **FAQ Items**: Edit `src/content/faq.ts`.
- **Replacing Imagery**: Place real high-resolution client project photos into `public/images/projects/` and update references in `src/content/portfolio.ts`.
