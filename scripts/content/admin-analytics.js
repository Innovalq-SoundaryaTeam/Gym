const { icon } = require("../icons");

module.exports = function adminAnalytics(base) {
  return `
  <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="text-2xl font-bold">Studio Analytics</h2>
      <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Camden · Shoreditch · Greenwich — combined performance</p>
    </div>
    <div class="flex items-center gap-3">
      <select class="select w-44">
        <option>Last 30 Days</option>
        <option>Last 90 Days</option>
        <option>This Year</option>
      </select>
      <button class="btn-primary">${icon("download","h-4 w-4")} Export Report</button>
    </div>
  </div>

  <!-- KPI CARDS -->
  <div class="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
    ${[
      { i: "creditCard", l: "Total Revenue", v: "$84,210", d: "+12.4%", up: true },
      { i: "users", l: "Active Members", v: "1,240", d: "+3.1%", up: true },
      { i: "user", l: "New Signups", v: "86", d: "+18.6%", up: true },
      { i: "activity", l: "Class Fill Rate", v: "78%", d: "-2.3%", up: false },
    ].map((s) => `
    <div class="card p-5">
      <div class="flex items-center justify-between">
        <div class="icon-tile">${icon(s.i, "h-5 w-5")}</div>
        <span class="flex items-center gap-1 text-xs font-bold ${s.up ? "text-volt-600 dark:text-volt-400" : "text-coral-500"}">
          ${icon(s.up ? "trendingUp" : "trendingDown", "h-3.5 w-3.5")}${s.d}
        </span>
      </div>
      <p class="mt-4 text-2xl font-extrabold">${s.v}</p>
      <p class="text-xs text-ink-500 dark:text-ink-400">${s.l}</p>
    </div>`).join("")}
  </div>

  <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
    <div class="card p-6 lg:col-span-2">
      <div class="flex items-center justify-between">
        <p class="font-bold">Revenue Trend</p>
        <div class="flex items-center gap-3 text-xs">
          <span class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-volt-400"></span>Memberships</span>
          <span class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-azure-500"></span>Classes &amp; PT</span>
        </div>
      </div>
      <div class="mt-4 h-72"><canvas id="revenueChart"></canvas></div>
    </div>
    <div class="card p-6">
      <p class="font-bold">Membership Mix</p>
      <div class="mt-4 h-56"><canvas id="planChart"></canvas></div>
      <div class="mt-4 space-y-2 text-sm">
        ${[["Basic","#5bc6ff",312],["Pro","#c4ff1e",624],["Elite","#ff7a59",304]].map(([n,c,v]) => `<div class="flex items-center justify-between"><span class="flex items-center gap-2"><span class="h-2 w-2 rounded-full" style="background:${c}"></span>${n}</span><span class="font-semibold">${v}</span></div>`).join("")}
      </div>
    </div>
  </div>

  <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
    <div class="card p-6 lg:col-span-2">
      <p class="font-bold">Class Attendance by Category</p>
      <div class="mt-4 h-64"><canvas id="attendanceCatChart"></canvas></div>
    </div>
    <div class="card p-6">
      <p class="font-bold">Recent Activity</p>
      <div class="mt-4 space-y-4">
        ${[
          { i: "user", t: "New member: Meera Sharma", d: "2 min ago" },
          { i: "creditCard", t: "Payment received — $59.00", d: "18 min ago" },
          { i: "calendar", t: "HIIT Conditioning fully booked", d: "1 hr ago" },
          { i: "messageCircle", t: "New enquiry from Kabir Singh", d: "3 hrs ago" },
          { i: "alertTriangle", t: "Payment failed — Sara Ahmed", d: "5 hrs ago" },
        ].map((a) => `
        <div class="flex items-start gap-3">
          <div class="icon-tile !h-9 !w-9 shrink-0">${icon(a.i,"h-4 w-4")}</div>
          <div>
            <p class="text-sm font-medium">${a.t}</p>
            <p class="text-xs text-ink-400">${a.d}</p>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </div>

  <!-- TOP CLASSES TABLE -->
  <div class="card mt-8 overflow-x-auto p-6">
    <p class="font-bold">Top Performing Classes</p>
    <table class="table-clean mt-4 min-w-[560px]">
      <thead><tr><th>Class</th><th>Instructor</th><th>Avg. Fill Rate</th><th>Weekly Bookings</th><th>Rating</th></tr></thead>
      <tbody>
        ${[
          ["Strength Lab","Arjun Mehta","92%","168","4.9"],
          ["HIIT Conditioning","Rohan Kapoor","88%","142","4.8"],
          ["Power Yoga Flow","Priya Nair","81%","121","4.9"],
          ["Zumba Dance Party","Sana Sheikh","76%","98","4.7"],
          ["Spin & Sculpt","Isha Verma","69%","74","4.6"],
        ].map((r) => `<tr><td class="font-semibold">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td class="flex items-center gap-1">${icon("star","h-3.5 w-3.5 text-volt-500")}${r[4]}</td></tr>`).join("")}
      </tbody>
    </table>
  </div>

  <script>
    window.addEventListener('DOMContentLoaded', function () {
      var r = document.getElementById('revenueChart');
      if (r && window.Chart) {
        new Chart(r, {
          type: 'line',
          data: {
            labels: ['Feb','Mar','Apr','May','Jun','Jul','Aug'],
            datasets: [
              { label: 'Memberships', data: [42000,44500,46200,49800,51200,53400,55600], borderColor: '#c4ff1e', backgroundColor: 'rgba(196,255,30,0.12)', fill: true, tension: 0.35 },
              { label: 'Classes & PT', data: [18000,17200,19800,21400,20600,23100,24500], borderColor: '#2fb0ff', backgroundColor: 'rgba(47,176,255,0.10)', fill: true, tension: 0.35 },
            ]
          },
          options: { plugins: { legend: { display: false } }, scales: { y: { ticks: { callback: (v) => '$' + v/1000 + 'k' } } } }
        });
      }
      var p = document.getElementById('planChart');
      if (p && window.Chart) {
        new Chart(p, { type: 'doughnut', data: { labels: ['Basic','Pro','Elite'], datasets: [{ data: [312,624,304], backgroundColor: ['#5bc6ff','#c4ff1e','#ff7a59'], borderWidth: 0 }] }, options: { plugins: { legend: { display: false } }, cutout: '68%' } });
      }
      var a = document.getElementById('attendanceCatChart');
      if (a && window.Chart) {
        new Chart(a, {
          type: 'bar',
          data: { labels: ['Strength','Cardio','Yoga','Zumba','HIIT'], datasets: [{ data: [420,360,290,240,310], backgroundColor: '#c4ff1e', borderRadius: 6, maxBarThickness: 40 }] },
          options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
        });
      }
    });
  </script>
  `;
};
