const { icon } = require("../icons");

module.exports = function contact(base) {
  return `
  <main id="main">
    <section class="bg-ink-950 py-16 sm:py-20">
      <div class="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span class="eyebrow">Get In Touch</span>
        <h1 class="mt-5 text-4xl font-extrabold text-white sm:text-5xl">We'd love to hear from you.</h1>
        <p class="mt-4 text-ink-300">Questions about classes, membership, or a free trial? Send a message — we usually reply within a few hours.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
        ${[
          { i: "mapPin", t: "Visit the Studio", d: "221 Baker Street, Camden, London NW1 6XE" },
          { i: "phone", t: "Call Us", d: "+44 20 7946 0958" },
          { i: "mail", t: "Email Us", d: "hello@pulsefitness.studio" },
        ].map((c) => `
        <div class="card p-6 text-center">
          <div class="icon-tile mx-auto">${icon(c.i,"h-5 w-5")}</div>
          <p class="mt-4 font-bold">${c.t}</p>
          <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">${c.d}</p>
        </div>`).join("")}
      </div>

      <div class="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <!-- FORM -->
        <form class="card lg:col-span-3 p-8" data-demo-form data-success-title="Message sent" data-success-text="Thanks — a member of the PULSE team will get back to you within a few hours.">
          <h2 class="text-2xl font-bold">Send us a message</h2>
          <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label class="label">Full Name</label>
              <input type="text" required placeholder="Jane Doe" class="input" />
            </div>
            <div>
              <label class="label">Email Address</label>
              <input type="email" required placeholder="jane@example.com" class="input" />
            </div>
            <div>
              <label class="label">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" class="input" />
            </div>
            <div>
              <label class="label">Subject</label>
              <select class="select">
                <option>Membership Enquiry</option>
                <option>Class Schedule</option>
                <option>Personal Training</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label class="label">Message</label>
              <textarea rows="5" required placeholder="Tell us a bit about your goals…" class="input"></textarea>
            </div>
          </div>
          <button type="submit" class="btn-primary btn-lg mt-6">Send Message ${icon("send","h-4 w-4")}</button>
        </form>

        <!-- MAP + HOURS -->
        <div class="lg:col-span-2 space-y-6">
          <div class="card overflow-hidden">
            <div class="relative h-56 w-full bg-ink-100 dark:bg-ink-800">
              <svg viewBox="0 0 400 240" class="h-full w-full text-ink-300 dark:text-ink-700">
                <rect width="400" height="240" fill="currentColor" opacity="0.15" />
                <g stroke="currentColor" stroke-width="1" opacity="0.5">
                  ${Array.from({length:9}).map((_,i) => `<line x1="${i*45}" y1="0" x2="${i*45}" y2="240"/>`).join("")}
                  ${Array.from({length:6}).map((_,i) => `<line x1="0" y1="${i*45}" x2="400" y2="${i*45}"/>`).join("")}
                </g>
                <circle cx="200" cy="120" r="10" fill="#c4ff1e" stroke="#0a0d10" stroke-width="3"/>
              </svg>
              <span class="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-600 shadow dark:bg-ink-900 dark:text-ink-300">Map preview — embed Google Maps here</span>
            </div>
          </div>
          <div class="card p-6">
            <p class="font-bold">Studio Hours</p>
            <div class="mt-4 space-y-2 text-sm">
              ${[["Mon – Fri","5:00 AM – 10:00 PM"],["Saturday","6:00 AM – 8:00 PM"],["Sunday","7:00 AM – 6:00 PM"]].map(([d,h]) => `<div class="flex items-center justify-between"><span class="text-ink-500 dark:text-ink-400">${d}</span><span class="font-semibold">${h}</span></div>`).join("")}
            </div>
          </div>
          <div class="card p-6">
            <p class="font-bold">Follow us</p>
            <div class="mt-4 flex items-center gap-3">
              ${["facebook","instagram","x","youtube","linkedin"].map((s) => `<a href="#" class="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-500 hover:border-volt-500 hover:text-volt-600 dark:border-ink-700 dark:text-ink-400">${icon(s,"h-4 w-4")}</a>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>`;
};
