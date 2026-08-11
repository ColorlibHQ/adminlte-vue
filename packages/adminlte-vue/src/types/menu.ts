import type { BootstrapTheme } from './theme'

/**
 * Extra attributes forwarded verbatim to the element a menu node renders
 * (the `<a>` for an item, the toggle `<button>` for a group) — e.g. `data-*`
 * hooks, `aria-*`, `rel` or `title`.
 */
export type MenuNodeAttrs = Record<string, string | number | boolean>

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
  /** Extra attributes spread onto the rendered link (`data-*`, `aria-*`, `rel`, …). */
  attrs?: MenuNodeAttrs
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
  /** Extra attributes spread onto the group's toggle button (`data-*`, `aria-*`, …). */
  attrs?: MenuNodeAttrs
}

/**
 * Discriminated union of all menu node types.
 */
export type MenuNode = MenuHeader | MenuItem | MenuGroup
