<script setup lang="ts">
import { computed, onMounted, ref, useId, watch, type Component } from 'vue'
import type { MenuNode } from '../types/menu'
import { biClass, cn } from '../lib/class-name'
import { treeviewTransition, useTreeviewRegistry } from '../composables/use-treeview'

const props = withDefaults(
  defineProps<{
    item: MenuNode
    currentPath: string
    depth?: number
    parentKey?: string
    /** Component/tag used for links (e.g. NuxtLink). Defaults to a plain `<a>`. */
    linkComponent?: string | Component
    animationSpeed?: number
  }>(),
  { depth: 0, parentKey: 'root', linkComponent: 'a', animationSpeed: 300 }
)

const id = useId()
const registry = useTreeviewRegistry()

function isActiveHref(href: string): boolean {
  if (href === '/') return props.currentPath === '/'
  return props.currentPath === href || props.currentPath.startsWith(href + '/')
}

function hasActiveDescendant(node: MenuNode): boolean {
  if (node.type === 'item') return isActiveHref(node.href)
  if (node.type === 'group') return node.children.some(hasActiveDescendant)
  return false
}

const isItemActive = computed(() =>
  props.item.type === 'item' ? isActiveHref(props.item.href) : false
)

// --- group (treeview) state ---
const groupActive = computed(() =>
  props.item.type === 'group' && props.item.children.some(hasActiveDescendant)
)
const localOpen = ref(groupActive.value)

const isOpen = computed(() => {
  if (registry?.accordion) return registry.isOpen(props.parentKey, id)
  return localOpen.value
})

onMounted(() => {
  if (props.item.type === 'group' && groupActive.value && registry?.accordion) {
    registry.setOpen(props.parentKey, id, true)
  }
})

// Open the group when one of its descendants becomes active (route change).
watch(groupActive, (active) => {
  if (!active) return
  if (registry?.accordion) registry.setOpen(props.parentKey, id, true)
  else localOpen.value = true
})

function toggle() {
  if (registry?.accordion) registry.setOpen(props.parentKey, id, !isOpen.value)
  else localOpen.value = !localOpen.value
}

const transition = computed(() => treeviewTransition(props.animationSpeed))
</script>

<template>
  <!-- Header -->
  <li v-if="item.type === 'header'" class="nav-header">{{ item.text }}</li>

  <!-- Leaf link -->
  <li v-else-if="item.type === 'item'" :class="cn('nav-item', isItemActive && 'active')">
    <component
      :is="linkComponent"
      :href="item.href"
      :to="item.href"
      :target="item.target"
      :class="cn('nav-link', isItemActive && 'active')"
    >
      <i
        v-if="item.icon"
        :class="cn('nav-icon', biClass(item.icon), item.iconColor && `text-${item.iconColor}`)"
      ></i>
      <p>
        {{ item.text }}
        <span
          v-if="item.badge != null"
          :class="`nav-badge badge text-bg-${item.badgeColor || 'secondary'} ms-auto`"
        >{{ item.badge }}</span>
      </p>
    </component>
  </li>

  <!-- Group (collapsible) -->
  <li v-else :class="cn('nav-item', isOpen && 'menu-open')">
    <button type="button" class="nav-link" :aria-expanded="isOpen" @click="toggle">
      <i v-if="item.icon" :class="cn('nav-icon', biClass(item.icon))"></i>
      <p>
        {{ item.text }}
        <i class="nav-arrow bi bi-chevron-right"></i>
        <span
          v-if="item.badge != null"
          :class="`nav-badge badge text-bg-${item.badgeColor || 'secondary'} ms-auto me-3`"
        >{{ item.badge }}</span>
      </p>
    </button>

    <Transition v-bind="transition">
      <ul v-show="isOpen" class="nav nav-treeview">
        <LteSidebarNavItem
          v-for="(child, idx) in item.children"
          :key="idx"
          :item="child"
          :current-path="currentPath"
          :depth="depth + 1"
          :parent-key="id"
          :link-component="linkComponent"
          :animation-speed="animationSpeed"
        />
      </ul>
    </Transition>
  </li>
</template>
