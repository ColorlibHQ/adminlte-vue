<script setup lang="ts">
import { computed, type Component } from 'vue'
import type { DashboardLayoutProps } from '../types/layout'
import type { BreakpointSize } from '../types/theme'
import { cn } from '../lib/class-name'
import { provideSidebar } from '../composables/use-sidebar'
import { provideColorMode } from '../composables/use-color-mode'
import { provideCommandPalette } from '../composables/use-command-palette'
import { useLteBehaviors } from '../composables/use-lte-behaviors'
import { useAccessibility } from '../composables/use-accessibility'
import LteTopbar from './LteTopbar.vue'
import LteSidebar from './LteSidebar.vue'
import LteFooter from './LteFooter.vue'
import LteCommandPalette from '../widget/LteCommandPalette.vue'

// Reactive props destructure (Vue 3.5) — destructured names stay reactive when
// read inside computed getters / the template.
const {
  menuItems,
  logo,
  logoHref = '/',
  user,
  sidebarTheme = 'dark',
  sidebarClass,
  sidebarBreakpoint = 'lg',
  sidebarMini = false,
  fixedHeader = false,
  fixedSidebar = false,
  fixedFooter = false,
  layoutFixed = true,
  colorModeToggle = true,
  initialColorMode = 'auto',
  enableSidebarPersistence = false,
  navbarClass,
  bodyClass,
  currentPath = '/',
  footerRightText,
  footerYear,
  brandText,
  linkComponent = 'a',
  accordion = false,
  navigate,
} = defineProps<
  DashboardLayoutProps & {
    /** Brand text shown next to the logo in the sidebar. */
    brandText?: string
    /** Link component for sidebar/palette nav (e.g. NuxtLink). Default `<a>`. */
    linkComponent?: string | Component
    /** Accordion treeview (one open group per parent). Default false. */
    accordion?: boolean
    /** Navigation callback for the command palette (e.g. router.push). */
    navigate?: (href: string) => void
  }
>()

const BREAKPOINT_PX: Record<BreakpointSize, number> = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}
const breakpointPx = computed(() => BREAKPOINT_PX[sidebarBreakpoint] ?? 992)

const staticBodyClasses = computed(() =>
  cn(
    layoutFixed && 'layout-fixed',
    `sidebar-expand-${sidebarBreakpoint}`,
    fixedHeader && 'fixed-header',
    fixedSidebar && 'fixed-sidebar',
    fixedFooter && 'fixed-footer',
    'bg-body-tertiary',
    bodyClass
  )
)

// Provide shared state (sidebar / color mode / command palette) to all descendants.
provideSidebar({
  sidebarMini,
  enablePersistence: enableSidebarPersistence,
  sidebarBreakpoint: breakpointPx,
  staticBodyClasses,
})
provideColorMode({ initialMode: initialColorMode })
provideCommandPalette()

const emit = defineEmits<{ logout: []; profile: [] }>()

// Behaviors + accessibility for raw markup placed in slots.
useLteBehaviors()
useAccessibility()
</script>

<template>
  <div class="app-wrapper">
    <LteTopbar
      :user="user"
      :color-mode-toggle="colorModeToggle"
      :navbar-class="navbarClass"
      @logout="emit('logout')"
      @profile="emit('profile')"
    >
      <template #start><slot name="topbar-start" /></template>
      <template #end><slot name="topbar-end" /></template>
      <template v-if="$slots['user-menu']" #user-menu="slotProps">
        <slot name="user-menu" v-bind="slotProps" />
      </template>
      <template v-if="$slots['user-header']" #user-header="slotProps">
        <slot name="user-header" v-bind="slotProps" />
      </template>
      <template v-if="$slots['user-body']" #user-body="slotProps">
        <slot name="user-body" v-bind="slotProps" />
      </template>
      <template v-if="$slots['user-footer']" #user-footer="slotProps">
        <slot name="user-footer" v-bind="slotProps" />
      </template>
    </LteTopbar>

    <LteSidebar
      :items="menuItems"
      :logo="logo"
      :logo-href="logoHref"
      :brand-text="brandText"
      :theme="sidebarTheme"
      :sidebar-class="sidebarClass"
      :current-path="currentPath"
      :accordion="accordion"
      :link-component="linkComponent"
      :navigate="navigate"
    >
      <template v-if="$slots['sidebar-brand']" #brand><slot name="sidebar-brand" /></template>
      <template v-if="$slots.logo" #logo><slot name="logo" /></template>
    </LteSidebar>

    <main class="app-main">
      <slot />
    </main>

    <LteFooter :right-text="footerRightText" :year="footerYear">
      <slot name="footer" />
      <template v-if="$slots['footer-right']" #right><slot name="footer-right" /></template>
    </LteFooter>
  </div>

  <LteCommandPalette :menu-items="menuItems" :navigate="navigate" />
</template>
