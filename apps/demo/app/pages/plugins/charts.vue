<script setup lang="ts">
import { areaGradient } from '@adminlte/vue/plugins'

const line = {
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Visitors',
        data: [31, 40, 28, 51, 42, 109, 100],
        borderColor: '#0d6efd',
        pointBackgroundColor: '#0d6efd',
        backgroundColor: areaGradient('#0d6efd'),
        fill: 'start',
      },
      {
        label: 'Sales',
        data: [11, 32, 45, 32, 34, 52, 41],
        borderColor: '#20c997',
        pointBackgroundColor: '#20c997',
        backgroundColor: areaGradient('#20c997'),
        fill: 'start',
      },
    ],
  },
  options: { plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true } } },
}
const donut = {
  data: { labels: ['Chrome', 'Safari', 'Firefox', 'Edge'], datasets: [{ label: 'Share', data: [44, 55, 13, 33] }] },
  options: { cutout: '60%', plugins: { legend: { position: 'bottom' } } },
}
</script>

<template>
  <LteAppContent title="Charts (Chart.js)" :breadcrumbs="[{ label: 'Plugins', href: '#' }, { label: 'Charts' }]">
    <div class="row">
      <div class="col-md-7">
        <LteCard title="Area / line">
          <ClientOnly><LteChart type="line" :height="320" :data="line.data" :options="line.options" aria-label="Visitors and sales by weekday" /></ClientOnly>
        </LteCard>
      </div>
      <div class="col-md-5">
        <LteCard title="Donut">
          <ClientOnly><LteChart type="doughnut" :height="320" :data="donut.data" :options="donut.options" aria-label="Browser share" /></ClientOnly>
        </LteCard>
      </div>
      <div class="col-md-4">
        <LteCard title="Sparkline">
          <ClientOnly><LteSparklineChart :data="[10, 41, 35, 51, 49, 62, 69, 91, 148]" color="#0d6efd" /></ClientOnly>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
