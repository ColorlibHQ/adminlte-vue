import type { InjectionKey, Ref } from 'vue'

export interface TabMeta {
  id: string
  title: string
  icon?: string
  disabled?: boolean
}

export interface TabsContext {
  activeId: Ref<string | undefined>
  tabs: Ref<TabMeta[]>
  register: (tab: TabMeta) => void
  unregister: (id: string) => void
  select: (id: string) => void
}

export const TabsKey: InjectionKey<TabsContext> = Symbol('lte.tabs')
