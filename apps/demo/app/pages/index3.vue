<script setup lang="ts">
// Online Store Visitors (line) — mirrors the original AdminLTE 4 dashboard v3 demo.
const visitorsData = {
  labels: ['22th', '23th', '24th', '25th', '26th', '27th', '28th'],
  datasets: [
    {
      label: 'High - 2023',
      data: [100, 120, 170, 167, 180, 177, 160],
      borderColor: '#0d6efd',
      backgroundColor: '#0d6efd',
      pointRadius: 3,
    },
    {
      label: 'Low - 2023',
      data: [60, 80, 70, 67, 80, 77, 100],
      borderColor: '#adb5bd',
      backgroundColor: '#adb5bd',
      pointRadius: 3,
    },
  ],
}
const visitorsOptions = {
  plugins: { legend: { display: false } },
}

// Sales (grouped bar)
const salesData = {
  labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    { label: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66], backgroundColor: '#0d6efd' },
    { label: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94], backgroundColor: '#20c997' },
    { label: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41], backgroundColor: '#ffc107' },
  ],
}
const salesOptions = {
  datasets: { bar: { categoryPercentage: 0.55, barPercentage: 0.85 } },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (item: { dataset: { label?: string }; raw: unknown }) =>
          `${item.dataset.label}: $ ${item.raw} thousands`,
      },
    },
  },
  scales: { y: { beginAtZero: true } },
}
</script>

