const { icon } = require("../icons");

module.exports = function dashMembership(base) {
  return `
  <h2 class="text-2xl font-bold">My Membership</h2>
  <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Review your plan, renewal date and billing history.</p>

  <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
    <!-- CURRENT PLAN -->
    <div class="card relative overflow-hidden p-7 lg:col-span-2">
      <img src="${base}assets/images/banners/cta-band.jpg" class="absolute inset-0 h-full w-full object-cover opacity-10" alt="" />
      <div class="relative flex flex-wrap items-start justify-between gap-4">
        <div>
          <span class="badge-volt">Active Plan</span>
          <h3 class="mt-3 text-2xl font-extrabold">Pro Membership</h3>
          <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Unlimited group classes + 1 PT session / month</p>
        </div>
        <p class="text-3xl font-extrabold">$59<span class="text-sm font-medium text-ink-500 dark:text-ink-400">/mo</span></p>
      </div>
      <div class="relative mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        ${[["Member Since","Mar 2023"],["Renewal Date","Sep 01, 2026"],["Billing Cycle","Monthly"],["Home Studio","Camden"]].map(([k,v]) => `
        <div class="rounded-xl border border-ink-100 p-3 text-center dark:border-ink-800">
          <p class="text-[11px] text-ink-500 dark:text-ink-400">${k}</p>
          <p class="mt-1 text-sm font-bold">${v}</p>
        </div>`).join("")}
      </div>
      <div class="relative mt-6">
        <div class="flex items-center justify-between text-xs text-ink-500 dark:text-ink-400">
          <span>Current cycle</span><span>14 / 30 days used</span>
        </div>
        <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
          <div class="h-full w-[47%] rounded-full bg-volt-400"></div>
        </div>
      </div>
      <div class="relative mt-6 flex flex-wrap gap-3">
        <a href="${base}membership.html" class="btn-primary">Upgrade Plan</a>
        <button class="btn-outline">Change Billing Cycle</button>
        <button class="btn-ghost !text-coral-500">Cancel Membership</button>
      </div>
    </div>

    <!-- PAYMENT METHOD -->
    <div class="card p-7">
      <p class="font-bold">Payment Method</p>
      <div class="mt-4 flex items-center gap-3 rounded-xl border border-ink-100 p-4 dark:border-ink-800">
        <div class="icon-tile">${icon("creditCard","h-5 w-5")}</div>
        <div>
          <p class="text-sm font-semibold">Visa •••• 4021</p>
          <p class="text-xs text-ink-500 dark:text-ink-400">Expires 08/28</p>
        </div>
      </div>
      <button class="btn-outline btn-block mt-4">Update Payment Method</button>
      <div class="mt-6 rounded-xl bg-ink-50 p-4 text-xs text-ink-500 dark:bg-ink-900/60 dark:text-ink-400">
        ${icon("shield","mb-1 h-4 w-4 text-volt-600 dark:text-volt-400")}
        Payments are securely processed. PULSE never stores your full card number.
      </div>
    </div>
  </div>

  <!-- BILLING HISTORY -->
  <div class="card mt-8 overflow-x-auto p-6">
    <p class="font-bold">Billing History</p>
    <table class="table-clean mt-4 min-w-[560px]">
      <thead><tr><th>Invoice</th><th>Date</th><th>Plan</th><th>Amount</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${[
          ["INV-2026-08", "Aug 01, 2026", "Pro Monthly", "$59.00", "Paid"],
          ["INV-2026-07", "Jul 01, 2026", "Pro Monthly", "$59.00", "Paid"],
          ["INV-2026-06", "Jun 01, 2026", "Pro Monthly", "$59.00", "Paid"],
          ["INV-2026-05", "May 01, 2026", "Basic Monthly", "$29.00", "Paid"],
        ].map((r) => `
        <tr>
          <td class="font-semibold">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td>
          <td><span class="badge-volt">${r[4]}</span></td>
          <td><a href="#" class="inline-flex items-center gap-1 text-xs font-semibold text-volt-600 dark:text-volt-400">${icon("download","h-3.5 w-3.5")}PDF</a></td>
        </tr>`).join("")}
      </tbody>
    </table>
  </div>
  `;
};
