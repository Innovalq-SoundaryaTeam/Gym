const { icon } = require("../icons");

module.exports = function dashOverview(base) {
  return `
  <!-- WELCOME BANNER -->
  <div class="relative overflow-hidden rounded-3xl bg-ink-950 p-8 sm:p-10">
    <img src="${base}assets/images/banners/hero-2.jpg" class="absolute inset-0 h-full w-full object-cover opacity-30" alt="" />
    <div class="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
      <div>
        <p class="text-sm text-ink-300">Welcome back,</p>
        <h2 class="mt-1 text-3xl font-extrabold text-white">Kabir Singh 👋</h2>
        <p class="mt-2 max-w-md text-sm text-ink-300">You're on a 12-day attendance streak — your next class, HIIT Conditioning, starts in 3 hours.</p>
      </div>
      <div class="flex gap-3">
        <a href="${base}dashboard/book-classes.html" class="btn-primary">Book a Class</a>
        <a href="${base}dashboard/workout-plans.html" class="btn-outline !border-white/30 !text-white hover:!bg-white/10">View Plan</a>
      </div>
    </div>
  </div>

  <!-- STAT CARDS -->
  <div class="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
    ${[
      { i: "activity", l: "This Month's Visits", v: "18", sub: "+4 vs last month", up: true },
      { i: "flame", l: "Attendance Streak", v: "12 days", sub: "Personal best: 21", up: true },
      { i: "calendar", l: "Upcoming Bookings", v: "3", sub: "Next: Today, 6 PM", up: null },
      { i: "creditCard", l: "Plan Renews In", v: "14 days", sub: "Pro Plan · $59/mo", up: null },
    ].map((s) => `
    <div class="card p-5">
      <div class="flex items-center justify-between">
        <div class="icon-tile">${icon(s.i, "h-5 w-5")}</div>
        ${s.up === true ? `<span class="flex items-center gap-1 text-xs font-bold text-volt-600 dark:text-volt-400">${icon("trendingUp","h-3.5 w-3.5")}</span>` : ""}
      </div>
      <p class="mt-4 text-2xl font-extrabold">${s.v}</p>
      <p class="text-xs text-ink-500 dark:text-ink-400">${s.l}</p>
      <p class="mt-2 text-[11px] text-ink-400 dark:text-ink-500">${s.sub}</p>
    </div>`).join("")}
  </div>

  <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
    <!-- ATTENDANCE CHART -->
    <div class="card p-6 lg:col-span-2">
      <div class="flex items-center justify-between">
        <p class="font-bold">Weekly Attendance</p>
        <span class="badge-volt">Last 8 weeks</span>
      </div>
      <div class="mt-4 h-64"><canvas id="attendanceChart"></canvas></div>
    </div>

    <!-- UPCOMING BOOKINGS -->
    <div class="card p-6">
      <div class="flex items-center justify-between">
        <p class="font-bold">Upcoming Bookings</p>
        <a href="${base}dashboard/book-classes.html" class="text-xs font-semibold text-volt-600 dark:text-volt-400">Manage</a>
      </div>
      <div class="mt-4 space-y-3">
        ${[
          { t: "HIIT Conditioning", time: "Today · 6:00 PM", coach: "Rohan Kapoor", k: "hiit" },
          { t: "Power Yoga Flow", time: "Tomorrow · 8:30 AM", coach: "Priya Nair", k: "yoga" },
          { t: "Strength Lab", time: "Fri · 6:00 AM", coach: "Arjun Mehta", k: "strength" },
        ].map((b) => `
        <div class="flex items-center gap-3 rounded-xl border border-ink-100 p-3 dark:border-ink-800">
          <img src="${base}assets/images/thumbs/${b.k}.jpg" class="h-11 w-11 shrink-0 rounded-lg object-cover object-top" alt="" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-semibold">${b.t}</p>
            <p class="text-xs text-ink-500 dark:text-ink-400">${b.time}</p>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </div>

  <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
    <!-- MEMBERSHIP SNAPSHOT -->
    <div class="card p-6">
      <p class="font-bold">Membership Snapshot</p>
      <div class="mt-4 flex items-center justify-between">
        <span class="badge-volt">Pro Plan</span>
        <span class="text-xs text-ink-500 dark:text-ink-400">Renews Sep 01, 2026</span>
      </div>
      <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
        <div class="h-full w-[54%] rounded-full bg-volt-400"></div>
      </div>
      <p class="mt-2 text-xs text-ink-500 dark:text-ink-400">14 of 30 days remaining in this cycle</p>
      <a href="${base}dashboard/membership.html" class="btn-outline btn-block mt-5">Manage Membership</a>
    </div>

    <!-- THIS WEEK'S PLAN -->
    <div class="card p-6">
      <p class="font-bold">This Week's Workout Plan</p>
      <p class="mt-1 text-xs text-ink-500 dark:text-ink-400">Assigned by Coach Arjun Mehta</p>
      <ul class="mt-4 space-y-2 text-sm">
        ${["Mon — Lower Body Strength","Wed — Upper Body Push","Fri — Full Body Conditioning"].map((d) => `<li class="flex items-center gap-2">${icon("check","h-4 w-4 text-volt-600 dark:text-volt-400")}${d}</li>`).join("")}
      </ul>
      <a href="${base}dashboard/workout-plans.html" class="btn-primary btn-block mt-5">${icon("download","h-4 w-4")} Download Plan</a>
    </div>

    <!-- QUICK ACTIONS -->
    <div class="card p-6">
      <p class="font-bold">Quick Actions</p>
      <div class="mt-4 grid grid-cols-2 gap-3">
        ${[
          ["calendar","Book Class","book-classes.html"],
          ["activity","View Attendance","attendance.html"],
          ["creditCard","Billing","membership.html"],
          ["settings","Account Settings","#"],
        ].map(([i,t,href]) => `
        <a href="${href === "#" ? "#" : base + "dashboard/" + href}" class="flex flex-col items-center gap-2 rounded-xl border border-ink-100 p-4 text-center hover:border-volt-400 dark:border-ink-800">
          ${icon(i,"h-5 w-5 text-volt-600 dark:text-volt-400")}
          <span class="text-xs font-semibold">${t}</span>
        </a>`).join("")}
      </div>
    </div>
  </div>

  <script>
    window.addEventListener('DOMContentLoaded', function () {
      var ctx = document.getElementById('attendanceChart');
      if (ctx && window.Chart) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['W1','W2','W3','W4','W5','W6','W7','W8'],
            datasets: [{
              label: 'Visits',
              data: [3,4,2,5,4,6,5,4],
              backgroundColor: '#c4ff1e',
              borderRadius: 6,
              maxBarThickness: 28,
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, ticks: { stepSize: 2 } } }
          }
        });
      }
    });
  </script>
  `;
};
