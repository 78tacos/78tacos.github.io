(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const year = document.querySelector("[data-year]");
  const desktopNav = window.matchMedia("(min-width: 1041px)");

  const storedTheme = () => {
    try {
      return localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  };

  const systemTheme = () =>
    window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (!toggle) return;
    const next = theme === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    toggle.setAttribute("aria-label", `Switch to ${next} theme`);
    toggle.title = `Switch to ${next} theme`;
  };

  const initial = storedTheme();
  applyTheme(initial === "light" || initial === "dark" ? initial : systemTheme());

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch (error) {
      /* Theme still applies for this view if storage is blocked. */
    }
    applyTheme(next);
  });

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (event) => {
    const stored = storedTheme();
    if (stored !== "light" && stored !== "dark") {
      applyTheme(event.matches ? "light" : "dark");
    }
  });

  const setMenu = (open) => {
    nav?.classList.toggle("open", open);
    if (!menuToggle) return;
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  menuToggle?.addEventListener("click", () => {
    setMenu(!nav?.classList.contains("open"));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("click", (event) => {
    if (!nav?.classList.contains("open")) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (nav.contains(target) || menuToggle?.contains(target)) return;
    setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  desktopNav.addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });

  if (year) year.textContent = String(new Date().getFullYear());
})();
