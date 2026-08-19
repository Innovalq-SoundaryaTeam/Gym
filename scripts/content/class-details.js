const { icon } = require("../icons");

const CLASS_DETAILS = {
  strength: {
    t: "Strength Lab", cat: "Strength", lvl: "Intermediate",
    tagline: "A barbell-first strength program built around the big lifts — squat, bench, deadlift and overhead press — with accessory work programmed for balanced, injury-resistant gains.",
    dur: "55 min", size: "12 max", coach: "Arjun Mehta", coachAvatar: 1, coachRole: "Strength & Powerlifting", studio: "Weights Zone",
    paragraphs: [
      "Strength Lab runs on a 12-week periodized cycle. Each session opens with a movement-specific warm-up, followed by a primary barbell lift worked up to a planned top set, then two to three accessory movements targeting weak points. Every set, rep and weight is logged to your member dashboard so you and your coach can track progress week over week.",
      "This class suits lifters who already know how to squat, bench and deadlift with reasonable form and want structured progression rather than random workouts. New to barbell training? Start with our free \"Barbell Basics\" orientation session — ask any coach at the front desk or message us from your dashboard.",
    ],
    included: ["12-week periodized programming", "Weekly 1:1 form check with your coach", "Access to the Strength Lab app-tracked logbook", "Monthly progress & PR review"],
    schedule: [["Monday", "6:00 AM & 6:00 PM", "Arjun Mehta", "4 spots left"], ["Wednesday", "6:00 AM & 6:00 PM", "Arjun Mehta", "Open"], ["Friday", "6:00 AM & 6:00 PM", "Vikram Rao", "2 spots left"]],
    faq: [
      ["Do I need my own equipment?", "No — all barbells, plates, racks and accessories are provided. Just bring gym shoes and a water bottle."],
      ["Can beginners join Strength Lab?", "You should be comfortable with basic barbell mechanics. If you're new, book a free Barbell Basics orientation first."],
      ["What if I miss a session?", "Missed sessions can be made up in any other Strength Lab slot that week, subject to space — just rebook from your dashboard."],
      ["Is nutrition coaching included?", "Base plans focus on training. Add nutrition coaching as an add-on from the Membership page."],
    ],
    price: "49", pricing: [["Drop-in", "$18", "single session"], ["4-Class Pack", "$65", "$16.25 / class"], ["Unlimited (Pro plan)", "Included", "with Pro membership"]],
  },
  yoga: {
    t: "Power Yoga Flow", cat: "Yoga", lvl: "All Levels",
    tagline: "A dynamic, breath-led vinyasa flow that builds strength and flexibility in equal measure — no two sessions are exactly the same.",
    dur: "60 min", size: "20 max", coach: "Priya Nair", coachAvatar: 2, coachRole: "Yoga & Mobility", studio: "Group Studio",
    paragraphs: [
      "Power Yoga Flow links sun salutations and standing sequences into a continuous, breath-synced flow, closing every session with a guided cooldown and short meditation. It's built to leave you both worked and calm — a full-body strength session that doesn't feel like one.",
      "Because poses are cued with beginner and advanced variations side by side, first-timers and regulars train in the same room without either feeling out of place. Mats, blocks and straps are provided, so you can show up empty-handed on your first visit.",
    ],
    included: ["All levels welcome, no experience required", "Mats, blocks & straps provided", "Guided breathwork & cooldown every session", "Modifications cued for every pose"],
    schedule: [["Tuesday", "8:30 AM", "Priya Nair", "9 spots left"], ["Thursday", "8:30 AM", "Priya Nair", "Open"], ["Saturday", "8:30 AM", "Priya Nair", "6 spots left"]],
    faq: [
      ["Do I need prior yoga experience?", "None at all — every pose is cued with a beginner variation, and the coach circulates to help with form."],
      ["What should I bring?", "Just water and comfortable clothing. Mats, blocks and straps are provided in-studio."],
      ["Is this a good warm-up for lifting or running?", "Yes — many members pair Power Yoga Flow with Strength Lab or Cardio Blast for mobility and recovery."],
      ["Can I drop in without a membership?", "Yes, single sessions and 4-class packs are available below, no membership required."],
    ],
    price: "39", pricing: [["Drop-in", "$16", "single session"], ["4-Class Pack", "$56", "$14 / class"], ["Unlimited (Pro plan)", "Included", "with Pro membership"]],
  },
  zumba: {
    t: "Zumba Dance Party", cat: "Zumba", lvl: "Beginner",
    tagline: "High-energy Latin and world-music dance cardio — no choreography experience needed, just show up and move.",
    dur: "45 min", size: "25 max", coach: "Sana Sheikh", coachAvatar: 4, coachRole: "Zumba & Dance Fitness", studio: "Group Studio",
    paragraphs: [
      "Zumba Dance Party packs salsa, reggaeton, cumbia and pop-inspired routines into one sweaty, playlist-driven hour. Steps are taught in short repeating blocks, so by the second run-through the whole room is moving together — no dance background required.",
      "For lower-impact days, our Zumba Gold session runs on Sunday mornings with the same music and energy at a gentler pace, ideal for members easing back into training or preferring joint-friendly cardio.",
    ],
    included: ["Beginner-friendly choreography, taught live", "Curated Latin & world-music playlists", "Zumba Gold (low-impact) option on Sundays", "Calorie-torching full-body cardio"],
    schedule: [["Monday", "7:00 PM", "Sana Sheikh", "Open"], ["Wednesday", "7:00 PM", "Sana Sheikh", "Open"], ["Sunday", "9:00 AM (Zumba Gold)", "Sana Sheikh", "Open"]],
    faq: [
      ["I have two left feet — can I still join?", "Absolutely, that's most of the room. Steps repeat in short blocks so everyone catches on fast."],
      ["What's the difference between Zumba Dance Party and Zumba Gold?", "Same music and instructor, lower-impact movement — Gold is ideal for beginners, older members or anyone easing back into cardio."],
      ["What shoes should I wear?", "Cross-trainers or dance sneakers with good lateral support — avoid running shoes with deep tread."],
      ["Can I bring a friend as a guest?", "Yes, ask at the front desk about our one-time guest pass."],
    ],
    price: "35", pricing: [["Drop-in", "$14", "single session"], ["4-Class Pack", "$48", "$12 / class"], ["Unlimited (Pro plan)", "Included", "with Pro membership"]],
  },
  cardio: {
    t: "Cardio Blast Circuit", cat: "Cardio", lvl: "All Levels",
    tagline: "A fast-moving, heart-rate-driven circuit across treadmills, rowers and assault bikes — built to torch calories in under 40 minutes.",
    dur: "40 min", size: "15 max", coach: "Rohan Kapoor", coachAvatar: 3, coachRole: "HIIT & Conditioning", studio: "Cardio Deck",
    paragraphs: [
      "Cardio Blast Circuit rotates you through timed stations on the Cardio Deck — treadmill sprints, rowing intervals and assault-bike bursts — with heart-rate bands displayed on-screen so you can pace effort in real time. It's the fastest way on our schedule to get a genuinely sweaty, high-output session in.",
      "Because every station is scalable by speed and resistance rather than skill, the same circuit works whether you're brand new to interval training or a regular racing your own splits. Expect your heart rate to spike and recover several times across the 40 minutes.",
    ],
    included: ["Heart-rate zone tracking displayed live", "Treadmill, rower & assault bike stations", "Scalable intensity for every fitness level", "Runs daily — easy to fit around your schedule"],
    schedule: [["Daily", "6:30 AM", "Rohan Kapoor", "2 spots left"], ["Tue · Thu", "6:00 PM (HIIT Conditioning)", "Rohan Kapoor", "5 spots left"]],
    faq: [
      ["Is this the same as HIIT Conditioning?", "They share a coach and equipment, but Cardio Blast is steadier-paced circuit training while HIIT Conditioning is shorter, higher-intensity intervals."],
      ["Can I scale the intensity down?", "Yes — every station has a beginner pace and resistance setting; the coach will show you on your first visit."],
      ["Do I need a heart-rate monitor?", "Studio heart-rate bands are provided and synced to the on-screen display automatically."],
      ["Is this class good for weight loss?", "It's a strong calorie-burning session, but results come from consistency across training and nutrition together — ask about our nutrition coaching add-on."],
    ],
    price: "39", pricing: [["Drop-in", "$16", "single session"], ["4-Class Pack", "$56", "$14 / class"], ["Unlimited (Pro plan)", "Included", "with Pro membership"]],
  },
  hiit: {
    t: "HIIT Conditioning", cat: "Cardio", lvl: "Advanced",
    tagline: "Short, brutal work-to-rest intervals designed to spike your heart rate and keep it elevated long after the class ends.",
    dur: "35 min", size: "15 max", coach: "Rohan Kapoor", coachAvatar: 3, coachRole: "HIIT & Conditioning", studio: "Cardio Deck",
    paragraphs: [
      "HIIT Conditioning packs sprint intervals, kettlebell complexes and bodyweight burners into 35 fast-moving minutes, alternating 30–45 second work bouts with short recovery windows. It's deliberately shorter than Cardio Blast Circuit and deliberately harder — expect to be breathing heavily by round two.",
      "Because the intensity is high, we recommend members have a baseline of general fitness before joining — if you're newer to training, start with Cardio Blast Circuit for a few weeks first, then step up once your conditioning base is solid.",
    ],
    included: ["Coach-led interval timing (work/rest displayed)", "Kettlebell, sprint & bodyweight stations", "EPOC-focused programming for after-burn", "Best paired with 1–2 rest days after"],
    schedule: [["Tuesday", "6:00 PM", "Rohan Kapoor", "5 spots left"], ["Thursday", "6:00 PM", "Rohan Kapoor", "Open"]],
    faq: [
      ["Is HIIT Conditioning beginner-friendly?", "It's labelled Advanced for a reason — build a fitness base with Cardio Blast Circuit or Strength Lab first if you're new to training."],
      ["How is this different from Cardio Blast?", "Shorter work windows, higher intensity, more rest built in between rounds — a sharper, harder stimulus in less time."],
      ["How often should I do this class?", "Most members cap it at 2 sessions a week to allow full recovery between them."],
      ["What should I bring?", "Trainers with good grip, a towel and a water bottle — this one gets sweaty fast."],
    ],
    price: "45", pricing: [["Drop-in", "$18", "single session"], ["4-Class Pack", "$65", "$16.25 / class"], ["Unlimited (Pro plan)", "Included", "with Pro membership"]],
  },
  pilates: {
    t: "Mat Pilates", cat: "Yoga", lvl: "All Levels",
    tagline: "Slow, controlled core and postural work on the mat — the perfect low-impact complement to heavier strength or cardio days.",
    dur: "50 min", size: "16 max", coach: "Priya Nair", coachAvatar: 2, coachRole: "Yoga & Mobility", studio: "Group Studio",
    paragraphs: [
      "Mat Pilates focuses on controlled, deep core engagement, spinal articulation and postural alignment, using slow tempo and precise breathing rather than heavy load or high impact. Sessions are broken into a warm-up, a mat sequence and a stretch-focused cooldown.",
      "It pairs especially well with heavier training days — many members use Mat Pilates as active recovery between Strength Lab or Spin & Sculpt sessions, or to address nagging lower-back tightness from desk work.",
    ],
    included: ["Low-impact, joint-friendly programming", "Focus on core, posture & spinal mobility", "Mats & resistance rings provided", "Ideal as active recovery between hard days"],
    schedule: [["Wednesday", "9:30 AM", "Priya Nair", "Open"], ["Friday", "9:30 AM", "Priya Nair", "Open"]],
    faq: [
      ["Is Mat Pilates enough on its own for strength?", "It's a strong complement to resistance training but not a full replacement — most members pair it with Strength Lab or the free-weights floor."],
      ["Will this help with lower back pain?", "Many members find it helps with general postural tightness, but for a specific injury, check with your physiotherapist first."],
      ["What equipment do I need?", "Just yourself — mats and resistance rings are provided in-studio."],
      ["Is this the same as reformer Pilates?", "No, this is mat-based Pilates using bodyweight and small props, not the reformer machine."],
    ],
    price: "39", pricing: [["Drop-in", "$16", "single session"], ["4-Class Pack", "$56", "$14 / class"], ["Unlimited (Pro plan)", "Included", "with Pro membership"]],
  },
  boxing: {
    t: "Boxing Fundamentals", cat: "Strength", lvl: "Beginner",
    tagline: "Learn proper stance, footwork and the core punches on the heavy bag — a full-body workout that doubles as real technique training.",
    dur: "50 min", size: "10 max", coach: "Vikram Rao", coachAvatar: 5, coachRole: "Boxing & Functional Training", studio: "Boxing & HIIT Arena",
    paragraphs: [
      "Boxing Fundamentals opens with stance, guard and footwork drills before moving onto the heavy bags for jab-cross-hook combinations, building technique layer by layer each week rather than just throwing punches at pads. Expect a genuine sweat from round-based bag work mixed with core and conditioning finishers.",
      "Gloves and hand wraps are available to rent at the front desk if you don't have your own, and the class caps at 10 so every member gets bag time and a technique check from Coach Vikram each session.",
    ],
    included: ["Stance, footwork & core punch technique", "Round-based heavy bag work", "Small class size for individual coaching", "Glove & wrap rental available at front desk"],
    schedule: [["Saturday", "10:00 AM", "Vikram Rao", "6 spots left"]],
    faq: [
      ["Do I need my own gloves?", "No, gloves and hand wraps are available to rent at the front desk — or bring your own if you have them."],
      ["Is this a sparring class?", "No, Boxing Fundamentals is bag and pad work only — no partner sparring involved."],
      ["Is it beginner-friendly even with only one session a week?", "Yes, it's designed for beginners and the small class size means everyone gets individual coaching."],
      ["Will this help with weight loss?", "It's a strong calorie-burning full-body session, best combined with consistent training across the week."],
    ],
    price: "45", pricing: [["Drop-in", "$20", "single session"], ["4-Class Pack", "$70", "$17.50 / class"], ["Unlimited (Pro plan)", "Included", "with Pro membership"]],
  },
  spin: {
    t: "Spin & Sculpt", cat: "Cardio", lvl: "Intermediate",
    tagline: "Rhythm-based indoor cycling intervals paired with light dumbbell work off the bike — cardio and upper-body sculpting in one session.",
    dur: "45 min", size: "20 max", coach: "Isha Verma", coachAvatar: 6, coachRole: "Spin & Endurance", studio: "Cardio Deck",
    paragraphs: [
      "Spin & Sculpt alternates climbs, sprints and rhythm intervals on the bike with short off-bike blocks using light dumbbells for shoulders, arms and core — so you leave with both an elevated heart rate and a light upper-body pump.",
      "Bikes are set up individually before class starts, and resistance is entirely self-controlled, so the same ride works whether you're building an endurance base or pushing race-pace efforts.",
    ],
    included: ["Individually fitted studio bikes", "Off-bike dumbbell sculpting blocks", "Self-controlled resistance for every fitness level", "Curated rhythm-based playlists"],
    schedule: [["Monday", "5:30 PM", "Isha Verma", "3 spots left"], ["Friday", "5:30 PM", "Isha Verma", "Open"]],
    faq: [
      ["Do I need cycling shoes?", "Clip-in cycling shoes are optional — our bikes also work fine with regular trainers on standard cages."],
      ["How early should I arrive?", "Arrive 10 minutes early on your first visit so the coach can help fit your bike correctly."],
      ["What weights are used for the sculpt blocks?", "Light dumbbells (2–5kg) are provided at each bike — no need to bring your own."],
      ["Is this suitable if I've never spun before?", "Yes — resistance is fully self-controlled, so first-timers can pace themselves while following the coach's cues."],
    ],
    price: "39", pricing: [["Drop-in", "$16", "single session"], ["4-Class Pack", "$56", "$14 / class"], ["Unlimited (Pro plan)", "Included", "with Pro membership"]],
  },
};

