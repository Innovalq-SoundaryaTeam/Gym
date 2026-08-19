const { icon } = require("../icons");

const ORDERS = [
  { id: "#ORD-8841", user: "Meera Sharma", item: "Pro Membership — Monthly", amount: "$59.00", status: "Paid", date: "Aug 17, 2026" },
  { id: "#ORD-8840", user: "Kabir Singh", item: "4-Class Pack", amount: "$65.00", status: "Paid", date: "Aug 16, 2026" },
  { id: "#ORD-8839", user: "Sara Ahmed", item: "Basic Membership — Monthly", amount: "$29.00", status: "Failed", date: "Aug 16, 2026" },
  { id: "#ORD-8838", user: "Ayesha Khan", item: "Personal Training — 4 sessions", amount: "$180.00", status: "Paid", date: "Aug 15, 2026" },
  { id: "#ORD-8837", user: "Manav Joshi", item: "Elite Membership — Annual", amount: "$1,009.00", status: "Paid", date: "Aug 14, 2026" },
  { id: "#ORD-8836", user: "Neha Kulkarni", item: "Pro Membership — Monthly", amount: "$59.00", status: "Refunded", date: "Aug 13, 2026" },
  { id: "#ORD-8835", user: "Rohan Kapoor", item: "Nutrition Consult", amount: "$65.00", status: "Paid", date: "Aug 12, 2026" },
  { id: "#ORD-8834", user: "Divya Suresh", item: "Body Composition Scan", amount: "$25.00", status: "Pending", date: "Aug 12, 2026" },
];

const STATUS_CLS = { Paid: "badge-volt", Failed: "badge-coral", Refunded: "badge-ink", Pending: "badge-azure" };

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

  <div class="card mt-8 p-6">
    <div class="flex flex-wrap gap-2" data-tabs>
      <button data-tab-btn="all" class="tab-btn active">All Orders</button>
      <button data-tab-btn="Paid" class="tab-btn">Paid</button>
      <button data-tab-btn="Pending" class="tab-btn">Pending</button>
      <button data-tab-btn="Failed" class="tab-btn">Failed</button>
      <button data-tab-btn="Refunded" class="tab-btn">Refunded</button>
    </div>

    <div class="mt-6 overflow-x-auto">
      <table class="table-clean min-w-[680px]">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Item</th><th>Amount</th><th>Status</th><th>Date</th><th></th></tr></thead>
        <tbody>
          ${ORDERS.map((o) => `
          <tr>
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
    </div>

    <div class="mt-6 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-5 text-sm dark:border-ink-800 sm:flex-row">
      <p class="text-ink-500 dark:text-ink-400">Showing 1–8 of 486 orders</p>
      <div class="flex items-center gap-2">
        <button class="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-400 dark:border-ink-700">${icon("chevronLeft","h-4 w-4")}</button>
        ${[1,2,3].map((n) => `<button class="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold ${n===1 ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950" : "border border-ink-200 dark:border-ink-700"}">${n}</button>`).join("")}
        <button class="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300">${icon("chevronRight","h-4 w-4")}</button>
      </div>
    </div>
  </div>
  `;
};
