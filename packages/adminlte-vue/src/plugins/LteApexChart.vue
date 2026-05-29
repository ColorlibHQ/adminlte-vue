<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { ApexOptions } from 'apexcharts'

const props = withDefaults(
  defineProps<{
    type?: string
    series: unknown[]
    /** Extra ApexCharts options merged over { chart: { type, height }, series }. */
    options?: ApexOptions
    height?: number | string
    width?: number | string
  }>(),
  { type: 'line', height: 350 }
)

const el = ref<HTMLElement | null>(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let chart: any = null

function buildOptions(): ApexOptions {
  const base = (props.options ?? {}) as ApexOptions
  return {
    ...base,
    chart: {
      ...base.chart,
      type: props.type as NonNullable<ApexOptions['chart']>['type'],
      height: props.height,
      width: props.width,
    },
    series: props.series as ApexOptions['series'],
  }
}

onMounted(async () => {
  if (!el.value) return
  const { default: ApexCharts } = await import('apexcharts')
  if (!el.value) return
  chart = new ApexCharts(el.value, buildOptions())
  await chart.render()
})

watch(
  () => props.series,
  (series) => chart?.updateSeries(series),
  { deep: true }
)
watch(
  () => [props.options, props.type, props.height],
  () => chart?.updateOptions(buildOptions()),
  { deep: true }
)

onBeforeUnmount(() => {
  chart?.destroy()
  chart = null
})
</script>

<template>
  <div ref="el"></div>
</template>
