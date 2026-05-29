import { onBeforeUnmount, onMounted, watch, type Ref } from 'vue'
import type Sortable from 'sortablejs'

export interface UseSortableOptions {
  enabled?: Ref<boolean> | boolean
  /** Options forwarded to SortableJS. */
  options?: Sortable.Options
}

export interface SortableApi {
  destroy: () => void
}

/**
 * Initialize SortableJS on a target element (loaded lazily, client-only).
 * Returns a `destroy` handle; cleanup also runs automatically on unmount.
 */
export function useSortable(
  target: Ref<HTMLElement | null>,
  options: UseSortableOptions = {}
): SortableApi {
  let instance: Sortable | null = null

  const init = async () => {
    if (instance || !target.value) return
    const { default: SortableCtor } = await import('sortablejs')
    if (!target.value) return
    instance = SortableCtor.create(target.value, options.options)
  }
  const destroy = () => {
    instance?.destroy()
    instance = null
  }

  onMounted(() => {
    const enabled = options.enabled
    if (enabled === undefined || enabled === true) {
      void init()
    } else if (typeof enabled !== 'boolean') {
      watch(
        enabled,
        (on) => (on ? void init() : destroy()),
        { immediate: true }
      )
    }
  })

  onBeforeUnmount(destroy)
  return { destroy }
}
