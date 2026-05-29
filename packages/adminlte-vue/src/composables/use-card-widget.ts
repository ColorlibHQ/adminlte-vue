import { ref, type Ref } from 'vue'

export interface UseCardWidgetOptions {
  defaultCollapsed?: boolean
}

export interface CardWidgetApi {
  isCollapsed: Ref<boolean>
  isMaximized: Ref<boolean>
  isRemoved: Ref<boolean>
  collapse: () => void
  expand: () => void
  toggleCollapse: () => void
  maximize: () => void
  minimize: () => void
  toggleMaximize: () => void
  remove: () => void
}

/**
 * Local (per-card) widget state: collapse, maximize, and remove.
 * Ports the logic of AdminLTE's `card-widget.ts`.
 */
export function useCardWidget(options: UseCardWidgetOptions = {}): CardWidgetApi {
  const isCollapsed = ref(options.defaultCollapsed ?? false)
  const isMaximized = ref(false)
  const isRemoved = ref(false)

  const collapse = () => (isCollapsed.value = true)
  const expand = () => (isCollapsed.value = false)
  const toggleCollapse = () => (isCollapsed.value = !isCollapsed.value)

  const maximize = () => {
    isMaximized.value = true
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('maximized-card')
    }
  }
  const minimize = () => {
    isMaximized.value = false
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('maximized-card')
    }
  }
  const toggleMaximize = () => (isMaximized.value ? minimize() : maximize())
  const remove = () => (isRemoved.value = true)

  return {
    isCollapsed,
    isMaximized,
    isRemoved,
    collapse,
    expand,
    toggleCollapse,
    maximize,
    minimize,
    toggleMaximize,
    remove,
  }
}
