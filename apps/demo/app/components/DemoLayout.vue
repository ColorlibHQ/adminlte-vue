<script setup lang="ts">
import { computed, resolveComponent } from 'vue'
// Emitted as a plain asset (never auto-injected) so the RTL sheet can be added
// and removed per route — see the `useHead` call below.
import rtlStylesheet from '@adminlte/vue/css/rtl?url'
import { menu } from '~/lib/menu'
import type { MenuNode, NavMessage, NavNotification } from '@adminlte/vue'

/**
 * Demo wrapper around <LteDashboardLayout>. Supplies the shared menu, branding,
 * signed-in user, and topbar dropdowns, and wires Nuxt routing (active-link
 * detection, NuxtLink navigation, command-palette navigation). Per-page layout
 * flags can be overridden via props.
 */
const props = defineProps<{
  fixedHeader?: boolean
  fixedSidebar?: boolean
  fixedFooter?: boolean
  layoutFixed?: boolean
  sidebarMini?: boolean
  sidebarTheme?: 'light' | 'dark'
  sidebarBreakpoint?: 'lg' | 'md'
  dir?: 'ltr' | 'rtl'
  /** Override the sidebar menu (defaults to the dashboard menu). */
  menuItems?: MenuNode[]
  /** Extra class on <body> (e.g. 'docs-page'). */
  bodyClass?: string
}>()

const route = useRoute()
const config = useAdminlteConfig()
const NuxtLink = resolveComponent('NuxtLink')

const pick = <T,>(a: T | undefined, b: T | undefined, fallback: T): T =>
  a ?? b ?? fallback

const layout = computed(() => ({
  fixedHeader: pick(props.fixedHeader, config.fixedHeader, false),
  fixedSidebar: pick(props.fixedSidebar, config.fixedSidebar, false),
  fixedFooter: pick(props.fixedFooter, config.fixedFooter, false),
  layoutFixed: pick(props.layoutFixed, config.layoutFixed, true),
  sidebarMini: pick(props.sidebarMini, config.sidebarMini, false),
  sidebarTheme: pick(props.sidebarTheme, config.sidebarTheme, 'dark'),
  sidebarBreakpoint: pick(props.sidebarBreakpoint, config.sidebarBreakpoint, 'lg'),
  initialColorMode: config.initialColorMode ?? 'auto',
  enableSidebarPersistence: config.enableSidebarPersistence ?? false,
  dir: props.dir ?? config.dir,
}))

// `dir` alone only flips inline direction — Bootstrap/AdminLTE ship a separate
// RTL build of the stylesheet. This demo is LTR apart from one route, so the RTL
// sheet is loaded for that route only (last in <head>, so it wins over the LTR
// bundle) and torn down by unhead when the layout unmounts. The `dir` attribute
// itself is handled inside <LteDashboardLayout>.
//
// The href is normalized and keyed on purpose: Vite resolves the asset through
// `import.meta.url` on the client (absolute) but emits a base-relative path
// during SSR, and unhead reconciles by value — mismatched hrefs left the
// server-rendered <link> orphaned in <head>, i.e. the RTL sheet stayed applied
// on every route visited afterwards.
const rtlStylesheetHref = rtlStylesheet.replace(/^[a-z][a-z\d+\-.]*:\/\/[^/]+/i, '')

useHead({
  link: computed(() =>
    layout.value.dir === 'rtl'
      ? [
          {
            key: 'adminlte-rtl',
            rel: 'stylesheet',
            href: rtlStylesheetHref,
            // Matches the `crossorigin` on Nuxt's own preload hint for this
            // asset — without it the browser refuses to reuse the preload and
            // downloads the sheet twice.
            crossorigin: 'anonymous' as const,
            tagPriority: 'low' as const,
          },
        ]
      : []
  ),
})

const user = {
  name: 'Alexander Pierce',
  image: withBase('/assets/img/user2-160x160.jpg'),
  role: 'Web Developer',
  memberSince: 'Nov. 2023',
}

const messages: NavMessage[] = [
  { from: 'Brad Diesel', text: 'Call me whenever you can...', time: '4 Hours Ago', star: 'danger', image: withBase('/assets/img/user1-128x128.jpg') },
  { from: 'John Pierce', text: 'I got your message bro', time: '4 Hours Ago', star: 'secondary', image: withBase('/assets/img/user8-128x128.jpg') },
  { from: 'Nora Silvester', text: 'The subject goes here', time: '4 Hours Ago', star: 'warning', image: withBase('/assets/img/user3-128x128.jpg') },
]
const notifications: NavNotification[] = [
  { text: '4 new messages', icon: 'bi-envelope', time: '3 mins' },
  { text: '8 friend requests', icon: 'bi-people-fill', time: '12 hours' },
  { text: '3 new reports', icon: 'bi-file-earmark-fill', time: '2 days' },
]

function navigate(href: string) {
  navigateTo(href)
}
</script>

<template>
  <LteDashboardLayout
    :menu-items="menuItems ?? menu"
    :body-class="bodyClass"
    :current-path="route.path"
    :link-component="NuxtLink"
    :navigate="navigate"
    :logo="withBase('/assets/img/AdminLTELogo.png')"
    brand-text="AdminLTE 4"
    :user="user"
    :fixed-header="layout.fixedHeader"
    :fixed-sidebar="layout.fixedSidebar"
    :fixed-footer="layout.fixedFooter"
    :layout-fixed="layout.layoutFixed"
    :sidebar-mini="layout.sidebarMini"
    :sidebar-theme="layout.sidebarTheme"
    :sidebar-breakpoint="layout.sidebarBreakpoint"
    :initial-color-mode="layout.initialColorMode"
    :enable-sidebar-persistence="layout.enableSidebarPersistence"
    :dir="layout.dir"
  >
    <template v-if="$slots['sidebar-brand']" #sidebar-brand>
      <slot name="sidebar-brand" />
    </template>

    <template #topbar-start>
      <li class="nav-item d-none d-md-block">
        <NuxtLink to="/" class="nav-link"><i class="bi bi-grid-1x2 me-1" aria-hidden="true" />Live preview</NuxtLink>
      </li>
      <li class="nav-item d-none d-md-block">
        <NuxtLink to="/docs" target="_blank" rel="noopener" class="nav-link"><i class="bi bi-book me-1" aria-hidden="true" />Documentation</NuxtLink>
      </li>
    </template>

    <template #topbar-end>
      <LteNavMessages :messages="messages" />
      <LteNavNotifications :notifications="notifications" />
    </template>

    <slot />
  </LteDashboardLayout>
</template>
