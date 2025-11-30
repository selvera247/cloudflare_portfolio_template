# Cloudflare Portfolio Template

> **Deploy a blazing-fast, SEO-ready portfolio in 5 minutes.**  
> Built with **Cloudflare Pages + Workers**. No backend. No hosting fees.

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/YOUR_GITHUB_USERNAME/cloudflare-portfolio-template)

---

## Features

- **100% static** – Lightning fast (100/100 Lighthouse)
- **Contact form** → Email alerts via Cloudflare Worker (SendGrid)
- **5 themes + dark mode toggle**
- **Real-time visitor counter** (via Pages Function)
- **SEO-optimized** (meta tags, Open Graph, JSON-LD)
- **Fully customizable** in `data/config.json`

---

## Quick Start

1. Click **"Deploy to Cloudflare Pages"** above
2. Connect your GitHub → select this repo
3. Done! Your site is live at `yourname.pages.dev`

---

## Customize in <15 Minutes

Edit `data/config.json`:

```json
{
  "name": "Jane Doe",
  "title": "Freelance Designer & Developer",
  "bio": "I build beautiful, high-converting digital experiences.",
  "email": "jane@yourdomain.com",
  "social": {
    "twitter": "https://twitter.com/janedoe",
    "linkedin": "https://linkedin.com/in/janedoe",
    "github": "https://github.com/janedoe"
  },
  "projects": [
    {
      "title": "Project One",
      "description": "A sleek SaaS dashboard built with React & Tailwind.",
      "image": "/assets/placeholder-project.jpg",
      "link": "https://example.com"
    }
  ]
}
