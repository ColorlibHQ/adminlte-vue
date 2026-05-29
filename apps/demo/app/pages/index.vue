<script setup lang="ts">
const sales = {
  series: [{ name: 'This year', data: [28, 48, 40, 19, 86, 27, 90] }],
  options: {
    chart: { toolbar: { show: false } },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    colors: ['#0d6efd'],
  },
}
</script>

<template>
  <LteAppContent title="Dashboard" :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Dashboard v1' }]">
    <!-- Small boxes -->
    <div class="row">
      <div class="col-lg-3 col-6">
        <LteSmallBox title="150" text="New Orders" theme="primary" icon="bi-bag" url="#" />
      </div>
      <div class="col-lg-3 col-6">
        <LteSmallBox title="53%" text="Bounce Rate" theme="success" icon="bi-graph-up" url="#" />
      </div>
      <div class="col-lg-3 col-6">
        <LteSmallBox title="44" text="User Registrations" theme="warning" icon="bi-person-plus" url="#" />
      </div>
      <div class="col-lg-3 col-6">
        <LteSmallBox title="65" text="Unique Visitors" theme="danger" icon="bi-pie-chart" url="#" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-8">
        <LteCard title="Sales overview" icon="bi-bar-chart" collapsible maximizable>
          <ClientOnly>
            <LteApexChart type="area" :height="320" :series="sales.series" :options="sales.options" />
          </ClientOnly>
        </LteCard>
      </div>
      <div class="col-md-4">
        <LteInfoBox title="$53,000" text="Total Revenue" icon="bi-cash-stack" theme="success" :progress="70" progress-text="70% increase in 30 days" />
        <LteInfoBox title="92,050" text="Pageviews" icon="bi-eye" theme="info" :progress="50" progress-text="50% increase in 30 days" />
        <LteCard title="Progress">
          <LteProgressGroup label="Add products to cart" :value="160" :max="200" theme="primary" />
          <LteProgressGroup label="Complete purchase" :value="310" :max="400" theme="danger" />
          <LteProgressGroup label="Visit premium page" :value="480" :max="800" theme="success" />
        </LteCard>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <LteCard title="Direct chat" theme="primary" variant="outline">
          <LteDirectChat
            :messages="[
              { from: 'Alexander', image: 'https://www.gravatar.com/avatar/?d=mp', timestamp: '23 Jan 2:00 pm', text: 'Is this template really for free? That\'s unbelievable!' },
              { from: 'Sarah', image: 'https://www.gravatar.com/avatar/?d=mp', timestamp: '23 Jan 2:05 pm', text: 'You better believe it!', isOwn: true },
            ]"
            :contacts="[
              { name: 'Count Dracula', image: 'https://www.gravatar.com/avatar/?d=mp', date: '1/1/2024', preview: 'How have you been?' },
            ]"
          />
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Latest members" theme="info" variant="outline">
          <LteTimeline
            :items="[
              { time: '12:05', icon: 'bi-envelope', iconTheme: 'primary', title: 'Support Team sent you an email' },
              { time: '5 mins ago', icon: 'bi-person', iconTheme: 'success', title: 'New user registered' },
              { time: '27 mins ago', icon: 'bi-cart', iconTheme: 'warning', title: 'New order received' },
            ]"
          />
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
