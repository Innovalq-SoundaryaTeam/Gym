const { icon, renderHead, themeToggleButton, dirToggleButton, logoMark } = require("./partials");

const MEMBER_NAV = [
  { key: "overview", label: "Overview", href: "index.html", icon: "grid" },
  { key: "book", label: "Book Classes", href: "book-classes.html", icon: "calendar" },
  { key: "attendance", label: "Attendance", href: "attendance.html", icon: "activity" },
  { key: "membership", label: "My Membership", href: "membership.html", icon: "creditCard" },
  { key: "workouts", label: "Workout Plans", href: "workout-plans.html", icon: "file" },
];

function sidebar({ active, base, nav, brandHref, roleLabel }) {
  return `
  <aside data-sidebar class="fixed inset-y-0 left-0 z-40 flex w-72 -translate-x-full flex-col border-r border-ink-100 bg-white transition-transform duration-300 dark:border-ink-800 dark:bg-ink-900 lg:translate-x-0 rtl:left-auto rtl:right-0 rtl:translate-x-full rtl:lg:translate-x-0">
    <div class="flex items-center justify-between px-6 py-5">
      <a href="${brandHref}" class="flex items-center gap-2 text-ink-950 dark:text-white">
        ${logoMark("h-6 w-auto")}
      </a>
      <button data-sidebar-close class="text-ink-400 hover:text-ink-700 dark:hover:text-ink-200 lg:hidden">${icon("close","h-5 w-5")}</button>
    </div>
    <span class="mx-6 mb-2 badge-volt w-fit">${roleLabel}</span>
    <nav class="flex-1 space-y-1 overflow-y-auto px-4 py-2">
      ${nav.map((item) => `
      <a href="${item.href}" class="side-link ${item.key === active ? "active" : ""}">
        ${icon(item.icon, "h-[18px] w-[18px]")}
        ${item.label}
      </a>`).join("")}
    </nav>
    <div class="space-y-1 border-t border-ink-100 px-4 py-4 dark:border-ink-800">
      <a href="${base}contact.html" class="side-link">${icon("messageCircle","h-[18px] w-[18px]")}Help &amp; Support</a>
      <a href="${base}index.html" class="side-link">${icon("logOut","h-[18px] w-[18px]")}Exit to Site</a>
    </div>
  </aside>
  <div data-sidebar-backdrop class="fixed inset-0 z-30 hidden bg-ink-950/50 lg:hidden"></div>`;
}

function topbar({ title, base, userName, userAvatar, notifCount, roleLabel, accountHref }) {
  return `
  <header class="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-ink-100 bg-white/85 px-5 py-4 backdrop-blur-lg dark:border-ink-800 dark:bg-ink-950/85 sm:px-8">
    <div class="flex items-center gap-3">
      <button data-sidebar-toggle class="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300 lg:hidden">${icon("menu","h-5 w-5")}</button>
      <h1 class="text-lg font-bold sm:text-xl">${title}</h1>
    </div>
    <div class="flex items-center gap-2 sm:gap-3">
      <div class="relative hidden sm:block">
        ${icon("search","pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400")}
        <input type="search" placeholder="Search…" class="input !py-2 !pl-10 w-52" />
      </div>
      ${themeToggleButton("h-10 w-10")}
      ${dirToggleButton("h-10 w-10")}
      <button class="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300">
        ${icon("bell","h-[18px] w-[18px]")}
        ${notifCount ? `<span class="absolute right-2 top-2 h-2 w-2 rounded-full bg-coral-500"></span>` : ""}
      </button>
      <div class="relative" data-account-menu>
        <button type="button" data-account-menu-trigger class="flex items-center gap-2 rounded-full border border-ink-200 py-1 pl-1 pr-3 dark:border-ink-700">
          <img src="${base}assets/images/avatars/${userAvatar}.jpg" class="h-7 w-7 rounded-full object-cover" alt="${userName}" />
          <span class="hidden text-sm font-semibold sm:block">${userName}</span>
          ${icon("chevronDown","h-3.5 w-3.5 text-ink-400")}
        </button>
        <div data-account-menu-panel class="invisible absolute right-0 top-full z-40 mt-3 w-56 translate-y-1 rounded-2xl border border-ink-100 bg-white p-2 opacity-0 shadow-card transition-all duration-200 dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark rtl:right-auto rtl:left-0">
          <div class="border-b border-ink-100 px-3 py-2 dark:border-ink-800">
            <p class="text-sm font-semibold">${userName}</p>
            <p class="text-xs text-ink-400">${roleLabel}</p>
          </div>
          <a href="${accountHref}" class="menu-link">${icon("user","h-4 w-4")}View Profile</a>
          <a href="${accountHref}" class="menu-link">${icon("settings","h-4 w-4")}Account Settings</a>
          <a href="${base}contact.html" class="menu-link">${icon("messageCircle","h-4 w-4")}Help &amp; Support</a>
          <div class="my-1 border-t border-ink-100 dark:border-ink-800"></div>
          <a href="${base}login.html" class="menu-link !text-coral-500">${icon("logOut","h-4 w-4")}Log Out</a>
        </div>
      </div>
    </div>
  </header>`;
}

function dashShell({ title, base, active, content, type }) {
  const nav = MEMBER_NAV;
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
${renderHead({ title, description: "PULSE member dashboard — book classes, track attendance and access your workout plans.", base })}
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js"></script>
</head>
<body class="bg-ink-50/60 dark:bg-ink-950">
  ${sidebar({ active, base, nav, brandHref: `${base}index.html`, roleLabel: "Member Portal" })}
  <div class="lg:pl-72 rtl:lg:pl-0 rtl:lg:pr-72">
    ${topbar({ title, base, userName: "Kabir Singh", userAvatar: "avatar-6", notifCount: true, roleLabel: "Member Portal", accountHref: `${base}dashboard/membership.html` })}
    <main class="px-5 py-8 sm:px-8">
      ${content}
    </main>
  </div>
<script src="${base}assets/js/main.js"></script>
<script src="${base}assets/js/dashboard.js"></script>
</body>
</html>
`;
}

module.exports = { dashShell, sidebar, topbar, MEMBER_NAV };
