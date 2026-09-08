const { icon } = require("../icons");

const CLASSES = [
  { k: "strength", t: "Strength Lab", cat: "Strength", lvl: "Intermediate", time: "Mon · Wed · Fri — 6:00 AM & 6:00 PM", coach: "Arjun Mehta", spots: "4 spots left", dur: "55 min" },
  { k: "yoga", t: "Power Yoga Flow", cat: "Yoga", lvl: "All Levels", time: "Tue · Thu · Sat — 8:30 AM", coach: "Priya Nair", spots: "9 spots left", dur: "60 min" },
  { k: "zumba", t: "Zumba Dance Party", cat: "Zumba", lvl: "Beginner", time: "Mon · Wed — 7:00 PM", coach: "Sana Sheikh", spots: "Open", dur: "45 min" },
  { k: "cardio", t: "Cardio Blast Circuit", cat: "Cardio", lvl: "All Levels", time: "Daily — 6:30 AM", coach: "Rohan Kapoor", spots: "2 spots left", dur: "40 min" },
  { k: "hiit", t: "HIIT Conditioning", cat: "Cardio", lvl: "Advanced", time: "Tue · Thu — 6:00 PM", coach: "Rohan Kapoor", spots: "5 spots left", dur: "35 min" },
  { k: "pilates", t: "Mat Pilates", cat: "Yoga", lvl: "All Levels", time: "Wed · Fri — 9:30 AM", coach: "Priya Nair", spots: "Open", dur: "50 min" },
  { k: "boxing", t: "Boxing Fundamentals", cat: "Strength", lvl: "Beginner", time: "Sat — 10:00 AM", coach: "Vikram Rao", spots: "6 spots left", dur: "50 min" },
  { k: "spin", t: "Spin & Sculpt", cat: "Cardio", lvl: "Intermediate", time: "Mon · Fri — 5:30 PM", coach: "Isha Verma", spots: "3 spots left", dur: "45 min" },
  { k: "zumba", t: "Zumba Gold (Low Impact)", cat: "Zumba", lvl: "Beginner", time: "Sun — 9:00 AM", coach: "Sana Sheikh", spots: "Open", dur: "40 min" },
];

