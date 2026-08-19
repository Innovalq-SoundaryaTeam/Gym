const { icon } = require("../icons");

module.exports = function classDetails(base) {
  return `
  <main id="main">

    <!-- HEADER -->
    <section class="relative overflow-hidden bg-ink-950 py-16 sm:py-20">
      <img src="${base}assets/images/banners/facility-weights.svg" class="absolute inset-0 h-full w-full object-cover opacity-40" alt="" />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/20"></div>
      <div class="relative mx-auto max-w-5xl px-5 sm:px-8">
        <nav class="flex items-center gap-2 text-xs text-ink-400">
          <a href="${base}index.html" class="hover:text-white">Home</a>${icon("chevronRight","h-3.5 w-3.5")}
          <a href="${base}classes.html" class="hover:text-white">Classes</a>${icon("chevronRight","h-3.5 w-3.5")}
          <span class="text-white">Strength Lab</span>
        </nav>
        <div class="mt-5 flex flex-wrap items-center gap-3">
          <span class="badge-volt">Strength</span>
          <span class="badge-ink !bg-white/10 !text-white">Intermediate</span>
        </div>
        <h1 class="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Strength Lab</h1>
        <p class="mt-4 max-w-2xl text-ink-300">A barbell-first strength program built around the big lifts — squat,
          bench, deadlift and overhead press — with accessory work programmed for balanced, injury-resistant gains.</p>
      </div>
    </section>

    <div class="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 lg:grid-cols-3">
      <div class="lg:col-span-2">

        <!-- Quick facts -->
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          ${[
            ["clock","55 min","Duration"],
            ["users","12 max","Class size"],
            ["award","Arjun Mehta","Lead coach"],
            ["mapPin","Weights Zone","Studio"],
          ].map(([i,v,l]) => `
          <div class="rounded-2xl border border-ink-100 p-4 text-center dark:border-ink-800">
            ${icon(i,"mx-auto h-5 w-5 text-volt-600 dark:text-volt-400")}
            <p class="mt-2 text-sm font-bold">${v}</p>
            <p class="text-[11px] text-ink-500 dark:text-ink-400">${l}</p>
          </div>`).join("")}
        </div>

        <!-- Description -->
        <div class="prose prose-ink mt-10 max-w-none dark:prose-invert">
          <h2 class="section-title !text-2xl">About this class</h2>
          <p class="mt-4 text-ink-600 dark:text-ink-300">Strength Lab runs on a 12-week periodized cycle. Each
            session opens with a movement-specific warm-up, followed by a primary barbell lift worked up to a
            planned top set, then two to three accessory movements targeting weak points. Every set, rep and weight
            is logged to your member dashboard so you and your coach can track progress week over week.</p>
          <p class="mt-4 text-ink-600 dark:text-ink-300">This class suits lifters who already know how to squat,
            bench and deadlift with reasonable form and want structured progression rather than random workouts.
            New to barbell training? Start with our free "Barbell Basics" orientation session — ask any coach at
            the front desk or message us from your dashboard.</p>
          <h3 class="mt-8 text-xl font-bold">What's included</h3>
          <ul class="mt-3 space-y-2">
            ${["12-week periodized programming","Weekly 1:1 form check with your coach","Access to the Strength Lab app-tracked logbook","Monthly progress & PR review"].map((f) => `<li class="flex items-start gap-2 text-ink-600 dark:text-ink-300">${icon("check","mt-0.5 h-4 w-4 shrink-0 text-volt-600 dark:text-volt-400")}${f}</li>`).join("")}
          </ul>
        </div>

        <!-- Schedule -->
        <div class="mt-12">
          <h2 class="section-title !text-2xl">Weekly schedule</h2>
          <div class="mt-5 overflow-hidden rounded-2xl border border-ink-100 dark:border-ink-800">
            <table class="table-clean">
              <thead><tr><th class="pl-5">Day</th><th>Time</th><th>Coach</th><th class="pr-5">Availability</th></tr></thead>
              <tbody>
                ${[
                  ["Monday","6:00 AM & 6:00 PM","Arjun Mehta","4 spots left"],
                  ["Wednesday","6:00 AM & 6:00 PM","Arjun Mehta","Open"],
                  ["Friday","6:00 AM & 6:00 PM","Vikram Rao","2 spots left"],
                ].map((r) => `<tr><td class="pl-5 font-semibold">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td class="pr-5"><span class="badge-volt">${r[3]}</span></td></tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- FAQ -->
        <div class="mt-12">
          <h2 class="section-title !text-2xl">Frequently asked questions</h2>
          <div class="mt-5 divide-y divide-ink-100 dark:divide-ink-800" data-accordion>
            ${[
              ["Do I need my own equipment?", "No — all barbells, plates, racks and accessories are provided. Just bring gym shoes and a water bottle."],
              ["Can beginners join Strength Lab?", "You should be comfortable with basic barbell mechanics. If you're new, book a free Barbell Basics orientation first."],
              ["What if I miss a session?", "Missed sessions can be made up in any other Strength Lab slot that week, subject to space — just rebook from your dashboard."],
              ["Is nutrition coaching included?", "Base plans focus on training. Add nutrition coaching as an add-on from the Membership page."],
            ].map((f, i) => `
            <div data-accordion-item data-open="${i===0}">
              <button data-accordion-trigger class="flex w-full items-center justify-between py-4 text-left font-semibold">
                ${f[0]}
                <span data-accordion-icon class="transition-transform duration-200 ${i===0 ? "rotate-45" : ""}">${icon("plus","h-5 w-5 text-volt-600 dark:text-volt-400")}</span>
              </button>
              <div data-accordion-panel class="overflow-hidden transition-all duration-300" style="max-height:${i===0 ? "200px" : "0"}">
                <p class="pb-4 text-sm text-ink-500 dark:text-ink-400">${f[1]}</p>
              </div>
            </div>`).join("")}
          </div>
        </div>
      </div>

      <!-- SIDEBAR -->
      <aside class="space-y-6">
        <div class="card sticky top-24 p-6">
          <p class="text-sm text-ink-500 dark:text-ink-400">Starting from</p>
          <p class="mt-1 text-3xl font-extrabold">$49<span class="text-base font-medium text-ink-500 dark:text-ink-400">/mo</span></p>
          <p class="mt-1 text-xs text-ink-400">Included free with Pro &amp; Elite memberships</p>
          <a href="${base}dashboard/book-classes.html" class="btn-primary btn-block mt-5">Reserve a Slot</a>
          <a href="${base}membership.html" class="btn-outline btn-block mt-3">See Membership Plans</a>
          <div class="mt-6 divide-y divide-ink-100 border-t border-ink-100 text-sm dark:divide-ink-800 dark:border-ink-800">
            ${[["Level","Intermediate"],["Duration","55 minutes"],["Class size","12 max"],["Studio","Weights Zone"]].map(([k,v]) => `<div class="flex items-center justify-between py-2.5"><span class="text-ink-500 dark:text-ink-400">${k}</span><span class="font-semibold">${v}</span></div>`).join("")}
          </div>
        </div>

        <!-- pricing table -->
        <div class="card p-6">
          <p class="font-bold">Pricing options</p>
          <div class="mt-4 space-y-3">
            ${[
              ["Drop-in", "$18", "single session"],
              ["4-Class Pack", "$65", "$16.25 / class"],
              ["Unlimited (Pro plan)", "Included", "with Pro membership"],
            ].map(([t,p,s]) => `
            <div class="flex items-center justify-between rounded-xl border border-ink-100 px-4 py-3 dark:border-ink-800">
              <div><p class="text-sm font-semibold">${t}</p><p class="text-xs text-ink-500 dark:text-ink-400">${s}</p></div>
              <p class="font-bold text-volt-600 dark:text-volt-400">${p}</p>
            </div>`).join("")}
          </div>
        </div>

        <div class="card p-6">
          <p class="font-bold">Your coach</p>
          <div class="mt-4 flex items-center gap-3">
            <img src="${base}assets/images/avatars/avatar-1.svg" class="h-14 w-14 rounded-full" alt="Arjun Mehta" />
            <div>
              <p class="font-bold">Arjun Mehta</p>
              <p class="text-xs text-ink-500 dark:text-ink-400">Strength & Powerlifting</p>
            </div>
          </div>
          <a href="${base}trainers.html" class="btn-ghost btn-block mt-4 !justify-start !px-0">View profile ${icon("arrowRight","h-4 w-4")}</a>
        </div>
      </aside>
    </div>

  </main>`;
};
