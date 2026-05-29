<script setup lang="ts">
const line = {
  series: [{ name: 'Visitors', data: [31, 40, 28, 51, 42, 109, 100] }, { name: 'Sales', data: [11, 32, 45, 32, 34, 52, 41] }],
  options: { chart: { toolbar: { show: false } }, xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }, stroke: { curve: 'smooth' } },
}
const donut = {
  series: [44, 55, 13, 33],
  options: { labels: ['Chrome', 'Safari', 'Firefox', 'Edge'], legend: { position: 'bottom' } },
}
</script>

<template>
  <LteAppContent title="Charts (ApexCharts)" :breadcrumbs="[{ label: 'Plugins', href: '#' }, { label: 'Charts' }]">
    <div class="row">
      <div class="col-md-7">
        <LteCard title="Area / line">
          <ClientOnly><LteApexChart type="area" :height="320" :series="line.series" :options="line.options" /></ClientOnly>
        </LteCard>
      </div>
      <div class="col-md-5">
        <LteCard title="Donut">
          <ClientOnly><LteApexChart type="donut" :height="320" :series="donut.series" :options="donut.options" /></ClientOnly>
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
