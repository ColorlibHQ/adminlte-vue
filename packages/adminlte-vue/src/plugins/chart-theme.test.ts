import { afterEach, describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { readChartTheme, resolveColor, withAlpha } from './chart-theme'
import LteChart from './LteChart.vue'

afterEach(() => {
  document.documentElement.removeAttribute('style')
  document.documentElement.removeAttribute('dir')
})

describe('chart theme helpers', () => {
  it('converts hex colours to rgba', () => {
    expect(withAlpha('#0d6efd', 0.5)).toBe('rgba(13, 110, 253, 0.5)')
    expect(withAlpha('#fff', 0.2)).toBe('rgba(255, 255, 255, 0.2)')
    expect(withAlpha('rgb(1, 2, 3)', 0.4)).toBe('rgba(1, 2, 3, 0.4)')
    expect(withAlpha('rgb(1 2 3 / 50%)', 0.4)).toBe('rgba(1, 2, 3, 0.4)')
  })

  it('resolves var(--…) colours from <html>, with fallback', () => {
    document.documentElement.style.setProperty('--bs-primary', '#123456')
    expect(resolveColor('var(--bs-primary)')).toBe('#123456')
    expect(resolveColor('var(--missing, #abcdef)')).toBe('#abcdef')
    expect(resolveColor('#0d6efd')).toBe('#0d6efd')
    expect(withAlpha('var(--bs-primary)', 1)).toBe('rgba(18, 52, 86, 1)')
  })

  it('reads the palette and the text direction', () => {
    document.documentElement.style.setProperty('--bs-primary', '#111111')
    document.documentElement.setAttribute('dir', 'rtl')
    const theme = readChartTheme()
    expect(theme.palette[0]).toBe('#111111')
    expect(theme.rtl).toBe(true)
  })
})

describe('LteChart', () => {
  it('server-renders a sized box with an accessible canvas and no chart', async () => {
    const app = createSSRApp({
      render: () => h(LteChart, { type: 'bar', data: { labels: [], datasets: [] }, height: 240, ariaLabel: 'Sales' }),
    })
    const html = await renderToString(app)
    expect(html).toContain('height:240px')
    expect(html).toContain('<canvas role="img" aria-label="Sales">')
  })
})
