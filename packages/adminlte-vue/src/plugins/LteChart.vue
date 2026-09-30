<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, toRaw, useTemplateRef, watch } from 'vue'
import type { Chart, ChartData, ChartOptions, ChartType, Plugin } from 'chart.js'
import { subscribeChartTheme } from './chart-theme'

const props = withDefaults(
  defineProps<{
    /** Chart.js chart type (`line`, `bar`, `doughnut`, `pie`, `radar`, `polarArea`, `scatter`, `bubble`). */
    type?: ChartType
    /** Chart.js `data` — `{ labels, datasets }`. Copied before it is handed to Chart.js. */
    data: ChartData
    /** Chart.js options, merged over `{ responsive: true, maintainAspectRatio: false }`. */
    options?: ChartOptions
    /** Per-chart Chart.js plugins (inline plugin objects). */
    plugins?: Plugin[]
    /** Height of the chart box (number = px). */
    height?: number | string
    /** Width of the chart box (number = px); fills the parent when unset. */
    width?: number | string
    /** Accessible name for the canvas (`aria-label`). */
    ariaLabel?: string
    /**
     * Watch `data` deeply (recursive traversal — costly for large datasets).
     * Off by default: replace the object immutably to trigger an update.
     */
    deepWatch?: boolean
  }>(),
  { type: 'line', height: 350 }
)

const canvas = useTemplateRef('canvas')
let chart: Chart | null = null
let unsubscribe: (() => void) | null = null

const px = (v: number | string | undefined) => (typeof v === 'number' ? `${v}px` : v)
const boxStyle = computed(() => ({
  position: 'relative' as const,
  height: px(props.height),
  width: px(props.width),
}))

// Chart.js writes into the objects it is given (it patches `data` arrays to
// listen for mutations) — hand it plain copies, never the caller's (possibly
// reactive) props. Functions, gradients and other class instances are kept.
function copy<T>(value: T): T {
  const raw = toRaw(value)
  if (Array.isArray(raw)) return raw.map(copy) as T
  if (raw !== null && typeof raw === 'object' && Object.getPrototypeOf(raw) === Object.prototype) {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(raw)) out[k] = copy(v)
    return out as T
  }
  return raw
}

function buildOptions(): ChartOptions {
  return { responsive: true, maintainAspectRatio: false, ...copy(props.options ?? {}) } as ChartOptions
}

async function create() {
  if (!canvas.value) return
  const { Chart: ChartJS, registerables } = await import('chart.js')
  // The component may have unmounted while the library loaded.
  if (!canvas.value) return
  ChartJS.register(...registerables)
  // Colour mode / direction changed: rebuild the options from the props so the
  // axes pick up the new defaults, then redraw without animation.
  unsubscribe ??= subscribeChartTheme(ChartJS, () => {
    if (!chart) return
    chart.options = buildOptions()
    chart.update('none')
  })
  chart = new ChartJS(canvas.value, {
    type: props.type,
    data: copy(props.data),
    options: buildOptions(),
    plugins: props.plugins ?? [],
  })
  // Legend and tick labels are measured once, on canvas; re-measure when a web
  // font (e.g. Source Sans 3) finishes loading after the first render.
  document.fonts?.ready.then(() => chart?.update('none'))
}

function destroy() {
  chart?.destroy()
  chart = null
}

onMounted(create)

watch(
  () => props.data,
  (data) => {
    if (!chart) return
    chart.data = copy(data)
    chart.update()
  },
  { deep: props.deepWatch }
)
watch(
  () => props.options,
  () => {
    if (!chart) return
    chart.options = buildOptions()
    chart.update()
  },
  { deep: true }
)
// A new type or plugin list needs a fresh instance.
watch(
  () => [props.type, props.plugins],
  async () => {
    if (!chart) return
    destroy()
    await create()
  }
)

onBeforeUnmount(() => {
  destroy()
  unsubscribe?.()
  unsubscribe = null
})

defineExpose({
  /** The live Chart.js instance (null until mounted, or after unmount). */
  getChart: (): Chart | null => chart,
})
</script>

<template>
  <div :style="boxStyle">
    <canvas ref="canvas" role="img" :aria-label="ariaLabel"></canvas>
  </div>
</template>
