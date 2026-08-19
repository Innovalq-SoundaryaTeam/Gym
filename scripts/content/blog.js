const { icon } = require("../icons");

const POSTS = [
  { img: "blog-1", cat: "Nutrition", t: "5 Post-Workout Meals That Actually Speed Recovery", d: "Aug 02, 2026", a: 8, read: "6 min read" },
  { img: "blog-2", cat: "Strength", t: "Progressive Overload 101: A Beginner's Roadmap", d: "Jul 24, 2026", a: 1, read: "8 min read" },
  { img: "blog-3", cat: "Mobility", t: "Why Your Warm-up Matters More Than Your Workout", d: "Jul 11, 2026", a: 7, read: "5 min read" },
  { img: "blog-4", cat: "Conditioning", t: "HIIT vs Steady-State Cardio: What the Research Says", d: "Jun 29, 2026", a: 3, read: "7 min read" },
  { img: "blog-5", cat: "Community", t: "Inside the Boxing Fundamentals Class With Coach Vikram", d: "Jun 15, 2026", a: 5, read: "4 min read" },
  { img: "blog-6", cat: "Mind & Body", t: "Spin Class Playlist Secrets: How Music Drives Output", d: "Jun 02, 2026", a: 6, read: "5 min read" },
  { img: "blog-7", cat: "Mobility", t: "A 10-Minute Mat Pilates Routine You Can Do at Home", d: "May 21, 2026", a: 2, read: "6 min read" },
  { img: "blog-8", cat: "Strength", t: "Zumba for Strength? Why Dance Cardio Counts", d: "May 09, 2026", a: 4, read: "4 min read" },
  { img: "blog-9", cat: "Recovery", t: "Sleep & Recovery: The Most Overlooked Training Variable", d: "Apr 28, 2026", a: 6, read: "6 min read" },
];

const CATS = ["all","Nutrition","Strength","Mobility","Conditioning","Community","Mind & Body","Recovery"];

module.exports = function blog(base) {
  return `
  <main id="main">
    <section class="bg-ink-950 py-16 sm:py-20">
      <div class="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span class="eyebrow">The PULSE Blog</span>
        <h1 class="mt-5 text-4xl font-extrabold text-white sm:text-5xl">Training tips, nutrition &amp; gym news.</h1>
        <p class="mt-4 text-ink-300">Straight from our coaches — no fluff, no fads, just what actually works.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div class="relative w-full sm:max-w-xs">
          ${icon("search","pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400")}
          <input type="search" data-blog-search placeholder="Search articles…" class="input !pl-11" />
        </div>
        <div class="flex flex-wrap gap-2">
          ${CATS.map((c, i) => `<button data-blog-filter="${c}" class="tab-btn ${i===0 ? "active" : ""}">${c === "all" ? "All Posts" : c}</button>`).join("")}
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${POSTS.map((p) => `
        <article data-blog-card data-title="${p.t}" data-category="${p.cat}" class="card group overflow-hidden">
          <a href="${base}blog-details-${p.img}.html" class="block h-44 overflow-hidden">
            <img src="${base}assets/images/thumbs/${p.img}.jpg" class="h-full w-full object-cover ${["blog-2","blog-5"].includes(p.img) ? "object-center" : "object-top"} transition-transform duration-500 group-hover:scale-105" alt="${p.t}" />
          </a>
          <div class="p-5">
            <div class="flex items-center gap-3">
              <span class="badge-volt">${p.cat}</span>
              <span class="text-xs text-ink-400">${p.read}</span>
            </div>
            <a href="${base}blog-details-${p.img}.html"><h3 class="mt-3 font-bold leading-snug group-hover:text-volt-600 dark:group-hover:text-volt-300">${p.t}</h3></a>
            <div class="mt-4 flex items-center gap-2 border-t border-ink-100 pt-4 dark:border-ink-800">
              <img src="${base}assets/images/avatars/avatar-${p.a}.jpg" class="h-7 w-7 rounded-full object-cover" alt="author" />
              <span class="text-xs text-ink-500 dark:text-ink-400">${p.d}</span>
            </div>
          </div>
        </article>`).join("")}
      </div>

      <p data-blog-empty class="hidden py-16 text-center text-ink-500 dark:text-ink-400">No articles match your search — try a different keyword or category.</p>
    </section>

    <!-- POPULAR TOPICS -->
    <section class="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <span class="eyebrow">Popular Topics</span>
          <h2 class="section-title mt-4">Written by the people who coach you.</h2>
          <p class="section-sub mx-auto">Every article on the PULSE blog is written or reviewed by one of our
            certified coaches — real programming advice, not recycled fitness-industry content.</p>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
          ${[
            ["dumbbell","Strength","Progressive overload, programming and powerlifting basics."],
            ["activity","Conditioning","HIIT, cardio protocols and metabolic conditioning."],
            ["heart","Recovery","Sleep, mobility and injury-prevention fundamentals."],
            ["target","Nutrition","Fuelling, macros and post-workout meal timing."],
          ].map(([i,t,d]) => `
          <div class="rounded-2xl border border-ink-100 bg-white p-5 text-center dark:border-ink-800 dark:bg-ink-900">
            <div class="icon-tile mx-auto">${icon(i,"h-5 w-5")}</div>
            <p class="mt-3 font-bold">${t}</p>
            <p class="mt-1 text-xs text-ink-500 dark:text-ink-400">${d}</p>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <div class="text-center">
        <span class="eyebrow">Blog FAQs</span>
        <h2 class="section-title mt-4">Quick questions about the blog.</h2>
      </div>
      <div class="mt-10 divide-y divide-ink-100 dark:divide-ink-800" data-accordion>
        ${[
          ["How often do you publish new articles?", "New articles go up roughly once a week, usually paired with the weekly newsletter — expect a mix of training, nutrition and recovery topics."],
          ["Can I suggest a topic?", "Absolutely — message us through the Contact page with any topic you'd like a coach to cover in a future post."],
          ["Who writes the articles?", "Every post is written or reviewed by a PULSE coach in that specialty, so the advice reflects how we actually program for members."],
          ["Is the newsletter separate from class reminders?", "Yes — the blog newsletter is purely training and nutrition content, separate from any dashboard booking or attendance notifications."],
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

    <!-- NEWSLETTER -->
    <section class="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div class="rounded-3xl bg-ink-950 px-8 py-14 text-center sm:px-16">
        <h2 class="section-title text-white !text-3xl">Get one useful email a week.</h2>
        <p class="mx-auto mt-3 max-w-md text-ink-300">Training tips, nutrition notes and studio news. No spam, unsubscribe anytime.</p>
        <form class="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row" data-demo-form data-success-title="Subscribed" data-success-text="You'll get one useful training email a week.">
          <input type="email" required placeholder="you@example.com" class="input flex-1 !bg-white/5 !border-white/15 !text-white placeholder:!text-ink-500" />
          <button type="submit" class="btn-primary shrink-0">Subscribe</button>
        </form>
      </div>
    </section>
  </main>`;
};
