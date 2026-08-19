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
];

const CATS = ["all","Nutrition","Strength","Mobility","Conditioning","Community","Mind & Body"];

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
          <a href="${base}blog-details.html" class="block h-44 overflow-hidden">
            <img src="${base}assets/images/thumbs/${p.img}.svg" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${p.t}" />
          </a>
          <div class="p-5">
            <div class="flex items-center gap-3">
              <span class="badge-volt">${p.cat}</span>
              <span class="text-xs text-ink-400">${p.read}</span>
            </div>
            <a href="${base}blog-details.html"><h3 class="mt-3 font-bold leading-snug group-hover:text-volt-600 dark:group-hover:text-volt-300">${p.t}</h3></a>
            <div class="mt-4 flex items-center gap-2 border-t border-ink-100 pt-4 dark:border-ink-800">
              <img src="${base}assets/images/avatars/avatar-${p.a}.svg" class="h-7 w-7 rounded-full" alt="author" />
              <span class="text-xs text-ink-500 dark:text-ink-400">${p.d}</span>
            </div>
          </div>
        </article>`).join("")}
      </div>

      <p data-blog-empty class="hidden py-16 text-center text-ink-500 dark:text-ink-400">No articles match your search — try a different keyword or category.</p>

      <!-- pagination -->
      <div class="mt-12 flex items-center justify-center gap-2">
        <button class="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-400 dark:border-ink-700">${icon("chevronLeft","h-4 w-4")}</button>
        ${[1,2,3].map((n) => `<button class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${n===1 ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950" : "border border-ink-200 dark:border-ink-700"}">${n}</button>`).join("")}
        <button class="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300">${icon("chevronRight","h-4 w-4")}</button>
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
