# Cloudflare Portfolio Template – Data-Centric Edition

> **Deploy a fast, professional portfolio in 5 minutes.**  
> Designed for consultants, analysts, finance & data professionals.  
> Built on **Cloudflare Pages + Pages Functions** — no servers, no hosting fees.

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/YOUR_GITHUB_USERNAME/cloudflare-portfolio-template)

---

## Who this template is for

- Finance, FP&A, and RevOps professionals  
- Data / analytics consultants and engineers  
- Transformation & systems leaders  
- Any professional who wants a **clean, modern portfolio** with project cards, links, and a contact form

---

## Features

- ⚡ **Static front-end** → Blazing fast on Cloudflare Pages  
- ✉️ **Contact form** → Sends email via a Pages Function (SendGrid example included)  
- 🎨 **Light / dark theme toggle**  
- 📊 **Project grid** → Perfect for dashboards, case studies, AI agents, or systems work  
- 🔍 **SEO-friendly structure** (you can add meta tags, OG tags, and JSON-LD if you’d like)  
- 🛠 **Config-driven content** — edit `data/config.json` to update name, bio, and projects

---

## Quick Start

1. Create a new GitHub repo and add these files  
2. Click the **"Deploy to Cloudflare Pages"** button above  
3. In Cloudflare, connect your GitHub repo  
4. Deploy — your site will be live at `yourname.pages.dev`  
5. Edit `data/config.json` and push changes → Cloudflare auto-redeploys

---

## Customize in Under 15 Minutes

Edit `data/config.json`:

```json
{
  "name": "Your Name",
  "title": "Consultant & Data-Driven Problem Solver",
  "bio": "I help teams modernize processes, build better reporting, and make decisions with data.",
  "email": "you@yourdomain.com",
  "social": {
    "twitter": "https://twitter.com/yourhandle",
    "linkedin": "https://linkedin.com/in/yourhandle",
    "github": "https://github.com/yourhandle"
  },
  "projects": [
    {
      "title": "Financial Reporting Data Layer",
      "description": "A clean reporting layer that transforms raw system exports into analytics-ready tables for stakeholders.",
      "image": "/assets/placeholder-project.jpg",
      "link": "https://example.com/reporting-layer"
    }
  ]
}
