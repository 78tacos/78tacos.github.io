# Joseph Ogle

Personal site for Joseph Ogle ([78tacos](https://github.com/78tacos)).

Live at [https://78tacos.github.io/](https://78tacos.github.io/).

GitHub Pages serves this repository from `main`, at the site root. `.nojekyll` keeps Pages from running a Jekyll build.

## What's in the repo

| Path | What it is |
| --- | --- |
| `index.html` | Bio, current project, skills, experience, education, projects, and contact |
| `blog/index.html` | Build log. Shows “Coming soon” until a post is listed |
| `blog/posts/_template.html` | Unpublished post template (`noindex`). Duplicate it to add a note |
| `404.html` | Not-found page |
| `css/fonts.css` | Self-hosted Fraunces, Figtree, and IBM Plex Mono |
| `css/styles.css` | Layout, dark and light themes, print styles |
| `js/main.js` | Theme toggle, mobile navigation, footer year |
| `assets/fonts/` | WOFF2 font files |
| `assets/img/favicon.svg` | Site mark (original SVG) |
| `LICENSE` | MIT |

The aircraft plate and favicon are original drawings, not a specific airplane and not a third-party logo. There are no stock photos. Fraunces, Figtree, and IBM Plex Mono remain under the SIL Open Font License.

The theme follows the system setting until it is toggled. That choice is stored in `localStorage` on this site only. There is no analytics.

## Add a build-log post

1. Duplicate `blog/posts/_template.html` as `blog/posts/YYYY-MM-DD-slug.html`.
2. Replace the title, date, description, and body. Remove the `noindex` tag.
3. Add a list item to the empty `<ol class="post-list">` in `blog/index.html`. The “Coming soon” line hides once that list has an item.

```html
<li>
  <article>
    <p class="when"><time datetime="2026-04-02">April 2, 2026</time></p>
    <h3><a href="posts/2026-04-02-slug.html">Title</a></h3>
    <p>One-sentence deck.</p>
  </article>
</li>
```

## Preview locally

From the repository root:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080). Opening `index.html` directly works too. The build log is at [http://localhost:8080/blog/](http://localhost:8080/blog/).

## License

Site source is under the [MIT License](LICENSE). Fraunces, Figtree, and IBM Plex Mono remain under the SIL Open Font License.
