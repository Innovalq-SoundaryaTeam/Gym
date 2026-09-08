const { icon } = require("../icons");

const PLANS = [
  { name: "Basic", price: "29", tag: null, desc: "Gym floor access for self-guided training.", features: { "Gym floor access": true, "Locker room & showers": true, "2 group classes / month": true, "Unlimited group classes": false, "Personal training sessions": false, "Nutrition coaching": false, "Workout plan downloads": false, "Priority class booking": false } },
  { name: "Pro", price: "59", tag: "Most Popular", desc: "Unlimited classes plus dashboard tracking.", features: { "Gym floor access": true, "Locker room & showers": true, "2 group classes / month": true, "Unlimited group classes": true, "Personal training sessions": "1 / month", "Nutrition coaching": false, "Workout plan downloads": true, "Priority class booking": true } },
  { name: "Elite", price: "99", tag: "Best Value", desc: "Full-service coaching & recovery access.", features: { "Gym floor access": true, "Locker room & showers": true, "2 group classes / month": true, "Unlimited group classes": true, "Personal training sessions": "4 / month", "Nutrition coaching": true, "Workout plan downloads": true, "Priority class booking": true } },
];

const ROWS = Object.keys(PLANS[0].features);

module.exports = function membership(base) {
  return `
  <main id="main">
    <section class="bg-ink-950 py-16 sm:py-20">
      <div class="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span class="eyebrow">Membership Plans</span>
        <h1 class="mt-5 text-4xl font-extrabold text-white sm:text-5xl">Simple plans. No lock-in contracts.</h1>
        <p class="mt-4 text-ink-300">Every plan includes full gym floor access. Upgrade for unlimited classes, personal training and nutrition coaching.</p>
        <div class="mt-8 inline-flex items-center gap-1 rounded-full bg-white/10 p-1" data-tabs>
          <button data-tab-btn="monthly" class="tab-btn tab-btn-hero active">Monthly</button>
          <button data-tab-btn="annual" class="tab-btn tab-btn-hero">Annual <span class="ml-1 text-volt-400">(save 15%)</span></button>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div data-tab-panel="monthly" class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        ${PLANS.map((p) => `
        <div class="card relative flex flex-col p-8 ${p.tag ? "ring-2 ring-volt-400" : ""}">
          ${p.tag ? `<span class="badge-pop absolute -top-4 left-8">${p.tag}</span>` : ""}
          <h3 class="text-xl font-bold">${p.name}</h3>
          <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">${p.desc}</p>
          <p class="mt-6 text-4xl font-extrabold">$${p.price}<span class="text-base font-medium text-ink-500 dark:text-ink-400">/mo</span></p>
          <ul class="mt-6 flex-1 space-y-3 text-sm">
            ${ROWS.map((r) => `
            <li class="flex items-start gap-2 ${p.features[r] ? "" : "text-ink-400 dark:text-ink-600"}">
              ${p.features[r] ? icon("checkCircle","mt-0.5 h-4 w-4 shrink-0 text-volt-600 dark:text-volt-400") : icon("xCircle","mt-0.5 h-4 w-4 shrink-0")}
              <span>${r}${typeof p.features[r] === "string" ? ` <span class="font-semibold">(${p.features[r]})</span>` : ""}</span>
            </li>`).join("")}
          </ul>
          <a href="${base}register.html" class="${p.tag ? "btn-primary" : "btn-outline"} btn-block mt-8">Choose ${p.name}</a>
        </div>`).join("")}
      </div>
      <div data-tab-panel="annual" class="hidden grid-cols-1 gap-6 lg:grid-cols-3">
        ${PLANS.map((p) => {
          const annual = Math.round(parseInt(p.price) * 12 * 0.85);
          return `
        <div class="card relative flex flex-col p-8 ${p.tag ? "ring-2 ring-volt-400" : ""}">
          ${p.tag ? `<span class="badge-pop absolute -top-4 left-8">${p.tag}</span>` : ""}
          <h3 class="text-xl font-bold">${p.name}</h3>
          <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">${p.desc}</p>
          <p class="mt-6 text-4xl font-extrabold">$${annual}<span class="text-base font-medium text-ink-500 dark:text-ink-400">/yr</span></p>
          <p class="text-xs text-volt-600 dark:text-volt-400">Save 15% vs monthly billing</p>
          <ul class="mt-6 flex-1 space-y-3 text-sm">
            ${ROWS.map((r) => `
            <li class="flex items-start gap-2 ${p.features[r] ? "" : "text-ink-400 dark:text-ink-600"}">
              ${p.features[r] ? icon("checkCircle","mt-0.5 h-4 w-4 shrink-0 text-volt-600 dark:text-volt-400") : icon("xCircle","mt-0.5 h-4 w-4 shrink-0")}
              <span>${r}${typeof p.features[r] === "string" ? ` <span class="font-semibold">(${p.features[r]})</span>` : ""}</span>
            </li>`).join("")}
          </ul>
          <a href="${base}register.html" class="${p.tag ? "btn-primary" : "btn-outline"} btn-block mt-8">Choose ${p.name}</a>
        </div>`;}).join("")}
      </div>
    </section>

    <!-- COMPARISON TABLE -->
    <section class="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div class="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 class="section-title text-center !text-3xl">Full feature comparison</h2>
        <div class="mt-10 overflow-x-auto rounded-2xl border border-ink-100 bg-white dark:border-ink-800 dark:bg-ink-900">
          <table class="table-clean w-full min-w-[560px]">
            <thead><tr><th class="pl-5">Feature</th><th class="text-center">Basic</th><th class="text-center">Pro</th><th class="pr-5 text-center">Elite</th></tr></thead>
            <tbody>
              ${ROWS.map((r) => `
              <tr>
                <td class="pl-5 font-medium">${r}</td>
                ${PLANS.map((p) => `<td class="text-center">${p.features[r] ? (typeof p.features[r] === "string" ? `<span class="text-xs font-semibold">${p.features[r]}</span>` : icon("check","mx-auto h-4 w-4 text-volt-600 dark:text-volt-400")) : `<span class="text-ink-300 dark:text-ink-700">—</span>`}</td>`).join("")}
              </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <h2 class="section-title text-center !text-3xl">Members on switching to PULSE.</h2>
      <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        ${[
          { q: "Pro plan pays for itself — unlimited classes plus a monthly PT session for less than my old gym's basic tier.", n: "Rhea Chatterjee", a: 2 },
          { q: "No lock-in contract made trying PULSE an easy decision. I upgraded to Elite after month two.", n: "Aman Verma", a: 4 },
          { q: "The nutrition coaching on Elite is worth it alone — my coach adjusts macros every check-in based on real progress.", n: "Nikhil Bhatt", a: 7 },
        ].map((t) => `
        <div class="card flex h-full flex-col p-6">
          <div class="flex gap-0.5 text-volt-500">${Array(5).fill(icon("star","h-4 w-4 fill-current")).join("")}</div>
          <p class="mt-4 text-sm text-ink-600 dark:text-ink-300">"${t.q}"</p>
          <div class="mt-auto flex items-center gap-3 pt-5">
            <img src="${base}assets/images/avatars/avatar-${t.a}.jpg" class="h-10 w-10 shrink-0 rounded-full object-cover" alt="${t.n}" />
            <p class="text-sm font-bold">${t.n}</p>
          </div>
        </div>`).join("")}
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h2 class="section-title text-center !text-3xl">Membership FAQs</h2>
      <div class="mt-10 divide-y divide-ink-100 dark:divide-ink-800" data-accordion>
        ${[
          ["Can I cancel anytime?", "Yes — all plans are month-to-month with no lock-in contract. Cancel anytime from your dashboard."],
          ["Can I pause my membership?", "Absolutely. Pause for up to 60 days a year for travel or injury, right from your member dashboard."],
          ["Is there a joining fee?", "No joining fee for online sign-ups. Walk-in registrations may include a one-time $15 key-fob fee."],
          ["Can I switch plans later?", "Yes, upgrade or downgrade anytime — changes apply from your next billing cycle."],
        ].map((f, i) => `
        <div data-accordion-item data-open="${i===0}">
          <button data-accordion-trigger class="flex w-full items-center justify-between py-4 text-left font-semibold">
            ${f[0]}
            <span data-accordion-icon class="transition-transform duration-200 ${i===0 ? "rotate-45" : ""}">${icon("plus","h-5 w-5 text-volt-600 dark:text-volt-400")}</span>
          </button>
          <div data-accordion-panel class="overflow-hidden transition-all duration-300" style="max-height:${i===0 ? "150px" : "0"}">
            <p class="pb-4 text-sm text-ink-500 dark:text-ink-400">${f[1]}</p>
          </div>
        </div>`).join("")}
      </div>
    </section>
  </main>`;
};
