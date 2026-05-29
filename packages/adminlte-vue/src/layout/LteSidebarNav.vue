<script setup lang="ts">
import { type Component } from 'vue'
import type { MenuNode } from '../types/menu'
import LteSidebarNavItem from './LteSidebarNavItem.vue'
import { provideTreeviewRegistry } from '../composables/use-treeview'

const props = withDefaults(
  defineProps<{
    items: MenuNode[]
    currentPath?: string
    accordion?: boolean
    linkComponent?: string | Component
    animationSpeed?: number
  }>(),
  { currentPath: '/', accordion: false, linkComponent: 'a', animationSpeed: 300 }
)

provideTreeviewRegistry(props.accordion)
</script>

<template>
  <nav class="mt-2" aria-label="Main navigation">
    <ul
      id="navigation"
      class="nav sidebar-menu flex-column"
      data-lte-toggle="treeview"
      :data-accordion="accordion ? 'true' : 'false'"
    >
      <LteSidebarNavItem
        v-for="(item, idx) in items"
        :key="idx"
        :item="item"
        :current-path="currentPath"
        :depth="0"
        parent-key="root"
        :link-component="linkComponent"
        :animation-speed="animationSpeed"
      />
    </ul>
  </nav>
</template>
