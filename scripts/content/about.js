const { icon } = require("../icons");

module.exports = function about(base) {
  return `
  <main id="main">

    <!-- HERO -->
    <section class="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <img src="${base}assets/images/banners/about-story.svg" class="absolute inset-0 h-full w-full object-cover opacity-50" alt="" />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/10"></div>
      <div class="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span class="eyebrow">About PULSE</span>
        <h1 class="mt-5 text-4xl font-extrabold text-white sm:text-5xl">Built by coaches. Run for the neighbourhood.</h1>
        <p class="mt-5 text-ink-300">We started PULSE in 2014 with one studio and a stubborn belief: fitness sticks
          when coaching is personal and community is real.</p>
      </div>
    </section>

    <!-- MISSION / STORY -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span class="eyebrow">Our Mission</span>
          <h2 class="section-title mt-4">Make consistent training the easiest habit you keep.</h2>
          <p class="section-sub">Most people don't fail at fitness because they lack motivation — they fail because
            plans are generic and life gets in the way. PULSE removes the friction: real coaches, flexible
            scheduling, and a dashboard that keeps you accountable without the guesswork.</p>
          <div class="mt-8 grid grid-cols-2 gap-5">
            ${[["2014","Founded in Camden"],["3","Studio locations"],["1,240+","Active members"],["12","Certified coaches"]].map(([n,l]) => `
            <div>
              <p class="text-2xl font-extrabold text-volt-600 dark:text-volt-400">${n}</p>
              <p class="text-xs text-ink-500 dark:text-ink-400">${l}</p>
            </div>`).join("")}
          </div>
        </div>
        <img src="${base}assets/images/banners/facility-weights.svg" class="w-full rounded-3xl" alt="PULSE facility" />
      </div>
    </section>

    <!-- TIMELINE / HISTORY -->
    <section class="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div class="mx-auto max-w-5xl px-5 sm:px-8">
        <div class="text-center">
          <span class="eyebrow">Our History</span>
          <h2 class="section-title mt-4">A decade of showing up.</h2>
        </div>
        <div class="relative mt-14 space-y-10 border-s-2 border-ink-200 ps-8 dark:border-ink-800 sm:ps-10">
          ${[
            { y: "2014", t: "One studio, one mission", d: "PULSE opens its doors in Camden with 3 coaches and a single group studio." },
            { y: "2017", t: "Strength Lab launches", d: "Dedicated free-weights zone added after member demand for powerlifting coaching." },
            { y: "2020", t: "Member dashboard goes live", d: "Class booking, attendance tracking and workout plans move online." },
            { y: "2023", t: "Third location opens", d: "PULSE expands to two more neighbourhoods, crossing 1,000 active members." },
            { y: "2026", t: "1,240+ members strong", d: "Now a full-service strength, conditioning and recovery studio community." },
          ].map((e) => `
          <div class="relative">
            <span class="absolute -start-[calc(2rem+3px)] top-1 h-3 w-3 rounded-full bg-volt-400 ring-4 ring-white dark:ring-ink-950 sm:-start-[calc(2.5rem+3px)]"></span>
            <p class="text-xs font-bold uppercase tracking-widest text-volt-600 dark:text-volt-400">${e.y}</p>
            <h3 class="mt-1 text-lg font-bold">${e.t}</h3>
            <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">${e.d}</p>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="text-center">
        <span class="eyebrow">Leadership Team</span>
        <h2 class="section-title mt-4">The people behind the programming.</h2>
      </div>
      <div class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
        ${[
          { n: "Arjun Mehta", r: "Founder & Head Coach", a: 1 },
          { n: "Priya Nair", r: "Director of Yoga & Mobility", a: 2 },
          { n: "Rohan Kapoor", r: "Head of Conditioning", a: 3 },
          { n: "Divya Suresh", r: "Studio Operations Lead", a: 8 },
        ].map((t) => `
        <div class="text-center">
          <img src="${base}assets/images/avatars/avatar-${t.a}.svg" class="mx-auto aspect-square w-full rounded-2xl object-cover" alt="${t.n}" />
          <p class="mt-3 font-bold">${t.n}</p>
          <p class="text-xs text-ink-500 dark:text-ink-400">${t.r}</p>
        </div>`).join("")}
      </div>
    </section>

    <!-- VALUES -->
    <section class="bg-ink-950 py-20">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="text-center">
          <span class="eyebrow">What We Stand For</span>
          <h2 class="section-title mt-4 text-white">Our values, on the gym floor.</h2>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          ${[
            { i: "shield", t: "Coach Integrity", d: "Every trainer is certified, insured and continually assessed." },
            { i: "users", t: "Real Community", d: "We know your name, your goals, and your PR history." },
            { i: "target", t: "Honest Progress", d: "No gimmicks — programming backed by tracked data." },
          ].map((v) => `
          <div class="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
            <div class="icon-tile mx-auto">${icon(v.i,"h-5 w-5")}</div>
            <h3 class="mt-4 text-lg font-bold text-white">${v.t}</h3>
            <p class="mt-2 text-sm text-ink-400">${v.d}</p>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="text-center">
        <span class="eyebrow">Testimonials</span>
        <h2 class="section-title mt-4">What our members say.</h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        ${[
          { q: "The coaching consistency here is unmatched — same trainer, tracked progress, no fluff.", n: "Neha Kulkarni", a: 10 },
          { q: "I've tried five gyms in this city. PULSE is the only one that felt like a team, not a treadmill.", n: "Manav Joshi", a: 12 },
          { q: "Booking classes on the dashboard takes ten seconds. My attendance streak speaks for itself.", n: "Sara Ahmed", a: 11 },
        ].map((t) => `
        <div class="card p-6">
          <div class="flex gap-0.5 text-volt-500">${Array(5).fill(icon("star","h-4 w-4 fill-current")).join("")}</div>
          <p class="mt-4 text-sm text-ink-600 dark:text-ink-300">"${t.q}"</p>
          <div class="mt-5 flex items-center gap-3">
            <img src="${base}assets/images/avatars/avatar-${t.a}.svg" class="h-10 w-10 rounded-full" alt="${t.n}" />
            <p class="text-sm font-bold">${t.n}</p>
          </div>
        </div>`).join("")}
      </div>
    </section>

  </main>`;
};
