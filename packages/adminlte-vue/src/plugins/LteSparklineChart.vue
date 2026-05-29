<script setup lang="ts">
import { computed } from 'vue'
import type { ApexOptions } from 'apexcharts'
import LteApexChart from './LteApexChart.vue'
import type { BootstrapTheme } from '../types/theme'

const props = withDefaults(
  defineProps<{
    data: number[]
    type?: 'line' | 'area' | 'bar'
    color?: string
    theme?: BootstrapTheme
    height?: number | string
  }>(),
  { type: 'area', height: 60 }
)

const options = computed<ApexOptions>(() => ({
  chart: { sparkline: { enabled: true } },
  stroke: { curve: 'smooth', width: 2 },
  fill: { opacity: 0.3 },
  colors: props.color ? [props.color] : undefined,
  tooltip: { enabled: true },
}))
</script>

<template>
  <LteApexChart
    :type="type"
    :height="height"
    :series="[{ data }]"
    :options="options"
  />
</template>
