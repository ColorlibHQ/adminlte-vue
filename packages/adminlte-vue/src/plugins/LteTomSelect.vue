<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

interface TomOption {
  value: string
  text: string
}

const props = withDefaults(
  defineProps<{
    /** v-model — selected value(s). */
    modelValue?: string | string[]
    options?: TomOption[]
    multiple?: boolean
    placeholder?: string
    /** Extra TomSelect settings. */
    settings?: Record<string, unknown>
  }>(),
  { options: () => [] }
)
const emit = defineEmits<{ 'update:modelValue': [value: string | string[]] }>()

const el = ref<HTMLSelectElement | null>(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let instance: any = null

onMounted(async () => {
  if (!el.value) return
  const { default: TomSelect } = await import('tom-select')
  if (!el.value) return
  instance = new TomSelect(el.value, {
    options: props.options,
    placeholder: props.placeholder,
    ...props.settings,
    onChange: (value: string | string[]) => emit('update:modelValue', value),
  })
  if (props.modelValue != null) instance.setValue(props.modelValue as string, true)
})

watch(
  () => props.modelValue,
  (value) => {
    if (instance && value != null) instance.setValue(value as string, true)
  }
)

onBeforeUnmount(() => {
  instance?.destroy()
  instance = null
})
</script>

<template>
  <select ref="el" :multiple="multiple">
    <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.text }}</option>
  </select>
</template>
