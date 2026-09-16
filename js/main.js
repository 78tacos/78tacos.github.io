(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const year = document.querySelector("[data-year]");

  const storedTheme = () => localStorage.getItem("theme");
  const systemTheme = () =>
    window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (toggle) {
      const next = theme === "dark" ? "light" : "dark";
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      toggle.setAttribute("aria-label", `Switch to ${next} theme`);
      toggle.title = `Switch to ${next} theme`;
    }
  };

  applyTheme(storedTheme() === "light" || storedTheme() === "dark" ? storedTheme() : systemTheme());

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (event) => {
    if (storedTheme() !== "light" && storedTheme() !== "dark") {
      applyTheme(event.matches ? "light" : "dark");
    }
  });

  const setMenu = (open) => {
    nav?.classList.toggle("open", open);
    menuToggle?.setAttribute("aria-expanded", open ? "true" : "false");
  };

  menuToggle?.addEventListener("click", () => {
    setMenu(!nav?.classList.contains("open"));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  if (year) year.textContent = String(new Date().getFullYear());
})();
