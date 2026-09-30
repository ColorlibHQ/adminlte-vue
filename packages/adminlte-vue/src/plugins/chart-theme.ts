import type { Chart, ChartType, Plugin, ScriptableContext } from 'chart.js'

/**
 * The single Chart.js theme preset for AdminLTE.
 *
 * Every colour and the font are read from the live Bootstrap / AdminLTE CSS
 * variables on `<html>`, so charts follow the colour mode (`data-bs-theme`),
 * a custom `--bs-*` palette, and the text direction (`dir="rtl"`). The preset
 * writes `Chart.defaults`, so it also styles charts you build with Chart.js
 * directly once {@link applyChartTheme} has run.
 *
 * Browser-only: call it from `onMounted` (or later), never during SSR.
 * `chart.js` is a type-only import here — nothing in this module pulls the
 * library into a bundle.
 */

type ChartStatic = typeof Chart

export interface LteChartTheme {
  fontFamily: string
  /** Primary text (legend labels, tooltip body). */
  color: string
  /** Axis ticks and secondary text. */
  mutedColor: string
  /** Emphasis text (tooltip title). */
  emphasisColor: string
  /** Gridlines and axis borders. */
  gridColor: string
  /** Card / page surface — tooltip background and the gap between doughnut slices. */
  surface: string
  borderColor: string
  /** Border radius in px (from `--bs-border-radius`). */
  radius: number
  /** Series palette used for datasets that set no colour of their own. */
  palette: string[]
  rtl: boolean
}

// Order mirrors the colours the AdminLTE demo charts have always used.
const PALETTE_VARS = ['primary', 'teal', 'warning', 'pink', 'purple', 'info', 'danger', 'success', 'orange', 'secondary']
const PALETTE_FALLBACK = ['#0d6efd', '#20c997', '#ffc107', '#d63384', '#6f42c1', '#0dcaf0', '#dc3545', '#198754', '#fd7e14', '#6c757d']

let current: LteChartTheme | null = null

function root(): HTMLElement | null {
  return typeof document === 'undefined' ? null : document.documentElement
}

/** Read a CSS custom property (e.g. `--bs-primary`) from `<html>`, or `fallback`. */
export function cssVar(name: string, fallback = ''): string {
  const el = root()
  if (!el) return fallback
  const value = getComputedStyle(el).getPropertyValue(name).trim()
  return value || fallback
}

/**
 * Canvas can't read CSS variables, so resolve `var(--name[, fallback])` to its
 * current value. Any other colour string is returned unchanged.
 */
export function resolveColor(color: string): string {
  const m = /^var\(\s*(--[\w-]+)\s*(?:,\s*(.+))?\)$/.exec(color.trim())
  if (!m) return color
  return cssVar(m[1]!, m[2]?.trim() ?? '')
}

let probe: CanvasRenderingContext2D | null = null

