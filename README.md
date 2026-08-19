# PULSE — Local Gym & Fitness Centre HTML Template

A complete, multipurpose HTML template for service-based businesses, themed around a
neighbourhood gym & fitness studio. Built with **Tailwind CSS**, vanilla JavaScript
(no framework dependency), light/dark mode, RTL support, a member dashboard and an
admin dashboard. Suitable for ThemeForest / TemplateMonster-style marketplaces or
direct client delivery.

---

## What's included

**Marketing site**
- `index.html` — Home 1 (general services landing)
- `home-2.html` — Home 2 (niche-specific "Elite Performance Studio" concept)
- `about.html` — Mission, history/timeline, team, testimonials
- `classes.html` — Class grid with category filters + weekly timetable
- `class-details.html` — In-depth class page: schedule, pricing, FAQ accordion
- `trainers.html` — Trainer/coach profile grid
- `blog.html` — Searchable, filterable article list
- `blog-details.html` — Full article with sidebar
- `membership.html` — Membership plan comparison (monthly/annual toggle) + FAQ
- `pricing.html` — À la carte services & class packs
- `contact.html` — Contact form, map placeholder, studio hours
- `login.html` / `register.html` — Auth screens
- `404.html` — Error page
- `coming-soon.html` — Standalone countdown / launch page (no site nav)

**Member Dashboard** (`/dashboard/`)
- `index.html` — Overview: stats, attendance chart, upcoming bookings, this week's plan
- `book-classes.html` — Book classes by day & instructor
- `attendance.html` — Attendance history, streaks, charts, check-in log
- `membership.html` — Current plan, billing history, payment method
- `workout-plans.html` — Weekly plans assigned by a coach, downloadable as PDF

**Admin Dashboard** (`/admin/`)
- `index.html` — Analytics: KPIs, revenue trend, membership mix, top classes
- `users.html` — Member/staff table with search, filters, pagination
- `orders.html` — Transactions table with status filters
- `messages.html` — Inbox-style contact form / enquiry management

---

## Tech stack

- **Tailwind CSS 3** (compiled to a single `assets/css/style.css` — no CDN/runtime
  dependency, safe for production).
- **Vanilla JS** (`assets/js/main.js`, `assets/js/dashboard.js`) — theme toggle, RTL
  toggle, mobile nav, dropdowns, accordions, tabs, testimonial slider, blog
  search/filter, sidebar toggle.
- **Chart.js** (via CDN `<script>` tag) for dashboard charts — swap for your own
  data source or self-host the library if you need a fully offline build.
- **Google Fonts**: Sora (display) + Inter (body), loaded via `<link>` tags.
- No build framework required to *use* the template — every page is static HTML.
  A tiny Node build system (see below) is only used to keep the shared header,
  footer, sidebar and icons in one place while authoring; you can freely hand-edit
  the generated HTML files directly and never touch Node again.

---

## Design system

- Colors, fonts and shadows are defined in `tailwind.config.js` (`ink` = neutral
  scale, `volt` = lime accent, `coral` / `azure` = secondary accents).
- Reusable component classes (`.btn-primary`, `.card`, `.badge-volt`, `.input`,
  `.side-link`, `.table-clean`, etc.) live in `assets/css/input.css` under
  `@layer components`.
- Dark mode uses Tailwind's `class` strategy — toggled by adding/removing `.dark`
  on `<html>`. RTL is toggled via the `dir="rtl"` attribute on `<html>`, and the
  layout uses Tailwind's `rtl:`/`ltr:` variants plus logical properties where it
  matters (sidebar, back-to-top button, etc).
- Both preferences persist via `localStorage` (`pulse-theme`, `pulse-dir`) and are
  applied before first paint by an inline script in `<head>` to avoid flashing.

---

## Editing content

Every page is plain static HTML — open any `.html` file and edit directly.

If you'd rather edit the shared header/footer/sidebar or icon set in one place and
regenerate all pages, a small Node script is included:

```bash
npm install          # installs Tailwind CLI only
npm run build        # regenerates all HTML pages + compiles CSS
npm run watch:css     # rebuild CSS on save while you work
```

Source lives in `scripts/`:
- `scripts/partials.js` — header, footer, nav, `<head>` meta
- `scripts/dash-partials.js` / `scripts/admin-partials.js` — dashboard shells
- `scripts/icons.js` — the hand-rolled inline SVG icon set
- `scripts/content/*.js` — each page's unique content
- `scripts/build.js` — assembles everything into the final `.html` files

You do **not** need Node or these scripts to use the template day-to-day — they
exist purely so the shared chrome (nav, footer, sidebar) can be updated once
instead of in 24 separate files.

---

## Images & placeholder content

All photography-style visuals (hero banners, facility shots, class thumbnails,
blog covers, avatars) are **procedurally generated SVGs** (`assets/images/`), so
the template works fully offline with zero broken image links and no stock-photo
licensing to worry about. Swap them for real photography by replacing the files
in `assets/images/banners`, `assets/images/thumbs` and `assets/images/avatars`
(keep the same filenames, or update the `src` attributes where they're used).

Sample downloadable workout-plan PDFs live in `assets/downloads/` (generated
placeholders — replace with real coach-generated plans in production).

All copy (studio name "PULSE", addresses, prices, testimonials, staff names) is
placeholder content — search and replace before shipping to a real client.

---

## Connecting to a real backend

This is a front-end template — forms, the booking grid, login and the dashboards
are all static markup with light demo interactivity (e.g. clicking "Book Slot"
toggles a booked state locally; it isn't wired to a server). To make it
production-ready, connect:

- The contact form (`contact.html`), login/register forms, and newsletter forms
  to your backend or a form service.
- The booking buttons in `dashboard/book-classes.html` to your scheduling API.
- Chart.js datasets (inline `<script>` blocks at the bottom of each dashboard
  page) to real data.
- Admin tables (`admin/users.html`, `admin/orders.html`, `admin/messages.html`)
  to your database.

---

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Uses CSS Grid,
Flexbox, `backdrop-filter`, and `IntersectionObserver` (used for scroll-reveal
animations — the page still works if unsupported, animations simply don't run).

## License

Delivered for the licensee's use per your marketplace/purchase agreement.
Placeholder imagery is originally generated for this template (no third-party
stock license required); replace with your own or licensed assets for
production use. Google Fonts and Chart.js are loaded from their public CDNs
under their own respective open-source licenses.
