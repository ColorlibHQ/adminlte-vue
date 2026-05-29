<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { Instance } from 'flatpickr/dist/types/instance'
import type { Options } from 'flatpickr/dist/types/options'

const props = withDefaults(
  defineProps<{
    /** v-model — selected date(s) as a string. */
    modelValue?: string
    placeholder?: string
    options?: Partial<Options>
  }>(),
  { modelValue: '' }
)
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const el = ref<HTMLInputElement | null>(null)
let picker: Instance | null = null

onMounted(async () => {
  if (!el.value) return
  const { default: flatpickr } = await import('flatpickr')
  if (!el.value) return
  picker = flatpickr(el.value, {
    ...props.options,
    defaultDate: props.modelValue || undefined,
    onChange: (_dates, dateStr) => emit('update:modelValue', dateStr),
  })
})

watch(
  () => props.modelValue,
  (value) => {
    if (picker && value !== el.value?.value) picker.setDate(value, false)
  }
)

onBeforeUnmount(() => {
  picker?.destroy()
  picker = null
})
</script>

<template>
  <input ref="el" type="text" class="form-control" :placeholder="placeholder" :value="modelValue" />
</template>
