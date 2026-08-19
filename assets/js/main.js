/*!
 * PULSE Fitness Template — main.js
 * Handles: dark/light theme, RTL direction, mobile nav, header scroll state,
 * FAQ accordions, testimonial/marquee helpers, back-to-top, misc UI wiring.
 * No frameworks required — vanilla JS, safe to drop into any page.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_THEME = "pulse-theme";
  var STORAGE_DIR = "pulse-dir";

  /* ---------------- Theme (dark / light) ---------------- */
  function getPreferredTheme() {
    var saved = localStorage.getItem(STORAGE_THEME);
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-theme-icon]").forEach(function (el) {
      el.setAttribute("data-active", el.getAttribute("data-theme-icon") === theme ? "true" : "false");
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0d10" : "#ffffff");
  }

  function toggleTheme() {
    var next = root.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(STORAGE_THEME, next);
    applyTheme(next);
  }

  applyTheme(getPreferredTheme());

  /* ---------------- Direction (LTR / RTL) ---------------- */
  function getPreferredDir() {
    return localStorage.getItem(STORAGE_DIR) || "ltr";
  }
  function applyDir(dir) {
    root.setAttribute("dir", dir);
    document.querySelectorAll("[data-dir-label]").forEach(function (el) {
      el.textContent = dir === "rtl" ? el.getAttribute("data-dir-label-ltr") || "LTR" : el.getAttribute("data-dir-label-rtl") || "RTL";
    });
  }
  function toggleDir() {
    var next = root.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
    localStorage.setItem(STORAGE_DIR, next);
    applyDir(next);
  }
  applyDir(getPreferredDir());

  /* ---------------- Placeholder links ("#") ----------------
     Social icons and a few other spots use href="#" as a stand-in until a
     real destination (social profile, PDF, etc.) is wired up. Left alone,
     clicking one jumps the page to the top and appends a bare "#" to the
     URL, which reads as broken. Intercept those clicks so they're inert. */
  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest('a[href="#"]');
    if (link) e.preventDefault();
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", toggleTheme);
    });
    document.querySelectorAll("[data-dir-toggle]").forEach(function (btn) {
      btn.addEventListener("click", toggleDir);
    });

    /* ---------------- Mobile nav ---------------- */
    var menuBtn = document.querySelector("[data-menu-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener("click", function () {
        var isOpen = mobileNav.classList.toggle("hidden");
        // toggle() returns true if the class was ADDED, so isOpen here means "now hidden"
        var nowOpen = !isOpen;
        menuBtn.setAttribute("aria-expanded", nowOpen ? "true" : "false");
        document.body.classList.toggle("overflow-hidden", nowOpen);
      });
      mobileNav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          mobileNav.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        });
      });
    }

    /* ---------------- Dropdown (Home variants / mega menu) ---------------- */
    document.querySelectorAll("[data-dropdown]").forEach(function (wrapper) {
      var panel = wrapper.querySelector("[data-dropdown-panel]");
      if (!panel) return;
      wrapper.addEventListener("mouseenter", function () {
        panel.classList.remove("opacity-0", "invisible", "translate-y-1");
      });
      wrapper.addEventListener("mouseleave", function () {
        panel.classList.add("opacity-0", "invisible", "translate-y-1");
      });
      var trigger = wrapper.querySelector("[data-dropdown-trigger]");
      if (trigger) {
        trigger.addEventListener("click", function (e) {
          e.preventDefault();
          panel.classList.toggle("opacity-0");
          panel.classList.toggle("invisible");
          panel.classList.toggle("translate-y-1");
        });
      }
    });

    /* ---------------- Account menu (dashboard/admin topbar profile) ----------------
       Click-only (no hover-open like the nav mega menu) since this sits in a
       narrow topbar and should behave like a standard account menu: click to
       open, click anywhere outside (or Escape) to close. */
    document.querySelectorAll("[data-account-menu]").forEach(function (wrapper) {
      var panel = wrapper.querySelector("[data-account-menu-panel]");
      var trigger = wrapper.querySelector("[data-account-menu-trigger]");
      if (!panel || !trigger) return;
      function close() {
        panel.classList.add("opacity-0", "invisible", "translate-y-1");
      }
      function open() {
        panel.classList.remove("opacity-0", "invisible", "translate-y-1");
      }
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = !panel.classList.contains("invisible");
        isOpen ? close() : open();
      });
      document.addEventListener("click", function (e) {
        if (!wrapper.contains(e.target)) close();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
      });
    });

    /* ---------------- Header scroll state ---------------- */
    var header = document.querySelector("[data-site-header]");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 12);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---------------- FAQ accordion ---------------- */
    document.querySelectorAll("[data-accordion]").forEach(function (acc) {
      acc.querySelectorAll("[data-accordion-item]").forEach(function (item) {
        var trigger = item.querySelector("[data-accordion-trigger]");
        var panel = item.querySelector("[data-accordion-panel]");
        if (!trigger || !panel) return;
        trigger.addEventListener("click", function () {
          var isOpen = item.getAttribute("data-open") === "true";
          acc.querySelectorAll("[data-accordion-item]").forEach(function (other) {
            other.setAttribute("data-open", "false");
            other.querySelector("[data-accordion-panel]").style.maxHeight = null;
            var icon = other.querySelector("[data-accordion-icon]");
            if (icon) icon.style.transform = "rotate(0deg)";
          });
          if (!isOpen) {
            item.setAttribute("data-open", "true");
            panel.style.maxHeight = panel.scrollHeight + "px";
            var icon = item.querySelector("[data-accordion-icon]");
            if (icon) icon.style.transform = "rotate(45deg)";
          }
        });
      });
    });

    /* ---------------- Tabs ---------------- */
    document.querySelectorAll("[data-tabs]").forEach(function (group) {
      var buttons = group.querySelectorAll("[data-tab-btn]");
      // Panels aren't always nested inside the button wrapper (e.g. pricing
      // toggle buttons live in the hero, panels sit in the section below) —
      // look for matching panels across the whole page, not just this group.
      var panels = document.querySelectorAll("[data-tab-panel]");
      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var target = btn.getAttribute("data-tab-btn");
          buttons.forEach(function (b) { b.classList.toggle("active", b === btn); });
          panels.forEach(function (p) {
            p.classList.toggle("hidden", p.getAttribute("data-tab-panel") !== target);
          });
        });
      });
    });

    /* ---------------- Testimonial slider (simple) ---------------- */
    document.querySelectorAll("[data-slider]").forEach(function (slider) {
      var track = slider.querySelector("[data-slider-track]");
      var slides = track ? Array.from(track.children) : [];
      var prev = slider.querySelector("[data-slider-prev]");
      var next = slider.querySelector("[data-slider-next]");
      var dotsWrap = slider.querySelector("[data-slider-dots]");
      var index = 0;
      if (!track || slides.length === 0) return;

      if (dotsWrap) {
        slides.forEach(function (_, i) {
          var dot = document.createElement("button");
          dot.className = "h-2 w-2 rounded-full bg-ink-300 dark:bg-ink-700 transition-all";
          dot.setAttribute("aria-label", "Go to slide " + (i + 1));
          dot.addEventListener("click", function () { goTo(i); });
          dotsWrap.appendChild(dot);
        });
      }

      function render() {
        track.style.transform = "translateX(" + (root.getAttribute("dir") === "rtl" ? "" : "-") + index * 100 + "%)";
        if (dotsWrap) {
          Array.from(dotsWrap.children).forEach(function (d, i) {
            d.classList.toggle("bg-volt-400", i === index);
            d.classList.toggle("w-6", i === index);
            d.classList.toggle("bg-ink-300", i !== index);
            d.classList.toggle("dark:bg-ink-700", i !== index);
          });
        }
      }
      function goTo(i) {
        index = (i + slides.length) % slides.length;
        render();
      }
      if (next) next.addEventListener("click", function () { goTo(index + 1); });
      if (prev) prev.addEventListener("click", function () { goTo(index - 1); });
      render();

      var auto = slider.getAttribute("data-slider-auto");
      if (auto) {
        setInterval(function () { goTo(index + 1); }, parseInt(auto, 10));
      }
    });

    /* ---------------- Back to top ---------------- */
    var backToTop = document.querySelector("[data-back-to-top]");
    if (backToTop) {
      window.addEventListener("scroll", function () {
        backToTop.classList.toggle("opacity-0", window.scrollY < 400);
        backToTop.classList.toggle("invisible", window.scrollY < 400);
      }, { passive: true });
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /* ---------------- Forms (demo-only, no backend wired up) ----------------
       This template ships as static front-end HTML — no server sits behind
       these forms yet (see README). Left alone, a <form> with no `action`
       submits itself as a GET request and reloads the page with a stray
       "?" in the URL, which looks broken. Until you wire a real backend,
       every form on the site is intercepted here: native validation still
       runs, then either a success toast shows (if the form opts in via
       data-success-title) or the reload is simply suppressed. */
    function showToast(title, text) {
      var host = document.querySelector("[data-toast-host]");
      if (!host) {
        host = document.createElement("div");
        host.setAttribute("data-toast-host", "");
        host.className = "fixed bottom-6 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 rtl:sm:left-6 rtl:sm:right-auto";
        document.body.appendChild(host);
      }
      var toast = document.createElement("div");
      toast.className = "mt-3 flex items-start gap-3 rounded-2xl border border-volt-500/30 bg-ink-950 p-4 text-white shadow-card-dark opacity-0 translate-y-2 transition-all duration-300";
      toast.innerHTML =
        '<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt-400 text-ink-950">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5"><polyline points="5 13 10 18 19 7"/></svg></span>' +
        '<span><span class="block text-sm font-bold">' + title + '</span>' +
        (text ? '<span class="mt-0.5 block text-xs text-ink-300">' + text + '</span>' : '') + '</span>';
      host.appendChild(toast);
      requestAnimationFrame(function () {
        toast.classList.remove("opacity-0", "translate-y-2");
      });
      setTimeout(function () {
        toast.classList.add("opacity-0", "translate-y-2");
        setTimeout(function () { toast.remove(); }, 300);
      }, 5000);
    }

    document.querySelectorAll("form").forEach(function (form) {
      if (form.hasAttribute("data-action-wired")) return; // real backend already wired — leave it alone
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        var title = form.getAttribute("data-success-title");
        if (title) {
          showToast(title, form.getAttribute("data-success-text") || "");
          form.reset();
        }
        var redirect = form.getAttribute("data-redirect");
        if (redirect) {
          // Login/register forms: only navigate once required fields pass
          // validation above — this is what stops "Create Account" /
          // "Log In" from taking you straight to the dashboard with empty
          // fields.
          // Respects ?next=… so links like "Book a Slot" that send a
          // signed-out visitor to the login page first land back on the
          // page they actually wanted (e.g. Book Classes) after logging in.
          var next = new URLSearchParams(window.location.search).get("next");
          window.location.href = next || redirect;
        }
      });
    });

    /* ---------------- Footer year ---------------- */
    document.querySelectorAll("[data-current-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    /* ---------------- Password visibility toggle ---------------- */
    document.querySelectorAll("[data-password-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var input = document.querySelector(btn.getAttribute("data-password-toggle"));
        if (!input) return;
        input.type = input.type === "password" ? "text" : "password";
        btn.classList.toggle("is-visible");
      });
    });

    /* ---------------- Blog search / filter (client-side demo) ---------------- */
    var blogSearch = document.querySelector("[data-blog-search]");
    var blogFilterBtns = document.querySelectorAll("[data-blog-filter]");
    var blogCards = document.querySelectorAll("[data-blog-card]");
    function applyBlogFilters() {
      var query = blogSearch ? blogSearch.value.trim().toLowerCase() : "";
      var activeFilter = document.querySelector("[data-blog-filter].active");
      var category = activeFilter ? activeFilter.getAttribute("data-blog-filter") : "all";
      var visibleCount = 0;
      blogCards.forEach(function (card) {
        var title = (card.getAttribute("data-title") || "").toLowerCase();
        var cat = card.getAttribute("data-category") || "";
        var matchesQuery = !query || title.indexOf(query) !== -1;
        var matchesCat = category === "all" || cat === category;
        var show = matchesQuery && matchesCat;
        card.classList.toggle("hidden", !show);
        if (show) visibleCount++;
      });
      var emptyState = document.querySelector("[data-blog-empty]");
      if (emptyState) emptyState.classList.toggle("hidden", visibleCount !== 0);
    }
    if (blogSearch) blogSearch.addEventListener("input", applyBlogFilters);
    blogFilterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        blogFilterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        applyBlogFilters();
      });
    });

    /* ---------------- Reveal on scroll ---------------- */
    var revealEls = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window && revealEls.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  });
})();