<template>
  <LteAppContent
    title="Dashboard v3"
    :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Dashboard v3' }]"
  >
    <div class="row">
      <div class="col-lg-6">
        <LteCard class="mb-4" header-class="border-0">
          <template #header>
            <div class="d-flex justify-content-between">
              <h3 class="card-title">Online Store Visitors</h3>
              <a
                href="javascript:void(0);"
                class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >View Report</a
              >
            </div>
          </template>
          <div class="d-flex">
            <p class="d-flex flex-column">
              <span class="fw-bold fs-5">820</span>
              <span>Visitors Over Time</span>
            </p>
            <p class="ms-auto d-flex flex-column text-end">
              <span class="text-success"> <i class="bi bi-arrow-up"></i> 12.5% </span>
              <span class="text-secondary">Since last week</span>
            </p>
          </div>

          <div class="position-relative mb-4">
            <ClientOnly>
              <LteChart
                type="line"
                :height="200"
                :data="visitorsData"
                :options="visitorsOptions"
                aria-label="Online store visitors, this week and last week"
              />
            </ClientOnly>
          </div>

          <div class="d-flex flex-row justify-content-end">
            <span class="me-2"> <i class="bi bi-square-fill text-primary"></i> This Week </span>
            <span> <i class="bi bi-square-fill text-secondary"></i> Last Week </span>
          </div>
        </LteCard>

        <LteCard class="mb-4" header-class="border-0" body-class="table-responsive p-0">
          <template #header>
            <h3 class="card-title">Products</h3>
            <div class="card-tools">
              <a href="#" class="btn btn-tool btn-sm">
                <i class="bi bi-download"></i>
              </a>
              <a href="#" class="btn btn-tool btn-sm">
                <i class="bi bi-list"></i>
              </a>
            </div>
          </template>
          <table class="table table-striped align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Sales</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    :src="withBase('/assets/img/default-150x150.png')"
                    alt="Product 1"
                    class="rounded-circle img-size-32 me-2"
                  />
                  Some Product
                </td>
                <td>$13 USD</td>
                <td>
                  <small class="text-success me-1"> <i class="bi bi-arrow-up"></i> 12% </small>
                  12,000 Sold
                </td>
                <td>
                  <a href="#" class="text-secondary">
                    <i class="bi bi-search"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    :src="withBase('/assets/img/default-150x150.png')"
                    alt="Product 1"
                    class="rounded-circle img-size-32 me-2"
                  />
                  Another Product
                </td>
                <td>$29 USD</td>
                <td>
                  <small class="text-info me-1"> <i class="bi bi-arrow-down"></i> 0.5% </small>
                  123,234 Sold
                </td>
                <td>
                  <a href="#" class="text-secondary">
                    <i class="bi bi-search"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    :src="withBase('/assets/img/default-150x150.png')"
                    alt="Product 1"
                    class="rounded-circle img-size-32 me-2"
                  />
                  Amazing Product
                </td>
                <td>$1,230 USD</td>
                <td>
                  <small class="text-danger me-1"> <i class="bi bi-arrow-down"></i> 3% </small>
                  198 Sold
                </td>
                <td>
                  <a href="#" class="text-secondary">
                    <i class="bi bi-search"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    :src="withBase('/assets/img/default-150x150.png')"
                    alt="Product 1"
                    class="rounded-circle img-size-32 me-2"
                  />
                  Perfect Item
                  <span class="badge text-bg-danger">NEW</span>
                </td>
                <td>$199 USD</td>
                <td>
                  <small class="text-success me-1"> <i class="bi bi-arrow-up"></i> 63% </small>
                  87 Sold
                </td>
                <td>
                  <a href="#" class="text-secondary">
                    <i class="bi bi-search"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </LteCard>
      </div>

      <div class="col-lg-6">
        <LteCard class="mb-4" header-class="border-0">
          <template #header>
            <div class="d-flex justify-content-between">
              <h3 class="card-title">Sales</h3>
              <a
                href="javascript:void(0);"
                class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >View Report</a
              >
            </div>
          </template>
          <div class="d-flex">
            <p class="d-flex flex-column">
              <span class="fw-bold fs-5">$18,230.00</span>
              <span>Sales Over Time</span>
            </p>
            <p class="ms-auto d-flex flex-column text-end">
              <span class="text-success"> <i class="bi bi-arrow-up"></i> 33.1% </span>
              <span class="text-secondary">Since Past Year</span>
            </p>
          </div>

          <div class="position-relative mb-4">
            <ClientOnly>
              <LteChart
                type="bar"
                :height="200"
                :data="salesData"
                :options="salesOptions"
                aria-label="Net profit, revenue and free cash flow by month"
              />
            </ClientOnly>
          </div>

          <div class="d-flex flex-row justify-content-end">
            <span class="me-2"> <i class="bi bi-square-fill text-primary"></i> This year </span>
            <span> <i class="bi bi-square-fill text-secondary"></i> Last year </span>
          </div>
        </LteCard>

        <LteCard header-class="border-0">
          <template #header>
            <h3 class="card-title">Online Store Overview</h3>
            <div class="card-tools">
              <a href="#" class="btn btn-sm btn-tool">
                <i class="bi bi-download"></i>
              </a>
              <a href="#" class="btn btn-sm btn-tool">
                <i class="bi bi-list"></i>
              </a>
            </div>
          </template>
          <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
            <p class="text-success fs-2">
              <svg
                height="32"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                ></path>
              </svg>
            </p>
            <p class="d-flex flex-column text-end">
              <span class="fw-bold"> <i class="bi bi-graph-up-arrow text-success"></i> 12% </span>
              <span class="text-secondary">CONVERSION RATE</span>
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
            <p class="text-info fs-2">
              <svg
                height="32"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                ></path>
              </svg>
            </p>
            <p class="d-flex flex-column text-end">
              <span class="fw-bold"> <i class="bi bi-graph-up-arrow text-info"></i> 0.8% </span>
              <span class="text-secondary">SALES RATE</span>
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-0">
            <p class="text-danger fs-2">
              <svg
                height="32"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                ></path>
              </svg>
            </p>
            <p class="d-flex flex-column text-end">
              <span class="fw-bold"> <i class="bi bi-graph-down-arrow text-danger"></i> 1% </span>
              <span class="text-secondary">REGISTRATION RATE</span>
            </p>
          </div>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
