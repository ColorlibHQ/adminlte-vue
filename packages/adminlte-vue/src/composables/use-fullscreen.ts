import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export interface FullscreenApi {
  isFullscreen: Ref<boolean>
  toggleFullscreen: () => Promise<void>
  enterFullscreen: () => Promise<void>
  exitFullscreen: () => Promise<void>
}

/**
 * Wrapper around the Fullscreen API. Ports AdminLTE's `fullscreen.ts`.
 */
export function useFullscreen(): FullscreenApi {
  const isFullscreen = ref(false)

  const onChange = () => {
    isFullscreen.value = typeof document !== 'undefined' && !!document.fullscreenElement
  }

  onMounted(() => document.addEventListener('fullscreenchange', onChange))
  onBeforeUnmount(() => document.removeEventListener('fullscreenchange', onChange))

  const enterFullscreen = async () => {
    try {
      await document.documentElement.requestFullscreen()
    } catch (err) {
      console.error('[adminlte-vue] failed to enter fullscreen:', err)
    }
  }
  const exitFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
    } catch (err) {
      console.error('[adminlte-vue] failed to exit fullscreen:', err)
    }
  }
  const toggleFullscreen = async () => {
    if (isFullscreen.value) await exitFullscreen()
    else await enterFullscreen()
  }

  return { isFullscreen, toggleFullscreen, enterFullscreen, exitFullscreen }
}
