import { inject, provide, ref, type Ref } from 'vue'
import { TreeviewRegistryKey } from './keys'

/**
 * Registry that powers accordion mode (one open group per parent at a time).
 * Provided by {@link LteSidebarNav}; consumed by each group in {@link LteSidebarNavItem}.
 */
export interface TreeviewRegistry {
  accordion: boolean
  openByParent: Ref<Record<string, string | null>>
  setOpen: (parentKey: string, id: string, open: boolean) => void
  isOpen: (parentKey: string, id: string) => boolean
}

export function provideTreeviewRegistry(accordion: boolean): TreeviewRegistry {
  const openByParent = ref<Record<string, string | null>>({})

  const registry: TreeviewRegistry = {
    accordion,
    openByParent,
    setOpen(parentKey, id, open) {
      if (open) openByParent.value[parentKey] = id
      else if (openByParent.value[parentKey] === id) openByParent.value[parentKey] = null
    },
    isOpen(parentKey, id) {
      return openByParent.value[parentKey] === id
    },
  }

  provide(TreeviewRegistryKey, registry)
  return registry
}

export function useTreeviewRegistry(): TreeviewRegistry | undefined {
  return inject(TreeviewRegistryKey, undefined)
}

/**
 * Height-based enter/leave transition hooks for treeview submenus — the idiomatic
 * Vue port of the React `useTreeviewAnimation` technique. Bind to a `<Transition>`:
 *
 * ```vue
 * <Transition v-bind="treeviewTransition(300)">
 *   <ul v-if="isOpen" class="nav nav-treeview">…</ul>
 * </Transition>
 * ```
 */
export function treeviewTransition(speed = 300) {
  const setup = (el: Element) => {
    const e = el as HTMLElement
    e.style.overflow = 'hidden'
    e.style.transitionProperty = 'height'
    e.style.transitionDuration = `${speed}ms`
    e.style.transitionTimingFunction = 'ease-in-out'
  }

  return {
    css: false,
    onEnter(el: Element, done: () => void) {
      const e = el as HTMLElement
      setup(e)
      e.style.height = '0px'
      // Force reflow so the transition runs from 0 → scrollHeight.
      void e.offsetHeight
      e.style.height = `${e.scrollHeight}px`
      window.setTimeout(() => {
        e.style.height = 'auto'
        e.style.overflow = ''
        done()
      }, speed)
    },
    onLeave(el: Element, done: () => void) {
      const e = el as HTMLElement
      setup(e)
      e.style.height = `${e.scrollHeight}px`
      void e.offsetHeight
      e.style.height = '0px'
      window.setTimeout(done, speed)
    },
  }
}