module.exports = function classes(base) {
  return `
  <main id="main">
    <section class="bg-ink-950 py-16 sm:py-20">
      <div class="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span class="eyebrow">Group Classes</span>
        <h1 class="mt-5 text-4xl font-extrabold text-white sm:text-5xl">Yoga, Zumba, strength &amp; cardio — pick your slot.</h1>
        <p class="mt-4 text-ink-300">38 classes a week across four studios. Filter by category or search for a class,
          then reserve your spot from the member dashboard.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2" data-tabs>
          <button data-tab-btn="all" class="tab-btn active">All Classes</button>
          <button data-tab-btn="Yoga" class="tab-btn">Yoga</button>
          <button data-tab-btn="Zumba" class="tab-btn">Zumba</button>
          <button data-tab-btn="Strength" class="tab-btn">Strength</button>
          <button data-tab-btn="Cardio" class="tab-btn">Cardio</button>
        </div>
        <a href="${base}login.html?next=dashboard/book-classes.html" class="btn-primary shrink-0">${icon("calendar","h-4 w-4")} Book a Class</a>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${CLASSES.map((c) => `
        <div data-tab-panel="all" class="card overflow-hidden">
          <div class="relative h-40 overflow-hidden">
            <img src="${base}assets/images/thumbs/${c.k}.jpg" class="h-full w-full object-cover ${c.k === "strength" ? "object-center" : "object-top"}" alt="${c.t}" />
            <span class="absolute left-3 top-3 badge-volt !bg-white/90 dark:!bg-ink-950/80">${c.cat}</span>
            <span class="absolute right-3 top-3 badge-ink !bg-white/90 dark:!bg-ink-950/80">${c.lvl}</span>
          </div>
          <div class="p-5">
            <h3 class="text-lg font-bold">${c.t}</h3>
            <ul class="mt-3 space-y-1.5 text-sm text-ink-500 dark:text-ink-400">
              <li class="flex items-center gap-2">${icon("clock","h-4 w-4")}${c.time} · ${c.dur}</li>
              <li class="flex items-center gap-2">${icon("user","h-4 w-4")}Coach ${c.coach}</li>
              <li class="flex items-center gap-2">${icon("users","h-4 w-4")}${c.spots}</li>
            </ul>
            <div class="mt-5 flex items-center gap-2">
              <a href="${base}class-details-${c.k}.html" class="btn-outline btn-sm flex-1">Details</a>
              <a href="${base}login.html?next=dashboard/book-classes.html" class="btn-primary btn-sm flex-1">Reserve</a>
            </div>
          </div>
        </div>`).join("")}
      </div>
    </section>

    <!-- duplicate panels for filtering, hidden via data-tab-panel category-specific views -->
    ${["Yoga","Zumba","Strength","Cardio"].map((cat) => `
    <div class="hidden" data-tab-panel="${cat}">
      <section class="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${CLASSES.filter((c) => c.cat === cat).map((c) => `
          <div class="card overflow-hidden">
            <div class="relative h-40 overflow-hidden">
              <img src="${base}assets/images/thumbs/${c.k}.jpg" class="h-full w-full object-cover ${c.k === "strength" ? "object-center" : "object-top"}" alt="${c.t}" />
              <span class="absolute left-3 top-3 badge-volt !bg-white/90 dark:!bg-ink-950/80">${c.cat}</span>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-bold">${c.t}</h3>
              <ul class="mt-3 space-y-1.5 text-sm text-ink-500 dark:text-ink-400">
                <li class="flex items-center gap-2">${icon("clock","h-4 w-4")}${c.time} · ${c.dur}</li>
                <li class="flex items-center gap-2">${icon("user","h-4 w-4")}Coach ${c.coach}</li>
              </ul>
              <div class="mt-5 flex items-center gap-2">
                <a href="${base}class-details-${c.k}.html" class="btn-outline btn-sm flex-1">Details</a>
                <a href="${base}login.html?next=dashboard/book-classes.html" class="btn-primary btn-sm flex-1">Reserve</a>
              </div>
            </div>
          </div>`).join("")}
        </div>
      </section>
    </div>`).join("")}

    <!-- WEEKLY TIMETABLE -->
    <section class="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="text-center">
          <span class="eyebrow">Weekly Timetable</span>
          <h2 class="section-title mt-4">Plan your week at a glance.</h2>
        </div>
        <div class="mt-10 overflow-x-auto rounded-2xl border border-ink-100 dark:border-ink-800">
          <table class="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr class="bg-ink-100 dark:bg-ink-800/60">
                <th class="px-4 py-3 text-left font-bold">Time</th>
                ${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => `<th class="px-4 py-3 text-left font-bold">${d}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${[
                ["6:00 AM", ["Strength Lab","—","Strength Lab","—","Strength Lab","—","—"]],
                ["6:30 AM", ["Cardio Blast","Cardio Blast","Cardio Blast","Cardio Blast","Cardio Blast","Cardio Blast","Cardio Blast"]],
                ["8:30 AM", ["—","Power Yoga","—","Power Yoga","—","Power Yoga","—"]],
                ["9:00 AM", ["—","—","—","—","—","—","Zumba Gold"]],
                ["5:30 PM", ["—","—","—","—","Spin & Sculpt","—","—"]],
                ["6:00 PM", ["Strength Lab","HIIT","Strength Lab","HIIT","Strength Lab","—","—"]],
                ["7:00 PM", ["Zumba Party","—","Zumba Party","—","—","—","—"]],
              ].map(([t, days]) => `
              <tr class="border-t border-ink-100 dark:border-ink-800">
                <td class="px-4 py-3 font-semibold text-ink-500 dark:text-ink-400">${t}</td>
                ${days.map((d) => `<td class="px-4 py-3 ${d === "—" ? "text-ink-300 dark:text-ink-700" : "font-medium text-ink-800 dark:text-ink-100"}">${d}</td>`).join("")}
              </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- WHAT TO EXPECT -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span class="eyebrow">First Time Here?</span>
          <h2 class="section-title mt-4">Here's what to expect from your first class.</h2>
          <p class="section-sub">Every class starts with a short warm-up and a rundown of the session from your coach,
            so you'll never feel lost — no matter your fitness level. Arrive 10 minutes early for your first visit to
            get set up on the dashboard and meet your coach.</p>
          <div class="mt-8 space-y-4">
            ${[
              ["clock","Arrive 10 minutes early","Front desk will help with sign-in and equipment for your first class."],
              ["user","Coach-led warm-up","Every session opens with a guided warm-up scaled to your fitness level."],
              ["users","Small class sizes","Most classes cap between 12–20 people, so coaches can actually correct form."],
            ].map(([i,t,d]) => `
            <div class="flex gap-4">
              <div class="icon-tile shrink-0">${icon(i,"h-5 w-5")}</div>
              <div><p class="font-bold">${t}</p><p class="mt-1 text-sm text-ink-500 dark:text-ink-400">${d}</p></div>
            </div>`).join("")}
          </div>
        </div>
        <img src="${base}assets/images/banners/facility-studio.jpg" class="w-full rounded-3xl" alt="Class in session" />
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="text-center">
          <span class="eyebrow">Member Feedback</span>
          <h2 class="section-title mt-4">What members say about class day.</h2>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          ${[
            { q: "Booking a slot takes seconds and I've never once shown up to a class that was cancelled without notice.", n: "Farhan Qureshi", a: 5 },
            { q: "HIIT Conditioning with Coach Rohan is brutal in the best way — I've dropped my 5k time by two minutes.", n: "Priyanka Rao", a: 10 },
            { q: "Power Yoga Flow is the one class my whole week is built around. Same instructor every time really helps.", n: "Aditi Bose", a: 12 },
          ].map((t) => `
          <div class="card p-6">
            <div class="flex gap-0.5 text-volt-500">${Array(5).fill(icon("star","h-4 w-4 fill-current")).join("")}</div>
            <p class="mt-4 text-sm text-ink-600 dark:text-ink-300">"${t.q}"</p>
            <div class="mt-5 flex items-center gap-3">
              <img src="${base}assets/images/avatars/avatar-${t.a}.jpg" class="h-10 w-10 rounded-full object-cover object-top" alt="${t.n}" />
              <p class="text-sm font-bold">${t.n}</p>
            </div>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <div class="text-center">
        <span class="eyebrow">Booking FAQs</span>
        <h2 class="section-title mt-4">Questions about classes, answered.</h2>
      </div>
      <div class="mt-10 divide-y divide-ink-100 dark:divide-ink-800" data-accordion>
        ${[
          ["Do I need to book in advance?", "Yes — reserving your spot from the member dashboard guarantees your place, since popular classes like Strength Lab and HIIT fill up fast."],
          ["What happens if a class is full?", "You can join the waitlist from your dashboard — you'll get a notification if a spot opens up, usually from a late cancellation."],
          ["Can I drop in without a membership?", "Single-class drop-ins are available for $18 at the front desk, subject to space. Members always get priority booking."],
          ["What if I need to cancel my spot?", "Cancel anytime up to 2 hours before class from your dashboard so the spot can be released to someone on the waitlist."],
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
