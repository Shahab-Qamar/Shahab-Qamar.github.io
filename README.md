# Shahab Qamar — Portfolio

Plain HTML/CSS/JS. No build step, no framework — works identically on GitHub Pages and Vercel.

## Files
- `index.html` — page structure
- `style.css` — all styling (Signal Intercept theme: dark, teal accent)
- `data.js` — **all editable content** (certs, writeups, tools, timeline, terminal script)
- `script.js` — renders `data.js` into the page, handles the terminal effect, filters, and the contact form

## Adding new content later
You almost never need to touch `index.html` or `style.css` again. Just edit `data.js`:

- **New writeup** → add an object to the `findings` array. New categories in `category` auto-create a filter button.
- **New cert** → add an object to the `certifications` array.
- **New tool/project** → add an object to the `tools` array.
- **New job/timeline entry** → add an object to the `timeline` array.

Save, commit, push — done.

## 1. Set up the contact form (Formspree — free)
1. Go to https://formspree.io and sign up.
2. Create a new form, get your form endpoint (looks like `https://formspree.io/f/abc123xy`).
3. In `index.html`, find:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your real endpoint.
4. Also update the `mailto:shahab@example.com` link and the GitHub/LinkedIn links in `index.html` to your real ones.

Once connected, any message submitted on the site lands in your email with the sender's name, email, and message.

## 2. Deploy to GitHub Pages
1. Create a new GitHub repo, e.g. `yourusername.github.io` (this exact naming gives you a root domain) — or any repo name and use project pages.
2. Push these files to the repo root:
   ```
   git init
   git add .
   git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → Deploy from branch → `main` / `root`**.
4. Your site is live at `https://yourusername.github.io` (or `https://yourusername.github.io/reponame` for project pages) within a minute or two.
5. Future updates: edit `data.js`, commit, push — Pages redeploys automatically.

## 3. Deploy to Vercel (optional, same repo)
1. Go to https://vercel.com → **Add New Project** → import the same GitHub repo.
2. Framework preset: **Other** (no build command needed, output directory: root).
3. Deploy. You'll get a `*.vercel.app` URL, with an option to attach a custom domain.
4. Every future push to `main` auto-redeploys here too.

You can run both at once — GitHub Pages as your permanent `github.io` link, Vercel if you want a custom domain or preview deployments later.

## Notes
- `assets/cv.pdf` is referenced by the "Download CV" button — add your actual CV file at that path (create an `assets` folder).
- All placeholder text (bio, writeups, certs, links) should be swapped for real content in `data.js` and `index.html` before going live.
