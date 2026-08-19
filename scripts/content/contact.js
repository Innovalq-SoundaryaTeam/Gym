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
              ${[["facebook","https://www.facebook.com/"],["instagram","https://www.instagram.com/"],["x","https://www.x.com/"],["youtube","https://www.youtube.com/"],["linkedin","https://www.linkedin.com/"]].map(([s,url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${s}" class="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-500 hover:border-volt-500 hover:text-volt-600 dark:border-ink-700 dark:text-ink-400">${icon(s,"h-4 w-4")}</a>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BEFORE YOU VISIT -->
    <section class="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <span class="eyebrow">Before You Visit</span>
          <h2 class="section-title mt-4">A few things to know first.</h2>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          ${[
            ["mapPin","Free Parking","Member parking and secure bike racks are available at every studio location."],
            ["clock","Best Times to Visit","Studios are quietest before 9am and after 8pm — evenings 5–7pm are our busiest window."],
            ["users","Front Desk Support","Our front desk team can help with sign-in, tours and trial class bookings, no appointment needed."],
          ].map(([i,t,d]) => `
          <div class="rounded-2xl border border-ink-100 bg-white p-7 text-center dark:border-ink-800 dark:bg-ink-900">
            <div class="icon-tile mx-auto">${icon(i,"h-5 w-5")}</div>
            <h3 class="mt-4 text-lg font-bold">${t}</h3>
            <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">${d}</p>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <div class="text-center">
        <span class="eyebrow">Contact FAQs</span>
        <h2 class="section-title mt-4">Quick answers before you reach out.</h2>
      </div>
      <div class="mt-10 divide-y divide-ink-100 dark:divide-ink-800" data-accordion>
        ${[
          ["How quickly will I hear back?", "We reply to all messages within a few hours during studio hours, and by the next morning for messages sent overnight."],
          ["Can I just walk in without contacting you first?", "Yes — walk-ins are always welcome during studio hours. Reaching out first just helps us have someone free to give you a proper tour."],
          ["Do you offer corporate or group memberships?", "Yes, select 'Membership Enquiry' in the contact form and mention your group size — we'll follow up with corporate rates."],
          ["I have a question about an existing booking.", "For booking or attendance questions, your fastest option is the member dashboard — but you're welcome to reach out here too."],
        ].map((f, i) => `
        <div data-accordion-item data-open="${i===0}">
          <button data-accordion-trigger class="flex w-full items-center justify-between py-4 text-left font-semibold">
            ${f[0]}
            <span data-accordion-icon class="transition-transform duration-200 ${i===0 ? "rotate-45" : ""}">${icon("plus","h-5 w-5 text-volt-600 dark:text-volt-400")}</span>
          </button>
          <div data-accordion-panel class="overflow-hidden transition-all duration-300" style="max-height:${i===0 ? "150px" : "0"}">
            <p class="pb-4 text-sm text-ink-500 dark:text-ink-400">${f[1]}</p>
          </div>
        </div>`).join("")}
      </div>
    </section>
  </main>`;
};
