import {
  addComponent,
  addImports,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import { defu } from 'defu'

export interface AdminlteLayoutDefaults {
  sidebarTheme?: 'light' | 'dark'
  sidebarMini?: boolean
  sidebarBreakpoint?: 'lg' | 'md'
  fixedHeader?: boolean
  fixedSidebar?: boolean
  fixedFooter?: boolean
  layoutFixed?: boolean
  initialColorMode?: 'light' | 'dark' | 'auto'
  enableSidebarPersistence?: boolean
  dir?: 'ltr' | 'rtl'
}

export interface AdminlteModuleOptions {
  /** Component name prefix used when auto-registering. Default 'Lte' (the lib's prefix). */
  prefix?: string
  /** Auto-register all Lte* components globally. Default true. */
  components?: boolean
  /** Auto-import the composables (useSidebar, useColorMode, …). Default true. */
  composables?: boolean
  /** Inject `@adminlte/vue/css` automatically. Default true. */
  css?: boolean
  /** Load Bootstrap's JS bundle client-side (dropdowns/modals/offcanvas). Default true. */
  bootstrap?: boolean
  /** Inject the blocking head script that sets `data-bs-theme` before paint. Default true. */
  themeScript?: boolean
  /** Default layout + theme flags, surfaced via `useAdminlteConfig()`. */
  defaults?: AdminlteLayoutDefaults
}

/** Core components exported from `@adminlte/vue` (the `.` entry). */
const CORE_COMPONENTS = [
  'LteDashboardLayout',
  'LteAuthLayout',
  'LteAppContent',
  'LteSidebar',
  'LteSidebarBrand',
  'LteSidebarNav',
  'LteSidebarNavItem',
  'LteSidebarOverlay',
  'LteTopbar',
  'LteFooter',
  'LteColorModeToggle',
  'LteFullscreenToggle',
  'LteCard',
  'LteSmallBox',
  'LteInfoBox',
  'LteAlert',
  'LteCallout',
  'LteProgress',
  'LteProgressGroup',
  'LteTimeline',
  'LteRatings',
  'LteProfileCard',
  'LteDescriptionBlock',
  'LteDirectChat',
  'LteNavMessages',
  'LteNavNotifications',
  'LteNavTasks',
  'LteToast',
  'LteTabs',
  'LteTab',
  'LteAccordion',
  'LteAccordionItem',
  'LteBreadcrumb',
  'LteCommandPalette',
  'LteButton',
  'LteInput',
  'LteTextarea',
  'LteSelect',
  'LteInputSwitch',
  'LteInputColor',
  'LteInputFile',
  'LteInputFlatpickr',
  'LteInputTomSelect',
  'LteModal',
  'LteWizard',
  'LteWizardStep',
] as const

/** Plugin-wrapper components exported from `@adminlte/vue/plugins`. */
const PLUGIN_COMPONENTS = [
  'LteApexChart',
  'LteSparklineChart',
  'LteDatatable',
  'LteEditor',
  'LteFlatpickr',
  'LteTomSelect',
  'LteCalendar',
  'LteVectorMap',
  'LteSortable',
  'LteKanban',
] as const

const COMPOSABLES = [
  'useSidebar',
  'useColorMode',
  'useCardWidget',
  'useTreeviewRegistry',
  'useFullscreen',
  'useDirectChat',
  'useSortable',
  'useCommandPalette',
] as const

export default defineNuxtModule<AdminlteModuleOptions>({
  meta: {
    name: '@adminlte/nuxt',
    configKey: 'adminlte',
    compatibility: { nuxt: '>=3.0.0' },
  },
  defaults: {
    prefix: 'Lte',
    components: true,
    composables: true,
    css: true,
    bootstrap: true,
    themeScript: true,
    defaults: {
      layoutFixed: true,
      sidebarTheme: 'dark',
      sidebarBreakpoint: 'lg',
      initialColorMode: 'auto',
      enableSidebarPersistence: false,
    },
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // The SFC library ships compiled ESM that uses Vue runtime helpers — must be
    // transpiled by the consumer's build, not externalized by Nitro.
    nuxt.options.build.transpile.push('@adminlte/vue')
    nuxt.options.vite ||= {}
    nuxt.options.vite.optimizeDeps ||= {}
    nuxt.options.vite.optimizeDeps.include ||= []
    nuxt.options.vite.optimizeDeps.include.push('bootstrap', '@popperjs/core')

    // Auto-register components (resolved via the package exports map).
    if (options.components !== false) {
      const prefix = options.prefix ?? 'Lte'
      const named = (n: string) => (prefix === 'Lte' ? n : n.replace(/^Lte/, prefix))
      for (const name of CORE_COMPONENTS) {
        addComponent({ name: named(name), export: name, filePath: '@adminlte/vue' })
      }
      for (const name of PLUGIN_COMPONENTS) {
        addComponent({ name: named(name), export: name, filePath: '@adminlte/vue/plugins' })
      }
    }

    // Auto-import composables.
    if (options.composables !== false) {
      for (const name of COMPOSABLES) {
        addImports({ name, from: '@adminlte/vue' })
      }
    }

    // Inject the library CSS.
    if (options.css !== false) {
      nuxt.options.css.push('@adminlte/vue/css')
    }

    // Surface layout defaults to the runtime + the useAdminlteConfig() composable.
    nuxt.options.runtimeConfig.public.adminlte = defu(
      (nuxt.options.runtimeConfig.public.adminlte as AdminlteLayoutDefaults | undefined) ?? {},
      options.defaults ?? {}
    ) as Record<string, unknown>

    addImports({
      name: 'useAdminlteConfig',
      from: resolver.resolve('./runtime/composables/useAdminlteConfig'),
    })

    // Blocking head script — sets `data-bs-theme` before first paint (no FOUC).
    if (options.themeScript !== false) {
      // Whitelisted, never interpolated verbatim: this string lands inside an
      // inline <script> whose head sanitizer is disabled below, so a bad value
      // from nuxt.config (untyped JS, or config assembled at runtime) would be
      // script injection rather than a broken theme.
      const configured = options.defaults?.initialColorMode
      const fallback =
        configured === 'light' || configured === 'dark' || configured === 'auto'
          ? configured
          : 'auto'
      nuxt.options.app.head ||= {}
      nuxt.options.app.head.script ||= []
      nuxt.options.app.head.script.push({
        key: 'lte-theme-init',
        tagPosition: 'head',
        innerHTML: `(function(){try{var k=localStorage.getItem('lte-theme')||'${fallback}';var d=k==='auto'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):k;document.documentElement.setAttribute('data-bs-theme',d);}catch(e){}})();`,
      })
      // Prevent Nuxt from minifying away / reordering the inline script content.
      nuxt.options.app.head.__dangerouslyDisableSanitizersByTagID ||= {}
      nuxt.options.app.head.__dangerouslyDisableSanitizersByTagID['lte-theme-init'] = ['innerHTML']
    }

    // Client-only Bootstrap JS bundle (dropdowns, modals, offcanvas, tooltips).
    if (options.bootstrap !== false) {
      addPlugin({ src: resolver.resolve('./runtime/plugin.client'), mode: 'client' })
    }
  },
})
