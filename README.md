# Joseph Ogle — personal site

Static GitHub Pages bio / resume for **Joseph Ogle** (`78tacos`).

Live (after this branch is merged to `main`): [https://78tacos.github.io/](https://78tacos.github.io/)

GitHub Pages is **already enabled** for this repository: source branch `main`, folder `/` (site root). There is no Jekyll build. The `.nojekyll` file keeps Pages from filtering files.

## How the site works

This is a vanilla static site. Opening `index.html` is enough.

| Path | Role |
| --- | --- |
| `index.html` | Bio, skills, experience, education, projects, contact |
| `404.html` | Pages not-found page |
| `css/fonts.css` | Self-hosted Fraunces, Figtree, and IBM Plex Mono |
| `css/styles.css` | Layout, dark/light theme, print styles |
| `js/main.js` | Theme toggle, mobile nav, footer year |
| `assets/fonts/` | WOFF2 files (no Google Fonts network request) |
| `assets/img/favicon.svg` | Mark |
| `LICENSE` | MIT |

There is **no analytics or tracking**. Theme preference is stored in `localStorage` on this origin only. Dark and light themes follow `prefers-color-scheme` until the visitor toggles.

## Preview locally

From the repo root:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080). You can also open `index.html` directly in a browser (`file://`).

## Content sources

- Contact, education, work history, and skills are taken from the captain-provided resume. **Resume content may be updated later by the captain.**
- Project blurbs and repository links come from public GitHub READMEs and repo descriptions. Forks (`simplewall`, `dnscrypt-proxy`) and the empty `test` repo are omitted. No private CAN dashboard is listed.

If a fact is missing from those sources, it is not invented here.

## License

Site source is licensed under the [MIT License](LICENSE). Self-hosted fonts remain under their respective SIL Open Font License terms (Fraunces, Figtree, IBM Plex Mono).
