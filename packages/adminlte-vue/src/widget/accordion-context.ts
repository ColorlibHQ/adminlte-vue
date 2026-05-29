import type { InjectionKey } from 'vue'

export interface AccordionContext {
  isOpen: (id: string) => boolean
  toggle: (id: string) => void
  alwaysOpen: boolean
  animationSpeed: number
  registerDefault: (id: string, open: boolean) => void
}

export const AccordionKey: InjectionKey<AccordionContext> = Symbol('lte.accordion')
