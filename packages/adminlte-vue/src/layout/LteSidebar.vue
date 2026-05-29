<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, type Component } from 'vue'
import type { MenuNode } from '../types/menu'
import type { SidebarTheme } from '../types/theme'
import { cn } from '../lib/class-name'
import LteSidebarBrand from './LteSidebarBrand.vue'
import LteSidebarNav from './LteSidebarNav.vue'
import LteSidebarOverlay from './LteSidebarOverlay.vue'

const props = withDefaults(
  defineProps<{
    items: MenuNode[]
    logo?: string
    logoHref?: string
    brandText?: string
    theme?: SidebarTheme
    sidebarClass?: string
    currentPath?: string
    accordion?: boolean
    linkComponent?: string | Component
    animationSpeed?: number
  }>(),
  {
    logoHref: '/',
    theme: 'dark',
    sidebarClass: 'bg-body-secondary shadow',
    currentPath: '/',
    accordion: false,
    linkComponent: 'a',
    animationSpeed: 300,
  }
)

const wrapper = ref<HTMLElement | null>(null)
let osInstance: { destroy?: () => void } | undefined

onMounted(async () => {
  // Themed, auto-hiding scrollbar — desktop only, matching AdminLTE's config.
  if (window.innerWidth <= 992 || !wrapper.value) return
  try {
    const { OverlayScrollbars } = await import('overlayscrollbars')
    if (!wrapper.value) return
    osInstance = OverlayScrollbars(wrapper.value, {
      scrollbars: { theme: 'os-theme-light', autoHide: 'leave', clickScroll: true },
    })
  } catch {
    /* overlayscrollbars not installed — fall back to native scrolling */
  }
})

onBeforeUnmount(() => osInstance?.destroy?.())
</script>

<template>
  <aside :class="cn('app-sidebar', sidebarClass)" :data-bs-theme="theme">
    <slot name="brand">
      <LteSidebarBrand :logo="logo" :href="logoHref" :brand-text="brandText">
        <slot name="logo" />
      </LteSidebarBrand>
    </slot>

    <div ref="wrapper" class="sidebar-wrapper">
      <slot>
        <LteSidebarNav
          :items="items"
          :current-path="currentPath"
          :accordion="accordion"
          :link-component="linkComponent"
          :animation-speed="animationSpeed"
        />
      </slot>
    </div>
  </aside>

  <LteSidebarOverlay />
</template>
