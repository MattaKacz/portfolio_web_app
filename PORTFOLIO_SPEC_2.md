# 🧠 Mateusz Kaczor – Software Developer Portfolio

## 📌 Project Name:

**Mateusz Kaczor – Software Developer Portfolio**

## 🧑‍💻 Purpose:

Showcase professional skills, projects, and experience as a Python/Backend/AI Developer to potential employers and collaborators. The portfolio targets primarily the **Australian tech job market**, with emphasis on **Python, Django, FastAPI**, and **AI integrations**.

## 🛠️ Tech Stack:

- **Frontend**: Next.js (App Router), React, Tailwind CSS, Framer Motion
- **Deployment**: Nginx + PM2 (Ubuntu), GitHub Actions (CI/CD)
- **Design**: Responsive, animated, dark-themed UI with glassmorphism and shimmer effects
- **Assets**: Custom illustrations generated with AI tools (e.g. About Me graphic, OG image, favicon)

---

## 🧩 Page Structure

### 1. Hero Section

- Animated headline with role switching
- Self-introduction and CTA buttons
- Subtle background effects

### 2. About Me

- Short summary: backend developer in Australia
- AI-generated illustration
- Download CV button (optional)

### 3. Projects

- Grid view with modal previews
- Tags, GitHub links, and animations

### 4. Skills / Education (Tabs)

- Skills: Python, Docker, Nginx, etc.
- Education: UTS (Bachelor), UniMelb (Master)

### 5. Contact

- Mailto link or form
- GitHub, LinkedIn, Email icons

---

## ✨ UI/UX Design Goals

- Subtle animations (Framer Motion)
- Neon-accented dark theme
- Glassmorphism panels
- Mobile-first responsive layout

---

## 🧪 Development Notes

- Code organized in components: HeroSection, ProjectCard, ProjectModal, etc.
- Use `use client` selectively to avoid hydration issues
- Avoid layout shifts (e.g. tab transitions must maintain image size/position)
- Improve performance: lazy-load images, optimize build, tree-shaking

---

## 🔁 Deployment

- Hosted on VPS via Nginx + PM2 (`/var/www/website_www_portfolio/portfolio_web_app`)
- GitHub Actions CI/CD:
  - Push to `main` → triggers deploy script (`deploy.sh`)
  - `.env` handled via server environment or secret injection
  - Separate staging/production branches planned

---

## ✅ Tests

### Manual Frontend Tests

- [ ] Responsiveness on devices
- [ ] Animations smooth
- [ ] Image load
- [ ] Modal works
- [ ] External links OK

### Lighthouse Audit

- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

### CI Tests (Optional)

- [ ] Build passes
- [ ] ESLint OK
- [ ] Prettier formatting OK
- [ ] No config errors

---

## 🗺️ Roadmap

### 🔹 v1.0

• Layout: Hero + About + Projects + Tabs + Contact
• Responsywny design (Tailwind)
• Animacje (Framer Motion)
• Hostowanie na VPS (Nginx, PM2)
• GitHub Actions CI/CD

### 🔹 v1.1

• Dodanie blog sekcji lub “Nowości”
• Zoptymalizowane obrazki (next/image, blurDataURL)
• Ulepszone SEO (OpenGraph, meta tags, sitemap.xml)
• Analiza odwiedzin (np. Plausible)

### 🔹 v1.2

• Tryb ciemny/jasny (toggle)
• Wersja PL/EN (i18n)
• Testy end-to-end z Playwright lub Cypress
• Podpięcie CMSa (np. Notion API / MDX / Sanity)

### 🔹 v1.3

• Newsletter (np. Buttondown, Tinyletter)
• Wbudowany system feedbacku (np. like/komenatrz)
• Animowane tło 3D (Three.js / Vanta)

---

## 🧾 Deploy Checklist

| ✅  | Step                         |
| --- | ---------------------------- |
| [ ] | `npm run build` passes       |
| [ ] | Lockfile updated             |
| [ ] | Git pushed to `main`         |
| [ ] | `.env.production` present    |
| [ ] | Favicon, OG image, SEO ready |
| [ ] | Staging tests passed         |
| [ ] | GitHub Actions triggered     |
| [ ] | PM2 restarted                |
| [ ] | Server reachable             |
| [ ] | Mobile/Desktop QA done       |
| [ ] | Backup created               |

---

Created with ❤️ by Mateusz Kaczor
