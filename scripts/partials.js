const { icon } = require("./icons");

const NAV = [
  { key: "home", label: "Home", href: "index.html", dropdown: [
      { label: "Home — General Landing", href: "index.html", desc: "Modern multi-service gym landing" },
      { label: "Home — Elite Studio", href: "home-2.html", desc: "Boutique / premium studio concept" },
    ] },
  { key: "about", label: "About", href: "about.html" },
  { key: "classes", label: "Classes", href: "classes.html" },
  { key: "trainers", label: "Trainers", href: "trainers.html" },
  { key: "blog", label: "Blog", href: "blog.html" },
  { key: "membership", label: "Membership", href: "membership.html" },
  { key: "contact", label: "Contact", href: "contact.html" },
];

function logoMark(cls) {
  // Inlined (not <img>) so the wordmark's fill="currentColor" correctly
  // inherits the surrounding text color in both light & dark mode.
  return `
  <svg viewBox="0 0 180 40" class="${cls || 'h-7 w-auto'}" style="direction:ltr" role="img" aria-label="PULSE Fitness Studio">
    <g>
      <rect x="0" y="14" width="6" height="12" rx="1.5" fill="#c4ff1e"/>
      <rect x="8" y="9" width="6" height="22" rx="1.5" fill="#c4ff1e"/>
      <rect x="16" y="17" width="10" height="6" rx="1.5" fill="#c4ff1e"/>
      <rect x="28" y="9" width="6" height="22" rx="1.5" fill="#c4ff1e"/>
      <rect x="36" y="14" width="6" height="12" rx="1.5" fill="#c4ff1e"/>
    </g>
    <text x="50" y="28" font-family="Sora, Arial, sans-serif" font-weight="800" font-size="24" letter-spacing="0.5" fill="currentColor" style="direction:ltr;unicode-bidi:bidi-override">PULSE</text>
  </svg>`;
}

function themeToggleButton(size) {
  return `
  <button type="button" data-theme-toggle aria-label="Toggle dark / light mode"
    class="relative flex ${size || 'h-10 w-10'} items-center justify-center rounded-full border border-ink-200 text-ink-600 hover:border-ink-900 hover:text-ink-950 dark:border-ink-700 dark:text-ink-300 dark:hover:border-white dark:hover:text-white transition-colors">
    <span data-theme-icon="light" class="absolute [&[data-active=false]]:hidden">${icon("sun", "h-[18px] w-[18px]")}</span>
    <span data-theme-icon="dark" class="absolute [&[data-active=false]]:hidden">${icon("moon", "h-[18px] w-[18px]")}</span>
  </button>`;
}

function dirToggleButton(size) {
  return `
  <button type="button" data-dir-toggle aria-label="Toggle LTR / RTL layout"
    class="flex ${size || 'h-10 w-10'} items-center justify-center rounded-full border border-ink-200 text-ink-600 hover:border-ink-900 hover:text-ink-950 dark:border-ink-700 dark:text-ink-300 dark:hover:border-white dark:hover:text-white transition-colors" title="Toggle RTL / LTR">
    ${icon("textDirection", "h-[18px] w-[18px]")}
  </button>`;
}

