<script setup lang="ts">
import { areaGradient } from '@adminlte/vue/plugins'

// Monthly recap sales chart (area).
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const recapData = {
  labels: months.map((m) => m.slice(0, 3)),
  datasets: [
    {
      label: 'Digital Goods',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: '#0d6efd',
      pointBackgroundColor: '#0d6efd',
      backgroundColor: areaGradient('#0d6efd'),
      fill: 'start',
    },
    {
      label: 'Electronics',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#20c997',
      pointBackgroundColor: '#20c997',
      backgroundColor: areaGradient('#20c997'),
      fill: 'start',
    },
  ],
}
const recapOptions = {
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { title: (items: Array<{ dataIndex: number }>) => `${months[items[0]!.dataIndex]} 2023` } },
  },
  scales: { y: { beginAtZero: true } },
}

// Browser-usage donut.
const browserData = {
  labels: ['Chrome', 'Edge', 'FireFox', 'Safari', 'Opera', 'IE'],
  datasets: [
    {
      label: 'Users',
      data: [700, 500, 400, 600, 300, 100],
      backgroundColor: ['#0d6efd', '#20c997', '#ffc107', '#d63384', '#6f42c1', '#adb5bd'],
    },
  ],
}
const browserOptions = {
  cutout: '60%',
  plugins: { legend: { position: 'right' } },
}

