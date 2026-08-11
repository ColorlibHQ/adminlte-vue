import type { BreakpointSize, ColorMode, Direction, SidebarTheme } from './theme'
import type { MenuNode } from './menu'

/**
 * The signed-in user shown in the topbar user menu.
 */
export interface TopbarUser {
  name: string
  image: string
  role?: string
  memberSince?: string
}

/**
 * A single breadcrumb entry.
 */
export interface Breadcrumb {
  label: string
  href?: string
}

/**
 * Props for {@link LteDashboardLayout}.
 *
 * Unlike the React port, content is provided via slots rather than a `children`
 * prop, so this interface only carries data props. `currentPath` replaces React's
 * `usePathname()` — the Nuxt module wires it from `useRoute().path`.
 */
export interface DashboardLayoutProps {
  menuItems: MenuNode[]
  /** Logo image src. When omitted the `logo` slot (or the default AdminLTE text) is used. */
  logo?: string
  logoHref?: string
  user?: TopbarUser
  sidebarTheme?: SidebarTheme
  sidebarClass?: string
  sidebarBreakpoint?: BreakpointSize
  sidebarMini?: boolean
  fixedHeader?: boolean
  fixedSidebar?: boolean
  fixedFooter?: boolean
  layoutFixed?: boolean
  colorModeToggle?: boolean
  initialColorMode?: ColorMode
  dir?: Direction
  enableSidebarPersistence?: boolean
  navbarClass?: string
  bodyClass?: string
  /** Current route path, used for active-link detection in the sidebar. */
  currentPath?: string
  /** Right-aligned footer text (forwarded to `LteFooter`'s `rightText`). */
  footerRightText?: string
  /** Year used in the default footer copyright line (forwarded to `LteFooter`). */
  footerYear?: number | string
}

/**
 * Props for {@link LteAuthLayout} (login / register).
 */
export interface AuthLayoutProps {
  authType?: 'login' | 'register'
  /**
   * Visual treatment:
   * - 'default' → logo above a plain card (AdminLTE v1 style)
   * - 'v2'      → `card-outline card-primary` with the logo in the card header
   */
  variant?: 'default' | 'v2'
  logo?: string
  logoHref?: string
}

/**
 * Props for {@link LteAppContent}.
 */
export interface AppContentProps {
  title?: string
  breadcrumbs?: Breadcrumb[]
  fluid?: boolean
}
