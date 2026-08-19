import { onBeforeUnmount, onMounted, toValue, watch, type MaybeRefOrGetter } from 'vue'
import type { Direction } from '../types/theme'

/**
 * Apply a text direction to `<html>` for as long as the calling component is
 * mounted. Called by {@link LteDashboardLayout} for its `dir` prop, so a single
 * RTL page inside an otherwise LTR SPA works: the attribute is written on mount,
 * kept in sync while `dir` changes, and the previous value is restored on
 * unmount (a leaked global `dir` would flip every other route).
 *
 * `dir` is the trigger, not the styling: Bootstrap/AdminLTE need the RTL
 * stylesheet (`@adminlte/vue/css/rtl`) loaded alongside it. Load it globally
 * when the whole app is RTL, or per route (e.g. Nuxt's `useHead`) when only some
 * pages are.
 *
 * SSR-safe — it only touches `document` from `onMounted`.
 */
export function useDirection(dir: MaybeRefOrGetter<Direction | undefined>): void {
  // The value found on <html> before we touched it (null = no attribute).
  let previous: string | null = null
  let applied = false

  const restore = () => {
    if (typeof document === 'undefined' || !applied) return
    if (previous === null) document.documentElement.removeAttribute('dir')
    else document.documentElement.setAttribute('dir', previous)
    applied = false
    previous = null
  }

  const apply = () => {
    if (typeof document === 'undefined') return
    const value = toValue(dir)
    if (!value) {
      restore()
      return
    }
    if (!applied) {
      previous = document.documentElement.getAttribute('dir')
      applied = true
    }
    document.documentElement.setAttribute('dir', value)
  }

  onMounted(apply)
  watch(() => toValue(dir), apply)
  onBeforeUnmount(restore)
}
