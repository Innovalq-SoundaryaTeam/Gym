const { icon } = require("../icons");

const TRAINERS = [
  { n: "Arjun Mehta", r: "Strength & Powerlifting", a: 1, exp: "11 yrs experience", cert: "NSCA-CSCS", tags: ["Strength Lab","Boxing"] },
  { n: "Priya Nair", r: "Yoga & Mobility", a: 2, exp: "8 yrs experience", cert: "RYT-500", tags: ["Power Yoga","Pilates"] },
  { n: "Rohan Kapoor", r: "HIIT & Conditioning", a: 3, exp: "9 yrs experience", cert: "ACE-CPT", tags: ["HIIT","Cardio Blast"] },
  { n: "Sana Sheikh", r: "Zumba & Dance Fitness", a: 4, exp: "6 yrs experience", cert: "ZIN Certified", tags: ["Zumba","Zumba Gold"] },
  { n: "Vikram Rao", r: "Boxing & Functional Training", a: 5, exp: "10 yrs experience", cert: "USA Boxing", tags: ["Boxing","Strength Lab"] },
  { n: "Isha Verma", r: "Spin & Endurance", a: 6, exp: "5 yrs experience", cert: "Schwinn Certified", tags: ["Spin & Sculpt"] },
  { n: "Karan Malhotra", r: "Sports Rehab & Recovery", a: 7, exp: "7 yrs experience", cert: "DPT", tags: ["Recovery","Mobility"] },
  { n: "Divya Suresh", r: "Nutrition Coaching", a: 8, exp: "6 yrs experience", cert: "Precision Nutrition", tags: ["Nutrition"] },
];

module.exports = function trainers(base) {
  return `
  <main id="main">
    <section class="bg-ink-950 py-16 sm:py-20">
      <div class="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span class="eyebrow">Our Coaches</span>
        <h1 class="mt-5 text-4xl font-extrabold text-white sm:text-5xl">Certified trainers who care about your numbers.</h1>
        <p class="mt-4 text-ink-300">Every PULSE coach holds a nationally recognised certification and specialises
          in a specific discipline — from powerlifting to mobility to nutrition.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        ${TRAINERS.map((t) => `
        <div class="card group overflow-hidden">
          <div class="relative overflow-hidden">
            <img src="${base}assets/images/avatars/avatar-${t.a}.svg" alt="${t.n}" class="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-ink-950/80 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              ${["instagram","facebook","x"].map((s) => `<a href="#" class="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-volt-400 hover:text-ink-950">${icon(s,"h-3.5 w-3.5")}</a>`).join("")}
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-lg font-bold">${t.n}</h3>
            <p class="text-sm text-volt-600 dark:text-volt-400">${t.r}</p>
            <div class="mt-3 flex flex-wrap gap-1.5">
              ${t.tags.map((tag) => `<span class="badge-ink">${tag}</span>`).join("")}
            </div>
            <div class="mt-4 flex items-center justify-between border-t border-ink-100 pt-4 text-xs text-ink-500 dark:border-ink-800 dark:text-ink-400">
              <span>${t.exp}</span><span>${t.cert}</span>
            </div>
          </div>
        </div>`).join("")}
      </div>
    </section>

    <!-- BECOME A TRAINER CTA -->
    <section class="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div class="grid grid-cols-1 items-center gap-10 rounded-3xl bg-ink-50 p-10 dark:bg-ink-900/50 lg:grid-cols-2">
        <div>
          <span class="eyebrow">Careers</span>
          <h2 class="section-title mt-4 !text-3xl">Think you've got what it takes to coach at PULSE?</h2>
          <p class="section-sub">We're always looking for certified, empathetic coaches who care about outcomes as much as reps.</p>
          <a href="${base}contact.html" class="btn-primary mt-6 inline-flex">Apply to Join the Team ${icon("arrowRight","h-4 w-4")}</a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          ${[["12","coaches on staff"],["4.9/5","avg. member rating"],["100%","nationally certified"],["3","studio locations"]].map(([n,l]) => `
          <div class="rounded-2xl bg-white p-5 text-center dark:bg-ink-900">
            <p class="text-2xl font-extrabold text-volt-600 dark:text-volt-400">${n}</p>
            <p class="mt-1 text-xs text-ink-500 dark:text-ink-400">${l}</p>
          </div>`).join("")}
        </div>
      </div>
    </section>
  </main>`;
};
