# Dhrishh — Data Science Portfolio

A minimal, static, dependency-free portfolio site built with plain
HTML, CSS and JavaScript. No backend, no build step, no frameworks —
open `index.html` and it works.

## File structure

```
portfolio/
│
├── index.html          → all page content, organized by section
├── style.css           → design tokens (colors/fonts) + all styling
├── script.js            → nav menu, scroll effects, terminal animation
├── assets/
│   ├── profile.jpg      → your photo (replace this)
│   └── resume.pdf       → your resume (replace this)
└── README.md            → this file
```

## Running it locally

You don't need a server for basic viewing — just double-click
`index.html` and it opens in your browser.

If you want it to behave exactly like it will online (recommended,
since some browsers restrict local file access), run a tiny local
server instead:

```bash
cd portfolio
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## What to edit first

1. **`assets/profile.jpg`** — add a real photo with this exact filename.
   Until you do, the hero section shows a labeled placeholder instead
   of a broken image, so nothing looks broken in the meantime.
2. **`assets/resume.pdf`** — add your resume with this exact filename.
   Both "Download Resume" buttons already point to it.
3. **LinkedIn URL** — search `index.html` for
   `https://www.linkedin.com/in/YOUR-USERNAME/` and replace every
   occurrence with your real profile URL.
4. **Email** — search for `your.email@example.com` and replace every
   occurrence with your real email (it's already wired up as a
   clickable `mailto:` link).
5. **About / Education / Projects / Certifications / Experience** —
   each section in `index.html` has an `EDIT ME` comment above it
   explaining what to change and how. Certifications and Experience
   currently show an honest "not yet" placeholder with a commented
   template right below it — uncomment and fill it in once you have
   something to add.
6. **Adding a new project** — copy one `<article class="project-card">`
   block in the Projects section and edit its text, tags and links.

Colors and fonts all live at the top of `style.css` under
`:root { ... }` — change a value there and it updates everywhere.

## Deploying with GitHub Pages

### 1. Create a GitHub repository
1. Go to [github.com/new](https://github.com/new).
2. Name it something like `portfolio` (or `YOUR-USERNAME.github.io`
   if you want it at the root of your GitHub domain).
3. Keep it **Public**, and don't initialize with a README (you
   already have one).
4. Click **Create repository**.

### 2. Upload these files
From inside the `portfolio` folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

(Or use GitHub's "uploading an existing file" option in the web UI
if you'd rather not use the command line.)

### 3. Enable GitHub Pages
1. In your repository, go to **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Choose the **`main`** branch and the **`/ (root)`** folder.
4. Click **Save**.

### 4. Get your public URL
GitHub will publish the site at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

(If your repository is named `YOUR-USERNAME.github.io`, your URL is
simply `https://YOUR-USERNAME.github.io/`.) It usually takes 1–2
minutes to go live after enabling Pages.

Once you have this URL, update the `og:url` meta tag near the top of
`index.html` to match it — this controls how the link previews when
shared on LinkedIn.

### 5. Updating the site later
Edit any file locally, then:

```bash
git add .
git commit -m "Update projects section"
git push
```

GitHub Pages redeploys automatically within a minute or two of every
push to `main`.

### 6. Connecting a custom domain later (optional)
1. Buy a domain from any registrar (Namecheap, GoDaddy, Google Domains, etc.).
2. In your repo, go to **Settings → Pages → Custom domain** and enter
   your domain.
3. At your registrar, add a **CNAME record** pointing your domain (or
   subdomain, e.g. `www`) to `YOUR-USERNAME.github.io`.
4. Wait for DNS to propagate (can take a few hours), then enable
   **Enforce HTTPS** in the Pages settings once it's available.

## Adding it to LinkedIn

- **Contact Info**: Open your profile → **Add profile section** isn't
  needed for this — instead go to **Edit profile → Contact info →
  Website**, and add your portfolio URL there.
- **Featured section**: On your profile, click **Add profile section
  → Recommended → Add featured**, then **Add a link** and paste your
  portfolio URL. This shows it prominently near the top of your profile.
- **About section**: Optionally, mention it in a closing line, e.g.
  *"See my project work at [your portfolio URL]."*

## Notes

- No personal information was invented. Anything not yet confirmed
  (LinkedIn URL, email, resume file, certifications, work experience,
  a couple of project repo links) is left as a clearly marked
  placeholder for you to fill in.
- The site respects `prefers-reduced-motion` and is keyboard-navigable
  with visible focus states.