module.exports = function classDetails(base, key) {
  const c = CLASS_DETAILS[key] || CLASS_DETAILS.strength;
  return `
  <main id="main">

    <!-- HEADER -->
    <section class="relative overflow-hidden bg-ink-950 py-16 sm:py-20">
      <img src="${base}assets/images/banners/facility-weights.jpg" class="absolute inset-0 h-full w-full object-cover opacity-40" alt="" />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/20"></div>
      <div class="relative mx-auto max-w-5xl px-5 sm:px-8">
        <nav class="flex items-center gap-2 text-xs text-ink-400">
          <a href="${base}index.html" class="hover:text-white">Home</a>${icon("chevronRight","h-3.5 w-3.5")}
          <a href="${base}classes.html" class="hover:text-white">Classes</a>${icon("chevronRight","h-3.5 w-3.5")}
          <span class="text-white">${c.t}</span>
        </nav>
        <div class="mt-5 flex flex-wrap items-center gap-3">
          <span class="badge-volt">${c.cat}</span>
          <span class="badge-ink !bg-white/10 !text-white">${c.lvl}</span>
        </div>
        <h1 class="mt-4 text-4xl font-extrabold text-white sm:text-5xl">${c.t}</h1>
        <p class="mt-4 max-w-2xl text-ink-300">${c.tagline}</p>
      </div>
    </section>

    <div class="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 lg:grid-cols-3">
      <div class="lg:col-span-2">

        <!-- Quick facts -->
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          ${[
            ["clock", c.dur, "Duration"],
            ["users", c.size, "Class size"],
            ["award", c.coach, "Lead coach"],
            ["mapPin", c.studio, "Studio"],
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
          ${c.paragraphs.map((p) => `<p class="mt-4 text-ink-600 dark:text-ink-300">${p}</p>`).join("")}
          <h3 class="mt-8 text-xl font-bold">What's included</h3>
          <ul class="mt-3 space-y-2">
            ${c.included.map((f) => `<li class="flex items-start gap-2 text-ink-600 dark:text-ink-300">${icon("check","mt-0.5 h-4 w-4 shrink-0 text-volt-600 dark:text-volt-400")}${f}</li>`).join("")}
          </ul>
        </div>

        <!-- Schedule -->
        <div class="mt-12">
          <h2 class="section-title !text-2xl">Weekly schedule</h2>
          <div class="mt-5 overflow-hidden rounded-2xl border border-ink-100 dark:border-ink-800">
            <table class="table-clean">
              <thead><tr><th class="pl-5">Day</th><th>Time</th><th>Coach</th><th class="pr-5">Availability</th></tr></thead>
              <tbody>
                ${c.schedule.map((r) => `<tr><td class="pl-5 font-semibold">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td class="pr-5"><span class="badge-volt">${r[3]}</span></td></tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- FAQ -->
        <div class="mt-12">
          <h2 class="section-title !text-2xl">Frequently asked questions</h2>
          <div class="mt-5 divide-y divide-ink-100 dark:divide-ink-800" data-accordion>
            ${c.faq.map((f, i) => `
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
          <p class="mt-1 text-3xl font-extrabold">$${c.price}<span class="text-base font-medium text-ink-500 dark:text-ink-400">/mo</span></p>
          <p class="mt-1 text-xs text-ink-400">Included free with Pro &amp; Elite memberships</p>
          <a href="${base}login.html?next=dashboard/book-classes.html" class="btn-primary btn-block mt-5">Reserve a Slot</a>
          <a href="${base}membership.html" class="btn-outline btn-block mt-3">See Membership Plans</a>
          <div class="mt-6 divide-y divide-ink-100 border-t border-ink-100 text-sm dark:divide-ink-800 dark:border-ink-800">
            ${[["Level",c.lvl],["Duration",c.dur],["Class size",c.size],["Studio",c.studio]].map(([k,v]) => `<div class="flex items-center justify-between py-2.5"><span class="text-ink-500 dark:text-ink-400">${k}</span><span class="font-semibold">${v}</span></div>`).join("")}
          </div>
        </div>

        <!-- pricing table -->
        <div class="card p-6">
          <p class="font-bold">Pricing options</p>
          <div class="mt-4 space-y-3">
            ${c.pricing.map(([t,p,s]) => `
            <div class="flex items-center justify-between rounded-xl border border-ink-100 px-4 py-3 dark:border-ink-800">
              <div><p class="text-sm font-semibold">${t}</p><p class="text-xs text-ink-500 dark:text-ink-400">${s}</p></div>
              <p class="font-bold text-volt-600 dark:text-volt-400">${p}</p>
            </div>`).join("")}
          </div>
        </div>

        <div class="card p-6">
          <p class="font-bold">Your coach</p>
          <div class="mt-4 flex items-center gap-3">
            <img src="${base}assets/images/avatars/avatar-${c.coachAvatar}.jpg" class="h-14 w-14 rounded-full object-cover" alt="${c.coach}" />
            <div>
              <p class="font-bold">${c.coach}</p>
              <p class="text-xs text-ink-500 dark:text-ink-400">${c.coachRole}</p>
            </div>
          </div>
          <a href="${base}trainers.html" class="btn-ghost btn-block mt-4 !justify-start !px-0">View profile ${icon("arrowRight","h-4 w-4")}</a>
        </div>
      </aside>
    </div>

  </main>`;
};

module.exports.CLASS_DETAILS = CLASS_DETAILS;
