<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type QuillType from 'quill'

const props = withDefaults(
  defineProps<{
    /** v-model — HTML string. */
    modelValue?: string
    placeholder?: string
    theme?: string
    /** Quill modules option (e.g. custom toolbar). */
    modules?: Record<string, unknown>
    readOnly?: boolean
  }>(),
  { modelValue: '', theme: 'snow' }
)
const emit = defineEmits<{ 'update:modelValue': [html: string] }>()

const el = ref<HTMLElement | null>(null)
let quill: QuillType | null = null

onMounted(async () => {
  if (!el.value) return
  const { default: Quill } = await import('quill')
  if (!el.value) return
  quill = new Quill(el.value, {
    theme: props.theme,
    placeholder: props.placeholder,
    readOnly: props.readOnly,
    modules: props.modules ?? {
      toolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'clean'],
      ],
    },
  })
  if (props.modelValue) quill.root.innerHTML = props.modelValue
  quill.on('text-change', () => {
    emit('update:modelValue', quill!.root.innerHTML)
  })
})

watch(
  () => props.modelValue,
  (html) => {
    if (quill && html !== quill.root.innerHTML) quill.root.innerHTML = html ?? ''
  }
)

onBeforeUnmount(() => {
  quill = null
})
</script>

<template>
  <div ref="el"></div>
</template>
