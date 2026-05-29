<script lang="ts">
import type { MenuNode } from '../types/menu'
import type { CommandItem } from '../types/widgets'

/**
 * Flatten a MenuNode tree into navigable commands. Skips placeholder links
 * (`#`) and de-duplicates by href.
 */
export function flattenMenuToCommands(nodes: MenuNode[]): CommandItem[] {
  const out: CommandItem[] = []
  const walk = (list: MenuNode[], group?: string) => {
    for (const node of list) {
      if (node.type === 'header') group = node.text
      else if (node.type === 'item') {
        if (node.href && node.href !== '#')
          out.push({ label: node.text, href: node.href, icon: node.icon, group })
      } else walk(node.children, node.text)
    }
  }
  walk(nodes)
  const seen = new Set<string>()
  return out.filter((c) => (seen.has(c.href) ? false : (seen.add(c.href), true)))
}
</script>

<script setup lang="ts">
import { computed, nextTick, ref, watch, type CSSProperties } from 'vue'
import { biClass } from '../lib/class-name'
import { useCommandPalette } from '../composables/use-command-palette'

const props = withDefaults(
  defineProps<{
    items?: CommandItem[]
    menuItems?: MenuNode[]
    placeholder?: string
    /** Navigation callback (e.g. router.push). Falls back to window.location. */
    navigate?: (href: string) => void
  }>(),
  { placeholder: 'Search pages…' }
)

const palette = useCommandPalette()
const isOpen = computed(() => palette?.isOpen.value ?? false)

const allItems = computed<CommandItem[]>(
  () => props.items ?? (props.menuItems ? flattenMenuToCommands(props.menuItems) : [])
)

const query = ref('')
const active = ref(0)
const input = ref<HTMLInputElement | null>(null)

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return allItems.value
  return allItems.value.filter(
    (i) => i.label.toLowerCase().includes(q) || (i.group?.toLowerCase().includes(q) ?? false)
  )
})

watch(isOpen, (open) => {
  if (!open) return
  query.value = ''
  active.value = 0
  nextTick(() => setTimeout(() => input.value?.focus(), 20))
})
watch(query, () => (active.value = 0))

function go(item?: CommandItem) {
  const target = item ?? results.value[active.value]
  if (!target) return
  palette?.close()
  if (props.navigate) props.navigate(target.href)
  else if (typeof window !== 'undefined') window.location.assign(target.href)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    active.value = Math.min(active.value + 1, results.value.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    active.value = Math.max(active.value - 1, 0)
  } else if (e.key === 'Enter') {
    e.preventDefault()
    go()
  } else if (e.key === 'Escape') {
    e.preventDefault()
    palette?.close()
  }
}

const overlayStyle: CSSProperties = {
  position: 'fixed',
  inset: '0',
  zIndex: 1080,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: '12vh',
  background: 'rgba(0, 0, 0, 0.5)',
}
const panelStyle: CSSProperties = {
  width: 'min(640px, 92vw)',
  maxHeight: '70vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" :style="overlayStyle" @mousedown.self="palette?.close()">
      <div
        class="card shadow-lg"
        :style="panelStyle"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div class="input-group input-group-lg border-bottom">
          <span class="input-group-text bg-body border-0"><i class="bi bi-search"></i></span>
          <input
            ref="input"
            v-model="query"
            class="form-control border-0 shadow-none"
            :placeholder="placeholder"
            aria-label="Search"
            @keydown="onKeydown"
          />
        </div>

        <div class="list-group list-group-flush" style="overflow-y: auto">
          <div v-if="results.length === 0" class="text-secondary text-center py-4 small">
            No results for “{{ query }}”
          </div>
          <button
            v-for="(item, idx) in results"
            :key="item.href"
            type="button"
            :class="[
              'list-group-item list-group-item-action d-flex align-items-center gap-2',
              idx === active && 'active',
            ]"
            @mouseenter="active = idx"
            @click="go(item)"
          >
            <i :class="['bi', biClass(item.icon) || 'bi-arrow-return-right']"></i>
            <span class="flex-grow-1 text-start">{{ item.label }}</span>
            <span
              v-if="item.group"
              :class="['badge fw-normal', idx === active ? 'text-bg-light' : 'text-bg-secondary']"
            >{{ item.group }}</span>
          </button>
        </div>

        <div class="card-footer d-flex justify-content-between align-items-center text-secondary small py-2">
          <span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open &middot; <kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>
