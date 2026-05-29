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
}

/**
 * Props for {@link LteAuthLayout} (login / register).
 */
export interface AuthLayoutProps {
  authType?: 'login' | 'register'
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
