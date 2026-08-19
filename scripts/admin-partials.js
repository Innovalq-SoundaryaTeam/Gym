const { icon, renderHead, themeToggleButton, dirToggleButton } = require("./partials");
const { sidebar, topbar } = require("./dash-partials");

const ADMIN_NAV = [
  { key: "analytics", label: "Analytics", href: "index.html", icon: "chartBar" },
  { key: "users", label: "Users", href: "users.html", icon: "users" },
  { key: "orders", label: "Orders", href: "orders.html", icon: "creditCard" },
  { key: "messages", label: "Messages", href: "messages.html", icon: "messageCircle" },
];

function adminShell({ title, base, active, content }) {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
${renderHead({ title, description: "PULSE admin dashboard — analytics, users, orders and member messages.", base })}
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js"></script>
</head>
<body class="bg-ink-50/60 dark:bg-ink-950">
  ${sidebar({ active, base, nav: ADMIN_NAV, brandHref: `${base}admin/index.html`, roleLabel: "Admin Console" })}
  <div class="lg:pl-72 rtl:lg:pl-0 rtl:lg:pr-72">
    ${topbar({ title, base, userName: "Divya Suresh", userAvatar: "avatar-8", notifCount: true, roleLabel: "Admin Console", accountHref: `${base}admin/index.html` })}
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

module.exports = { adminShell, ADMIN_NAV };
