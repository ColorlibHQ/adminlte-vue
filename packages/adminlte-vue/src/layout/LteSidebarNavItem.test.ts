import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LteSidebarNavItem from './LteSidebarNavItem.vue'
import type { MenuGroup, MenuItem } from '../types/menu'

const link: MenuItem = {
  type: 'item',
  text: 'Reports',
  href: '/reports',
  attrs: { 'data-testid': 'reports-link', 'data-analytics-id': 'nav.reports' },
}

function mountItem(item: MenuItem | MenuGroup, navigate?: (href: string) => void) {
  return mount(LteSidebarNavItem, { props: { item, currentPath: '/', navigate } })
}

// Dispatch a real MouseEvent so `defaultPrevented` can be asserted (trigger()
// does not hand the event back).
function clickLink(el: Element, init: MouseEventInit = {}) {
  const event = new MouseEvent('click', { bubbles: true, cancelable: true, ...init })
  el.dispatchEvent(event)
  return event
}

describe('LteSidebarNavItem attrs', () => {
  it('spreads a menu item’s attrs onto the rendered link', () => {
    const anchor = mountItem(link).get('a')
    expect(anchor.attributes('data-testid')).toBe('reports-link')
    expect(anchor.attributes('data-analytics-id')).toBe('nav.reports')
    expect(anchor.attributes('href')).toBe('/reports')
  })

  it('never lets attrs clobber the resolved link target', () => {
    const anchor = mountItem({ ...link, attrs: { href: '/hijacked' } }).get('a')
    expect(anchor.attributes('href')).toBe('/reports')
  })

  it('spreads a group’s attrs onto its toggle button', () => {
    const group: MenuGroup = {
      type: 'group',
      text: 'Pages',
      attrs: { 'data-testid': 'pages-toggle' },
      children: [link],
    }
    expect(mountItem(group).get('button').attributes('data-testid')).toBe('pages-toggle')
  })
})

describe('LteSidebarNavItem navigate', () => {
  it('routes a plain click through the navigate callback', () => {
    const navigate = vi.fn()
    const event = clickLink(mountItem(link, navigate).get('a').element)
    expect(navigate).toHaveBeenCalledWith('/reports')
    expect(event.defaultPrevented).toBe(true)
  })

  it('leaves the click alone when no navigate callback is given', () => {
    expect(clickLink(mountItem(link).get('a').element).defaultPrevented).toBe(false)
  })

  it.each([
    ['modified clicks', {} as MenuItem, { metaKey: true }],
    ['middle clicks', {} as MenuItem, { button: 1 }],
    ['new-tab links', { target: '_blank' } as Partial<MenuItem>, {}],
    ['placeholder links', { href: '#' } as Partial<MenuItem>, {}],
    ['external links', { href: 'https://example.com' } as Partial<MenuItem>, {}],
    ['protocol-relative links', { href: '//example.com' } as Partial<MenuItem>, {}],
  ])('leaves %s to the browser', (_label, overrides, init) => {
    const navigate = vi.fn()
    const wrapper = mountItem({ ...link, ...overrides } as MenuItem, navigate)
    const event = clickLink(wrapper.get('a').element, init)
    expect(navigate).not.toHaveBeenCalled()
    expect(event.defaultPrevented).toBe(false)
  })

  it('stands down when a link component already handled the click', () => {
    const navigate = vi.fn()
    const el = mountItem(link, navigate).get('a').element
    const event = new MouseEvent('click', { bubbles: true, cancelable: true })
    event.preventDefault()
    el.dispatchEvent(event)
    expect(navigate).not.toHaveBeenCalled()
  })

  it('passes navigate down to nested children', () => {
    const navigate = vi.fn()
    const group: MenuGroup = { type: 'group', text: 'Pages', children: [link] }
    const wrapper = mountItem(group, navigate)
    clickLink(wrapper.get('.nav-treeview a').element)
    expect(navigate).toHaveBeenCalledWith('/reports')
  })
})
