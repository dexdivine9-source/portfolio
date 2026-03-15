# Adeniyi Divine — Software Engineer Portfolio

> **High-performance Developer Hub** showcasing my engineering projects, skills, and direct contact channels. Built with a Netlify-first architecture.

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

---

## ⚡ Tech Stack

| Layer | Technology |
|-------|------------|
| **Core** | Next.js 15 (App Router), React |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4, Lucide React (Icons), Inter (Font) |
| **Animations** | Framer Motion (Fade-in scroll interactions, hover scaling) |

---

## 🚀 Key Features

- **Full-Spectrum Hero**: Bold, parallax-animated intro with "Available for opportunities" badge and primary call-to-action buttons.
- **Skills Cloud**: 12 keyword-optimized, animated tech badges for quick recruiter scanning.
- **My Journey**: Narrative section with 4 interactive stat cards detailing projects, tenure, and technologies.
- **Netlify Gateway Architecture**: Instead of just GitHub links, a premium, glowing "Master Card" hub that routes visitors directly to my live production environment ([Netlify Teams Page](https://app.netlify.com/teams/dexdivine9/projects)).
- **Contact Bento Grid**: Frictionless, one-tap connection grid. Direct URLs to WhatsApp, Telegram, Email, LinkedIn, and X — no forms, no spam.
- **100% Mobile Responsive**: Specifically tuned for 390px (iPhone) viewports. Complex grids fall back gracefully to 2x2 or vertically stacked layouts on mobile.
- **Dark Mode**: High-contrast "Midnight" theme (`neutral-950`) with Framer Motion-powered subtle cyan accents.

---

## 📁 System Architecture

```text
portfolio-site/
├── app/
│   ├── layout.tsx                # Root layout, Inter font, SEO metadata
│   ├── page.tsx                  # Main assembly page (Hero, Journey, Bento Grid)
│   └── globals.css               # Midnight theme, custom scrollbars
├── components/
│   ├── NetlifyGatewayCard.tsx    # Premium routing card for live projects
│   └── ProjectCard.tsx           # GitHub repository cards
└── types/
    └── github.ts                 # Type definitions for GitHub API fetch
```

---

## 🛠 Local Setup & Development

First, install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Component Customization

The portfolio is designed for "efficient laziness" — manage all critical data in one place. Open `app/page.tsx` and edit these constants:

| Variable | Controls |
|----------|----------|
| `NETLIFY_URL` | The destination link for the main Netlify Gateway Card. |
| `SKILLS` | The array of technologies listed in the animated Skills Cloud. |
| `contactLinks` | The URLs, labels, and icons for the bottom Bento Grid. |

---

## 📬 Connectivity

*   **WhatsApp**: [+234 808 032 7610](https://wa.me/2348080327610)
*   **Email**: [adeniyidivine34@gmail.com](mailto:adeniyidivine34@gmail.com)
*   **Telegram**: [@Divine_dex](https://t.me/Divine_dex)
*   **LinkedIn**: [divine-adeniyi](https://www.linkedin.com/in/divine-adeniyi-5836633a1)
*   **X / Twitter**: [@dex_divine](https://x.com/dex_divine)
*   **Netlify Hub**: [Live Projects](https://app.netlify.com/teams/dexdivine9/projects)

---
*© 2026 Adeniyi Divine. Engineered with Next.js & Framer Motion.*
