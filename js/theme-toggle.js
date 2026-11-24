/* ==========================================================================
   🌓 EvEvDigital Theme Switcher Engine (Anti-FOUC + Smooth Dark/Light Toggle)
   ========================================================================== */

(function () {
  const STORAGE_KEY = "evev_theme_cucisteam";
  const THEME_COLORS = {
    light: "#ffffff",
    dark: "#090d14"
  };

  const SUN_ICON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="5"></circle>' +
    '<line x1="12" y1="1" x2="12" y2="3"></line>' +
    '<line x1="12" y1="21" x2="12" y2="23"></line>' +
    '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>' +
    '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>' +
    '<line x1="1" y1="12" x2="3" y2="12"></line>' +
    '<line x1="21" y1="12" x2="23" y2="12"></line>' +
    '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>' +
    '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>' +
    "</svg>";

  const MOON_ICON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">' +
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>' +
    "</svg>";

  function safeGetStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSetStorage(key, val) {
    try {
      window.localStorage.setItem(key, val);
    } catch (e) {
      // Ignore storage quota/privacy mode errors
    }
  }

  function getPreferredTheme() {
    const saved = safeGetStorage(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    const presetAttr = document.documentElement.getAttribute("data-theme");
    if (presetAttr === "dark" || presetAttr === "light") {
      return presetAttr;
    }
    if (window.PROFIL_USAHA && (window.PROFIL_USAHA.temaDefault === "dark" || window.PROFIL_USAHA.temaDefault === "light")) {
      return window.PROFIL_USAHA.temaDefault;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function syncThemeColorMeta(theme) {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      if (document.head) document.head.appendChild(meta);
    }
    meta.setAttribute("content", THEME_COLORS[theme] || THEME_COLORS.light);
  }

  function updateToggleButtons(theme) {
    const isDark = theme === "dark";
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach(function (btn) {
      btn.innerHTML = isDark ? SUN_ICON : MOON_ICON;
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute("title", isDark ? "Beralih ke Mode Terang (Light Mode)" : "Beralih ke Mode Gelap (Dark Mode)");
      btn.setAttribute("aria-label", isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap");
    });

    const themeLabels = document.querySelectorAll("[data-theme-label]");
    themeLabels.forEach(function (label) {
      label.textContent = isDark ? "Mode Gelap Aktif" : "Mode Terang Aktif";
    });
  }

  function applyTheme(theme, persist) {
    const validTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", validTheme);
    document.documentElement.style.colorScheme = validTheme;
    if (persist !== false) {
      safeSetStorage(STORAGE_KEY, validTheme);
    }
    syncThemeColorMeta(validTheme);
    updateToggleButtons(validTheme);
  }

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.classList.add("theme-transition-ready");
    applyTheme(next, true);
  };

  window.setEvevTheme = function (theme) {
    document.documentElement.classList.add("theme-transition-ready");
    applyTheme(theme, true);
  };

  // Immediate Anti-FOUC synchronous application before paint
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);
  document.documentElement.style.colorScheme = initialTheme;

  function initDomBindings() {
    applyTheme(getPreferredTheme(), false);

    // Enable smooth CSS transitions only after initial frame renders
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        document.documentElement.classList.add("theme-transition-ready");
      });
    });

    document.querySelectorAll(".theme-toggle-btn").forEach(function (btn) {
      if (btn.dataset.themeBound === "true") return;
      btn.dataset.themeBound = "true";
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        window.toggleTheme();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDomBindings);
  } else {
    initDomBindings();
  }

  // Sync theme changes across multiple open tabs
  window.addEventListener("storage", function (e) {
    if (e.key === STORAGE_KEY && (e.newValue === "dark" || e.newValue === "light")) {
      applyTheme(e.newValue, false);
    }
  });

  // Follow OS preference change if user has not set a manual preference
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleOsChange = function (ev) {
      if (!safeGetStorage(STORAGE_KEY)) {
        applyTheme(ev.matches ? "dark" : "light", false);
      }
    };
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleOsChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleOsChange);
    }
  }
})();
