import type { InjectionKey, Ref } from 'vue'

export interface WizardStepMeta {
  id: string
  title: string
  icon?: string
}

export interface WizardContext {
  steps: Ref<WizardStepMeta[]>
  activeIndex: Ref<number>
  register: (step: WizardStepMeta) => void
  unregister: (id: string) => void
  isActive: (id: string) => boolean
}

export const WizardKey: InjectionKey<WizardContext> = Symbol('lte.wizard')
