const { icon } = require("../icons");

const POSTS = {
  "blog-1": {
    t: "5 Post-Workout Meals That Actually Speed Recovery", cat: "Nutrition", d: "Aug 02, 2026", read: "6 min read",
    img: "blog-1", avatar: 8, authorName: "Divya Suresh", authorRole: "Nutrition Coaching",
    authorBio: "Nutrition Coach at PULSE. Precision Nutrition certified, helping members build sustainable eating habits around their training.",
    intro: "What you eat in the 60 minutes after training matters almost as much as the session itself. Skip it, and you're leaving recovery on the table — literally.",
    h2a: "Why the post-workout window matters", pa: "Training breaks muscle fibres down; food is what rebuilds them stronger. A meal combining protein and carbohydrate shortly after a session replenishes glycogen, kick-starts muscle protein synthesis, and blunts the soreness that stops you training consistently.",
    listTitle: "Five go-to recovery meals", list: [
      "Greek yoghurt, berries & a drizzle of honey — fast-digesting protein plus quick-acting carbs.",
      "Grilled chicken, rice & roasted vegetables — the classic macro-balanced recovery plate.",
      "Salmon, sweet potato & greens — omega-3s help manage exercise-induced inflammation.",
      "Protein smoothie with banana & oats — ideal when you need something fast between sessions and work.",
      "Eggs on wholegrain toast with avocado — a solid, budget-friendly option any time of day.",
    ],
    quote: "\"You can't out-train a bad diet, but you also can't out-diet a missed recovery window. Both matter — together.\"",
    h2b: "Timing beats perfection", pb: "You don't need to hit a strict 30-minute window with lab-grade precision — total daily protein and carbohydrate intake matters more than exact timing. But having a go-to recovery meal ready means you're far less likely to skip refuelling altogether after a hard session. Members on our Nutrition Coaching add-on get a personalised post-workout meal plan built around their actual training schedule.",
  },
  "blog-2": {
    t: "Progressive Overload 101: A Beginner's Roadmap", cat: "Strength", d: "Jul 24, 2026", read: "8 min read",
    img: "blog-2", avatar: 1, authorName: "Arjun Mehta", authorRole: "Strength & Powerlifting",
    authorBio: "Founder & Head Strength Coach at PULSE. NSCA-CSCS certified with 11 years of coaching experience.",
    intro: "Progressive overload is the single most important principle in strength training — and the one beginners misunderstand most. It simply means giving your muscles a reason to adapt: more weight, more reps, more sets, or better technique, applied consistently over time.",
    h2a: "Why it matters", pa: "Your body is remarkably efficient — it only builds strength and muscle it actually needs. Lift the same weight for the same reps forever, and adaptation stalls. Small, consistent increases in training stress are what force continued progress.",
    listTitle: "Four ways to apply it", list: [
      "Add weight — the most obvious lever, but the smallest and most sustainable jumps win long-term.",
      "Add reps — squeeze one or two more quality reps out of the same working weight.",
      "Add sets — increase total weekly volume for a muscle group.",
      "Improve technique — a cleaner rep with better range of motion is genuinely harder work.",
    ],
    quote: "\"You don't need a perfect program. You need a program you'll still be running in six months, with the weight on the bar slowly climbing.\"",
    h2b: "A simple 4-week starting template", pb: "In Strength Lab, beginners typically start with a linear progression: add 2.5kg to the bar each session on squat, bench and deadlift, while accessory work stays at a fixed weight until reps hit the top of the target range. Your coach tracks every set in your member dashboard, so the next session's targets are always waiting for you.",
  },
  "blog-3": {
    t: "Why Your Warm-up Matters More Than Your Workout", cat: "Mobility", d: "Jul 11, 2026", read: "5 min read",
    img: "blog-3", avatar: 7, authorName: "Karan Malhotra", authorRole: "Sports Rehab & Recovery",
    authorBio: "Sports Rehab & Recovery Coach at PULSE, DPT-qualified, focused on keeping members training injury-free for the long term.",
    intro: "Most members rush through five minutes on a bike before their session and call it a warm-up. That's not preparing your body for load — it's barely raising your pulse.",
    h2a: "What a real warm-up does", pa: "A proper warm-up raises tissue temperature, increases joint range of motion, and primes the exact movement patterns you're about to load. Skip it, and your first working sets are effectively an extension of your warm-up — done with heavier weight than your body is actually ready for.",
    listTitle: "A four-part warm-up structure", list: [
      "Raise — 3–5 minutes of easy cardio to increase heart rate and blood flow.",
      "Mobilise — dynamic stretches for the joints you're about to load (hips, shoulders, ankles).",
      "Activate — light activation drills for the muscles doing the main work (glute bridges, band pull-aparts).",
      "Rehearse — one or two light-weight sets of the actual lift, focused purely on technique.",
    ],
    quote: "\"An injury doesn't just cost you today's session — it costs you every session for the next six weeks. A five-minute warm-up is cheap insurance.\"",
    h2b: "It doesn't need to take long", pb: "A focused, purposeful warm-up takes 8–10 minutes and covers all four parts above — it's not about doing more, it's about doing the right things. Every PULSE class opens with a coach-led warm-up built around that session's movements, so you're never guessing what to prepare for.",
  },
  "blog-4": {
    t: "HIIT vs Steady-State Cardio: What the Research Says", cat: "Conditioning", d: "Jun 29, 2026", read: "7 min read",
    img: "blog-4", avatar: 3, authorName: "Rohan Kapoor", authorRole: "HIIT & Conditioning",
    authorBio: "HIIT & Conditioning Coach at PULSE, ACE-CPT certified, running the Cardio Blast and HIIT Conditioning programs.",
    intro: "\"Is HIIT better than steady cardio?\" is one of the most-asked questions at the front desk. The honest answer: it depends what you're optimising for — and the best plans usually include both.",
    h2a: "What each one is actually good at", pa: "High-intensity interval training (HIIT) builds cardiovascular capacity and burns calories efficiently in less time, with a modest \"afterburn\" effect. Steady-state cardio is gentler on recovery, easier to sustain for longer durations, and generally more joint-friendly for higher weekly volume.",
    listTitle: "Choosing between them", list: [
      "Short on time? HIIT delivers more conditioning stimulus per minute spent training.",
      "Training hard elsewhere this week? Steady-state adds cardio without taxing recovery further.",
      "New to structured cardio? Start with steady-state to build a base before adding intervals.",
      "Chasing a specific event or sport? Combine both — intervals for capacity, steady-state for volume.",
    ],
    quote: "\"The best cardio plan is the one you'll actually repeat three times a week for the next six months.\"",
    h2b: "Our recommendation for most members", pb: "Most members do well with one HIIT Conditioning or Cardio Blast session and one longer steady-state session (a run, the Cardio Deck, or an outdoor walk) each week, alongside their strength or class training. Ask your coach to help slot the right mix into your weekly plan from the member dashboard.",
  },
  "blog-5": {
    t: "Inside the Boxing Fundamentals Class With Coach Vikram", cat: "Community", d: "Jun 15, 2026", read: "4 min read",
    img: "blog-5", avatar: 5, authorName: "Vikram Rao", authorRole: "Boxing & Functional Training",
    authorBio: "Boxing & Functional Training Coach at PULSE, USA Boxing certified, leading Saturday's Boxing Fundamentals class.",
    intro: "Every Saturday morning, the Boxing & HIIT Arena fills up for one of our most requested classes. We sat down with Coach Vikram to find out what makes Boxing Fundamentals different from a typical bag workout.",
    h2a: "It's technique first, sweat second", pa: "\"A lot of people walk in expecting to just swing at the bag for 50 minutes,\" Vikram says. \"We actually spend the first fifteen minutes purely on stance, guard and footwork. Get that right, and the punches — and the calorie burn — take care of themselves.\"",
    listTitle: "What a typical session covers", list: [
      "Stance, guard and footwork drills — the foundation every combination is built on.",
      "Jab-cross-hook combinations on the heavy bag, added layer by layer each week.",
      "Round-based bag work with rest intervals, building genuine conditioning.",
      "Core and finisher work to close out the session.",
    ],
    quote: "\"The best boxing students I've coached aren't the strongest punchers on day one — they're the ones who show up and refine technique every single week.\"",
    h2b: "No experience needed", pb: "The class caps at 10 members so everyone gets individual coaching and bag time, and gloves are available to rent at the front desk. \"Beginners are half the room most weeks,\" Vikram adds. \"You don't need experience — you need fifty minutes and a willingness to learn the fundamentals properly.\"",
  },
  "blog-6": {
    t: "Spin Class Playlist Secrets: How Music Drives Output", cat: "Mind & Body", d: "Jun 02, 2026", read: "5 min read",
    img: "blog-6", avatar: 6, authorName: "Isha Verma", authorRole: "Spin & Endurance",
    authorBio: "Spin & Endurance Coach at PULSE, Schwinn certified, curating every Spin & Sculpt playlist herself.",
    intro: "Ask any regular why they never miss Spin & Sculpt on a Monday, and the playlist comes up almost as often as the workout itself. It turns out the music isn't just for vibes — it measurably changes how hard you ride.",
    h2a: "The science of tempo and effort", pa: "Research on exercise and music consistently shows that tracks matched to your target cadence help riders sustain higher output with lower perceived effort — your legs sync to the beat almost involuntarily, and a driving chorus at the right moment can push you through the hardest interval of the ride.",
    listTitle: "How we build a Spin & Sculpt playlist", list: [
      "Warm-up tracks sit around 80–90 BPM to ease riders in without spiking heart rate too early.",
      "Climb segments use slower, heavier tracks (60–70 RPM feel) to reinforce grinding through resistance.",
      "Sprint intervals get high-BPM, high-energy tracks timed to hit their chorus at peak effort.",
      "Cooldown always closes on something calmer — the ride should end how your heart rate does.",
    ],
    quote: "\"The right song at the right moment of a ride can be worth more than any amount of coaching cues shouted over the music.\"",
    h2b: "Bring your own energy", pb: "Coach Isha rebuilds the Spin & Sculpt playlist every few weeks to keep it fresh, mixing rhythm-based Latin and pop tracks with a few driving electronic climbs. Got a song you think belongs in the mix? Drop a request at the front desk — several current playlist staples started as member suggestions.",
  },
  "blog-7": {
    t: "A 10-Minute Mat Pilates Routine You Can Do at Home", cat: "Mobility", d: "May 21, 2026", read: "6 min read",
    img: "blog-7", avatar: 2, authorName: "Priya Nair", authorRole: "Yoga & Mobility",
    authorBio: "Yoga & Mobility Coach at PULSE, RYT-500 certified, leading Power Yoga Flow and Mat Pilates.",
    intro: "Can't make it into the studio? This short mat sequence hits the same core and postural muscles as a full Mat Pilates class — just condensed into ten focused minutes on your living-room floor.",
    h2a: "Why ten minutes is enough", pa: "Pilates isn't about volume — it's about control and precision. A short, well-executed sequence performed with proper breathing and full attention beats a long, sloppy one. Ten minutes, done consistently, builds real core strength and postural awareness over a few weeks.",
    listTitle: "The 10-minute sequence", list: [
      "Pelvic tilts & breathing (2 min) — reconnect with your core before anything else.",
      "The Hundred (2 min) — the Pilates classic, pumping arms with controlled breathing.",
      "Single-leg stretch (2 min) — alternating knee-to-chest with core braced throughout.",
      "Spine twist seated (2 min) — controlled rotation for thoracic mobility.",
      "Roll-up or roll-down (2 min) — segmental spinal articulation to finish.",
    ],
    quote: "\"You don't need an hour and a reformer machine to feel the benefit — you need consistency and control.\"",
    h2b: "When to come back to the studio", pb: "This routine is a great top-up between classes, but nothing fully replaces coached feedback on form — small alignment errors in Pilates compound quickly. Mat Pilates runs twice a week in the Group Studio if you want a coach checking your form and progressing your sequence further.",
  },
  "blog-8": {
    t: "Zumba for Strength? Why Dance Cardio Counts", cat: "Strength", d: "May 09, 2026", read: "4 min read",
    img: "blog-8", avatar: 4, authorName: "Sana Sheikh", authorRole: "Zumba & Dance Fitness",
    authorBio: "Zumba & Dance Fitness Coach at PULSE, ZIN certified, running Zumba Dance Party and Zumba Gold.",
    intro: "\"Isn't Zumba just cardio?\" We hear this a lot from members focused purely on strength numbers. The truth is dance cardio pulls double duty in ways a lot of lifters underestimate.",
    h2a: "More than calories burned", pa: "An hour of Zumba engages your core, hips and stabiliser muscles continuously through rotation, direction changes and rhythm-driven footwork — the kind of multi-planar movement that heavy barbell training, which is mostly front-to-back, rarely trains directly.",
    listTitle: "What Zumba adds to a strength program", list: [
      "Rotational core strength from constant hip and torso rotation through choreography.",
      "Coordination and agility from rapid direction and rhythm changes.",
      "Active recovery — high enough heart rate for cardio benefit, low enough impact to recover from lifting.",
      "Mental reset — a genuinely fun session that doesn't feel like \"more training.\"",
    ],
    quote: "\"The strongest lifters I know aren't the ones who only ever lift — they're the ones who move well in every direction, not just up and down.\"",
    h2b: "How to fit it in", pb: "Most of our Strength Lab members treat Zumba Dance Party as a once-a-week addition rather than a replacement — it complements barbell training without interfering with recovery. If low-impact is more your speed, Zumba Gold on Sunday mornings delivers the same music and choreography at a gentler pace.",
  },
  "blog-9": {
    t: "Sleep & Recovery: The Most Overlooked Training Variable", cat: "Recovery", d: "Apr 28, 2026", read: "6 min read",
    img: "blog-9", avatar: 6, authorName: "Isha Verma", authorRole: "Recovery & Regeneration",
    authorBio: "Recovery & Regeneration Coach at PULSE, focused on sleep, mobility and stress management as training variables — not afterthoughts.",
    intro: "Members obsess over programming, macros and rep ranges, then sleep five and a half hours a night and wonder why progress stalls. Sleep isn't downtime from training — it's when almost all the adaptation you trained for actually happens.",
    h2a: "What actually happens while you sleep", pa: "Deep sleep is when growth hormone release peaks and muscle protein synthesis runs hardest, while REM sleep consolidates the motor-skill learning behind every lift you're grooving in the gym. Cut sleep short and you're not just tired — you're training on a body that never finished repairing yesterday's session.",
    listTitle: "Five habits that protect your sleep", list: [
      "Keep a consistent wake time, even on rest days — it anchors your body clock more than bedtime does.",
      "Stop caffeine by early afternoon — it has a longer half-life than most people assume.",
      "Get natural light within an hour of waking, ideally during your morning session.",
      "Keep the bedroom cool and dark — even small light exposure measurably reduces deep sleep.",
      "Avoid training maximal lifts within two hours of bed — the adrenaline lingers longer than you'd expect.",
    ],
    quote: "\"Your hardest set of the week isn't in the gym. It's the seven-plus hours your body gets afterward to actually use it.\"",
    h2b: "Recovery is trainable too", pb: "We treat sleep and recovery like any other program variable — track it, adjust it, coach it. Members flagging poor sleep or high stress in their check-ins get their training load adjusted just like we'd adjust for a niggling injury, and our Recovery & Regeneration sessions on Sunday build in the mobility and down-regulation work most programs skip entirely.",
  },
};

