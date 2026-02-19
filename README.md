# Prashast Vats — Portfolio

React + Tailwind CSS personal portfolio, deployed on GitHub Pages.

## Run Locally

```bash
npm install
npm start
```

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.

**First time:** Go to repo → Settings → Pages → Source → **GitHub Actions**

## Update Your Info

**All personal data is in `src/config.js`** — edit that file and push.

| What to change | Field in config.js |
|---|---|
| Name, title, tagline | `name`, `title`, `tagline` |
| Email, phone, location | `email`, `phone`, `location` |
| Work experience | `experience` array |
| Skills | `skills` array |
| Key highlights | `highlights` array |
| Education | `education` array |
| Stats on hero | `stats` array |

### Update Resume
Replace `public/resume.pdf` with your new PDF (keep the same filename), then commit and push.
