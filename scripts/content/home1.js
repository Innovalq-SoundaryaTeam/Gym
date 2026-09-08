const { icon } = require("../icons");

module.exports = function home1(base) {
  return `
  <main id="main">

    <!-- ============ HERO ============ -->
    <section class="relative overflow-hidden bg-ink-950">
      <img src="${base}assets/images/banners/hero-1.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-90" />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/20"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/60 to-transparent lg:to-ink-950/10"></div>
      <div class="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-2 lg:pb-28 lg:pt-28">
        <div data-reveal class="translate-y-4 opacity-0 transition-all duration-700">
          <span class="eyebrow">${icon("flame", "h-3.5 w-3.5")} Neighbourhood Gym · Est. 2014</span>
          <h1 class="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Train hard.<br />
            <span class="text-volt-400">Recover smart.</span><br />
            Show up daily.
          </h1>
          <p class="mt-6 max-w-lg text-base text-ink-100 sm:text-lg">
            PULSE is a full-service strength &amp; conditioning gym with group classes, personal coaching, and a
            members dashboard that keeps your bookings, attendance and workout plans in one place.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a href="${base}membership.html" class="btn-primary btn-lg">Join Now ${icon("arrowRight", "h-4 w-4")}</a>
            <a href="${base}classes.html" class="btn-outline btn-lg !border-white/30 !text-white hover:!bg-white/10">
              ${icon("play", "h-4 w-4")} View Class Schedule
            </a>
          </div>
          <div class="mt-10 flex flex-wrap items-center gap-8">
            <div>
              <p class="text-3xl font-extrabold text-white">4.9<span class="text-volt-400">/5</span></p>
              <p class="text-xs text-ink-400">from 1,240+ members</p>
            </div>
            <div class="h-10 w-px bg-white/10"></div>
            <div>
              <p class="text-3xl font-extrabold text-white">38+</p>
              <p class="text-xs text-ink-400">weekly classes</p>
            </div>
            <div class="h-10 w-px bg-white/10"></div>
            <div>
              <p class="text-3xl font-extrabold text-white">12</p>
              <p class="text-xs text-ink-400">certified coaches</p>
            </div>
          </div>
        </div>

        <div class="relative hidden lg:block" data-reveal>
          <div class="animate-floaty rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div class="flex items-center justify-between">
              <p class="text-sm font-bold text-white">Today's Classes</p>
              <span class="badge-volt">Live</span>
            </div>
            <div class="mt-4 space-y-3">
              ${[
                { t: "6:00 AM", n: "Sunrise Strength", i: "dumbbell", c: "Coach Arjun" },
                { t: "8:30 AM", n: "Power Yoga Flow", i: "heart", c: "Coach Priya" },
                { t: "6:00 PM", n: "HIIT Circuit", i: "activity", c: "Coach Rohan" },
              ].map((c) => `
              <div class="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                <div class="icon-tile !bg-volt-400/20">${icon(c.i, "h-5 w-5")}</div>
                <div class="flex-1">
                  <p class="text-sm font-semibold text-white">${c.n}</p>
                  <p class="text-xs text-ink-200">${c.t} · ${c.c}</p>
                </div>
                ${icon("chevronRight", "h-4 w-4 text-ink-500")}
              </div>`).join("")}
            </div>
            <a href="${base}login.html?next=dashboard/book-classes.html" class="btn-primary btn-block mt-5">Book a Slot</a>
          </div>
        </div>
      </div>

      <!-- marquee -->
      <div class="relative border-t border-white/10 bg-ink-900/60 py-4">
        <div class="flex gap-16 overflow-hidden">
          <div class="flex shrink-0 animate-marquee items-center gap-16 whitespace-nowrap">
            ${Array(2).fill(["Free Trial Class","Certified Coaches","24/7 Access","Nutrition Support","Kids Zone","Sauna & Recovery","Personal Training","Member App"]).flat().map((t) => `<span class="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-ink-400">${icon("star","h-3.5 w-3.5 text-volt-400")}${t}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FACILITIES ============ -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div data-reveal class="translate-y-4 opacity-0 transition-all duration-700">
          <span class="eyebrow">Our Facilities</span>
          <h2 class="section-title mt-4">Everything you need,<br class="hidden sm:block" /> under one roof.</h2>
        </div>
        <a href="${base}about.html" class="btn-outline shrink-0">Take the Tour ${icon("arrowUpRight","h-4 w-4")}</a>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        ${[
          { img: "facility-weights", t: "Free Weights Zone", d: "Full rack of Olympic bars, dumbbells up to 60kg, and platforms." },
          { img: "facility-cardio", t: "Cardio Deck", d: "Treadmills, rowers & assault bikes with heart-rate integration." },
          { img: "facility-studio", t: "Group Studio", d: "Mirrored studio for yoga, Zumba & mobility sessions." },
          { img: "facility-boxing", t: "Boxing & HIIT Arena", d: "Bag stations and turf lane for conditioning circuits.", fitContain: true },
        ].map((f, i) => `
        <div data-reveal style="transition-delay:${i * 80}ms" class="card group translate-y-4 overflow-hidden opacity-0 transition-all duration-700">
          <div class="relative h-44 overflow-hidden bg-ink-950">
            ${f.fitContain ? `
            <img src="${base}assets/images/banners/${f.img}.jpg" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full scale-110 object-cover object-top blur-md brightness-50" />
            <img src="${base}assets/images/banners/${f.img}.jpg" alt="${f.t}" class="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
            ` : `
            <img src="${base}assets/images/banners/${f.img}.jpg" alt="${f.t}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            `}
          </div>
          <div class="p-5">
            <h3 class="text-lg font-bold">${f.t}</h3>
            <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">${f.d}</p>
          </div>
        </div>`).join("")}
      </div>
    </section>

    <!-- ============ OFFERS BAND ============ -->
    <section class="bg-ink-950 py-4">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-12 sm:px-8 md:grid-cols-3">
        ${[
          { i: "flame", t: "New Member Offer", d: "First 2 weeks free + a complimentary body composition scan.", tag: "Limited Time" },
          { i: "users", t: "Bring a Friend", d: "Refer a friend and both get 15% off your next renewal.", tag: "Referral" },
          { i: "award", t: "Student Discount", d: "20% off all monthly plans with a valid student ID.", tag: "Verified ID" },
        ].map((o) => `
        <div class="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
          <div class="flex items-center justify-between">
            <div class="icon-tile">${icon(o.i, "h-5 w-5")}</div>
            <span class="badge-volt">${o.tag}</span>
          </div>
          <h3 class="mt-4 text-lg font-bold text-white">${o.t}</h3>
          <p class="mt-2 text-sm text-ink-400">${o.d}</p>
          <a href="${base}membership.html" class="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-volt-400 hover:text-volt-300">Claim Offer ${icon("arrowRight","h-4 w-4")}</a>
        </div>`).join("")}
      </div>
    </section>

    <!-- ============ CLASSES PREVIEW ============ -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span class="eyebrow">Group Classes</span>
          <h2 class="section-title mt-4">Find your class,<br class="hidden sm:block" /> pick your time.</h2>
        </div>
        <a href="${base}classes.html" class="btn-dark shrink-0">Full Schedule ${icon("arrowRight","h-4 w-4")}</a>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        ${[
          { k: "yoga", t: "Power Yoga", time: "6 sessions / week", lvl: "All Levels" },
          { k: "zumba", t: "Zumba Dance", time: "5 sessions / week", lvl: "Beginner" },
          { k: "strength", t: "Strength Lab", time: "7 sessions / week", lvl: "Intermediate" },
          { k: "cardio", t: "Cardio Blast", time: "6 sessions / week", lvl: "All Levels" },
        ].map((c) => `
        <a href="${base}class-details-${c.k}.html" class="card group overflow-hidden">
          <div class="relative h-36 overflow-hidden">
            <img src="${base}assets/images/thumbs/${c.k}.jpg" class="h-full w-full object-cover ${c.k === "strength" ? "object-center" : "object-top"} transition-transform duration-500 group-hover:scale-105" alt="${c.t}" />
            <span class="absolute left-3 top-3 badge-ink !bg-white/90 dark:!bg-ink-950/80">${c.lvl}</span>
          </div>
          <div class="p-5">
            <h3 class="font-bold group-hover:text-volt-600 dark:group-hover:text-volt-300">${c.t}</h3>
            <p class="mt-1.5 flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">${icon("clock","h-3.5 w-3.5")}${c.time}</p>
          </div>
        </a>`).join("")}
      </div>
    </section>

    <!-- ============ WHY CHOOSE US ============ -->
    <section class="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <span class="eyebrow">Why Members Choose PULSE</span>
          <h2 class="section-title mt-4">Coaching that actually<br /> adapts to you.</h2>
          <p class="section-sub">No cookie-cutter programs. Every plan is built around your goals, schedule and
            recovery — tracked automatically in your member dashboard.</p>
          <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            ${[
              { i: "target", t: "Goal-based Programming", d: "Strength, fat-loss or endurance tracks." },
              { i: "chartBar", t: "Progress Tracking", d: "Attendance & performance in your dashboard." },
              { i: "calendar", t: "Flexible Booking", d: "Reserve classes by day & instructor." },
              { i: "shield", t: "Certified Coaches", d: "Every trainer is nationally accredited." },
            ].map((f) => `
            <div class="flex gap-3">
              <div class="icon-tile shrink-0">${icon(f.i, "h-5 w-5")}</div>
              <div>
                <p class="font-bold">${f.t}</p>
                <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">${f.d}</p>
              </div>
            </div>`).join("")}
          </div>
        </div>
        <div class="relative">
          <img src="${base}assets/images/banners/about-story.jpg" alt="Coaching at PULSE" class="w-full rounded-3xl" />
          <div class="absolute -bottom-12 -left-6 hidden rounded-2xl bg-white p-5 shadow-card dark:bg-ink-900 dark:shadow-card-dark sm:block">
            <div class="flex items-center gap-3">
              <div class="icon-tile">${icon("trendingUp", "h-5 w-5")}</div>
              <div>
                <p class="text-xl font-extrabold">92%</p>
                <p class="text-xs text-ink-500 dark:text-ink-400">members hit their 90-day goal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TRAINERS PREVIEW ============ -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span class="eyebrow">Meet the Coaches</span>
          <h2 class="section-title mt-4">Trainers who train the trainers.</h2>
        </div>
        <a href="${base}trainers.html" class="btn-outline shrink-0">All Trainers ${icon("arrowRight","h-4 w-4")}</a>
      </div>
      <div class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
        ${[
          { n: "Arjun Mehta", r: "Strength & Powerlifting", a: 1 },
          { n: "Priya Nair", r: "Yoga & Mobility", a: 2 },
          { n: "Rohan Kapoor", r: "HIIT & Conditioning", a: 3 },
          { n: "Sana Sheikh", r: "Zumba & Dance Fitness", a: 4 },
        ].map((t) => `
        <a href="${base}trainers.html" class="group text-center">
          <div class="overflow-hidden rounded-2xl">
            <img src="${base}assets/images/avatars/avatar-${t.a}.jpg" alt="${t.n}" class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <p class="mt-3 font-bold">${t.n}</p>
          <p class="text-xs text-ink-500 dark:text-ink-400">${t.r}</p>
        </a>`).join("")}
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="bg-ink-950 py-20">
      <div class="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span class="eyebrow">Member Stories</span>
        <h2 class="section-title mt-4 text-white">Real people. Real results.</h2>
      </div>
      <div class="relative mx-auto mt-12 max-w-3xl overflow-hidden px-5" data-slider data-slider-auto="6000">
        <div data-slider-track class="flex transition-transform duration-500 ease-out">
          ${[
            { q: "PULSE's coaches actually adjust your plan when life gets busy. I've never stuck with a gym this long.", n: "Meera Sharma", r: "Member since 2022", a: 5 },
            { q: "Booking classes and tracking my attendance from the dashboard removed all the friction. Just show up and train.", n: "Kabir Singh", r: "Member since 2023", a: 6 },
            { q: "The Strength Lab program took my deadlift from 80kg to 140kg in eight months. Genuinely elite coaching.", n: "Ayesha Khan", r: "Member since 2021", a: 7 },
          ].map((t) => `
          <div class="w-full shrink-0 px-2">
            <div class="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              ${icon("quote", "mx-auto h-8 w-8 text-volt-400")}
              <p class="mt-6 text-lg font-medium text-white sm:text-xl">"${t.q}"</p>
              <div class="mt-6 flex items-center justify-center gap-3">
                <img src="${base}assets/images/avatars/avatar-${t.a}.jpg" class="h-11 w-11 rounded-full object-cover" alt="${t.n}" />
                <div class="text-left">
                  <p class="text-sm font-bold text-white">${t.n}</p>
                  <p class="text-xs text-ink-400">${t.r}</p>
                </div>
              </div>
            </div>
          </div>`).join("")}
        </div>
        <div data-slider-dots class="mt-6 flex items-center justify-center gap-2"></div>
      </div>
    </section>

    <!-- ============ BLOG PREVIEW ============ -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span class="eyebrow">From the Blog</span>
          <h2 class="section-title mt-4">Training tips &amp; nutrition notes.</h2>
        </div>
        <a href="${base}blog.html" class="btn-outline shrink-0">Visit Blog ${icon("arrowRight","h-4 w-4")}</a>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        ${[
          { img: "blog-1", cat: "Nutrition", t: "5 Post-Workout Meals That Actually Speed Recovery", d: "Aug 02, 2026" },
          { img: "blog-2", cat: "Strength", t: "Progressive Overload 101: A Beginner's Roadmap", d: "Jul 24, 2026" },
          { img: "blog-3", cat: "Mobility", t: "Why Your Warm-up Matters More Than Your Workout", d: "Jul 11, 2026" },
        ].map((p) => `
        <a href="${base}blog-details-${p.img}.html" class="card group overflow-hidden">
          <div class="h-44 overflow-hidden"><img src="${base}assets/images/thumbs/${p.img}.jpg" class="h-full w-full object-cover ${["blog-2","blog-5"].includes(p.img) ? "object-center" : "object-top"} transition-transform duration-500 group-hover:scale-105" alt="${p.t}" /></div>
          <div class="p-5">
            <span class="badge-volt">${p.cat}</span>
            <h3 class="mt-3 font-bold leading-snug group-hover:text-volt-600 dark:group-hover:text-volt-300">${p.t}</h3>
            <p class="mt-2 text-xs text-ink-500 dark:text-ink-400">${p.d}</p>
          </div>
        </a>`).join("")}
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div class="mx-auto max-w-3xl px-5 sm:px-8">
        <div class="text-center">
          <span class="eyebrow">Questions</span>
          <h2 class="section-title mt-4">New to PULSE? Start here.</h2>
        </div>
        <div class="mt-10 divide-y divide-ink-100 dark:divide-ink-800" data-accordion>
          ${[
            ["Do I need to be fit to start?", "Not at all — most first-timers aren't. Every class is coached with scalable options, and your first session includes a quick movement check so coaches can adjust intensity to you."],
            ["What should I bring to my first visit?", "Just comfortable workout clothes, closed-toe shoes and a water bottle. Mats, weights and other equipment are provided, and towels are available at the front desk."],
            ["Can I try a class before joining?", "Yes — new members get a free trial class in any studio. Book it from the homepage or talk to us and we'll set you up with the right first class for your goals."],
            ["Is parking available at the studio?", "Yes, free member parking is available at all three locations, along with secure bike racks and nearby street parking."],
            ["How do I book or cancel a class?", "Once you're a member, book and cancel classes anytime from your dashboard — spots open back up instantly for other members when you cancel."],
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
      </div>
    </section>

    <!-- ============ CTA BAND ============ -->
    <section class="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div class="relative overflow-hidden rounded-3xl bg-ink-950 px-8 py-16 text-center sm:px-16">
        <img src="${base}assets/images/banners/cta-band.jpg" class="absolute inset-0 h-full w-full object-cover opacity-20" alt="" />
        <div class="absolute inset-0 bg-ink-950/80"></div>
        <div class="relative">
          <h2 class="section-title text-white">Your first class is on us.</h2>
          <p class="mx-auto mt-4 max-w-xl text-ink-100">Create a free account, pick a class, and see why PULSE members stay for years, not months.</p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="${base}register.html" class="btn-primary btn-lg">Start Free Trial</a>
            <a href="${base}contact.html" class="btn-outline btn-lg !border-white/30 !text-white hover:!bg-white/10">Talk to Us</a>
          </div>
        </div>
      </div>
    </section>

  </main>`;
};
