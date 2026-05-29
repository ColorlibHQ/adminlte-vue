<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import { AccordionKey } from './accordion-context'

const props = withDefaults(
  defineProps<{
    flush?: boolean
    alwaysOpen?: boolean
    animationSpeed?: number
    /** v-model — open item id(s). */
    modelValue?: string | string[]
  }>(),
  { animationSpeed: 300 }
)
const emit = defineEmits<{ 'update:modelValue': [value: string | string[]] }>()

const openIds = ref<Set<string>>(new Set())

function sync(value: string | string[] | undefined) {
  openIds.value = new Set(value == null ? [] : Array.isArray(value) ? value : [value])
}
sync(props.modelValue)
watch(() => props.modelValue, sync)

function emitModel() {
  const ids = [...openIds.value]
  emit('update:modelValue', props.alwaysOpen ? ids : (ids[0] ?? ''))
}

provide(AccordionKey, {
  isOpen: (id) => openIds.value.has(id),
  toggle(id) {
    const next = new Set(openIds.value)
    if (next.has(id)) next.delete(id)
    else {
      if (!props.alwaysOpen) next.clear()
      next.add(id)
    }
    openIds.value = next
    emitModel()
  },
  alwaysOpen: props.alwaysOpen ?? false,
  animationSpeed: props.animationSpeed,
  registerDefault(id, open) {
    if (open) openIds.value = new Set(openIds.value).add(id)
  },
})
</script>

<template>
  <div :class="['accordion', flush && 'accordion-flush']">
    <slot />
  </div>
</template>
