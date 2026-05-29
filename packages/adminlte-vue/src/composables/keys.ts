import type { InjectionKey } from 'vue'
import type { SidebarApi } from './use-sidebar'
import type { ColorModeApi } from './use-color-mode'
import type { CommandPaletteApi } from './use-command-palette'
import type { TreeviewRegistry } from './use-treeview'

/**
 * Typed provide/inject keys. These are module-singleton Symbols — the reason the
 * library ships ESM-only (a dual ESM/CJS build could create two Symbol instances
 * and silently break injection).
 */
export const SidebarKey: InjectionKey<SidebarApi> = Symbol('lte.sidebar')
export const ColorModeKey: InjectionKey<ColorModeApi> = Symbol('lte.color-mode')
export const CommandPaletteKey: InjectionKey<CommandPaletteApi> = Symbol('lte.command-palette')
export const TreeviewRegistryKey: InjectionKey<TreeviewRegistry> = Symbol('lte.treeview-registry')
