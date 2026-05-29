<script setup lang="ts">
import { computed, resolveComponent } from 'vue'
import { menu } from '~/lib/menu'
import type { NavMessage, NavNotification } from 'adminlte-vue'

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

const user = {
  name: 'Aigars Silkalns',
  image: 'https://www.gravatar.com/avatar/?d=mp',
  role: 'Web Developer',
  memberSince: 'Nov. 2023',
}

const messages: NavMessage[] = [
  { from: 'Brad Diesel', text: 'Call me whenever you can…', time: '4 Hours Ago', star: 'warning' },
  { from: 'John Pierce', text: 'I got your message bro', time: '4 Hours Ago' },
  { from: 'Nora Silvester', text: 'The subject goes here', time: '4 Hours Ago', star: 'danger' },
]
const notifications: NavNotification[] = [
  { text: '4 new messages', icon: 'bi-envelope', time: '3 mins' },
  { text: '8 friend requests', icon: 'bi-people', iconTheme: 'success', time: '12 hours' },
  { text: '3 new reports', icon: 'bi-file-earmark', iconTheme: 'danger', time: '2 days' },
]

function navigate(href: string) {
  navigateTo(href)
}
</script>

<template>
  <LteDashboardLayout
    :menu-items="menu"
    :current-path="route.path"
    :link-component="NuxtLink"
    :navigate="navigate"
    logo="/logo.svg"
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
    <template #topbar-end>
      <LteNavMessages :messages="messages" />
      <LteNavNotifications :notifications="notifications" />
    </template>

    <slot />
  </LteDashboardLayout>
</template>
