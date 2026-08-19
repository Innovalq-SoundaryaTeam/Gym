const { icon } = require("../icons");

const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const SCHEDULE = {
  Mon: [
    { t: "Cardio Blast", time: "6:30 AM", coach: "Rohan Kapoor", k: "cardio", spots: "Open", booked: false },
    { t: "Strength Lab", time: "6:00 PM", coach: "Arjun Mehta", k: "strength", spots: "2 left", booked: true },
    { t: "Zumba Party", time: "7:00 PM", coach: "Sana Sheikh", k: "zumba", spots: "Open", booked: false },
  ],
  Tue: [
    { t: "Power Yoga Flow", time: "8:30 AM", coach: "Priya Nair", k: "yoga", spots: "9 left", booked: false },
    { t: "HIIT Conditioning", time: "6:00 PM", coach: "Rohan Kapoor", k: "hiit", spots: "5 left", booked: true },
  ],
  Wed: [
    { t: "Strength Lab", time: "6:00 AM", coach: "Arjun Mehta", k: "strength", spots: "Open", booked: false },
    { t: "Mat Pilates", time: "9:30 AM", coach: "Priya Nair", k: "pilates", spots: "Open", booked: false },
    { t: "Strength Lab (PM)", time: "6:00 PM", coach: "Vikram Rao", k: "strength", spots: "3 left", booked: false },
    { t: "Zumba Party", time: "7:00 PM", coach: "Sana Sheikh", k: "zumba", spots: "Open", booked: false },
  ],
  Thu: [
    { t: "Power Yoga Flow", time: "8:30 AM", coach: "Priya Nair", k: "yoga", spots: "6 left", booked: false },
    { t: "HIIT Conditioning", time: "6:00 PM", coach: "Rohan Kapoor", k: "hiit", spots: "Open", booked: false },
  ],
  Fri: [
    { t: "Strength Lab", time: "6:00 AM", coach: "Vikram Rao", k: "strength", spots: "2 left", booked: false },
    { t: "Cardio Blast", time: "6:30 AM", coach: "Rohan Kapoor", k: "cardio", spots: "Open", booked: false },
    { t: "Spin & Sculpt", time: "5:30 PM", coach: "Isha Verma", k: "spin", spots: "3 left", booked: false },
    { t: "Strength Lab (PM)", time: "6:00 PM", coach: "Arjun Mehta", k: "strength", spots: "Open", booked: false },
  ],
  Sat: [
    { t: "Boxing Fundamentals", time: "10:00 AM", coach: "Vikram Rao", k: "boxing", spots: "6 left", booked: false },
  ],
  Sun: [
    { t: "Zumba Gold", time: "9:00 AM", coach: "Sana Sheikh", k: "zumba", spots: "Open", booked: false },
  ],
};

module.exports = function dashBook(base) {
  return `
  <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="text-2xl font-bold">Book Group Fitness Classes</h2>
      <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Reserve your spot by day &amp; instructor. Cancel anytime up to 2 hours before class.</p>
    </div>
    <div class="flex items-center gap-3">
      <select class="select w-48">
        <option>All Instructors</option>
        ${["Arjun Mehta","Priya Nair","Rohan Kapoor","Sana Sheikh","Vikram Rao","Isha Verma"].map((n) => `<option>${n}</option>`).join("")}
      </select>
    </div>
  </div>

  <div class="mt-6 flex flex-wrap gap-2" data-tabs>
    ${DAYS.map((d, i) => `<button data-tab-btn="${d}" class="tab-btn ${i===0 ? "active" : ""}">${d}</button>`).join("")}
  </div>

  ${DAYS.map((d, i) => `
  <div data-tab-panel="${d}" class="${i===0 ? "" : "hidden"} mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    ${(SCHEDULE[d] || []).map((c) => `
    <div class="card overflow-hidden">
      <div class="relative h-40 overflow-hidden bg-ink-950">
        <img src="${base}assets/images/thumbs/${c.k}.jpg" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full scale-110 object-cover object-center blur-md brightness-50" />
        <img src="${base}assets/images/thumbs/${c.k}.jpg" class="relative h-full w-full object-contain" alt="${c.t}" />
        <span class="absolute right-3 top-3 badge-volt !bg-white/90 dark:!bg-ink-950/80">${c.spots}</span>
      </div>
      <div class="p-4">
        <p class="font-bold">${c.t}</p>
        <p class="mt-1 flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">${icon("clock","h-3.5 w-3.5")}${c.time}</p>
        <p class="mt-1 flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">${icon("user","h-3.5 w-3.5")}Coach ${c.coach}</p>
        <button data-book-btn data-booked="${c.booked}" class="btn-block mt-4 ${c.booked ? "btn-dark" : "btn-primary"}">${c.booked ? "Booked ✓" : "Book Slot"}</button>
      </div>
    </div>`).join("") || `<p class="col-span-full py-10 text-center text-sm text-ink-400">No classes scheduled — enjoy your rest day.</p>`}
  </div>`).join("")}
  `;
};
