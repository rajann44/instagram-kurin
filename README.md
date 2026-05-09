# Clean Feed Launcher

Tiny static web app that opens Instagram's cleaner feed variants:

- Following: `https://www.instagram.com/?variant=following`
- Favorites: `https://www.instagram.com/?variant=favorites`

## Why this approach

This app does not scrape Instagram, use private APIs, or proxy user data.
It simply links users to official Instagram web routes, which is the safest
way to publish this freely.

## Run locally

You can open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish for free (recommended)

### Option 1: Cloudflare Pages

1. Push this folder to a GitHub repo.
2. In Cloudflare Pages, create a new project from that repo.
3. Build command: leave empty.
4. Output directory: `/` (root).
5. Deploy.

### Option 2: Netlify Drop

1. Zip this folder.
2. Go to Netlify Drop.
3. Drag and drop the zip.
4. Site is live instantly on a free URL.

### Option 3: GitHub Pages

1. Put files at repo root.
2. In repo settings, enable Pages from `main` branch root.
3. Wait for deployment and use the generated URL.

## Deploy on GitHub Pages (step-by-step)

1. Open your repo: `https://github.com/rajann44/instgram-kurin`.
2. Go to `Settings` -> `Pages`.
3. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**.
5. Wait 1 to 3 minutes and refresh the Pages screen.
6. Your live URL should appear as:
   - `https://rajann44.github.io/instgram-kurin/`

If you do not see the site, check the `Actions` tab for a failed Pages deployment.

## Important constraints

- Feed order and available variants are controlled by Instagram.
- Users must be logged in to Instagram for personalized feeds.
- Behavior can change if Instagram updates URL parameters.

## App icon

- Included custom SVG icon: `icons/app-icon.svg`
- Generated PNG variants from SVG:
  - `icons/icon-192.png`
  - `icons/icon-512.png`
  - `icons/apple-touch-icon.png`
- Added `favicon.ico` at project root for broad browser tab support.
- Referenced icon files in `index.html` and `manifest.webmanifest`.

## Social preview image

- Added social preview artwork:
  - `social/og-image.svg`
  - `social/og-image.png` (1200x630)
- Added Open Graph and Twitter card tags in `index.html`.
- After deployment, set absolute URLs for `og:url`, `og:image`, and `twitter:image` for best compatibility across platforms.

## Optional next improvements

- Add PNG fallbacks (`192x192`, `512x512`, Apple touch icon) for wider device support.
- Add a tiny analytics script (privacy-first) to measure button clicks.
- Add localized text for multiple languages.
