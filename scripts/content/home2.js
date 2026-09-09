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
            <img src="${base}assets/images/banners/hero-2.jpg" alt="Elite training session" class="aspect-[4/5] w-full object-cover sm:aspect-square lg:aspect-[4/5]" />
          </div>
          <div class="absolute -left-4 bottom-6 hidden rounded-2xl bg-white p-4 shadow-card dark:bg-ink-900 dark:shadow-card-dark sm:flex items-center gap-3">
            <div class="flex -space-x-3">
              ${[1,2,3,4].map((a) => `<img src="${base}assets/images/avatars/avatar-${a}.jpg" class="h-9 w-9 rounded-full object-cover object-top ring-2 ring-white dark:ring-ink-900" alt="member" />`).join("")}
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
          { i: "dumbbell", t: "Strength Performance", d: "Powerlifting-based progression for raw strength gains.", tags: ["Barbell", "1:6 Coaching", "12-week block"], k: "strength" },
          { i: "activity", t: "Hybrid Conditioning", d: "Strength + engine work for CrossFit-style competitors.", tags: ["Metcons", "Mobility", "Weekly testing"], k: "hiit" },
          { i: "target", t: "Physique & Recovery", d: "Body recomposition with sleep & nutrition coaching.", tags: ["Macros", "Sauna", "Bi-weekly scans"], k: "pilates" },
        ].map((p, i) => `
        <div data-reveal style="transition-delay:${i*80}ms" class="card flex h-full translate-y-4 flex-col p-7 opacity-0 transition-all duration-700 ${i===1 ? "ring-2 ring-volt-400" : ""}">
          ${i===1 ? `<span class="badge-volt mb-3">Most Popular</span>` : ""}
          <div class="icon-tile">${icon(p.i,"h-5 w-5")}</div>
          <h3 class="mt-4 text-xl font-bold">${p.t}</h3>
          <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">${p.d}</p>
          <ul class="mt-5 space-y-2">
            ${p.tags.map((tag) => `<li class="flex items-center gap-2 text-sm">${icon("check","h-4 w-4 text-volt-600 dark:text-volt-400")}${tag}</li>`).join("")}
          </ul>
          <a href="${base}class-details-${p.k}.html" class="${i===1 ? "btn-primary" : "btn-outline"} btn-block mt-auto pt-6">Learn More</a>
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
          <img src="${base}assets/images/banners/facility-studio.jpg" class="w-full rounded-3xl" alt="Studio" />
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
          <a href="${base}dashboard/index.html" class="btn-primary mt-8 inline-flex">Preview Dashboard ${icon("arrowRight","h-4 w-4")}</a>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="bg-ink-950 py-20">
      <div class="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span class="eyebrow">Athlete Results</span>
        <h2 class="section-title mt-4 text-white">Built for people chasing a number.</h2>
      </div>
      <div class="relative mx-auto mt-12 max-w-3xl overflow-hidden px-5" data-slider data-slider-auto="6500">
        <div data-slider-track class="flex transition-transform duration-500 ease-out">
          ${[
            { q: "The 1:6 coaching ratio changes everything. My squat numbers moved more in one six-week cycle than in two years training alone.", n: "Rahul Nanda", r: "Elite Performance, Cycle 4", a: 9 },
            { q: "Weekly testing keeps me honest. I can see exactly where I'm progressing and where the next block needs to focus.", n: "Tanvi Oberoi", r: "Elite Performance, Cycle 6", a: 11 },
            { q: "Recovery coaching was the missing piece. Better sleep tracking and macros made every session in the gym actually count.", n: "Zeeshan Ali", r: "Physique & Recovery Track", a: 3 },
          ].map((t) => `
          <div class="w-full shrink-0 px-2">
            <div class="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              ${icon("quote", "mx-auto h-8 w-8 text-volt-400")}
              <p class="mt-6 text-lg font-medium text-white sm:text-xl">"${t.q}"</p>
              <div class="mt-6 flex items-center justify-center gap-3">
                <img src="${base}assets/images/avatars/avatar-${t.a}.jpg" class="h-11 w-11 rounded-full object-cover object-top" alt="${t.n}" />
                <div class="text-left">
                  <p class="text-sm font-bold text-white">${t.n}</p>
                  <p class="text-xs text-ink-400">${t.r}</p>
                </div>
              </div>
            </div>
          </div>`).join("")}
        </div>
        <button type="button" data-slider-prev aria-label="Previous testimonial" class="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink-950/60 text-white backdrop-blur transition-colors hover:border-white hover:bg-white/10 sm:left-0">
          ${icon("chevronLeft","h-5 w-5")}
        </button>
        <button type="button" data-slider-next aria-label="Next testimonial" class="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink-950/60 text-white backdrop-blur transition-colors hover:border-white hover:bg-white/10 sm:right-0">
          ${icon("chevronRight","h-5 w-5")}
        </button>
        <div data-slider-dots class="mt-6 flex items-center justify-center gap-2"></div>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <div class="text-center">
        <span class="eyebrow">Program Questions</span>
        <h2 class="section-title mt-4">What to know before you apply.</h2>
      </div>
      <div class="mt-10 divide-y divide-ink-100 dark:divide-ink-800" data-accordion>
        ${[
          ["Who is the Elite Performance Program for?", "Athletes and serious lifters who already train consistently and want structured, tested programming rather than open gym access. Most applicants are coming from 6+ months of regular training."],
          ["How does the 1:6 coaching ratio work?", "Each session caps at six athletes per coach, so every set gets watched and corrected in real time — closer to small-group personal training than a typical class."],
          ["What happens after the 6-week cycle ends?", "You'll get a full results review — strength testing, body composition scan and a recommendation for your next cycle or track."],
          ["Can I switch tracks mid-program?", "Track changes are reviewed at the end of each 6-week cycle to keep programming consistent, but your coach can flag an earlier switch if it's clearly the better fit."],
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
