const fs = require("fs");
const path = require("path");
const { pageWrap, pageWrapMinimal } = require("./partials");

const ROOT = path.resolve(__dirname, "..");

const PAGES = [
  {
    out: "index.html", active: "home", base: "",
    title: "Home — Neighbourhood Strength & Conditioning Gym",
    description: "PULSE Fitness Studio — group classes, personal training and a member dashboard for booking, attendance and workout plans.",
    content: require("./content/home1"),
  },
  {
    out: "home-2.html", active: "home", base: "",
    title: "Home — Elite Performance Studio",
    description: "A premium, niche-specific landing page concept for boutique fitness studios and performance clubs.",
    content: require("./content/home2"),
  },
  {
    out: "about.html", active: "about", base: "",
    title: "About Us",
    description: "Our mission, history, team and member testimonials.",
    content: require("./content/about"),
  },
  {
    out: "classes.html", active: "classes", base: "",
    title: "Classes",
    description: "Browse Yoga, Zumba, Strength and Cardio classes with timings and instructors.",
    content: require("./content/classes"),
  },
  {
    out: "class-details.html", active: "classes", base: "",
    title: "Class Details — Strength Lab",
    description: "In-depth class description, weekly schedule, pricing and frequently asked questions.",
    content: (base) => require("./content/class-details")(base, "strength"),
  },
  {
    out: "class-details-strength.html", active: "classes", base: "",
    title: "Class Details — Strength Lab",
    description: "In-depth class description, weekly schedule, pricing and frequently asked questions.",
    content: (base) => require("./content/class-details")(base, "strength"),
  },
  {
    out: "class-details-yoga.html", active: "classes", base: "",
    title: "Class Details — Power Yoga Flow",
    description: "In-depth class description, weekly schedule, pricing and frequently asked questions.",
    content: (base) => require("./content/class-details")(base, "yoga"),
  },
  {
    out: "class-details-zumba.html", active: "classes", base: "",
    title: "Class Details — Zumba Dance Party",
    description: "In-depth class description, weekly schedule, pricing and frequently asked questions.",
    content: (base) => require("./content/class-details")(base, "zumba"),
  },
  {
    out: "class-details-cardio.html", active: "classes", base: "",
    title: "Class Details — Cardio Blast Circuit",
    description: "In-depth class description, weekly schedule, pricing and frequently asked questions.",
    content: (base) => require("./content/class-details")(base, "cardio"),
  },
  {
    out: "class-details-hiit.html", active: "classes", base: "",
    title: "Class Details — HIIT Conditioning",
    description: "In-depth class description, weekly schedule, pricing and frequently asked questions.",
    content: (base) => require("./content/class-details")(base, "hiit"),
  },
  {
    out: "class-details-pilates.html", active: "classes", base: "",
    title: "Class Details — Mat Pilates",
    description: "In-depth class description, weekly schedule, pricing and frequently asked questions.",
    content: (base) => require("./content/class-details")(base, "pilates"),
  },
  {
    out: "class-details-boxing.html", active: "classes", base: "",
    title: "Class Details — Boxing Fundamentals",
    description: "In-depth class description, weekly schedule, pricing and frequently asked questions.",
    content: (base) => require("./content/class-details")(base, "boxing"),
  },
  {
    out: "class-details-spin.html", active: "classes", base: "",
    title: "Class Details — Spin & Sculpt",
    description: "In-depth class description, weekly schedule, pricing and frequently asked questions.",
    content: (base) => require("./content/class-details")(base, "spin"),
  },
  {
    out: "trainers.html", active: "trainers", base: "",
    title: "Trainers",
    description: "Meet our certified coaches and their specialties.",
    content: require("./content/trainers"),
  },
  {
    out: "blog.html", active: "blog", base: "",
    title: "Blog",
    description: "Training tips, nutrition notes and gym news — filterable & searchable.",
    content: require("./content/blog"),
  },
  {
    out: "blog-details.html", active: "blog", base: "",
    title: "Progressive Overload 101: A Beginner's Roadmap",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-2"),
  },
  {
    out: "blog-details-blog-1.html", active: "blog", base: "",
    title: "5 Post-Workout Meals That Actually Speed Recovery",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-1"),
  },
  {
    out: "blog-details-blog-2.html", active: "blog", base: "",
    title: "Progressive Overload 101: A Beginner's Roadmap",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-2"),
  },
  {
    out: "blog-details-blog-3.html", active: "blog", base: "",
    title: "Why Your Warm-up Matters More Than Your Workout",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-3"),
  },
  {
    out: "blog-details-blog-4.html", active: "blog", base: "",
    title: "HIIT vs Steady-State Cardio: What the Research Says",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-4"),
  },
  {
    out: "blog-details-blog-5.html", active: "blog", base: "",
    title: "Inside the Boxing Fundamentals Class With Coach Vikram",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-5"),
  },
  {
    out: "blog-details-blog-6.html", active: "blog", base: "",
    title: "Spin Class Playlist Secrets: How Music Drives Output",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-6"),
  },
  {
    out: "blog-details-blog-7.html", active: "blog", base: "",
    title: "A 10-Minute Mat Pilates Routine You Can Do at Home",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-7"),
  },
  {
    out: "blog-details-blog-8.html", active: "blog", base: "",
    title: "Zumba for Strength? Why Dance Cardio Counts",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-8"),
  },
  {
    out: "blog-details-blog-9.html", active: "blog", base: "",
    title: "Sleep & Recovery: The Most Overlooked Training Variable",
    description: "Full article with sidebar — categories, recent posts and newsletter signup.",
    content: (base) => require("./content/blog-details")(base, "blog-9"),
  },
  {
    out: "membership.html", active: "membership", base: "",
    title: "Membership Plans",
    description: "Compare Basic, Pro and Elite membership plans and find the right fit.",
    content: require("./content/membership"),
  },
  {
    out: "pricing.html", active: "membership", base: "",
    title: "Pricing",
    description: "Simple, transparent pricing for classes, personal training and memberships.",
    content: require("./content/pricing"),
  },
  {
    out: "contact.html", active: "contact", base: "",
    title: "Contact Us",
    description: "Visit us, call us, or send a message — we usually reply within a few hours.",
    content: require("./content/contact"),
  },
  {
    out: "login.html", active: "", base: "",
    title: "Member Login",
    description: "Log in to your PULSE member dashboard.",
    content: require("./content/login"),
    bodyClass: "auth-page",
  },
  {
    out: "register.html", active: "", base: "",
    title: "Create Your Account",
    description: "Join PULSE Fitness Studio and get instant access to your member dashboard.",
    content: require("./content/register"),
    bodyClass: "auth-page",
  },
  {
    out: "404.html", active: "", base: "",
    title: "Page Not Found",
    description: "The page you're looking for has moved or no longer exists.",
    content: require("./content/404"),
  },
];

