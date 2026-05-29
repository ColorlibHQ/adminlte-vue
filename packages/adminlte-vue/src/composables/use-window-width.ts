import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/**
 * SSR-safe reactive window width. Starts as `null` (unknown — treated as desktop
 * by callers so the server renders the expanded layout deterministically), then
 * is populated on mount and kept in sync on resize.
 */
export function useWindowWidth(): Ref<number | null> {
  const width = ref<number | null>(null)
  let frame = 0

  const update = () => {
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(() => {
      width.value = window.innerWidth
    })
  }

  onMounted(() => {
    width.value = window.innerWidth
    window.addEventListener('resize', update, { passive: true })
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', update)
  })

  return width
}
