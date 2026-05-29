<script setup lang="ts" generic="T">
import { ref } from 'vue'
import type { Options, SortableEvent } from 'sortablejs'
import { useSortable } from '../composables/use-sortable'

const props = withDefaults(
  defineProps<{
    /** v-model — the ordered list. */
    modelValue?: T[]
    tag?: string
    options?: Options
  }>(),
  { modelValue: () => [] as T[], tag: 'div' }
)
const emit = defineEmits<{ 'update:modelValue': [value: T[]]; end: [event: SortableEvent] }>()

const el = ref<HTMLElement | null>(null)

useSortable(el, {
  options: {
    animation: 150,
    ...props.options,
    onEnd: (event: SortableEvent) => {
      const { oldIndex, newIndex } = event
      if (oldIndex != null && newIndex != null && oldIndex !== newIndex) {
        const next = [...props.modelValue]
        next.splice(newIndex, 0, next.splice(oldIndex, 1)[0]!)
        emit('update:modelValue', next)
      }
      emit('end', event)
    },
  },
})
</script>

<template>
  <component :is="tag" ref="el">
    <slot />
  </component>
</template>
