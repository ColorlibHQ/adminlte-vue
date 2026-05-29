import { onBeforeUnmount, onMounted } from 'vue'

export interface AccessibilityOptions {
  /** Inject an aria-live region and expose announce(). Default true. */
  announcements?: boolean
  /** Add `reduced-motion` class to <html> when the user prefers reduced motion. Default true. */
  reducedMotion?: boolean
}

/**
 * Lightweight accessibility helpers, ported from AdminLTE's `accessibility.ts`.
 * DOM-mutating parts run client-only. Installed once by {@link LteDashboardLayout}.
 */
export function useAccessibility(options: AccessibilityOptions = {}): void {
  const { announcements = true, reducedMotion = true } = options
  let liveRegion: HTMLElement | null = null
  let media: MediaQueryList | null = null

  const onMotionChange = () => {
    document.documentElement.classList.toggle('reduced-motion', media?.matches ?? false)
  }

  onMounted(() => {
    if (announcements && !document.getElementById('lte-live-region')) {
      liveRegion = document.createElement('div')
      liveRegion.id = 'lte-live-region'
      liveRegion.setAttribute('aria-live', 'polite')
      liveRegion.setAttribute('aria-atomic', 'true')
      liveRegion.className = 'visually-hidden'
      document.body.appendChild(liveRegion)
    }
    if (reducedMotion) {
      media = window.matchMedia('(prefers-reduced-motion: reduce)')
      media.addEventListener('change', onMotionChange)
      onMotionChange()
    }
  })

  onBeforeUnmount(() => {
    media?.removeEventListener('change', onMotionChange)
    liveRegion?.remove()
  })
}
