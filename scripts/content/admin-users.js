const { icon } = require("../icons");

const MEMBER_NAMES = ["Meera Sharma", "Kabir Singh", "Ayesha Khan", "Sara Ahmed", "Manav Joshi", "Neha Kulkarni", "Rohan Kapoor", "Tanya Malhotra", "Yusuf Ali", "Ananya Gupta", "Priya Desai"];
const STAFF = [
  { n: "Arjun Mehta", e: "arjun.mehta@pulsefitness.studio", plan: "Staff — Coach", joined: "Jan 05, 2014", a: 1 },
  { n: "Priya Nair", e: "priya.nair@pulsefitness.studio", plan: "Staff — Coach", joined: "Feb 18, 2018", a: 2 },
  { n: "Rohan Kapoor", e: "rohan.kapoor@pulsefitness.studio", plan: "Staff — Coach", joined: "Mar 22, 2019", a: 3 },
  { n: "Sana Sheikh", e: "sana.sheikh@pulsefitness.studio", plan: "Staff — Coach", joined: "Jun 09, 2020", a: 4 },
  { n: "Vikram Rao", e: "vikram.rao@pulsefitness.studio", plan: "Staff — Coach", joined: "Sep 14, 2021", a: 5 },
  { n: "Isha Verma", e: "isha.verma@pulsefitness.studio", plan: "Staff — Coach", joined: "Nov 03, 2021", a: 6 },
  { n: "Karan Malhotra", e: "karan.malhotra@pulsefitness.studio", plan: "Staff — Coach", joined: "Apr 17, 2022", a: 7 },
  { n: "Divya Suresh", e: "divya.suresh@pulsefitness.studio", plan: "Staff — Admin", joined: "Jul 01, 2019", a: 8 },
];
const PLANS = ["Pro", "Basic", "Elite"];
const AVATARS = [9, 10, 11, 12, 6, 1, 2, 3, 4, 5, 7];
const STATUS_CYCLE = ["Active", "Active", "Active", "Payment Due", "Active", "Paused", "Active", "Active"];
const STATUS_CLS = { "Active": "badge-volt", "Payment Due": "badge-coral", "Paused": "badge-ink" };

const MEMBERS = Array.from({ length: 28 }, (_, i) => {
  var n = MEMBER_NAMES[i % MEMBER_NAMES.length];
  var slug = n.toLowerCase().replace(/\s+/g, ".");
  var day = 16 - (i % 28);
  var month = day > 0 ? "Aug" : "Jul";
  var dayNum = ((day - 1 + 31) % 31) + 1;
  return {
    n: i < MEMBER_NAMES.length ? n : n + " " + (Math.floor(i / MEMBER_NAMES.length) + 1),
    e: slug + (i >= MEMBER_NAMES.length ? (Math.floor(i / MEMBER_NAMES.length) + 1) : "") + "@email.com",
    plan: PLANS[i % PLANS.length],
    status: STATUS_CYCLE[i % STATUS_CYCLE.length],
    joined: month + " " + String(dayNum).padStart(2, "0") + ", 2026",
    a: AVATARS[i % AVATARS.length],
  };
});

const USERS = MEMBERS.concat(STAFF.map((s) => ({ ...s, status: "Active" })));

module.exports = function adminUsers(base) {
  return `
  <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="text-2xl font-bold">Users</h2>
      <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Manage members and staff across all studios.</p>
    </div>
    <button class="btn-primary shrink-0">${icon("plus","h-4 w-4")} Add User</button>
  </div>

  <div class="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
    ${[["users","1,252","Total Users"],["checkCircle","1,198","Active"],["alertTriangle","32","Payment Due"],["user","86","New This Month"]].map(([i,v,l]) => `
    <div class="card p-5">
      <div class="icon-tile">${icon(i,"h-5 w-5")}</div>
      <p class="mt-4 text-2xl font-extrabold">${v}</p>
      <p class="text-xs text-ink-500 dark:text-ink-400">${l}</p>
    </div>`).join("")}
  </div>

  <div class="card mt-8 p-6" data-paged-table data-page-size="9" data-item-label="users">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="relative w-full sm:max-w-xs">
        ${icon("search","pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400")}
        <input type="search" placeholder="Search users…" class="input !py-2.5 !pl-10" />
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <select class="select w-36 !py-2.5 text-sm"><option>All Plans</option><option>Basic</option><option>Pro</option><option>Elite</option><option>Staff</option></select>
        <select class="select w-36 !py-2.5 text-sm"><option>All Status</option><option>Active</option><option>Paused</option><option>Payment Due</option></select>
        <button class="btn-outline btn-sm">${icon("filter","h-4 w-4")} More Filters</button>
      </div>
    </div>

    <div class="mt-6 overflow-x-auto">
      <table class="table-clean min-w-[720px]">
        <thead>
          <tr>
            <th class="pl-2"><input type="checkbox" class="rounded border-ink-300" /></th>
            <th>User</th><th>Plan</th><th>Status</th><th>Joined</th><th class="pr-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody data-paged-body>
          ${USERS.map((u) => `
          <tr data-row-status="${u.status}">
            <td class="pl-2"><input type="checkbox" class="rounded border-ink-300" /></td>
            <td>
              <div class="flex items-center gap-3">
                <img src="${base}assets/images/avatars/avatar-${u.a}.jpg" class="h-9 w-9 rounded-full object-cover object-top" alt="${u.n}" />
                <div>
                  <p class="font-semibold">${u.n}</p>
                  <p class="text-xs text-ink-500 dark:text-ink-400">${u.e}</p>
                </div>
              </div>
            </td>
            <td>${u.plan}</td>
            <td><span class="${STATUS_CLS[u.status] || "badge-ink"}">${u.status}</span></td>
            <td class="text-ink-500 dark:text-ink-400">${u.joined}</td>
            <td class="pr-2">
              <div class="flex items-center justify-end gap-1.5">
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 hover:bg-ink-100 hover:text-ink-800 dark:hover:bg-ink-800 dark:hover:text-white">${icon("eye","h-4 w-4")}</button>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 hover:bg-ink-100 hover:text-ink-800 dark:hover:bg-ink-800 dark:hover:text-white">${icon("edit","h-4 w-4")}</button>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 hover:bg-coral-500/10 hover:text-coral-500">${icon("trash","h-4 w-4")}</button>
              </div>
            </td>
          </tr>`).join("")}
        </tbody>
      </table>
      <p data-paged-empty class="hidden py-10 text-center text-sm text-ink-500 dark:text-ink-400">No users match this filter.</p>
    </div>

    <div class="mt-6 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-5 text-sm dark:border-ink-800 sm:flex-row">
      <p data-paged-summary class="text-ink-500 dark:text-ink-400"></p>
      <div class="flex items-center gap-2">
        <button data-paged-prev class="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-400 disabled:opacity-40 dark:border-ink-700">${icon("chevronLeft","h-4 w-4")}</button>
        <div class="flex items-center gap-2" data-paged-numbers></div>
        <button data-paged-next class="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-600 disabled:opacity-40 dark:border-ink-700 dark:text-ink-300">${icon("chevronRight","h-4 w-4")}</button>
      </div>
    </div>
  </div>
  `;
};
