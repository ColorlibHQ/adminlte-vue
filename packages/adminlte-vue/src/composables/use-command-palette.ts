import {
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  type Ref,
} from 'vue'
import { CommandPaletteKey } from './keys'

export interface CommandPaletteApi {
  isOpen: Ref<boolean>
  open: () => void
  close: () => void
  toggle: () => void
}

/**
 * Create and provide command-palette state. Registers a ⌘K / Ctrl+K shortcut.
 * Call once from {@link LteDashboardLayout}.
 */
export function provideCommandPalette(): CommandPaletteApi {
  const isOpen = ref(false)
  const open = () => (isOpen.value = true)
  const close = () => (isOpen.value = false)
  const toggle = () => (isOpen.value = !isOpen.value)

  const onKeydown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault()
      toggle()
    } else if (e.key === 'Escape' && isOpen.value) {
      close()
    }
  }

  onMounted(() => document.addEventListener('keydown', onKeydown))
  onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))

  const api: CommandPaletteApi = { isOpen, open, close, toggle }
  provide(CommandPaletteKey, api)
  return api
}

/**
 * Consume command-palette state. Returns `undefined` outside a layout so the
 * topbar search button can degrade gracefully.
 */
export function useCommandPalette(): CommandPaletteApi | undefined {
  return inject(CommandPaletteKey, undefined)
}
