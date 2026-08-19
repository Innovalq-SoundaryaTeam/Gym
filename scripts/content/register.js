const { icon } = require("../icons");

module.exports = function register(base) {
  return `
  <main id="main">
    <section class="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative hidden overflow-hidden bg-ink-950 lg:block">
        <img src="${base}assets/images/banners/hero-1.jpg" class="h-full w-full object-cover opacity-70" alt="" />
        <div class="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent p-12">
          <span class="eyebrow w-fit">Join PULSE</span>
          <div>
            <h2 class="text-3xl font-extrabold text-white">Your first class is on us.</h2>
            <ul class="mt-5 space-y-2.5 text-sm text-ink-200">
              ${["Free first 2 weeks, no card required","Book classes by day & instructor","Track attendance & download workout plans"].map((t) => `<li class="flex items-center gap-2">${icon("checkCircle","h-4 w-4 text-volt-400")}${t}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center px-5 py-16 sm:px-8">
        <div class="w-full max-w-sm">
          <span class="eyebrow">Create Account</span>
          <h1 class="mt-4 text-3xl font-extrabold">Start your free trial.</h1>
          <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">No credit card required for your first 2 weeks.</p>

          <form class="mt-8 space-y-5" data-redirect="${base}dashboard/index.html">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="label">First Name</label>
                <input type="text" required placeholder="Jane" class="input" />
              </div>
              <div>
                <label class="label">Last Name</label>
                <input type="text" required placeholder="Doe" class="input" />
              </div>
            </div>
            <div>
              <label class="label">Email Address</label>
              <input type="email" required placeholder="you@example.com" class="input" />
            </div>
            <div>
              <label class="label">Password</label>
              <div class="relative">
                <input id="pw2" type="password" required placeholder="Minimum 8 characters" class="input pr-11" />
                <button type="button" data-password-toggle="#pw2" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700 dark:hover:text-ink-200">${icon("eye","h-4 w-4")}</button>
              </div>
            </div>
            <div>
              <label class="label">Preferred Home Studio</label>
              <select class="select">
                <option>Camden — 221 Baker Street</option>
                <option>Shoreditch — 14 Rivington St</option>
                <option>Greenwich — 9 Nelson Rd</option>
              </select>
            </div>
            <label class="flex items-start gap-2 text-xs text-ink-500 dark:text-ink-400">
              <input type="checkbox" required class="mt-0.5 h-4 w-4 rounded border-ink-300 text-volt-500 focus:ring-volt-400" />
              I agree to the Terms of Service and Privacy Policy.
            </label>
            <button type="submit" class="btn-primary btn-block">Create Account</button>
          </form>

          <p class="mt-8 text-center text-sm text-ink-500 dark:text-ink-400">
            Already a member? <a href="${base}login.html" class="font-semibold text-volt-600 dark:text-volt-400">Log in</a>
          </p>
        </div>
      </div>
    </section>
  </main>`;
};
