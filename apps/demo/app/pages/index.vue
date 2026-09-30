<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { areaGradient } from '@adminlte/vue/plugins'

// Sales Value area chart (mirrors the original AdminLTE 4 dashboard demo).
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const salesData = {
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
const salesOptions = {
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { title: (items: Array<{ dataIndex: number }>) => `${months[items[0]!.dataIndex]} 2023` } },
  },
  scales: { y: { beginAtZero: true } },
}

// Footer sparklines for the world-map card.
const sparkline1 = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]
const sparkline2 = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]
const sparkline3 = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]

// jsVectorMap needs its world map data registered before the map renders.
const mapReady = ref(false)
onMounted(async () => {
  try {
    await import('jsvectormap')
    await import('jsvectormap/dist/maps/world.js')
    mapReady.value = true
  } catch {
    /* plugin not installed */
  }
})
</script>

<template>
  <LteAppContent
    title="Dashboard"
    :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Dashboard' }]"
  >
    <!-- Small boxes -->
    <div class="row">
      <div class="col-lg-3 col-6">
        <LteSmallBox title="150" text="New Orders" theme="primary" url="#">
          <template #icon>
            <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
            </svg>
          </template>
        </LteSmallBox>
      </div>
      <div class="col-lg-3 col-6">
        <LteSmallBox text="Bounce Rate" theme="success" url="#">
          <template #title>53<sup class="fs-5">%</sup></template>
          <template #icon>
            <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
          </template>
        </LteSmallBox>
      </div>
      <div class="col-lg-3 col-6">
        <LteSmallBox title="44" text="User Registrations" theme="warning" url="#">
          <template #icon>
            <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
            </svg>
          </template>
        </LteSmallBox>
      </div>
      <div class="col-lg-3 col-6">
        <LteSmallBox title="65" text="Unique Visitors" theme="danger" url="#">
          <template #icon>
            <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"></path>
              <path clip-rule="evenodd" fill-rule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"></path>
            </svg>
          </template>
        </LteSmallBox>
      </div>
    </div>
    <!-- Main row -->
    <div class="row">
      <!-- Left col -->
      <div class="col-lg-7 connectedSortable">
        <LteCard title="Sales Value" class="mb-4">
          <ClientOnly>
            <LteChart
              type="line"
              :height="300"
              :data="salesData"
              :options="salesOptions"
              aria-label="Sales value by month"
            />
          </ClientOnly>
        </LteCard>

        <!-- DIRECT CHAT -->
        <div class="card direct-chat direct-chat-primary mb-4">
          <div class="card-header">
            <h3 class="card-title">Direct Chat</h3>
            <div class="card-tools">
              <span title="3 New Messages" class="badge text-bg-primary">3</span>
              <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
              </button>
              <button
                type="button"
                class="btn btn-tool"
                title="Contacts"
                data-lte-toggle="chat-pane"
              >
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
                <img
                  class="direct-chat-img"
                  :src="withBase('/assets/img/user1-128x128.jpg')"
                  alt="message user image"
                />
                <div class="direct-chat-text">
                  Is this template really for free? That's unbelievable!
                </div>
              </div>

              <div class="direct-chat-msg end">
                <div class="direct-chat-infos clearfix">
                  <span class="direct-chat-name float-end">Sarah Bullock</span>
                  <span class="direct-chat-timestamp float-start">23 Jan 2:05 pm</span>
                </div>
                <img
                  class="direct-chat-img"
                  :src="withBase('/assets/img/user3-128x128.jpg')"
                  alt="message user image"
                />
                <div class="direct-chat-text">You better believe it!</div>
              </div>

              <div class="direct-chat-msg">
                <div class="direct-chat-infos clearfix">
                  <span class="direct-chat-name float-start">Alexander Pierce</span>
                  <span class="direct-chat-timestamp float-end">23 Jan 5:37 pm</span>
                </div>
                <img
                  class="direct-chat-img"
                  :src="withBase('/assets/img/user1-128x128.jpg')"
                  alt="message user image"
                />
                <div class="direct-chat-text">
                  Working with AdminLTE on a great new app! Wanna join?
                </div>
              </div>

              <div class="direct-chat-msg end">
                <div class="direct-chat-infos clearfix">
                  <span class="direct-chat-name float-end">Sarah Bullock</span>
                  <span class="direct-chat-timestamp float-start">23 Jan 6:10 pm</span>
                </div>
                <img
                  class="direct-chat-img"
                  :src="withBase('/assets/img/user3-128x128.jpg')"
                  alt="message user image"
                />
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
                <input
                  type="text"
                  name="message"
                  placeholder="Type Message ..."
                  class="form-control"
                />
                <span class="input-group-append">
                  <button type="button" class="btn btn-primary">Send</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Right col -->
      <div class="col-lg-5 connectedSortable">
        <div class="card text-white bg-primary bg-gradient border-primary mb-4">
          <div class="card-header border-0">
            <h3 class="card-title">Sales Value</h3>
            <div class="card-tools">
              <button type="button" class="btn btn-primary btn-sm" data-lte-toggle="card-collapse">
                <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
              </button>
            </div>
          </div>
          <div class="card-body">
            <ClientOnly>
              <LteVectorMap v-if="mapReady" map="world" height="220px" />
              <div v-else style="height: 220px"></div>
            </ClientOnly>
          </div>
          <div class="card-footer border-0">
            <div class="row">
              <div class="col-4 text-center">
                <ClientOnly>
                  <LteSparklineChart :data="sparkline1" color="#DCE6EC" :height="50" />
                </ClientOnly>
                <div class="text-white">Visitors</div>
              </div>
              <div class="col-4 text-center">
                <ClientOnly>
                  <LteSparklineChart :data="sparkline2" color="#DCE6EC" :height="50" />
                </ClientOnly>
                <div class="text-white">Online</div>
              </div>
              <div class="col-4 text-center">
                <ClientOnly>
                  <LteSparklineChart :data="sparkline3" color="#DCE6EC" :height="50" />
                </ClientOnly>
                <div class="text-white">Sales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LteAppContent>
</template>
