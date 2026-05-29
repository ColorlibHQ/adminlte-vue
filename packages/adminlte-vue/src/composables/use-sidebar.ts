import {
  computed,
  inject,
  onMounted,
  provide,
  ref,
  toValue,
  watch,
  watchEffect,
  type ComputedRef,
  type MaybeRefOrGetter,
  type Ref,
} from 'vue'
import { SidebarKey } from './keys'
import { useWindowWidth } from './use-window-width'

const STORAGE_KEY = 'lte.sidebar.state'

export interface SidebarApi {
  /** Desktop collapse state → `body.sidebar-collapse`. */
  isCollapsed: Ref<boolean>
  /** Mobile off-canvas open state → `body.sidebar-open`. */
  isMobileOpen: Ref<boolean>
  /** Whether the sidebar is in mini (icon-only) mode → `body.sidebar-mini`. */
  isMiniMode: Ref<boolean>
  /** Reactive: is the viewport at/below the sidebar breakpoint? */
  isMobile: ComputedRef<boolean>
  /** The breakpoint, in pixels. */
  sidebarBreakpoint: number
  /** On mobile toggles the overlay; on desktop toggles the collapse state. */
  toggle: () => void
  collapse: () => void
  expand: () => void
}

export interface ProvideSidebarOptions {
  sidebarMini?: boolean
  enablePersistence?: boolean
  /** Breakpoint in pixels below which the sidebar behaves as a mobile overlay. */
  sidebarBreakpoint?: number
  /**
   * Static body classes (e.g. `layout-fixed sidebar-expand-lg fixed-header`) to
   * reflect onto `<body>` alongside the dynamic state classes. Lets plain-Vue
   * (non-Nuxt) consumers get the correct layout without extra wiring.
   */
  staticBodyClasses?: MaybeRefOrGetter<string>
}

/**
 * Create and provide the sidebar state. Call once from {@link LteDashboardLayout}.
 * Ports the responsive logic of AdminLTE's `push-menu.ts`.
 */
export function provideSidebar(options: ProvideSidebarOptions = {}): SidebarApi {
  const {
    sidebarMini = false,
    enablePersistence = false,
    sidebarBreakpoint = 992,
    staticBodyClasses,
  } = options

  const isCollapsed = ref(false)
  const isMobileOpen = ref(false)
  const isMiniMode = ref(sidebarMini)
  const windowWidth = useWindowWidth()

  // Treat unknown width (SSR / pre-mount) as desktop.
  const isMobile = computed(() => (windowWidth.value ?? 9999) <= sidebarBreakpoint)

  onMounted(() => {
    if (!enablePersistence) return
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) isCollapsed.value = !!JSON.parse(saved).collapsed
    } catch {
      /* ignore parse errors */
    }
  })

  // Persist collapse state.
  watch(isCollapsed, (collapsed) => {
    if (!enablePersistence || typeof localStorage === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ collapsed }))
  })

  // When growing back to desktop, close the mobile overlay.
  watch(isMobile, (mobile) => {
    if (!mobile && isMobileOpen.value) isMobileOpen.value = false
  })

  // Reflect state onto <body>. The body element lives outside the Vue app tree,
  // so imperative classList mutation is hydration-safe. No-ops on the server.
  watchEffect(() => {
    if (typeof document === 'undefined') return
    const body = document.body
    const dynamic = {
      'sidebar-collapse': isCollapsed.value,
      'sidebar-open': isMobileOpen.value,
      'sidebar-mini': isMiniMode.value,
    }
    for (const [cls, on] of Object.entries(dynamic)) body.classList.toggle(cls, on)

    if (staticBodyClasses != null) {
      for (const cls of toValue(staticBodyClasses).split(/\s+/).filter(Boolean)) {
        body.classList.add(cls)
      }
    }
  })

  const toggle = () => {
    if (isMobile.value) isMobileOpen.value = !isMobileOpen.value
    else isCollapsed.value = !isCollapsed.value
  }
  const collapse = () => {
    isCollapsed.value = true
    isMobileOpen.value = false
  }
  const expand = () => {
    isCollapsed.value = false
    isMobileOpen.value = false
  }

  const api: SidebarApi = {
    isCollapsed,
    isMobileOpen,
    isMiniMode,
    isMobile,
    sidebarBreakpoint,
    toggle,
    collapse,
    expand,
  }
  provide(SidebarKey, api)
  return api
}

/**
 * Consume the sidebar state. Must be used within a {@link LteDashboardLayout}.
 */
export function useSidebar(): SidebarApi {
  const api = inject(SidebarKey)
  if (!api) {
    throw new Error('[adminlte-vue] useSidebar() must be used within <LteDashboardLayout>.')
  }
  return api
}
