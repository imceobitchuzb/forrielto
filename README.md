# GONCHAROVA.EXPERT
## Premium Real Estate Inspection, Renovation Supervision & Turnkey Renovation Platform (Tashkent, Uzbekistan)

A bespoke digital platform engineered for **Anna Goncharova** (`@goncharova.expert`), independent construction quality and apartment inspection expert operating in Tashkent, Uzbekistan.

---

## 🏛️ Brand & Creative Direction
- **Brand Identity**: High-end international architecture & construction consultancy aesthetic.
- **Visual System**:
  - Primary Background: Warm Ivory (`#F6F3EC`)
  - Secondary Background: Sand / Stone (`#EBE6DC`)
  - Primary Typography & Accents: Deep Graphite (`#1C1D1A`) & Muted Bronze (`#9E7448`)
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
- `/api/consultation` — Server-side lead intake endpoint with honeypot anti-spam, zero-loss disk storage, and optional Telegram bot forwarder

---

## 🇺🇿 Multilingual Support (RU & UZ)
Built with an integrated `LanguageProvider` supporting instant switching between **Russian** (primary market) and **Uzbek** (Latin orthography). The switcher preserves the current route and stores user language preference in `localStorage`.

---

## 🛡️ Lead Intake & Zero-Lead-Loss Architecture
1. **Local Persistent Storage**: Every valid consultation request submitted via `/api/consultation` is automatically saved to disk in `data/leads.jsonl` with timestamps and client details before any external webhooks are triggered.
2. **Spam Defense**: Honeypot field (`website_token`) silently absorbs automated spam without leaking data or triggering alerts.
3. **Validation**: Enforced on both client and server side (minimum 2 characters for name, minimum 7 digits for phone numbers).
4. **Privacy Consent**: Direct link to the privacy policy (`/privacy`) embedded in all submission forms.

---

## ⚙️ Environment Configuration (`.env.local`)
Create a `.env.local` file in the project root:

```env
# Optional: Forward leads directly into your private Telegram group or admin chat
TELEGRAM_BOT_TOKEN="your_bot_token_from_botfather"
TELEGRAM_CHAT_ID="your_telegram_chat_id"
```

> **Note**: If these environment variables are omitted, the form gracefully saves leads to `data/leads.jsonl` and provides visitors with a direct Telegram link to `@Anna_040506`.

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

## 📋 Information Requiring Client (Anna's) Confirmation
Before final public launch, the following items should be approved by Anna Goncharova:
1. **Public Phone & WhatsApp**: Provide official phone number to replace placeholder `+998 (90) 000-00-00`.
2. **Telegram Bot Dispatch (Optional)**: Provide Telegram Bot Token and Chat ID if direct Telegram bot alerts are desired.
3. **Completed Projects Sign-off**: Review anonymized demonstration case studies in `/portfolio` for final release approval.
4. **Custom Domain**: Connect DNS records for `goncharova.expert` to the hosting provider (e.g. Vercel, Netlify, or custom VPS).