const MINIMAL_PAGES = [
  {
    out: "coming-soon.html", base: "",
    title: "Coming Soon",
    description: "PULSE Fitness Studio is launching soon — leave your email for early access.",
    content: require("./content/coming-soon"),
  },
];

const DASH_PAGES = [
  { out: "dashboard/index.html", active: "overview", title: "Member Dashboard — Overview", content: require("./content/dash-overview") },
  { out: "dashboard/book-classes.html", active: "book", title: "Book Classes", content: require("./content/dash-book") },
  { out: "dashboard/attendance.html", active: "attendance", title: "Attendance History", content: require("./content/dash-attendance") },
  { out: "dashboard/membership.html", active: "membership", title: "My Membership", content: require("./content/dash-membership") },
  { out: "dashboard/workout-plans.html", active: "workouts", title: "Workout Plans", content: require("./content/dash-workouts") },
];

const ADMIN_PAGES = [
  { out: "admin/index.html", active: "analytics", title: "Admin — Analytics", content: require("./content/admin-analytics") },
  { out: "admin/users.html", active: "users", title: "Admin — Users", content: require("./content/admin-users") },
  { out: "admin/orders.html", active: "orders", title: "Admin — Orders", content: require("./content/admin-orders") },
  { out: "admin/messages.html", active: "messages", title: "Admin — Messages", content: require("./content/admin-messages") },
];

function write(outPath, html) {
  const full = path.join(ROOT, outPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html);
  console.log("built:", outPath);
}

for (const p of PAGES) {
  const html = pageWrap({
    title: p.title,
    description: p.description,
    base: p.base,
    active: p.active,
    bodyClass: p.bodyClass,
    content: p.content(p.base),
    extraScripts: p.extraScripts || "",
  });
  write(p.out, html);
}

for (const p of MINIMAL_PAGES) {
  const html = pageWrapMinimal({
    title: p.title,
    description: p.description,
    base: p.base,
    content: p.content(p.base),
  });
  write(p.out, html);
}

const { dashShell } = require("./dash-partials");
for (const p of DASH_PAGES) {
  const html = dashShell({
    title: p.title,
    base: "../",
    active: p.active,
    content: p.content("../"),
    type: "member",
  });
  write(p.out, html);
}

const { adminShell } = require("./admin-partials");
for (const p of ADMIN_PAGES) {
  const html = adminShell({
    title: p.title,
    base: "../",
    active: p.active,
    content: p.content("../"),
  });
  write(p.out, html);
}

console.log("\nAll pages built.");
