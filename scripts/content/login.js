const { icon } = require("../icons");
const { themeToggleButton, dirToggleButton, logoMark } = require("../partials");

module.exports = function login(base) {
  return `
  <div class="flex min-h-screen flex-col">
    <header class="flex items-center justify-between px-6 py-6 sm:px-10">
      <a href="${base}index.html" class="flex items-center gap-2 text-ink-950 dark:text-white">
        ${logoMark("h-7 w-auto")}
      </a>
      <div class="flex items-center gap-2">
        ${themeToggleButton("h-10 w-10")}
        ${dirToggleButton("h-10 w-10")}
      </div>
    </header>

  <main id="main" class="flex-1">
    <section class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="flex items-center justify-center px-5 py-16 sm:px-8">
        <div class="w-full max-w-sm">
          <span class="eyebrow">Member Login</span>
          <h1 class="mt-4 text-3xl font-extrabold">Welcome back.</h1>
          <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">Log in to book classes, track attendance and view your workout plan.</p>

          <form class="mt-8 space-y-5" data-redirect="${base}dashboard/index.html">
            <div>
              <label class="label">Email Address</label>
              <input type="email" required placeholder="you@example.com" class="input" />
            </div>
            <div>
              <label class="label">Password</label>
              <div class="relative">
                <input id="pw" type="password" required placeholder="••••••••" class="input pr-11" />
                <button type="button" data-password-toggle="#pw" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700 dark:hover:text-ink-200">${icon("eye","h-4 w-4")}</button>
              </div>
            </div>
            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center gap-2 text-ink-500 dark:text-ink-400">
                <input type="checkbox" class="h-4 w-4 rounded border-ink-300 text-volt-500 focus:ring-volt-400" /> Remember me
              </label>
              <a href="#" class="font-semibold text-volt-600 dark:text-volt-400">Forgot password?</a>
            </div>
            <button type="submit" class="btn-primary btn-block">Log In</button>
          </form>

          <div class="my-6 flex items-center gap-4">
            <div class="h-px flex-1 divider border-t"></div>
            <span class="text-xs text-ink-400">OR CONTINUE WITH</span>
            <div class="h-px flex-1 divider border-t"></div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <button class="btn-outline">Google</button>
            <button class="btn-outline">Apple</button>
          </div>

          <p class="mt-8 text-center text-sm text-ink-500 dark:text-ink-400">
            New to PULSE? <a href="${base}register.html" class="font-semibold text-volt-600 dark:text-volt-400">Create an account</a>
          </p>
          <p class="mt-2 text-center text-xs text-ink-400">
            <a href="${base}admin/index.html" class="hover:text-volt-600 dark:hover:text-volt-400">Staff / Admin login →</a>
          </p>
        </div>
      </div>

      <div class="relative hidden overflow-hidden bg-ink-950 lg:block">
        <img src="${base}assets/images/banners/hero-2.jpg" class="h-full w-full object-cover opacity-70" alt="" />
        <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent p-12">
          <p class="text-2xl font-bold text-white">"Booking classes takes ten seconds. Just show up and train."</p>
          <div class="mt-4 flex items-center gap-3">
            <img src="${base}assets/images/avatars/avatar-6.jpg" class="h-10 w-10 rounded-full object-cover object-top" alt="" />
            <div>
              <p class="text-sm font-bold text-white">Kabir Singh</p>
              <p class="text-xs text-ink-400">Member since 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

    <footer class="py-6 text-center text-xs text-ink-400 dark:text-ink-500">
      © <span data-current-year>2026</span> PULSE Fitness Studio. All rights reserved. ·
      <a href="${base}index.html" class="font-semibold text-volt-600 hover:underline dark:text-volt-400">Back to main site</a>
    </footer>
  </div>`;
};
