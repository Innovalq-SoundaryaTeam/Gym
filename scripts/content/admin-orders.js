const { icon } = require("../icons");

const NAMES = ["Meera Sharma", "Kabir Singh", "Sara Ahmed", "Ayesha Khan", "Manav Joshi", "Neha Kulkarni", "Rohan Kapoor", "Divya Suresh", "Priya Nair", "Arjun Mehta", "Karan Malhotra", "Isha Verma", "Vikram Rao", "Sana Sheikh", "Tanya Malhotra", "Yusuf Ali", "Ananya Gupta", "Priya Desai"];
const ITEMS = [
  ["Pro Membership — Monthly", "$59.00"],
  ["Basic Membership — Monthly", "$29.00"],
  ["Elite Membership — Annual", "$1,009.00"],
  ["4-Class Pack", "$65.00"],
  ["Personal Training — 4 sessions", "$180.00"],
  ["Nutrition Consult", "$65.00"],
  ["Body Composition Scan", "$25.00"],
  ["Drop-in Class", "$18.00"],
  ["8-Class Pack", "$120.00"],
  ["Elite Membership — Monthly", "$99.00"],
];
const STATUS_CYCLE = ["Paid", "Paid", "Paid", "Pending", "Paid", "Failed", "Paid", "Paid", "Refunded", "Paid", "Paid", "Paid"];
const STATUS_CLS = { Paid: "badge-volt", Failed: "badge-coral", Refunded: "badge-ink", Pending: "badge-azure" };

const ORDERS = Array.from({ length: 42 }, (_, i) => {
  var day = 17 - Math.floor(i / 2);
  var month = day > 0 ? "Aug" : (day > -31 ? "Jul" : "Jun");
  var dayNum = ((day - 1 + 31) % 31) + 1;
  return {
    id: "#ORD-" + (8841 - i),
    user: NAMES[i % NAMES.length],
    item: ITEMS[i % ITEMS.length][0],
    amount: ITEMS[i % ITEMS.length][1],
    status: STATUS_CYCLE[i % STATUS_CYCLE.length],
    date: month + " " + String(dayNum).padStart(2, "0") + ", 2026",
  };
});

module.exports = function adminOrders(base) {
  return `
  <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="text-2xl font-bold">Orders &amp; Transactions</h2>
      <p class="mt-1 text-sm text-ink-500 dark:text-ink-400">Membership payments, class packs and service bookings.</p>
    </div>
    <button class="btn-primary shrink-0">${icon("download","h-4 w-4")} Export CSV</button>
  </div>

  <div class="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
    ${[["creditCard","$18,240","This Month"],["checkCircle","312","Successful"],["xCircle","9","Failed"],["refresh","4","Refunded"]].map(([i,v,l]) => `
    <div class="card p-5">
      <div class="icon-tile">${icon(i,"h-5 w-5")}</div>
      <p class="mt-4 text-2xl font-extrabold">${v}</p>
      <p class="text-xs text-ink-500 dark:text-ink-400">${l}</p>
    </div>`).join("")}
  </div>

  <div class="card mt-8 p-6" data-paged-table data-page-size="8" data-item-label="orders">
    <div class="flex flex-wrap gap-2" data-status-filter>
      <button data-filter-btn="all" class="tab-btn active">All Orders</button>
      <button data-filter-btn="Paid" class="tab-btn">Paid</button>
      <button data-filter-btn="Pending" class="tab-btn">Pending</button>
      <button data-filter-btn="Failed" class="tab-btn">Failed</button>
      <button data-filter-btn="Refunded" class="tab-btn">Refunded</button>
    </div>

    <div class="mt-6 overflow-x-auto">
      <table class="table-clean min-w-[680px]">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Item</th><th>Amount</th><th>Status</th><th>Date</th><th></th></tr></thead>
        <tbody data-paged-body>
          ${ORDERS.map((o) => `
          <tr data-row-status="${o.status}">
            <td class="font-semibold">${o.id}</td>
            <td>${o.user}</td>
            <td class="text-ink-500 dark:text-ink-400">${o.item}</td>
            <td class="font-semibold">${o.amount}</td>
            <td><span class="${STATUS_CLS[o.status]}">${o.status}</span></td>
            <td class="text-ink-500 dark:text-ink-400">${o.date}</td>
            <td><button class="text-xs font-semibold text-volt-600 dark:text-volt-400">View</button></td>
          </tr>`).join("")}
        </tbody>
      </table>
      <p data-paged-empty class="hidden py-10 text-center text-sm text-ink-500 dark:text-ink-400">No orders match this filter.</p>
    </div>

    <div class="mt-6 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-5 text-sm dark:border-ink-800 sm:flex-row">
      <p data-paged-summary class="text-ink-500 dark:text-ink-400"></p>
      <div class="flex items-center gap-2">
        <button data-paged-prev class="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-400 disabled:opacity-40 dark:border-ink-700">${icon("chevronLeft","h-4 w-4")}</button>
        <div class="flex items-center gap-2" data-paged-numbers></div>
        <button data-paged-next class="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-600 disabled:opacity-40 dark:border-ink-700 dark:text-ink-300">${icon("chevronRight","h-4 w-4")}</button>
      </div>
    </div>
  </div>
  `;
};
