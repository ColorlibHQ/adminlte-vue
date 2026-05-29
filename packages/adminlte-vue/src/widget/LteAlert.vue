<script setup lang="ts">
import { ref } from 'vue'
import type { BootstrapTheme } from '../types/theme'
import { biClass, cn } from '../lib/class-name'

const props = withDefaults(
  defineProps<{
    theme?: BootstrapTheme
    icon?: string
    title?: string
    dismissible?: boolean
    /** v-model:show — controls visibility. */
    show?: boolean
  }>(),
  { theme: 'info', show: true }
)

const emit = defineEmits<{
  'update:show': [value: boolean]
  dismissed: []
}>()

// Support both controlled (v-model:show) and uncontrolled usage.
const internalShow = ref(true)
const visible = () => (props.show !== undefined ? props.show : internalShow.value)

function dismiss() {
  internalShow.value = false
  emit('update:show', false)
  emit('dismissed')
}
</script>

<template>
  <div
    v-if="visible()"
    :class="cn('alert', `alert-${theme}`, dismissible && 'alert-dismissible')"
    role="alert"
  >
    <h5 v-if="title || icon">
      <i v-if="icon" :class="cn(biClass(icon), 'me-2')"></i>{{ title }}
    </h5>
    <slot />
    <button
      v-if="dismissible"
      type="button"
      class="btn-close"
      aria-label="Close"
      @click="dismiss"
    ></button>
  </div>
</template>
