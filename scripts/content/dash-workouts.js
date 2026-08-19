const { icon } = require("../icons");

module.exports = function dashWorkouts(base) {
  return `
  <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="text-2xl font-bold">Workout Plans</h2>
      <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Weekly plans assigned by your coach — download as PDF, printable for the gym floor.</p>
    </div>
  </div>

  <!-- CURRENT WEEK -->
  <div class="card mt-8 overflow-hidden">
    <div class="flex flex-wrap items-center justify-between gap-4 border-b border-ink-100 p-6 dark:border-ink-800">
      <div>
        <span class="badge-volt">Current Week</span>
        <h3 class="mt-2 text-xl font-bold">Week 33 — Hypertrophy Block, Phase 2</h3>
        <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Assigned by Coach Arjun Mehta · Aug 17, 2026</p>
      </div>
      <a href="${base}assets/downloads/workout-plan-week-33.pdf" download class="btn-primary shrink-0">${icon("download","h-4 w-4")} Download PDF</a>
    </div>
    <div class="grid grid-cols-1 divide-y divide-ink-100 dark:divide-ink-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:sm:divide-x-ink-800">
      ${[
        { d: "Monday", t: "Lower Body Strength", ex: ["Back Squat — 5×5", "Romanian Deadlift — 4×8", "Walking Lunges — 3×12", "Calf Raises — 3×15"] },
        { d: "Wednesday", t: "Upper Body Push", ex: ["Bench Press — 5×5", "Overhead Press — 4×8", "Incline DB Press — 3×10", "Tricep Pushdown — 3×15"] },
        { d: "Friday", t: "Full Body Conditioning", ex: ["Deadlift — 4×6", "Pull-ups — 4×AMRAP", "Kettlebell Swings — 4×20", "Plank — 3×60s"] },
      ].map((day) => `
      <div class="p-6">
        <p class="text-xs font-bold uppercase tracking-widest text-volt-600 dark:text-volt-400">${day.d}</p>
        <p class="mt-1 font-bold">${day.t}</p>
        <ul class="mt-3 space-y-2 text-sm text-ink-600 dark:text-ink-300">
          ${day.ex.map((e) => `<li class="flex items-start gap-2">${icon("check","mt-0.5 h-3.5 w-3.5 shrink-0 text-volt-600 dark:text-volt-400")}${e}</li>`).join("")}
        </ul>
      </div>`).join("")}
    </div>
  </div>

  <!-- COACH NOTE -->
  <div class="card mt-6 flex items-start gap-4 p-6">
    <img src="${base}assets/images/avatars/avatar-1.svg" class="h-12 w-12 shrink-0 rounded-full" alt="Arjun Mehta" />
    <div>
      <p class="font-bold">Note from Coach Arjun</p>
      <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">"Great job hitting 130kg on squat last week — let's push for 132.5kg x5 on Monday. Keep resting 3 minutes between top sets."</p>
    </div>
  </div>

  <!-- PLAN HISTORY -->
  <div class="mt-8">
    <p class="font-bold">Plan History</p>
    <div class="mt-4 space-y-3">
      ${[
        ["Week 32", "Hypertrophy Block, Phase 1", "Aug 10, 2026"],
        ["Week 31", "Strength Foundation", "Aug 03, 2026"],
        ["Week 30", "Strength Foundation", "Jul 27, 2026"],
      ].map(([w,t,d], i) => `
      <div class="card flex flex-wrap items-center justify-between gap-3 p-4">
        <div class="flex items-center gap-3">
          <div class="icon-tile">${icon("file","h-5 w-5")}</div>
          <div>
            <p class="text-sm font-bold">${w} — ${t}</p>
            <p class="text-xs text-ink-500 dark:text-ink-400">Assigned ${d}</p>
          </div>
        </div>
        <a href="${base}assets/downloads/workout-plan-week-${32-i}.pdf" download class="btn-outline btn-sm">${icon("download","h-4 w-4")} PDF</a>
      </div>`).join("")}
    </div>
  </div>
  `;
};
