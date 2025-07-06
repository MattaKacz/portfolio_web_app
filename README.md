# Matt Kaczor - Portfolio Website

Personal portfolio website built with Next.js, featuring modern UI with Vanta.js animations, contact form, and comprehensive error logging system.

## 🚀 Features

- **Modern UI/UX** - Glassmorphism design with smooth animations
- **Vanta.js Backgrounds** - Interactive 3D backgrounds (Cells, Net, Globe effects)
- **Contact Form** - Email integration with Resend API
- **Error Logging** - Winston logger with Python agent for error collection
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Next.js App Router with optimized images

## 🛠 Tech Stack

- **Frontend:** Next.js 14, React, Tailwind CSS
- **Animations:** Vanta.js, Framer Motion
- **Styling:** Glassmorphism, CSS Grid/Flexbox
- **Email:** Resend API
- **Logging:** Winston, Python log agent
- **Deployment:** PM2, GitHub Actions, SSH

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes (email sending)
│   │   ├── components/     # React components
│   │   └── globals.css     # Global styles
│   ├── components/         # Shared components
│   ├── hooks/             # Custom React hooks
│   ├── logger.js          # Winston logger configuration
│   └── types/             # TypeScript definitions
├── logs/                  # Application logs
├── log_agent.py          # Python agent for error collection
├── deploy.sh             # Deployment script
└── .github/workflows/    # GitHub Actions CI/CD
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Python 3.8+ (for log agent)
- Git

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd portfolio-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
# Create .env.local file
cp .env.example .env.local

# Add your configuration
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your_email@domain.com
DASHBOARD_TOKEN=your_dashboard_token  # Optional: for error logging
```

4. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📧 Contact Form Setup

The contact form uses Resend API for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
FROM_EMAIL=your-verified@domain.com
```

## 🐛 Error Logging System

### Winston Logger

- Logs errors to `logs/errors.log`
- Logs general app activity to `logs/app.log`
- Console output in development

### Python Log Agent

```bash
# Run manually
python log_agent.py --now

# Run scheduled (every 12 hours)
python log_agent.py
```

The agent:

- Monitors `logs/errors.log` for new errors
- Sends errors to Smart Dev Dashboard backend
- Tracks file offsets to avoid duplicates
- Runs automatically or on-demand

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

- Push to `main` branch triggers deployment
- Automatic deployment to production server
- PM2 process management
- Full deployment logs

### Manual Deployment

```bash
# On production server
cd /var/www/website_www_portfolio/portfolio_web_app
bash deploy.sh
```

### Deployment Process

1. **Git pull** - Latest code from main branch
2. **Dependencies** - `npm install`
3. **Build** - `npm run build`
4. **Restart** - PM2 process restart
5. **Logging** - Full deployment logs

## 🎨 Customization

### Colors & Theme

- Primary colors: Purple gradient (`#a855f7` to `#ec4899`)
- Background: Dark theme with glassmorphism
- Customizable in `tailwind.config.js`

### Vanta.js Effects

- **Cells:** Organic cell-like animations
- **Net:** Network grid effect
- **Globe:** 3D globe with particles

### Components

- Modular component structure
- Reusable UI components
- Easy to extend and modify

## 📝 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
```

## 🔧 Configuration Files

- **`next.config.mjs`** - Next.js configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`postcss.config.js`** - PostCSS plugins
- **`eslint.config.mjs`** - ESLint rules

## 📊 Monitoring

- **Error Tracking:** Winston + Python agent
- **Performance:** Next.js built-in analytics
- **Deployment:** GitHub Actions + PM2 logs
- **Server:** PM2 process monitoring

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Matt Kaczor**

- Backend Developer specializing in Python, Django, FastAPI
- Focus on AI-powered tools and clean code architecture
- [GitHub](https://github.com/MattaKacz)
- [LinkedIn](https://www.linkedin.com/in/kaczormk/)

---

Built with ❤️ using Next.js, React, and modern web technologies.
