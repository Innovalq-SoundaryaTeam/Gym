const { icon, themeToggleButton, dirToggleButton, logoMark } = require("../partials");

module.exports = function comingSoon(base) {
  return `
  <div class="relative flex min-h-screen flex-col overflow-hidden bg-ink-950">
    <img src="${base}assets/images/banners/hero-1.jpg" class="absolute inset-0 h-full w-full object-cover opacity-30" alt="" />
    <div class="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950"></div>

    <header class="relative flex items-center justify-between px-6 py-6 sm:px-10">
      ${logoMark("h-7 w-auto text-white")}
      <div class="flex items-center gap-2">
        ${themeToggleButton("h-10 w-10")}
        ${dirToggleButton("h-10 w-10")}
      </div>
    </header>

    <main class="relative flex flex-1 items-center justify-center px-5 py-16 sm:px-8">
      <div class="mx-auto max-w-xl text-center">
        <span class="eyebrow">Launching Soon</span>
        <h1 class="mt-5 text-4xl font-extrabold text-white sm:text-5xl">A brand-new PULSE studio is almost ready.</h1>
        <p class="mt-4 text-ink-300">We're putting the finishing touches on our newest location. Leave your email
          and we'll notify you the moment doors open — plus an exclusive founding-member offer.</p>

        <!-- countdown -->
        <div class="mt-10 grid grid-cols-4 gap-3 sm:gap-4" id="countdown">
          ${[["18","Days"],["06","Hours"],["42","Min"],["09","Sec"]].map(([n,l]) => `
          <div class="rounded-2xl border border-white/10 bg-white/5 py-5">
            <p class="text-3xl font-extrabold text-white sm:text-4xl">${n}</p>
            <p class="mt-1 text-[11px] uppercase tracking-widest text-ink-400">${l}</p>
          </div>`).join("")}
        </div>

        <form class="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row" data-demo-form data-success-title="You're on the list" data-success-text="We'll email you the moment the studio opens.">
          <input type="email" required placeholder="you@example.com" class="input flex-1 !bg-white/5 !border-white/15 !text-white placeholder:!text-ink-500" />
          <button type="submit" class="btn-primary shrink-0">Notify Me</button>
        </form>

        <div class="mt-10 flex items-center justify-center gap-3">
          ${["facebook","instagram","x","youtube"].map((s) => `<a href="#" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-300 hover:border-volt-400 hover:text-volt-400">${icon(s,"h-4 w-4")}</a>`).join("")}
        </div>
      </div>
    </main>

    <footer class="relative py-6 text-center text-xs text-ink-500">
      © <span data-current-year>2026</span> PULSE Fitness Studio. All rights reserved. ·
      <a href="${base}index.html" class="text-volt-400 hover:underline">Back to main site</a>
    </footer>
  </div>`;
};
