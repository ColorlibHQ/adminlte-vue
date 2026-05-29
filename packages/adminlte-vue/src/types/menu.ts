import type { BootstrapTheme } from './theme'

/**
 * Menu header item (non-interactive section label).
 */
export interface MenuHeader {
  type: 'header'
  text: string
}

/**
 * Menu link item (clickable leaf).
 */
export interface MenuItem {
  type: 'item'
  text: string
  href: string
  /** Bootstrap Icons class, e.g. 'bi-speedometer' (with or without the leading `bi`). */
  icon?: string
  iconColor?: BootstrapTheme
  badge?: string | number
  badgeColor?: BootstrapTheme
  target?: '_blank' | '_self'
}

/**
 * Menu group item (collapsible submenu / treeview).
 */
export interface MenuGroup {
  type: 'group'
  text: string
  icon?: string
  iconColor?: BootstrapTheme
  badge?: string | number
  badgeColor?: BootstrapTheme
  children: MenuNode[]
}

/**
 * Discriminated union of all menu node types.
 */
export type MenuNode = MenuHeader | MenuItem | MenuGroup
