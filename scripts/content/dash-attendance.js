const { icon } = require("../icons");

const LOG = [
  ["Aug 17, 2026", "Strength Lab", "6:02 AM", "6:58 AM", "56 min"],
  ["Aug 15, 2026", "HIIT Conditioning", "6:05 PM", "6:41 PM", "36 min"],
  ["Aug 13, 2026", "Power Yoga Flow", "8:31 AM", "9:29 AM", "58 min"],
  ["Aug 11, 2026", "Strength Lab", "6:00 AM", "6:57 AM", "57 min"],
  ["Aug 08, 2026", "Zumba Party", "7:02 PM", "7:44 PM", "42 min"],
  ["Aug 06, 2026", "Cardio Blast", "6:33 AM", "7:11 AM", "38 min"],
  ["Aug 04, 2026", "Strength Lab", "6:01 AM", "6:59 AM", "58 min"],
  ["Aug 01, 2026", "HIIT Conditioning", "6:07 PM", "6:42 PM", "35 min"],
];

module.exports = function dashAttendance(base) {
  return `
  <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="text-2xl font-bold">Attendance History</h2>
      <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Track your check-ins and see your consistency over time.</p>
    </div>
    <a href="${base}dashboard/book-classes.html" class="btn-primary shrink-0">${icon("calendar","h-4 w-4")} Book Next Class</a>
  </div>

  <div class="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
    ${[
      ["flame", "12 days", "Current Streak"],
      ["award", "21 days", "Longest Streak"],
      ["activity", "18", "Visits This Month"],
      ["trendingUp", "142", "Total Visits (All Time)"],
    ].map(([i,v,l]) => `
    <div class="card p-5 text-center">
      ${icon(i,"mx-auto h-5 w-5 text-volt-600 dark:text-volt-400")}
      <p class="mt-3 text-2xl font-extrabold">${v}</p>
      <p class="text-xs text-ink-500 dark:text-ink-400">${l}</p>
    </div>`).join("")}
  </div>

  <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
    <div class="card p-6 lg:col-span-2">
      <p class="font-bold">Monthly Visits</p>
      <div class="mt-4 h-64"><canvas id="monthlyChart"></canvas></div>
    </div>
    <div class="card p-6">
      <p class="font-bold">Class Mix</p>
      <div class="mt-4 h-64"><canvas id="mixChart"></canvas></div>
    </div>
  </div>

  <div class="card mt-8 overflow-x-auto p-6">
    <div class="flex items-center justify-between">
      <p class="font-bold">Recent Check-ins</p>
      <select class="select w-40 !py-2 text-sm">
        <option>August 2026</option>
        <option>July 2026</option>
        <option>June 2026</option>
      </select>
    </div>
    <table class="table-clean mt-4 min-w-[560px]">
      <thead><tr><th>Date</th><th>Class</th><th>Check-in</th><th>Check-out</th><th>Duration</th></tr></thead>
      <tbody>
        ${LOG.map((r) => `<tr><td class="font-semibold">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join("")}
      </tbody>
    </table>
  </div>

  <script>
    window.addEventListener('DOMContentLoaded', function () {
      var m = document.getElementById('monthlyChart');
      if (m && window.Chart) {
        new Chart(m, {
          type: 'line',
          data: {
            labels: ['Feb','Mar','Apr','May','Jun','Jul','Aug'],
            datasets: [{
              label: 'Visits',
              data: [14, 16, 12, 19, 17, 20, 18],
              borderColor: '#c4ff1e',
              backgroundColor: 'rgba(196,255,30,0.15)',
              fill: true,
              tension: 0.35,
              pointRadius: 3,
            }]
          },
          options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
        });
      }
      var mx = document.getElementById('mixChart');
      if (mx && window.Chart) {
        new Chart(mx, {
          type: 'doughnut',
          data: {
            labels: ['Strength', 'Cardio/HIIT', 'Yoga', 'Zumba'],
            datasets: [{
              data: [38, 27, 20, 15],
              backgroundColor: ['#c4ff1e', '#2fb0ff', '#ff7a59', '#a3d919'],
              borderWidth: 0,
            }]
          },
          options: { plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 14 } } } }
        });
      }
    });
  </script>
  `;
};
