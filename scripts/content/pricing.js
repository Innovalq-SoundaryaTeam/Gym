const { icon } = require("../icons");

module.exports = function pricing(base) {
  return `
  <main id="main">
    <section class="bg-ink-950 py-16 sm:py-20">
      <div class="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span class="eyebrow">Pricing</span>
        <h1 class="mt-5 text-4xl font-extrabold text-white sm:text-5xl">Transparent pricing, no surprises.</h1>
        <p class="mt-4 text-ink-300">Looking for a full membership instead? Compare plans on the <a href="${base}membership.html" class="text-volt-400 underline">Membership page</a>.</p>
      </div>
    </section>

    <!-- A LA CARTE SERVICES -->
    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <h2 class="section-title text-center !text-3xl">À la carte services</h2>
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${[
          { i: "dumbbell", t: "Single Class Drop-in", p: "$18", u: "/ session", d: "Access to any group class, no membership required." },
          { i: "target", t: "Personal Training", p: "$45", u: "/ session", d: "1:1 coaching, fully customised to your goals." },
          { i: "users", t: "Small Group Training", p: "$28", u: "/ person", d: "Semi-private sessions for 2–4 people." },
          { i: "activity", t: "Nutrition Consult", p: "$65", u: "/ session", d: "60-minute deep-dive with a certified coach." },
          { i: "award", t: "Body Composition Scan", p: "$25", u: "/ scan", d: "InBody scan with a full results walkthrough." },
          { i: "shield", t: "Recovery Suite Access", p: "$12", u: "/ visit", d: "Sauna, compression boots & foam rolling bay." },
        ].map((s) => `
        <div class="card p-6">
          <div class="icon-tile">${icon(s.i,"h-5 w-5")}</div>
          <h3 class="mt-4 font-bold">${s.t}</h3>
          <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">${s.d}</p>
          <p class="mt-4 text-2xl font-extrabold">${s.p}<span class="text-sm font-medium text-ink-500 dark:text-ink-400">${s.u}</span></p>
          <a href="${base}contact.html" class="btn-outline btn-block mt-5">Book This</a>
        </div>`).join("")}
      </div>
    </section>

    <!-- CLASS PACKS -->
    <section class="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 class="section-title text-center !text-3xl">Class packs</h2>
        <p class="section-sub mx-auto text-center">No membership? Buy a pack and use it whenever suits you — packs never expire.</p>
        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          ${[
            { t: "4-Class Pack", p: "$65", per: "$16.25 / class" },
            { t: "8-Class Pack", p: "$118", per: "$14.75 / class", tag: "Most Popular" },
            { t: "12-Class Pack", p: "$162", per: "$13.50 / class" },
          ].map((c) => `
          <div class="card relative p-7 text-center ${c.tag ? "ring-2 ring-volt-400" : ""}">
            ${c.tag ? `<span class="badge-pop absolute -top-4 left-1/2 -translate-x-1/2">${c.tag}</span>` : ""}
            <p class="font-bold">${c.t}</p>
            <p class="mt-3 text-3xl font-extrabold">${c.p}</p>
            <p class="mt-1 text-xs text-ink-500 dark:text-ink-400">${c.per}</p>
            <a href="${base}register.html" class="btn-primary btn-block mt-5">Buy Pack</a>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="flex flex-col items-center justify-between gap-6 rounded-3xl bg-ink-950 px-8 py-12 text-center sm:flex-row sm:px-12 sm:text-left">
        <div>
          <h2 class="text-2xl font-bold text-white">Not sure what fits your goals?</h2>
          <p class="mt-2 text-ink-300">Book a free 15-minute consult with a coach — no pressure, just a plan.</p>
        </div>
        <a href="${base}contact.html" class="btn-primary btn-lg shrink-0">Book Free Consult</a>
      </div>
    </section>
  </main>`;
};