module.exports = function blogDetails(base, key) {
  const p = POSTS[key] || POSTS["blog-2"];
  const recent = Object.entries(POSTS).filter(([k]) => k !== key).slice(0, 3);
  return `
  <main id="main">
    <section class="mx-auto max-w-4xl px-5 pt-12 sm:px-8">
      <nav class="flex items-center gap-2 text-xs text-ink-400">
        <a href="${base}index.html" class="hover:text-volt-600 dark:hover:text-volt-400">Home</a>${icon("chevronRight","h-3.5 w-3.5")}
        <a href="${base}blog.html" class="hover:text-volt-600 dark:hover:text-volt-400">Blog</a>${icon("chevronRight","h-3.5 w-3.5")}
        <span class="text-ink-700 dark:text-ink-200">${p.t}</span>
      </nav>
      <span class="badge-volt mt-6">${p.cat}</span>
      <h1 class="section-title mt-4">${p.t}</h1>
      <div class="mt-5 flex items-center gap-3 text-sm text-ink-500 dark:text-ink-400">
        <img src="${base}assets/images/avatars/avatar-${p.avatar}.jpg" class="h-9 w-9 rounded-full object-cover" alt="${p.authorName}" />
        <span class="font-semibold text-ink-800 dark:text-ink-100">${p.authorName}</span>
        <span>·</span><span>${p.d}</span><span>·</span><span>${p.read}</span>
      </div>
    </section>

    <section class="mx-auto mt-8 max-w-5xl px-5 sm:px-8">
      <img src="${base}assets/images/thumbs/${p.img}.jpg" class="aspect-[16/8] w-full rounded-3xl object-cover ${["blog-2","blog-5"].includes(p.img) ? "object-center" : "object-top"}" alt="${p.t}" />
    </section>

    <div class="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-5 py-14 sm:px-8 lg:grid-cols-3">
      <article class="prose prose-ink max-w-none dark:prose-invert lg:col-span-2">
        <p class="text-ink-600 dark:text-ink-300">${p.intro}</p>

        <h2 class="mt-8 text-2xl font-bold">${p.h2a}</h2>
        <p class="mt-3 text-ink-600 dark:text-ink-300">${p.pa}</p>

        <h2 class="mt-8 text-2xl font-bold">${p.listTitle}</h2>
        <ul class="mt-3 space-y-2">
          ${p.list.map((t) => `<li class="flex items-start gap-2">${icon("check","mt-1 h-4 w-4 shrink-0 text-volt-600 dark:text-volt-400")}<span>${t}</span></li>`).join("")}
        </ul>

        <blockquote class="mt-8 border-l-4 border-volt-400 pl-5 italic text-ink-600 dark:text-ink-300">
          ${p.quote}
        </blockquote>

        <h2 class="mt-8 text-2xl font-bold">${p.h2b}</h2>
        <p class="mt-3 text-ink-600 dark:text-ink-300">${p.pb}</p>

        <div class="mt-10 flex items-center justify-between border-t border-ink-100 pt-6 dark:border-ink-800">
          <p class="text-sm font-semibold text-ink-500 dark:text-ink-400">Share this article</p>
          <div class="flex items-center gap-2">
            ${["facebook","x","linkedin"].map((s) => `<a href="#" class="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 hover:border-volt-500 hover:text-volt-600 dark:border-ink-700 dark:text-ink-400">${icon(s,"h-4 w-4")}</a>`).join("")}
          </div>
        </div>

        <!-- author box -->
        <div class="mt-8 flex items-center gap-4 rounded-2xl border border-ink-100 p-6 dark:border-ink-800">
          <img src="${base}assets/images/avatars/avatar-${p.avatar}.jpg" class="h-16 w-16 rounded-full object-cover" alt="${p.authorName}" />
          <div>
            <p class="font-bold">${p.authorName}</p>
            <p class="text-sm text-ink-500 dark:text-ink-400">${p.authorBio}</p>
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
            ${recent.map(([k, rp]) => `
            <a href="${base}blog-details-${k}.html" class="flex gap-3 group">
              <img src="${base}assets/images/thumbs/${rp.img}.jpg" class="h-14 w-16 shrink-0 rounded-lg object-cover ${["blog-2","blog-5"].includes(rp.img) ? "object-center" : "object-top"}" alt="" />
              <p class="text-sm font-semibold leading-snug group-hover:text-volt-600 dark:group-hover:text-volt-300">${rp.t}</p>
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

module.exports.POSTS = POSTS;