function renderHead({ title, description, base = "", bodyId = "" }) {
  const fullTitle = `${title} · PULSE Fitness Studio`;
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${fullTitle}</title>
  <meta name="description" content="${description}" />
  <meta name="theme-color" content="#0a0d10" />

  <!-- Open Graph / social preview -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${base}assets/images/banners/hero-1.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${description}" />

  <link rel="icon" type="image/svg+xml" href="${base}assets/images/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${base}assets/css/style.css" />
  <script>
    (function(){
      try {
        var t = localStorage.getItem('pulse-theme');
        if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        }
        var d = localStorage.getItem('pulse-dir');
        if (d === 'rtl') document.documentElement.setAttribute('dir','rtl');
      } catch(e){}
    })();
  </script>`;
}

function renderNavDesktop(active, base) {
  return NAV.map((item) => {
    const isActive = item.key === active;
    const activeCls = isActive ? "active" : "";
    if (item.dropdown) {
      return `
      <div class="relative" data-dropdown>
        <a href="${base}${item.href}" data-dropdown-trigger class="nav-link ${activeCls} flex items-center gap-1">
          ${item.label}
          ${icon("chevronDown", "h-3.5 w-3.5 opacity-60")}
        </a>
        <div data-dropdown-panel class="invisible absolute left-1/2 top-full z-40 mt-3 w-72 -translate-x-1/2 translate-y-1 rounded-2xl border border-ink-100 bg-white p-2 opacity-0 shadow-card transition-all duration-200 dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark">
          ${item.dropdown.map((d) => `
          <a href="${base}${d.href}" class="flex flex-col rounded-xl px-4 py-3 hover:bg-ink-50 dark:hover:bg-ink-800">
            <span class="text-sm font-semibold text-ink-900 dark:text-white">${d.label}</span>
            <span class="mt-0.5 text-xs text-ink-500 dark:text-ink-400">${d.desc}</span>
          </a>`).join("")}
        </div>
      </div>`;
    }
    return `<a href="${base}${item.href}" class="nav-link ${activeCls}">${item.label}</a>`;
  }).join("\n");
}

function renderNavMobile(active, base) {
  return NAV.map((item) => {
    const isActive = item.key === active;
    return `
    <div class="border-b border-ink-100 py-1 dark:border-ink-800">
      <a href="${base}${item.href}" class="flex items-center justify-between py-3 text-base font-semibold ${isActive ? "text-volt-600 dark:text-volt-300" : "text-ink-800 dark:text-ink-100"}">${item.label}</a>
      ${item.dropdown ? `<div class="pb-2 pl-3">${item.dropdown.map((d) => `<a href="${base}${d.href}" class="block py-2 text-sm text-ink-500 dark:text-ink-400">${d.label}</a>`).join("")}</div>` : ""}
    </div>`;
  }).join("\n");
}

function renderHeader({ active = "", base = "" }) {
  return `
  <header data-site-header class="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-lg transition-shadow duration-300 dark:border-ink-800 dark:bg-ink-950/90 [&.is-scrolled]:shadow-sm">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
      <a href="${base}index.html" class="flex items-center gap-2 text-ink-950 dark:text-white shrink-0">
        ${logoMark("h-7 w-auto")}
      </a>

      <nav class="hidden items-center gap-7 lg:flex">
        ${renderNavDesktop(active, base)}
      </nav>

      <div class="hidden items-center gap-2 lg:flex">
        ${themeToggleButton()}
        ${dirToggleButton()}
        <a href="${base}login.html" class="btn-outline btn-sm">Log In</a>
        <a href="${base}membership.html" class="btn-primary btn-sm">
          Join Now ${icon("arrowRight", "h-4 w-4")}
        </a>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        ${themeToggleButton("h-9 w-9")}
        <button type="button" data-menu-toggle aria-label="Open menu" aria-expanded="false"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 dark:border-ink-700 dark:text-ink-200">
          ${icon("menu", "h-5 w-5")}
        </button>
      </div>
    </div>

    <div data-mobile-nav class="hidden fixed inset-x-0 top-[65px] z-40 h-[calc(100vh-65px)] overflow-y-auto bg-white px-5 pb-24 pt-2 dark:bg-ink-950 lg:hidden">
      ${renderNavMobile(active, base)}
      <div class="mt-5 flex flex-col gap-3">
        <a href="${base}login.html" class="btn-outline btn-block">Log In</a>
        <a href="${base}register.html" class="btn-primary btn-block">Join Now</a>
        <button type="button" data-dir-toggle class="btn-ghost btn-block justify-center">${icon("textDirection","h-4 w-4")} Toggle RTL / LTR</button>
      </div>
    </div>
  </header>`;
}

function renderFooter({ base = "" }) {
  return `
  <footer class="border-t border-ink-100 bg-ink-50/60 pt-16 dark:border-ink-800 dark:bg-ink-900/40">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
        <div class="lg:col-span-2">
          <a href="${base}index.html" class="flex items-center gap-2 text-ink-950 dark:text-white">
            ${logoMark("h-7 w-auto")}
          </a>
          <p class="mt-4 max-w-xs text-sm text-ink-500 dark:text-ink-400">Your neighbourhood strength &amp; conditioning gym — expert coaching, honest programming, and a community that shows up.</p>
          <div class="mt-5 flex items-center gap-3">
            ${[["facebook","https://www.facebook.com/"],["instagram","https://www.instagram.com/"],["x","https://www.x.com/"],["youtube","https://www.youtube.com/"],["linkedin","https://www.linkedin.com/"]].map(([s,url]) => `
            <a href="${url}" target="_blank" rel="noopener" aria-label="${s}" class="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 hover:border-volt-500 hover:text-volt-600 dark:border-ink-700 dark:text-ink-400 dark:hover:text-volt-300 transition-colors">${icon(s, "h-4 w-4")}</a>`).join("")}
          </div>
        </div>
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-ink-900 dark:text-white">Explore</p>
          <ul class="mt-4 space-y-2.5 text-sm text-ink-500 dark:text-ink-400">
            <li><a href="${base}about.html" class="hover:text-volt-600 dark:hover:text-volt-300">About Us</a></li>
            <li><a href="${base}classes.html" class="hover:text-volt-600 dark:hover:text-volt-300">Classes</a></li>
            <li><a href="${base}trainers.html" class="hover:text-volt-600 dark:hover:text-volt-300">Trainers</a></li>
            <li><a href="${base}membership.html" class="hover:text-volt-600 dark:hover:text-volt-300">Membership</a></li>
            <li><a href="${base}blog.html" class="hover:text-volt-600 dark:hover:text-volt-300">Blog</a></li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-ink-900 dark:text-white">Account</p>
          <ul class="mt-4 space-y-2.5 text-sm text-ink-500 dark:text-ink-400">
            <li><a href="${base}login.html" class="hover:text-volt-600 dark:hover:text-volt-300">Member Login</a></li>
            <li><a href="${base}register.html" class="hover:text-volt-600 dark:hover:text-volt-300">Join / Register</a></li>
            <li><a href="${base}dashboard/index.html" class="hover:text-volt-600 dark:hover:text-volt-300">Member Dashboard</a></li>
            <li><a href="${base}admin/index.html" class="hover:text-volt-600 dark:hover:text-volt-300">Admin Dashboard</a></li>
            <li><a href="${base}pricing.html" class="hover:text-volt-600 dark:hover:text-volt-300">Pricing</a></li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-ink-900 dark:text-white">Contact</p>
          <ul class="mt-4 space-y-3 text-sm text-ink-500 dark:text-ink-400">
            <li class="flex items-start gap-2.5">${icon("mapPin", "h-4 w-4 mt-0.5 shrink-0 text-volt-600 dark:text-volt-300")}<span>221 Baker Street, Camden,<br/>London NW1 6XE</span></li>
            <li class="flex items-center gap-2.5">${icon("phone", "h-4 w-4 shrink-0 text-volt-600 dark:text-volt-300")}<span>+44 20 7946 0958</span></li>
            <li class="flex items-center gap-2.5">${icon("mail", "h-4 w-4 shrink-0 text-volt-600 dark:text-volt-300")}<span>hello@pulsefitness.studio</span></li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-center justify-between gap-4 border-t border-ink-200/70 py-6 text-xs text-ink-500 dark:border-ink-800 dark:text-ink-500 sm:flex-row">
        <p>© <span data-current-year>2026</span> PULSE Fitness Studio. All rights reserved.</p>
        <div class="flex items-center gap-5">
          <a href="${base}404.html" class="hover:text-volt-600 dark:hover:text-volt-300">404 Page</a>
          <a href="${base}coming-soon.html" class="hover:text-volt-600 dark:hover:text-volt-300">Coming Soon</a>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
  <button type="button" data-back-to-top aria-label="Back to top" class="fixed bottom-6 ltr:right-6 rtl:left-6 z-40 flex h-11 w-11 invisible items-center justify-center rounded-full bg-ink-950 text-white opacity-0 shadow-lg transition-all hover:bg-ink-800 dark:bg-white dark:text-ink-950">
    ${icon("chevronDown", "h-5 w-5 -rotate-180")}
  </button>`;
}

function pageWrapMinimal({ title, description, base, content, extraScripts = "" }) {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
${renderHead({ title, description, base })}
</head>
<body>
${content}
<script src="${base}assets/js/main.js"></script>
${extraScripts}
</body>
</html>
`;
}

function pageWrap({ title, description, base, active, bodyClass, content, extraHead = "", extraScripts = "" }) {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
${renderHead({ title, description, base })}
${extraHead}
</head>
<body class="${bodyClass || ""}">
${renderHeader({ active, base })}
${content}
${renderFooter({ base })}
<script src="${base}assets/js/main.js"></script>
${extraScripts}
</body>
</html>
`;
}

module.exports = { NAV, renderHead, renderHeader, renderFooter, pageWrap, pageWrapMinimal, icon, themeToggleButton, dirToggleButton, logoMark };