/** `color` (any CSS colour, or a `var(--…)`) at the given alpha, as `rgba()`. */
export function withAlpha(color: string, alpha: number): string {
  const resolved = resolveColor(color)
  let hex = resolved
  if (!/^(#[0-9a-f]{3,8}|rgba?\(.*\))$/i.test(resolved) && typeof document !== 'undefined') {
    // Let the browser normalise named / rgb() / hsl() colours.
    probe ??= document.createElement('canvas').getContext('2d')
    if (probe) {
      probe.fillStyle = '#000'
      probe.fillStyle = resolved
      hex = String(probe.fillStyle)
    }
  }
  const rgba = /^rgba?\(([^)]+)\)$/.exec(hex)
  if (rgba) {
    // Both `rgb(1, 2, 3)` and the space syntax `rgb(1 2 3 / 50%)`.
    const [r, g, b] = rgba[1]!.trim().split(/[\s,/]+/)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  let h = hex.replace('#', '')
  if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('')
  const n = Number.parseInt(h.slice(0, 6), 16)
  if (Number.isNaN(n)) return resolved
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}

/**
 * A scriptable `backgroundColor` that fades `color` from `from` alpha at the top
 * of the chart area to `to` at the bottom — the area-chart fill. Re-evaluated on
 * every update, so a `var(--…)` colour follows the theme.
 */
export function areaGradient(color: string, from = 0.4, to = 0.02) {
  return (ctx: ScriptableContext<ChartType>): CanvasGradient | string => {
    const { chart } = ctx
    const area = chart.chartArea
    if (!area) return withAlpha(color, from)
    const gradient = chart.ctx.createLinearGradient(0, area.top, 0, area.bottom)
    gradient.addColorStop(0, withAlpha(color, from))
    gradient.addColorStop(1, withAlpha(color, to))
    return gradient
  }
}

/** Snapshot the theme from the current CSS variables. */
export function readChartTheme(): LteChartTheme {
  const el = root()
  const radius = Number.parseFloat(cssVar('--bs-border-radius', '0.375rem')) || 0.375
  const rem = el ? Number.parseFloat(getComputedStyle(el).fontSize) || 16 : 16
  return {
    fontFamily: cssVar('--bs-body-font-family', 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'),
    color: cssVar('--bs-body-color', '#212529'),
    mutedColor: cssVar('--bs-secondary-color', 'rgba(33, 37, 41, 0.75)'),
    emphasisColor: cssVar('--bs-emphasis-color', '#000'),
    gridColor: cssVar('--bs-border-color-translucent', 'rgba(0, 0, 0, 0.175)'),
    surface: cssVar('--bs-body-bg', '#fff'),
    borderColor: cssVar('--bs-border-color', '#dee2e6'),
    radius: Math.round(radius * rem),
    palette: PALETTE_VARS.map((name, i) => cssVar(`--bs-${name}`, PALETTE_FALLBACK[i])),
    rtl: el ? (el.getAttribute('dir') || getComputedStyle(el).direction) === 'rtl' : false,
  }
}

function theme(): LteChartTheme {
  return (current ??= readChartTheme())
}

const PER_POINT = new Set(['doughnut', 'pie', 'polarArea'])

/**
 * Gives every dataset that sets no colour of its own a palette colour. The
 * colours are scriptable, so they are re-read from the theme on each update.
 */
const lteColors: Plugin = {
  id: 'lteColors',
  beforeUpdate(chart) {
    const chartType = (chart.config as { type?: string }).type ?? ''
    chart.data.datasets.forEach((ds, i) => {
      const d = ds as unknown as Record<string, unknown>
      if (d.backgroundColor !== undefined || d.borderColor !== undefined) return
      const type = (d.type as string | undefined) ?? chartType
      const pick = (n: number) => theme().palette[n % theme().palette.length]!
      if (PER_POINT.has(type)) {
        d.backgroundColor = (ctx: ScriptableContext<ChartType>) => pick(ctx.dataIndex)
        d.borderColor = () => theme().surface
      } else if (type === 'line' || type === 'radar') {
        d.borderColor = () => pick(i)
        d.backgroundColor = () => withAlpha(pick(i), 0.2)
        d.pointBackgroundColor = () => pick(i)
      } else {
        d.backgroundColor = () => pick(i)
        d.borderColor = () => pick(i)
      }
    })
  },
}

/**
 * Write the AdminLTE look into `Chart.defaults` (font, colours, gridlines,
 * tooltip, legend, rounded bars, RTL) and register the palette plugin.
 * Call again after a colour-mode or direction change, then `chart.update()`.
 */
export function applyChartTheme(ChartJS: ChartStatic, t: LteChartTheme = readChartTheme()): LteChartTheme {
  current = t
  const d = ChartJS.defaults

  d.font.family = t.fontFamily
  d.font.size = 12
  d.color = t.mutedColor
  d.borderColor = t.gridColor

  // Elements: smooth lines, hidden points until hover, rounded bars.
  d.elements.line.tension = 0.4
  d.elements.line.borderWidth = 2
  d.elements.point.radius = 0
  d.elements.point.hoverRadius = 5
  d.elements.point.hitRadius = 8
  d.elements.point.hoverBorderWidth = 2
  d.elements.point.borderColor = t.surface
  d.elements.bar.borderRadius = 4
  d.elements.arc.borderWidth = 2
  d.elements.arc.borderColor = t.surface

  // Scales: subtle horizontal gridlines only, no axis border lines.
  d.scale.grid.color = t.gridColor
  d.scale.grid.tickColor = 'transparent'
  d.set('scale', { border: { display: false } })
  d.set('scales.category', { grid: { display: false } })
  d.set('scales.linear', { ticks: { maxTicksLimit: 6 } })
  d.set('scales.radialLinear', {
    grid: { color: t.gridColor },
    angleLines: { color: t.gridColor },
    pointLabels: { color: t.mutedColor },
    ticks: { backdropColor: 'transparent' },
  })

  // Legend and tooltip match Bootstrap's popover styling.
  const legend = d.plugins.legend
  legend.rtl = t.rtl
  legend.labels.color = t.color
  legend.labels.usePointStyle = true
  legend.labels.pointStyle = 'circle'
  legend.labels.boxWidth = 8
  legend.labels.boxHeight = 8
  legend.labels.padding = 16

  const tooltip = d.plugins.tooltip
  tooltip.rtl = t.rtl
  tooltip.backgroundColor = t.surface
  tooltip.titleColor = t.emphasisColor
  tooltip.bodyColor = t.color
  tooltip.footerColor = t.mutedColor
  tooltip.borderColor = t.borderColor
  tooltip.borderWidth = 1
  tooltip.cornerRadius = t.radius
  tooltip.padding = 10
  tooltip.caretSize = 6
  tooltip.boxPadding = 6
  tooltip.usePointStyle = true
  tooltip.titleFont = { weight: 600 }

  // A shared, index-based tooltip on cartesian charts (hover anywhere in a column).
  // `axis` is left to Chart.js so horizontal bars (`indexAxis: 'y'`) work too.
  for (const type of ['line', 'bar'] as const) {
    ChartJS.overrides[type].interaction = {
      ...ChartJS.overrides[type].interaction,
      mode: 'index',
      intersect: false,
    }
  }

  ChartJS.register(lteColors)
  return t
}

// ---------------------------------------------------------------------------
// Live re-theming: one MutationObserver on <html>, shared by every mounted chart.
//
// Chart.js copies the scale defaults into each chart's own options when the
// chart is created, so a changed `Chart.defaults` alone never reaches the axes
// of an existing chart. Each subscriber therefore rebuilds its options from the
// source (see LteChart) before updating.

let observer: MutationObserver | null = null
const subscribers = new Set<() => void>()

function refresh(ChartJS: ChartStatic) {
  applyChartTheme(ChartJS)
  for (const rebuild of subscribers) rebuild()
}

/**
 * Apply the theme and call `rebuild` whenever `data-bs-theme` or `dir` changes
 * on `<html>`. Returns the unsubscribe function; the observer disconnects when
 * the last subscriber leaves.
 */
export function subscribeChartTheme(ChartJS: ChartStatic, rebuild: () => void): () => void {
  const el = root()
  if (!el) return () => {}
  if (subscribers.size === 0) {
    applyChartTheme(ChartJS)
    observer = new MutationObserver(() => refresh(ChartJS))
    observer.observe(el, { attributes: true, attributeFilter: ['data-bs-theme', 'dir'] })
  }
  subscribers.add(rebuild)
  return () => {
    subscribers.delete(rebuild)
    if (subscribers.size === 0) {
      observer?.disconnect()
      observer = null
    }
  }
}
