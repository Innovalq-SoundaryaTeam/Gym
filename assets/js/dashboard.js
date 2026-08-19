/*!
 * PULSE Fitness Template — dashboard.js
 * Sidebar open/close for member + admin dashboards. Chart.js instances are
 * initialised inline per-page (each dashboard page ships its own small
 * <script> block) so chart data stays next to the markup it describes.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var sidebar = document.querySelector("[data-sidebar]");
    var backdrop = document.querySelector("[data-sidebar-backdrop]");
    var openBtns = document.querySelectorAll("[data-sidebar-toggle]");
    var closeBtns = document.querySelectorAll("[data-sidebar-close]");

    function openSidebar() {
      if (!sidebar) return;
      sidebar.classList.remove("-translate-x-full");
      sidebar.classList.remove("rtl:translate-x-full");
      if (backdrop) backdrop.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    }
    function closeSidebar() {
      if (!sidebar) return;
      sidebar.classList.add("-translate-x-full");
      sidebar.classList.add("rtl:translate-x-full");
      if (backdrop) backdrop.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
    openBtns.forEach(function (b) { b.addEventListener("click", openSidebar); });
    closeBtns.forEach(function (b) { b.addEventListener("click", closeSidebar); });
    if (backdrop) backdrop.addEventListener("click", closeSidebar);
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) closeSidebar();
    });

    /* ---- Shared Chart.js theming so charts adapt to light/dark ---- */
    if (window.Chart) {
      var isDark = document.documentElement.classList.contains("dark");
      Chart.defaults.font.family = "Inter, sans-serif";
      Chart.defaults.color = isDark ? "#9fadbb" : "#4d5b6b";
      Chart.defaults.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(16,20,24,0.06)";
    }

    /* ---- Simple booking selection demo (Book Classes page) ---- */
    document.querySelectorAll("[data-book-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var booked = btn.getAttribute("data-booked") === "true";
        btn.setAttribute("data-booked", booked ? "false" : "true");
        btn.textContent = booked ? "Book Slot" : "Booked ✓";
        btn.classList.toggle("btn-primary", booked);
        btn.classList.toggle("btn-dark", !booked);
      });
    });

    /* ---- Day filter tabs (Book Classes page) reuse data-tabs already wired in main.js ---- */

    /* ---- Paginated / filterable admin tables (Orders, Users) ---- */
    document.querySelectorAll("[data-paged-table]").forEach(function (wrap) {
      var body = wrap.querySelector("[data-paged-body]");
      if (!body) return;
      var allRows = Array.prototype.slice.call(body.querySelectorAll("tr"));
      var pageSize = parseInt(wrap.getAttribute("data-page-size"), 10) || 10;
      var itemLabel = wrap.getAttribute("data-item-label") || "results";
      var filterBtns = wrap.querySelectorAll("[data-filter-btn]");
      var numbersEl = wrap.querySelector("[data-paged-numbers]");
      var prevBtn = wrap.querySelector("[data-paged-prev]");
      var nextBtn = wrap.querySelector("[data-paged-next]");
      var summaryEl = wrap.querySelector("[data-paged-summary]");
      var emptyEl = wrap.querySelector("[data-paged-empty]");
      var activeFilter = "all";
      var currentPage = 1;

      function filteredRows() {
        if (activeFilter === "all") return allRows;
        return allRows.filter(function (r) { return r.getAttribute("data-row-status") === activeFilter; });
      }

      function render() {
        var rows = filteredRows();
        var totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;
        var start = (currentPage - 1) * pageSize;
        var end = Math.min(start + pageSize, rows.length);

        allRows.forEach(function (r) { r.classList.add("hidden"); });
        rows.slice(start, end).forEach(function (r) { r.classList.remove("hidden"); });

        if (emptyEl) emptyEl.classList.toggle("hidden", rows.length !== 0);

        if (summaryEl) {
          summaryEl.textContent = rows.length === 0
            ? "No " + itemLabel + " found"
            : "Showing " + (start + 1) + "–" + end + " of " + rows.length + " " + itemLabel;
        }

        if (prevBtn) prevBtn.disabled = currentPage <= 1;
        if (nextBtn) nextBtn.disabled = currentPage >= totalPages;

        if (numbersEl) {
          numbersEl.innerHTML = "";
          for (var p = 1; p <= totalPages; p++) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = String(p);
            btn.className = "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold " +
              (p === currentPage ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950" : "border border-ink-200 dark:border-ink-700");
            (function (pageNum) {
              btn.addEventListener("click", function () { currentPage = pageNum; render(); });
            })(p);
            numbersEl.appendChild(btn);
          }
        }
      }

      if (prevBtn) prevBtn.addEventListener("click", function () { currentPage--; render(); });
      if (nextBtn) nextBtn.addEventListener("click", function () { currentPage++; render(); });

      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          activeFilter = btn.getAttribute("data-filter-btn");
          currentPage = 1;
          filterBtns.forEach(function (b) { b.classList.remove("active"); });
          btn.classList.add("active");
          render();
        });
      });

      render();
    });
  });
})();
