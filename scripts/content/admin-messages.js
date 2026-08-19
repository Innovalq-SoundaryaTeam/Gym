const { icon } = require("../icons");

const MESSAGES = [
  { n: "Kabir Singh", a: 6, subj: "Question about pausing my membership", preview: "Hi team, I'll be travelling for 3 weeks in September and wanted to ask...", time: "10:24 AM", unread: true },
  { n: "Priya Desai", a: 9, subj: "Interested in the Elite plan", preview: "Hello! I saw the Elite membership online and had a couple of questions about PT sessions...", time: "9:02 AM", unread: true },
  { n: "Rahul Verma", a: 5, subj: "Class booking not showing up", preview: "I booked HIIT Conditioning for Thursday but it's not appearing in my dashboard...", time: "Yesterday", unread: false },
  { n: "Ananya Gupta", a: 10, subj: "Careers — Yoga Instructor role", preview: "Hi, I'm a RYT-500 certified yoga instructor with 5 years experience and would love to...", time: "Yesterday", unread: false },
  { n: "Yusuf Ali", a: 12, subj: "Refund request for cancelled session", preview: "I had to cancel my personal training session last minute due to a family emergency...", time: "Mon", unread: false },
  { n: "Tanya Malhotra", a: 11, subj: "Corporate membership enquiry", preview: "We're a company of 40 employees based near Camden and are interested in a corporate...", time: "Mon", unread: false },
];

module.exports = function adminMessages(base) {
  return `
  <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="text-2xl font-bold">Messages</h2>
      <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Contact form submissions and member enquiries.</p>
    </div>
    <span class="badge-volt">4 Unread</span>
  </div>

  <div class="card mt-8 grid grid-cols-1 overflow-hidden lg:grid-cols-5">
    <!-- MESSAGE LIST -->
    <div class="divide-y divide-ink-100 border-ink-100 dark:divide-ink-800 dark:border-ink-800 lg:col-span-2 lg:border-r">
      <div class="p-4">
        <div class="relative">
          ${icon("search","pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400")}
          <input type="search" placeholder="Search messages…" class="input !py-2.5 !pl-10" />
        </div>
      </div>
      <div class="max-h-[640px] divide-y divide-ink-100 overflow-y-auto dark:divide-ink-800">
        ${MESSAGES.map((m, i) => `
        <button class="flex w-full items-start gap-3 p-4 text-left hover:bg-ink-50 dark:hover:bg-ink-800/60 ${i===0 ? "bg-ink-50 dark:bg-ink-800/60" : ""}">
          <img src="${base}assets/images/avatars/avatar-${m.a}.svg" class="h-10 w-10 shrink-0 rounded-full" alt="${m.n}" />
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-2">
              <p class="truncate text-sm font-bold ${m.unread ? "" : "text-ink-600 dark:text-ink-300"}">${m.n}</p>
              <span class="shrink-0 text-[11px] text-ink-400">${m.time}</span>
            </div>
            <p class="truncate text-xs font-semibold text-ink-700 dark:text-ink-200">${m.subj}</p>
            <p class="truncate text-xs text-ink-400">${m.preview}</p>
          </div>
          ${m.unread ? `<span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-volt-400"></span>` : ""}
        </button>`).join("")}
      </div>
    </div>

    <!-- MESSAGE DETAIL -->
    <div class="flex flex-col lg:col-span-3">
      <div class="flex items-start justify-between gap-4 border-b border-ink-100 p-6 dark:border-ink-800">
        <div class="flex items-center gap-3">
          <img src="${base}assets/images/avatars/avatar-6.svg" class="h-12 w-12 rounded-full" alt="Kabir Singh" />
          <div>
            <p class="font-bold">Kabir Singh</p>
            <p class="text-xs text-ink-500 dark:text-ink-400">kabir.singh@email.com · Pro Member</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-500 dark:border-ink-700">${icon("mail","h-4 w-4")}</button>
          <button class="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-500 hover:text-coral-500 dark:border-ink-700">${icon("trash","h-4 w-4")}</button>
        </div>
      </div>
      <div class="flex-1 space-y-6 p-6">
        <div>
          <p class="text-xs text-ink-400">Subject</p>
          <p class="mt-1 font-bold">Question about pausing my membership</p>
        </div>
        <div class="rounded-2xl bg-ink-50 p-5 text-sm leading-relaxed text-ink-600 dark:bg-ink-900/60 dark:text-ink-300">
          Hi team,<br/><br/>
          I'll be travelling for 3 weeks in September and wanted to ask if I can pause my Pro membership for that
          period rather than cancelling it outright. Is this something I can do directly from my dashboard, or do
          I need to submit a request here first?<br/><br/>
          Thanks,<br/>Kabir
        </div>
        <p class="text-xs text-ink-400">Received today at 10:24 AM via Contact Form</p>
      </div>
      <div class="border-t border-ink-100 p-6 dark:border-ink-800">
        <label class="label">Reply</label>
        <textarea rows="4" placeholder="Type your reply…" class="input"></textarea>
        <div class="mt-3 flex items-center justify-between">
          <button class="btn-outline btn-sm">Mark as Resolved</button>
          <button class="btn-primary">${icon("send","h-4 w-4")} Send Reply</button>
        </div>
      </div>
    </div>
  </div>
  `;
};
