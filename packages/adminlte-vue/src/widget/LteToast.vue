<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import type { BootstrapTheme } from '../types/theme'

const props = withDefaults(
  defineProps<{
    theme?: BootstrapTheme
    title?: string
    subtitle?: string
    autohide?: boolean
    delay?: number
    /** v-model — controls visibility. */
    modelValue?: boolean
  }>(),
  { autohide: true, delay: 5000, modelValue: false }
)

const emit = defineEmits<{ 'update:modelValue': [value: boolean]; hidden: [] }>()

const visible = ref(props.modelValue)
let timer: ReturnType<typeof setTimeout> | undefined

function hide() {
  visible.value = false
  emit('update:modelValue', false)
  emit('hidden')
}

watch(
  () => props.modelValue,
  (open) => {
    visible.value = open
    clearTimeout(timer)
    if (open && props.autohide) timer = setTimeout(hide, props.delay)
  }
)

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <div
    class="toast fade"
    :class="[visible && 'show', theme && `text-bg-${theme}`]"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    :style="{ display: visible ? 'block' : 'none' }"
  >
    <div v-if="title || subtitle || $slots.header" class="toast-header">
      <slot name="header">
        <strong class="me-auto">{{ title }}</strong>
        <small v-if="subtitle">{{ subtitle }}</small>
      </slot>
      <button type="button" class="btn-close" aria-label="Close" @click="hide"></button>
    </div>
    <div class="toast-body">
      <slot />
    </div>
  </div>
</template>
