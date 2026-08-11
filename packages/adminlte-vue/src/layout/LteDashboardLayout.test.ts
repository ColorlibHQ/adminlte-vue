import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LteDashboardLayout from './LteDashboardLayout.vue'
import type { MenuNode } from '../types/menu'

const menuItems: MenuNode[] = [{ type: 'item', text: 'Dashboard', href: '/', icon: 'bi-speedometer' }]

beforeEach(() => {
  document.body.className = ''
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
})

type LayoutProps = Partial<InstanceType<typeof LteDashboardLayout>['$props']>

function mountLayout(options: { props?: LayoutProps; slots?: Record<string, string> } = {}) {
  return mount(LteDashboardLayout, {
    props: { menuItems, ...options.props },
    slots: options.slots,
  })
}

describe('LteDashboardLayout user menu slots', () => {
  it('keeps the stock user-body / user-footer when no slots are given', () => {
    const wrapper = mountLayout()
    expect(wrapper.find('.user-body').text()).toContain('Followers')
    expect(wrapper.find('.user-footer').text()).toContain('Sign out')
  })

  it('forwards user-header / user-body / user-footer to the topbar', () => {
    const wrapper = mountLayout({
      props: { user: { name: 'Ada Lovelace', image: '/ada.png' } },
      slots: {
        'user-header': '<span class="custom-header">Header</span>',
        'user-body': '<span class="custom-body">Body</span>',
        'user-footer': '<span class="custom-footer">Footer</span>',
      },
    })
    expect(wrapper.find('.user-header .custom-header').exists()).toBe(true)
    expect(wrapper.find('.user-body .custom-body').exists()).toBe(true)
    expect(wrapper.find('.user-footer .custom-footer').exists()).toBe(true)
    // Stock content is gone, not merely appended.
    expect(wrapper.find('.user-body').text()).not.toContain('Followers')
    expect(wrapper.find('.user-footer').text()).not.toContain('Sign out')
  })

  it('exposes the user and the profile / logout handlers as slot props', async () => {
    const wrapper = mountLayout({
      props: { user: { name: 'Ada Lovelace', image: '/ada.png' } },
      slots: {
        'user-body': '<template #="{ user }"><span class="who">{{ user.name }}</span></template>',
        'user-footer':
          '<template #="{ logout }"><button class="bye" @click="logout()">Bye</button></template>',
      },
    })
    expect(wrapper.find('.who').text()).toBe('Ada Lovelace')
    await wrapper.find('.bye').trigger('click')
    expect(wrapper.emitted('logout')).toHaveLength(1)
  })

  it('replaces the whole dropdown with the user-menu slot', () => {
    const wrapper = mountLayout({ slots: { 'user-menu': '<li class="only-item">Custom</li>' } })
    expect(wrapper.find('.only-item').exists()).toBe(true)
    expect(wrapper.find('.user-header').exists()).toBe(false)
    expect(wrapper.find('.user-body').exists()).toBe(false)
  })
})

describe('LteDashboardLayout footer', () => {
  it('renders the default copyright and right text', () => {
    const footer = mountLayout().find('.app-footer')
    expect(footer.text()).toContain('AdminLTE.io')
    expect(footer.find('.float-end').text()).toBe('Anything you want')
  })

  it('forwards footerRightText and footerYear to LteFooter', () => {
    const wrapper = mountLayout({ props: { footerRightText: 'v2.1.0', footerYear: 2030 } })
    expect(wrapper.find('.app-footer .float-end').text()).toBe('v2.1.0')
    expect(wrapper.find('.app-footer').text()).toContain('2014-2030')
  })

  it('forwards the footer-right slot', () => {
    const wrapper = mountLayout({ slots: { 'footer-right': '<b class="ver">nightly</b>' } })
    expect(wrapper.find('.app-footer .float-end .ver').text()).toBe('nightly')
  })
})
