import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LteTimeline from './LteTimeline.vue'
import type { TimelineItem } from '../types/widgets'

const items: TimelineItem[] = [
  {
    time: '12:05',
    title: 'New message',
    icon: 'bi-envelope',
    iconTheme: 'primary',
    body: 'Hello <b>world</b>',
    footer: '<a href="/read">Read more</a>',
  },
]

describe('LteTimeline', () => {
  // AdminLTE's stylesheet targets `.timeline-body` / `.timeline-footer` directly,
  // and item bodies routinely contain block elements — so the default path must
  // keep writing the HTML straight into those divs, with no wrapper element.
  it('renders body / footer HTML directly into their divs when no slot is passed', () => {
    const wrapper = mount(LteTimeline, { props: { items } })
    expect(wrapper.find('.timeline-body').html()).toBe(
      '<div class="timeline-body">Hello <b>world</b></div>'
    )
    expect(wrapper.find('.timeline-footer').html()).toBe(
      '<div class="timeline-footer"><a href="/read">Read more</a></div>'
    )
  })

  it('omits the blocks entirely when the item has no body / footer', () => {
    const wrapper = mount(LteTimeline, { props: { items: [{ time: '1m', title: 'Ping' }] } })
    expect(wrapper.find('.timeline-body').exists()).toBe(false)
    expect(wrapper.find('.timeline-footer').exists()).toBe(false)
  })

  it('escapes content rendered through the body / footer slots', () => {
    const wrapper = mount(LteTimeline, {
      props: { items: [{ ...items[0]!, body: '<img src=x onerror=alert(1)>' }] },
      slots: {
        body: '<template #="{ item }">{{ item.body }}</template>',
        footer: '<template #="{ index }">entry {{ index }}</template>',
      },
    })
    const body = wrapper.find('.timeline-body')
    // The markup is shown as text, not parsed into an element.
    expect(body.find('img').exists()).toBe(false)
    expect(body.text()).toBe('<img src=x onerror=alert(1)>')
    expect(wrapper.find('.timeline-footer').text()).toBe('entry 0')
  })
})
