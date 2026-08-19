const { icon } = require("../icons");

module.exports = function blogDetails(base) {
  return `
  <main id="main">
    <section class="mx-auto max-w-4xl px-5 pt-12 sm:px-8">
      <nav class="flex items-center gap-2 text-xs text-ink-400">
        <a href="${base}index.html" class="hover:text-volt-600 dark:hover:text-volt-400">Home</a>${icon("chevronRight","h-3.5 w-3.5")}
        <a href="${base}blog.html" class="hover:text-volt-600 dark:hover:text-volt-400">Blog</a>${icon("chevronRight","h-3.5 w-3.5")}
        <span class="text-ink-700 dark:text-ink-200">Progressive Overload 101</span>
      </nav>
      <span class="badge-volt mt-6">Strength</span>
      <h1 class="section-title mt-4">Progressive Overload 101: A Beginner's Roadmap</h1>
      <div class="mt-5 flex items-center gap-3 text-sm text-ink-500 dark:text-ink-400">
        <img src="${base}assets/images/avatars/avatar-1.svg" class="h-9 w-9 rounded-full" alt="Arjun Mehta" />
        <span class="font-semibold text-ink-800 dark:text-ink-100">Arjun Mehta</span>
        <span>·</span><span>Jul 24, 2026</span><span>·</span><span>8 min read</span>
      </div>
    </section>

    <section class="mx-auto mt-8 max-w-5xl px-5 sm:px-8">
      <img src="${base}assets/images/thumbs/blog-2.svg" class="aspect-[16/8] w-full rounded-3xl object-cover" alt="Progressive overload" />
    </section>

    <div class="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-5 py-14 sm:px-8 lg:grid-cols-3">
      <article class="prose prose-ink max-w-none dark:prose-invert lg:col-span-2">
        <p class="text-ink-600 dark:text-ink-300">Progressive overload is the single most important principle in
          strength training — and the one beginners misunderstand most. It simply means giving your muscles a
          reason to adapt: more weight, more reps, more sets, or better technique, applied consistently over time.</p>

        <h2 class="mt-8 text-2xl font-bold">Why it matters</h2>
        <p class="mt-3 text-ink-600 dark:text-ink-300">Your body is remarkably efficient — it only builds strength
          and muscle it actually needs. Lift the same weight for the same reps forever, and adaptation stalls. Small,
          consistent increases in training stress are what force continued progress.</p>

        <h2 class="mt-8 text-2xl font-bold">Four ways to apply it</h2>
        <ul class="mt-3 space-y-2">
          ${[
            "Add weight — the most obvious lever, but the smallest and most sustainable jumps win long-term.",
            "Add reps — squeeze one or two more quality reps out of the same working weight.",
            "Add sets — increase total weekly volume for a muscle group.",
            "Improve technique — a cleaner rep with better range of motion is genuinely harder work.",
          ].map((t) => `<li class="flex items-start gap-2">${icon("check","mt-1 h-4 w-4 shrink-0 text-volt-600 dark:text-volt-400")}<span>${t}</span></li>`).join("")}
        </ul>

        <blockquote class="mt-8 border-l-4 border-volt-400 pl-5 italic text-ink-600 dark:text-ink-300">
          "You don't need a perfect program. You need a program you'll still be running in six months, with the
          weight on the bar slowly climbing."
        </blockquote>

        <h2 class="mt-8 text-2xl font-bold">A simple 4-week starting template</h2>
        <p class="mt-3 text-ink-600 dark:text-ink-300">In Strength Lab, beginners typically start with a linear
          progression: add 2.5kg to the bar each session on squat, bench and deadlift, while accessory work stays
          at a fixed weight until reps hit the top of the target range. Your coach tracks every set in your member
          dashboard, so the next session's targets are always waiting for you.</p>

        <div class="mt-10 flex items-center justify-between border-t border-ink-100 pt-6 dark:border-ink-800">
          <p class="text-sm font-semibold text-ink-500 dark:text-ink-400">Share this article</p>
          <div class="flex items-center gap-2">
            ${["facebook","x","linkedin"].map((s) => `<a href="#" class="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 hover:border-volt-500 hover:text-volt-600 dark:border-ink-700 dark:text-ink-400">${icon(s,"h-4 w-4")}</a>`).join("")}
          </div>
        </div>

        <!-- author box -->
        <div class="mt-8 flex items-center gap-4 rounded-2xl border border-ink-100 p-6 dark:border-ink-800">
          <img src="${base}assets/images/avatars/avatar-1.svg" class="h-16 w-16 rounded-full" alt="Arjun Mehta" />
          <div>
            <p class="font-bold">Arjun Mehta</p>
            <p class="text-sm text-ink-500 dark:text-ink-400">Founder & Head Strength Coach at PULSE. NSCA-CSCS certified with 11 years of coaching experience.</p>
          </div>
        </div>
      </article>

      <!-- SIDEBAR -->
      <aside class="space-y-8">
        <div>
          <p class="mb-4 font-bold">Categories</p>
          <ul class="space-y-2 text-sm">
            ${[["Strength",12],["Nutrition",8],["Mobility",6],["Conditioning",5],["Community",4]].map(([c,n]) => `<li><a href="${base}blog.html" class="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-ink-50 dark:hover:bg-ink-800"><span>${c}</span><span class="badge-ink">${n}</span></a></li>`).join("")}
          </ul>
        </div>
        <div>
          <p class="mb-4 font-bold">Recent posts</p>
          <div class="space-y-4">
            ${[["blog-1","5 Post-Workout Meals That Actually Speed Recovery"],["blog-3","Why Your Warm-up Matters More Than Your Workout"],["blog-4","HIIT vs Steady-State Cardio: What the Research Says"]].map(([img,t]) => `
            <a href="${base}blog-details.html" class="flex gap-3 group">
              <img src="${base}assets/images/thumbs/${img}.svg" class="h-14 w-16 shrink-0 rounded-lg object-cover" alt="" />
              <p class="text-sm font-semibold leading-snug group-hover:text-volt-600 dark:group-hover:text-volt-300">${t}</p>
            </a>`).join("")}
          </div>
        </div>
        <div class="rounded-2xl bg-ink-50 p-6 dark:bg-ink-900/50">
          <p class="font-bold">Subscribe for weekly tips</p>
          <form class="mt-4 space-y-3" data-demo-form data-success-title="Subscribed" data-success-text="You'll get one useful training email a week.">
            <input type="email" required placeholder="you@example.com" class="input" />
            <button type="submit" class="btn-primary btn-block">Subscribe</button>
          </form>
        </div>
      </aside>
    </div>
  </main>`;
};
