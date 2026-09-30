<script setup lang="ts">
import { computed } from 'vue'
import type { ChartData, ChartOptions } from 'chart.js'
import LteChart from './LteChart.vue'
import { areaGradient, resolveColor } from './chart-theme'
import type { BootstrapTheme } from '../types/theme'

const props = withDefaults(
  defineProps<{
    data: number[]
    type?: 'line' | 'area' | 'bar'
    /** Any CSS colour, including `var(--bs-…)`. Wins over `theme`. */
    color?: string
    /** Bootstrap theme colour used when `color` is not set (default `primary`). */
    theme?: BootstrapTheme
    height?: number | string
    /** Fixed width (number = px); fills the parent when unset. */
    width?: number | string
  }>(),
  { type: 'area', height: 60 }
)

// Kept as a CSS colour string and resolved inside scriptable options, so a
// `var(--bs-…)` colour follows colour-mode changes.
const stroke = computed(() => props.color ?? `var(--bs-${props.theme ?? 'primary'})`)

const chartData = computed<ChartData>(() => {
  const color = stroke.value
  const line = () => resolveColor(color)
  return {
    labels: props.data.map((_, i) => i + 1),
    datasets: [
      props.type === 'bar'
        ? { data: props.data, backgroundColor: line, borderColor: line, borderRadius: 2 }
        : {
            data: props.data,
            borderColor: line,
            backgroundColor: props.type === 'area' ? areaGradient(color, 0.45, 0.05) : 'transparent',
            fill: props.type === 'area' ? 'start' : false,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
    ],
  } as ChartData
})

// Sparklines are glanceable: no axes, legend, tooltip or hover state (a canvas
// tooltip would be clipped to a 30–60px tall box anyway).
const options: ChartOptions = {
  events: [],
  layout: { padding: 2 },
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  scales: { x: { display: false }, y: { display: false } },
}
</script>

<template>
  <LteChart
    :type="type === 'bar' ? 'bar' : 'line'"
    :height="height"
    :width="width"
    :data="chartData"
    :options="options"
  />
</template>
