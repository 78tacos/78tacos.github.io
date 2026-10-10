# Joseph Ogle

Personal site for Joseph Ogle ([78tacos](https://github.com/78tacos)).

Live at [https://78tacos.github.io/](https://78tacos.github.io/).

GitHub Pages serves this repository from `main`, at the site root. `.nojekyll` keeps Pages from running a Jekyll build.

## What's in the repo

| Path | What it is |
| --- | --- |
| `index.html` | Bio, skills, experience, education, projects, and contact |
| `404.html` | Not-found page |
| `css/fonts.css` | Self-hosted Fraunces, Figtree, and IBM Plex Mono |
| `css/styles.css` | Layout, dark and light themes, print styles |
| `js/main.js` | Theme toggle, mobile navigation, footer year |
| `assets/fonts/` | WOFF2 font files |
| `assets/img/favicon.svg` | Site mark |
| `LICENSE` | MIT |

The theme follows the system setting until it is toggled. That choice is stored in `localStorage` on this site only. There is no analytics.

## Preview locally

From the repository root:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080). Opening `index.html` directly works too.

## License

Site source is under the [MIT License](LICENSE). Fraunces, Figtree, and IBM Plex Mono remain under the SIL Open Font License.
