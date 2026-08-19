const { icon } = require("../icons");

module.exports = function home2(base) {
  return `
  <main id="main">

    <!-- ============ SPLIT HERO ============ -->
    <section class="mx-auto max-w-7xl px-5 pb-4 pt-10 sm:px-8 sm:pt-16">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div data-reveal class="translate-y-4 opacity-0 transition-all duration-700 order-2 lg:order-1">
          <span class="eyebrow">${icon("award","h-3.5 w-3.5")} Elite Performance Program</span>
          <h1 class="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Precision coaching for people who compete —
            <span class="text-volt-600 dark:text-volt-400">with themselves.</span>
          </h1>
          <p class="section-sub">A boutique performance studio inside PULSE: small-group strength cycles, 1:1
            programming, and data-backed recovery for members who want measurable output, not just a workout.</p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a href="${base}membership.html" class="btn-primary btn-lg">Apply for a Spot ${icon("arrowRight","h-4 w-4")}</a>
            <a href="${base}trainers.html" class="btn-outline btn-lg">Meet the Coaches</a>
          </div>
          <div class="mt-10 grid grid-cols-3 gap-4 max-w-md">
            ${[["6", "week cycles"], ["1:6", "coach ratio"], ["24/7", "studio access"]].map(([n,l]) => `
            <div class="rounded-2xl border border-ink-100 p-4 text-center dark:border-ink-800">
              <p class="text-2xl font-extrabold text-volt-600 dark:text-volt-400">${n}</p>
              <p class="mt-1 text-[11px] uppercase tracking-wide text-ink-500 dark:text-ink-400">${l}</p>
            </div>`).join("")}
          </div>
        </div>
        <div class="relative order-1 lg:order-2" data-reveal>
          <div class="overflow-hidden rounded-3xl">
            <img src="${base}assets/images/banners/hero-2.svg" alt="Elite training session" class="aspect-[4/5] w-full object-cover sm:aspect-square lg:aspect-[4/5]" />
          </div>
          <div class="absolute -left-4 bottom-6 hidden rounded-2xl bg-white p-4 shadow-card dark:bg-ink-900 dark:shadow-card-dark sm:flex items-center gap-3">
            <div class="flex -space-x-3">
              ${[1,2,3,4].map((a) => `<img src="${base}assets/images/avatars/avatar-${a}.svg" class="h-9 w-9 rounded-full ring-2 ring-white dark:ring-ink-900" alt="member" />`).join("")}
            </div>
            <div>
              <p class="text-sm font-bold">240+ athletes</p>
              <p class="text-xs text-ink-500 dark:text-ink-400">enrolled this quarter</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ LOGO / PARTNER STRIP ============ -->
    <section class="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
      <div class="flex flex-wrap items-center justify-between gap-6 border-y border-ink-100 py-6 text-xs font-bold uppercase tracking-widest text-ink-400 dark:border-ink-800">
        <span>As featured in</span>
        ${["Fit&Well","IronPress","City Sport","Recovery Co","MetaFit"].map((n) => `<span class="text-ink-400 dark:text-ink-500">${n}</span>`).join("")}
      </div>
    </section>

    <!-- ============ PROGRAM TIERS ============ -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <span class="eyebrow">Programming Tracks</span>
        <h2 class="section-title mt-4">Three tracks. One methodology.</h2>
        <p class="section-sub mx-auto">Every track is built on the same principles — progressive overload, tracked
          recovery, and honest coaching feedback via your dashboard.</p>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        ${[
          { i: "dumbbell", t: "Strength Performance", d: "Powerlifting-based progression for raw strength gains.", tags: ["Barbell", "1:6 Coaching", "12-week block"] },
          { i: "activity", t: "Hybrid Conditioning", d: "Strength + engine work for CrossFit-style competitors.", tags: ["Metcons", "Mobility", "Weekly testing"] },
          { i: "target", t: "Physique & Recovery", d: "Body recomposition with sleep & nutrition coaching.", tags: ["Macros", "Sauna", "Bi-weekly scans"] },
        ].map((p, i) => `
        <div data-reveal style="transition-delay:${i*80}ms" class="card translate-y-4 p-7 opacity-0 transition-all duration-700 ${i===1 ? "ring-2 ring-volt-400" : ""}">
          ${i===1 ? `<span class="badge-volt mb-3">Most Popular</span>` : ""}
          <div class="icon-tile">${icon(p.i,"h-5 w-5")}</div>
          <h3 class="mt-4 text-xl font-bold">${p.t}</h3>
          <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">${p.d}</p>
          <ul class="mt-5 space-y-2">
            ${p.tags.map((tag) => `<li class="flex items-center gap-2 text-sm">${icon("check","h-4 w-4 text-volt-600 dark:text-volt-400")}${tag}</li>`).join("")}
          </ul>
          <a href="${base}class-details.html" class="btn-outline btn-block mt-6">Learn More</a>
        </div>`).join("")}
      </div>
    </section>

    <!-- ============ RESULTS / STATS ============ -->
    <section class="bg-ink-950 py-20">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          ${[
            ["1,240+", "active members"],
            ["92%", "90-day goal completion"],
            ["4.9/5", "average rating"],
            ["12", "national-certified coaches"],
          ].map(([n,l]) => `
          <div class="text-center">
            <p class="text-4xl font-extrabold text-white sm:text-5xl">${n}</p>
            <p class="mt-2 text-xs uppercase tracking-widest text-ink-400">${l}</p>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- ============ FEATURE SPLIT ============ -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div class="relative order-2 lg:order-1">
          <img src="${base}assets/images/banners/facility-studio.svg" class="w-full rounded-3xl" alt="Studio" />
        </div>
        <div class="order-1 lg:order-2">
          <span class="eyebrow">Member Dashboard</span>
          <h2 class="section-title mt-4">Every rep, tracked. Every booking, effortless.</h2>
          <p class="section-sub">Log in to reserve class slots by day and instructor, review your attendance
            streak, check your renewal date, and download the weekly plan your coach built for you.</p>
          <div class="mt-8 space-y-4">
            ${[
              ["calendar", "Book by day & instructor", "See live seat availability across every studio class."],
              ["chartBar", "Attendance history", "Visualise your consistency with weekly & monthly charts."],
              ["download", "Downloadable workout plans", "Your coach uploads a new plan every Monday, PDF-ready."],
            ].map(([i,t,d]) => `
            <div class="flex gap-4">
              <div class="icon-tile shrink-0">${icon(i,"h-5 w-5")}</div>
              <div><p class="font-bold">${t}</p><p class="mt-1 text-sm text-ink-500 dark:text-ink-400">${d}</p></div>
            </div>`).join("")}
          </div>
          <a href="${base}dashboard/index.html" class="btn-dark mt-8 inline-flex">Preview Dashboard ${icon("arrowRight","h-4 w-4")}</a>
        </div>
      </div>
    </section>

    <!-- ============ CTA ============ -->
    <section class="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div class="rounded-3xl bg-volt-400 px-8 py-14 text-center sm:px-16">
        <h2 class="section-title text-ink-950">Spots for the next cycle are limited.</h2>
        <p class="mx-auto mt-3 max-w-lg text-ink-800/80">Applications for the next 6-week Elite Performance cycle close soon.</p>
        <a href="${base}register.html" class="btn-dark btn-lg mt-7 inline-flex">Apply Now ${icon("arrowRight","h-4 w-4")}</a>
      </div>
    </section>

  </main>`;
};