const orders = [
  { id: 'OR9842', item: 'Call of Duty IV', status: 'Shipped', theme: 'success', data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
  { id: 'OR1848', item: 'Samsung Smart TV', status: 'Pending', theme: 'warning', data: [12, 56, 21, 39, 73, 45, 64, 52, 36, 59, 44] },
  { id: 'OR7429', item: 'iPhone 6 Plus', status: 'Delivered', theme: 'danger', data: [15, 46, 21, 59, 33, 15, 34, 42, 56, 19, 64] },
  { id: 'OR7429', item: 'Samsung Smart TV', status: 'Processing', theme: 'info', data: [30, 56, 31, 69, 43, 35, 24, 32, 46, 29, 64] },
  { id: 'OR1848', item: 'Samsung Smart TV', status: 'Pending', theme: 'warning', data: [20, 76, 51, 79, 53, 35, 54, 22, 36, 49, 64] },
  { id: 'OR7429', item: 'iPhone 6 Plus', status: 'Delivered', theme: 'danger', data: [5, 36, 11, 69, 23, 15, 14, 42, 26, 19, 44] },
  { id: 'OR9842', item: 'Call of Duty IV', status: 'Shipped', theme: 'success', data: [12, 56, 21, 39, 73, 45, 64, 52, 36, 59, 74] },
]

const members = [
  { img: 'user1-128x128.jpg', name: 'Alexander Pierce', when: 'Today' },
  { img: 'user1-128x128.jpg', name: 'Norman', when: 'Yesterday' },
  { img: 'user7-128x128.jpg', name: 'Jane', when: '12 Jan' },
  { img: 'user6-128x128.jpg', name: 'John', when: '12 Jan' },
  { img: 'user2-160x160.jpg', name: 'Alexander', when: '13 Jan' },
  { img: 'user5-128x128.jpg', name: 'Sarah', when: '14 Jan' },
  { img: 'user4-128x128.jpg', name: 'Nora', when: '15 Jan' },
  { img: 'user3-128x128.jpg', name: 'Nadia', when: '15 Jan' },
]

type Theme = 'primary' | 'success' | 'danger' | 'warning' | 'info'

const topBoxes: Array<{ theme: Theme; icon: string; text: string; number: string; unit?: string }> = [
  { theme: 'primary', icon: 'bi-gear-fill', text: 'CPU Traffic', number: '10', unit: '%' },
  { theme: 'danger', icon: 'bi-hand-thumbs-up-fill', text: 'Likes', number: '41,410' },
  { theme: 'success', icon: 'bi-cart-fill', text: 'Sales', number: '760' },
  { theme: 'warning', icon: 'bi-people-fill', text: 'New Members', number: '2,000' },
]

const rightBoxes: Array<{ theme: Theme; icon: string; text: string; number: string }> = [
  { theme: 'warning', icon: 'bi-tag-fill', text: 'Inventory', number: '5,200' },
  { theme: 'success', icon: 'bi-heart-fill', text: 'Mentions', number: '92,050' },
  { theme: 'danger', icon: 'bi-cloud-download', text: 'Downloads', number: '114,381' },
  { theme: 'info', icon: 'bi-chat-fill', text: 'Direct Messages', number: '163,921' },
]

const products = [
  { name: 'Samsung TV', price: '$1800', theme: 'warning', desc: 'Samsung 32" 1080p 60Hz LED Smart HDTV.' },
  { name: 'Bicycle', price: '$700', theme: 'info', desc: '26" Mongoose Dolomite Men\'s 7-speed, Navy Blue.' },
  { name: 'Xbox One', price: '$350', theme: 'danger', desc: 'Xbox One Console Bundle with Halo Master Chief Collection.' },
  { name: 'PlayStation 4', price: '$399', theme: 'success', desc: 'PlayStation 4 500GB Console (PS4)' },
]
</script>

<template>
  <LteAppContent
    title="Dashboard v2"
    :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Dashboard v2' }]"
  >
    <!-- Info boxes -->
    <div class="row">
      <div v-for="(b, i) in topBoxes" :key="i" class="col-12 col-sm-6 col-md-3">
        <LteInfoBox :theme="b.theme" :icon="b.icon" :text="b.text" :title="b.number" :unit="b.unit" />
      </div>
    </div>

    <!-- Monthly Recap Report -->
    <div class="row">
      <div class="col-md-12">
        <LteCard class="mb-4">
          <template #header>
            <h5 class="card-title">Monthly Recap Report</h5>
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
              </button>
              <div class="btn-group">
                <button type="button" class="btn btn-tool dropdown-toggle" data-bs-toggle="dropdown">
                  <i class="bi bi-wrench"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end" role="menu">
                  <a href="#" class="dropdown-item">Action</a>
                  <a href="#" class="dropdown-item">Another action</a>
                  <a href="#" class="dropdown-item"> Something else here </a>
                  <a class="dropdown-divider"></a>
                  <a href="#" class="dropdown-item">Separated link</a>
                </div>
              </div>
              <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </template>
          <div class="row">
              <div class="col-md-8">
                <p class="text-center"><strong>Sales: 1 Jan, 2023 - 30 Jul, 2023</strong></p>
                <ClientOnly>
                  <LteChart
                    type="line"
                    :height="180"
                    :data="recapData"
                    :options="recapOptions"
                    aria-label="Monthly sales, January to July 2023"
                  />
                </ClientOnly>
              </div>
              <div class="col-md-4">
                <p class="text-center"><strong>Goal Completion</strong></p>
                <div class="progress-group">
                  Add Products to Cart
                  <span class="float-end"><b>160</b>/200</span>
                  <div class="progress progress-sm">
                    <div class="progress-bar text-bg-primary" style="width: 80%"></div>
                  </div>
                </div>
                <div class="progress-group">
                  Complete Purchase
                  <span class="float-end"><b>310</b>/400</span>
                  <div class="progress progress-sm">
                    <div class="progress-bar text-bg-danger" style="width: 75%"></div>
                  </div>
                </div>
                <div class="progress-group">
                  <span class="progress-text">Visit Premium Page</span>
                  <span class="float-end"><b>480</b>/800</span>
                  <div class="progress progress-sm">
                    <div class="progress-bar text-bg-success" style="width: 60%"></div>
                  </div>
                </div>
                <div class="progress-group">
                  Send Inquiries
                  <span class="float-end"><b>250</b>/500</span>
                  <div class="progress progress-sm">
                    <div class="progress-bar text-bg-warning" style="width: 50%"></div>
                  </div>
                </div>
              </div>
            </div>
          <template #footer>
            <div class="row">
              <div class="col-md-3 col-6">
                <div class="text-center border-end">
                  <span class="text-success"> <i class="bi bi-caret-up-fill"></i> 17% </span>
                  <h5 class="fw-bold mb-0">$35,210.43</h5>
                  <span class="text-uppercase">TOTAL REVENUE</span>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="text-center border-end">
                  <span class="text-info"> <i class="bi bi-caret-left-fill"></i> 0% </span>
                  <h5 class="fw-bold mb-0">$10,390.90</h5>
                  <span class="text-uppercase">TOTAL COST</span>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="text-center border-end">
                  <span class="text-success"> <i class="bi bi-caret-up-fill"></i> 20% </span>
                  <h5 class="fw-bold mb-0">$24,813.53</h5>
                  <span class="text-uppercase">TOTAL PROFIT</span>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="text-center">
                  <span class="text-danger"> <i class="bi bi-caret-down-fill"></i> 18% </span>
                  <h5 class="fw-bold mb-0">1200</h5>
                  <span class="text-uppercase">GOAL COMPLETIONS</span>
                </div>
              </div>
            </div>
          </template>
        </LteCard>
      </div>
    </div>

    <div class="row">
      <!-- Left col -->
      <div class="col-md-8">
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <!-- DIRECT CHAT -->
            <div class="card direct-chat direct-chat-warning">
              <div class="card-header">
                <h3 class="card-title">Direct Chat</h3>
                <div class="card-tools">
                  <span title="3 New Messages" class="badge text-bg-warning">3</span>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                  </button>
                  <button type="button" class="btn btn-tool" title="Contacts" data-lte-toggle="chat-pane">
                    <i class="bi bi-chat-text-fill"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="direct-chat-messages">
                  <div class="direct-chat-msg">
                    <div class="direct-chat-infos clearfix">
                      <span class="direct-chat-name float-start">Alexander Pierce</span>
                      <span class="direct-chat-timestamp float-end">23 Jan 2:00 pm</span>
                    </div>
                    <img class="direct-chat-img" :src="withBase('/assets/img/user1-128x128.jpg')" alt="message user image" />
                    <div class="direct-chat-text">
                      Is this template really for free? That's unbelievable!
                    </div>
                  </div>
                  <div class="direct-chat-msg end">
                    <div class="direct-chat-infos clearfix">
                      <span class="direct-chat-name float-end">Sarah Bullock</span>
                      <span class="direct-chat-timestamp float-start">23 Jan 2:05 pm</span>
                    </div>
                    <img class="direct-chat-img" :src="withBase('/assets/img/user3-128x128.jpg')" alt="message user image" />
                    <div class="direct-chat-text">You better believe it!</div>
                  </div>
                  <div class="direct-chat-msg">
                    <div class="direct-chat-infos clearfix">
                      <span class="direct-chat-name float-start">Alexander Pierce</span>
                      <span class="direct-chat-timestamp float-end">23 Jan 5:37 pm</span>
                    </div>
                    <img class="direct-chat-img" :src="withBase('/assets/img/user1-128x128.jpg')" alt="message user image" />
                    <div class="direct-chat-text">
                      Working with AdminLTE on a great new app! Wanna join?
                    </div>
                  </div>
                  <div class="direct-chat-msg end">
                    <div class="direct-chat-infos clearfix">
                      <span class="direct-chat-name float-end">Sarah Bullock</span>
                      <span class="direct-chat-timestamp float-start">23 Jan 6:10 pm</span>
                    </div>
                    <img class="direct-chat-img" :src="withBase('/assets/img/user3-128x128.jpg')" alt="message user image" />
                    <div class="direct-chat-text">I would love to.</div>
                  </div>
                </div>
                <div class="direct-chat-contacts">
                  <ul class="contacts-list">
                    <li>
                      <a href="#">
                        <img class="contacts-list-img" :src="withBase('/assets/img/user1-128x128.jpg')" alt="User Avatar" />
                        <div class="contacts-list-info">
                          <span class="contacts-list-name">
                            Count Dracula
                            <small class="contacts-list-date float-end">2/28/2023</small>
                          </span>
                          <span class="contacts-list-msg">How have you been? I was...</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="contacts-list-img" :src="withBase('/assets/img/user7-128x128.jpg')" alt="User Avatar" />
                        <div class="contacts-list-info">
                          <span class="contacts-list-name">
                            Sarah Doe
                            <small class="contacts-list-date float-end">2/23/2023</small>
                          </span>
                          <span class="contacts-list-msg">I will be waiting for...</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="contacts-list-img" :src="withBase('/assets/img/user3-128x128.jpg')" alt="User Avatar" />
                        <div class="contacts-list-info">
                          <span class="contacts-list-name">
                            Nadia Jolie
                            <small class="contacts-list-date float-end">2/20/2023</small>
                          </span>
                          <span class="contacts-list-msg">I'll call you back at...</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="contacts-list-img" :src="withBase('/assets/img/user5-128x128.jpg')" alt="User Avatar" />
                        <div class="contacts-list-info">
                          <span class="contacts-list-name">
                            Nora S. Vans
                            <small class="contacts-list-date float-end">2/10/2023</small>
                          </span>
                          <span class="contacts-list-msg">Where is your new...</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="contacts-list-img" :src="withBase('/assets/img/user6-128x128.jpg')" alt="User Avatar" />
                        <div class="contacts-list-info">
                          <span class="contacts-list-name">
                            John K.
                            <small class="contacts-list-date float-end">1/27/2023</small>
                          </span>
                          <span class="contacts-list-msg">Can I take a look at...</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="contacts-list-img" :src="withBase('/assets/img/user8-128x128.jpg')" alt="User Avatar" />
                        <div class="contacts-list-info">
                          <span class="contacts-list-name">
                            Kenneth M.
                            <small class="contacts-list-date float-end">1/4/2023</small>
                          </span>
                          <span class="contacts-list-msg">Never mind I found...</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-footer">
                <form action="#" method="post">
                  <div class="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." class="form-control" />
                    <span class="input-group-append">
                      <button type="button" class="btn btn-warning">Send</button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <!-- USERS LIST -->
            <LteCard body-class="p-0" footer-class="text-center">
              <template #header>
                <h3 class="card-title">Latest Members</h3>
                <div class="card-tools">
                  <span class="badge text-bg-danger"> 8 New Members </span>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </template>
              <div class="row text-center m-1">
                <div v-for="(m, i) in members" :key="i" class="col-3 p-2">
                  <img class="img-fluid rounded-circle" :src="withBase(`/assets/img/${m.img}`)" alt="User Image" />
                  <a class="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                    {{ m.name }}
                  </a>
                  <div class="fs-8">{{ m.when }}</div>
                </div>
              </div>
              <template #footer>
                <a href="javascript:" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View All Users</a>
              </template>
            </LteCard>
          </div>
        </div>

        <!-- Latest Orders -->
        <LteCard title="Latest Orders" collapsible removable body-class="p-0" footer-class="clearfix">
          <div class="table-responsive">
              <table class="table m-0">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Status</th>
                    <th>Popularity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(o, i) in orders" :key="i">
                    <td>
                      <NuxtLink to="/pages/invoice" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{{ o.id }}</NuxtLink>
                    </td>
                    <td>{{ o.item }}</td>
                    <td>
                      <span :class="`badge text-bg-${o.theme}`">{{ o.status }}</span>
                    </td>
                    <td>
                      <ClientOnly>
                        <LteSparklineChart
                          type="line"
                          color="var(--bs-primary)"
                          :width="150"
                          :height="30"
                          :data="o.data"
                        />
                      </ClientOnly>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          <template #footer>
            <a href="javascript:void(0)" class="btn btn-sm btn-primary float-start"> Place New Order </a>
            <a href="javascript:void(0)" class="btn btn-sm btn-secondary float-end"> View All Orders </a>
          </template>
        </LteCard>
      </div>

      <!-- Right col -->
      <div class="col-md-4">
        <LteInfoBox
          v-for="(b, i) in rightBoxes"
          :key="i"
          variant="solid"
          box-class="mb-3"
          :theme="b.theme"
          :icon="b.icon"
          :text="b.text"
          :title="b.number"
        />

        <LteCard title="Browser Usage" collapsible removable class="mb-4" footer-class="p-0">
          <div class="row">
            <div class="col-12">
              <ClientOnly>
                <LteChart
                  type="doughnut"
                  :height="350"
                  :data="browserData"
                  :options="browserOptions"
                  aria-label="Browser usage share"
                />
              </ClientOnly>
            </div>
          </div>
          <template #footer>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  United States of America
                  <span class="float-end text-danger"> <i class="bi bi-arrow-down fs-7"></i> 12% </span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  India
                  <span class="float-end text-success"> <i class="bi bi-arrow-up fs-7"></i> 4% </span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  China
                  <span class="float-end text-info"> <i class="bi bi-arrow-left fs-7"></i> 0% </span>
                </a>
              </li>
            </ul>
          </template>
        </LteCard>

        <!-- PRODUCT LIST -->
        <LteCard title="Recently Added Products" collapsible removable body-class="p-0" footer-class="text-center">
          <div class="px-2">
            <div v-for="(p, i) in products" :key="i" class="d-flex border-top py-2 px-1">
                <div class="col-2">
                  <img :src="withBase('/assets/img/default-150x150.png')" alt="Product Image" class="img-size-50" />
                </div>
                <div class="col-10">
                  <a href="javascript:void(0)" class="fw-bold">
                    {{ p.name }}
                    <span :class="`badge text-bg-${p.theme} float-end`"> {{ p.price }} </span>
                  </a>
                  <div class="text-truncate">{{ p.desc }}</div>
                </div>
              </div>
            </div>
          <template #footer>
            <a href="javascript:void(0)" class="uppercase"> View All Products </a>
          </template>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
