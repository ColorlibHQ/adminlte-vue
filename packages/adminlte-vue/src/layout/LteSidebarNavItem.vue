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
    /**
     * Navigation callback (e.g. `router.push`). When set, plain in-app link
     * clicks are intercepted and routed through it instead of doing a full page
     * load. Modified clicks, `target="_blank"`, external/placeholder hrefs and
     * clicks a link component already handled are left to the browser/router.
     */
    navigate?: (href: string) => void
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

// Pass only the prop the link component expects: `href` for a plain <a>,
// `to` for a router component (NuxtLink/RouterLink) — avoids the
// "to and href cannot be used together" warning. Node `attrs` (data-*, aria-*,
// rel, …) come first so they can never clobber the resolved link target.
const linkProps = computed<Record<string, unknown>>(() => {
  if (props.item.type !== 'item') return {}
  const { href, target, attrs } = props.item
  return props.linkComponent === 'a'
    ? { ...attrs, href, target }
    : { ...attrs, to: href, target }
})

// Only intercept clicks the browser would turn into a full page load.
function onLinkClick(e: MouseEvent) {
  if (!props.navigate || props.item.type !== 'item') return
  // A router link component (NuxtLink/RouterLink) already handled it.
  if (e.defaultPrevented) return
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  if (props.item.target && props.item.target !== '_self') return
  const href = props.item.href
  // Placeholder, protocol-relative, absolute-URL and hash-only links stay native.
  if (!href || href.startsWith('#') || href.startsWith('//') || /^[a-z][a-z\d+.-]*:/i.test(href))
    return
  e.preventDefault()
  props.navigate(href)
}

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
      v-bind="linkProps"
      :class="cn('nav-link', isItemActive && 'active')"
      @click="onLinkClick"
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
    <button
      v-bind="item.attrs"
      type="button"
      class="nav-link"
      :aria-expanded="isOpen"
      @click="toggle"
    >
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
          v-for="child in item.children"
          :key="child.type === 'item' ? child.href : `${child.type}:${child.text}`"
          :item="child"
          :current-path="currentPath"
          :depth="depth + 1"
          :parent-key="id"
          :link-component="linkComponent"
          :navigate="navigate"
          :animation-speed="animationSpeed"
        />
      </ul>
    </Transition>
  </li>
</template>
