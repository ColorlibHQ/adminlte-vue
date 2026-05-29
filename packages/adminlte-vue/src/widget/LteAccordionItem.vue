<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import { AccordionKey } from './accordion-context'
import { treeviewTransition } from '../composables/use-treeview'

const props = defineProps<{
  id: string
  title: string
  defaultOpen?: boolean
}>()

const ctx = inject(AccordionKey)
if (!ctx) {
  throw new Error('[adminlte-vue] <LteAccordionItem> must be used inside <LteAccordion>.')
}

const isOpen = computed(() => ctx!.isOpen(props.id))
const transition = computed(() => treeviewTransition(ctx!.animationSpeed))

onMounted(() => {
  if (props.defaultOpen) ctx!.registerDefault(props.id, true)
})
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        type="button"
        :class="['accordion-button', !isOpen && 'collapsed']"
        :aria-expanded="isOpen"
        @click="ctx!.toggle(id)"
      >
        {{ title }}
      </button>
    </h2>
    <Transition v-bind="transition">
      <div v-show="isOpen" class="accordion-collapse">
        <div class="accordion-body">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
