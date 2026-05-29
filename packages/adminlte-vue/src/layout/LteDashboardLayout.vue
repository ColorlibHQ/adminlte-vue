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

const props = withDefaults(
  defineProps<
    DashboardLayoutProps & {
      /** Link component for sidebar/palette nav (e.g. NuxtLink). Default `<a>`. */
      linkComponent?: string | Component
      /** Accordion treeview (one open group per parent). Default false. */
      accordion?: boolean
      /** Navigation callback for the command palette (e.g. router.push). */
      navigate?: (href: string) => void
    }
  >(),
  {
    logoHref: '/',
    sidebarTheme: 'dark',
    sidebarBreakpoint: 'lg',
    sidebarMini: false,
    fixedHeader: false,
    fixedSidebar: false,
    fixedFooter: false,
    layoutFixed: true,
    colorModeToggle: true,
    initialColorMode: 'auto',
    enableSidebarPersistence: false,
    currentPath: '/',
    linkComponent: 'a',
    accordion: false,
  }
)

const BREAKPOINT_PX: Record<BreakpointSize, number> = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}
const breakpointPx = computed(() => BREAKPOINT_PX[props.sidebarBreakpoint] ?? 992)

const staticBodyClasses = computed(() =>
  cn(
    props.layoutFixed && 'layout-fixed',
    `sidebar-expand-${props.sidebarBreakpoint}`,
    props.fixedHeader && 'fixed-header',
    props.fixedSidebar && 'fixed-sidebar',
    props.fixedFooter && 'fixed-footer',
    'bg-body-tertiary',
    props.bodyClass
  )
)

// Provide shared state (sidebar / color mode / command palette) to all descendants.
provideSidebar({
  sidebarMini: props.sidebarMini,
  enablePersistence: props.enableSidebarPersistence,
  sidebarBreakpoint: breakpointPx.value,
  staticBodyClasses,
})
provideColorMode({ initialMode: props.initialColorMode })
provideCommandPalette()

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
    >
      <template #start><slot name="topbar-start" /></template>
      <template #end><slot name="topbar-end" /></template>
    </LteTopbar>

    <LteSidebar
      :items="menuItems"
      :logo="logo"
      :logo-href="logoHref"
      :theme="sidebarTheme"
      :sidebar-class="sidebarClass"
      :current-path="currentPath"
      :accordion="accordion"
      :link-component="linkComponent"
    >
      <template v-if="$slots.logo" #logo><slot name="logo" /></template>
    </LteSidebar>

    <main class="app-main">
      <slot />
    </main>

    <LteFooter>
      <slot name="footer" />
    </LteFooter>
  </div>

  <LteCommandPalette :menu-items="menuItems" :navigate="navigate" />
</template>
