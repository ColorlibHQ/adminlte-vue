import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
  type ComputedRef,
  type Ref,
} from 'vue'
import { ColorModeKey } from './keys'
import type { ColorMode, ResolvedColorMode } from '../types/theme'

const STORAGE_KEY = 'lte-theme'

export interface ColorModeApi {
  colorMode: Ref<ColorMode>
  resolvedMode: ComputedRef<ResolvedColorMode>
  setColorMode: (mode: ColorMode) => void
}

export interface ProvideColorModeOptions {
  initialMode?: ColorMode
}

function systemPrefersDark(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

/**
 * Create and provide color-mode state. Call once from {@link LteDashboardLayout}.
 * Writes Bootstrap's `data-bs-theme` attribute on `<html>` and persists the
 * preference under the `lte-theme` localStorage key.
 *
 * In Nuxt, a blocking inline head script (added by `@adminlte/nuxt`) sets
 * `data-bs-theme` before first paint to avoid a flash; this composable owns the
 * reactive updates thereafter.
 */
export function provideColorMode(options: ProvideColorModeOptions = {}): ColorModeApi {
  const { initialMode = 'auto' } = options

  const colorMode = ref<ColorMode>(initialMode)
  const systemDark = ref(false)

  const resolvedMode = computed<ResolvedColorMode>(() => {
    if (colorMode.value === 'auto') return systemDark.value ? 'dark' : 'light'
    return colorMode.value
  })

  const apply = () => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('data-bs-theme', resolvedMode.value)
  }

  let media: MediaQueryList | null = null
  const onSystemChange = () => {
    systemDark.value = media?.matches ?? false
  }

  onMounted(() => {
    // Reconcile with the persisted preference + the current system setting.
    const saved = localStorage.getItem(STORAGE_KEY) as ColorMode | null
    if (saved && ['light', 'dark', 'auto'].includes(saved)) colorMode.value = saved
    systemDark.value = systemPrefersDark()

    media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', onSystemChange)
    apply()
  })

  onBeforeUnmount(() => media?.removeEventListener('change', onSystemChange))

  watch(colorMode, (mode) => {
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, mode)
    apply()
  })
  watch(resolvedMode, apply)

  const setColorMode = (mode: ColorMode) => {
    colorMode.value = mode
  }

  const api: ColorModeApi = { colorMode, resolvedMode, setColorMode }
  provide(ColorModeKey, api)
  return api
}

/**
 * Consume color-mode state. Must be used within a {@link LteDashboardLayout}.
 */
export function useColorMode(): ColorModeApi {
  const api = inject(ColorModeKey)
  if (!api) {
    throw new Error('[adminlte-vue] useColorMode() must be used within <LteDashboardLayout>.')
  }
  return api
}
