const { icon } = require("../icons");

module.exports = function notFound(base) {
  return `
  <main id="main">
    <section class="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-ink-950">
      <img src="${base}assets/images/banners/facility-cardio.jpg" class="absolute inset-0 h-full w-full object-cover opacity-30" alt="" />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40"></div>
      <div class="relative mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <p class="text-8xl font-extrabold text-volt-400 sm:text-9xl">404</p>
        <h1 class="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Looks like this set was skipped.</h1>
        <p class="mt-4 text-ink-300">The page you're looking for has moved, been renamed, or never existed. Let's get you back on track.</p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="${base}index.html" class="btn-primary btn-lg">${icon("home","h-4 w-4")} Back to Home</a>
          <a href="${base}contact.html" class="btn-outline btn-lg !border-white/30 !text-white hover:!bg-white/10">Contact Support</a>
        </div>
        <div class="mx-auto mt-10 max-w-sm">
          <div class="relative">
            ${icon("search","pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400")}
            <input type="search" placeholder="Search the site…" class="input !bg-white/5 !border-white/15 !text-white !pl-11 placeholder:!text-ink-500" />
          </div>
        </div>
      </div>
    </section>
  </main>`;
};
