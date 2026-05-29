<script setup lang="ts">
import { computed } from 'vue'
import type { BootstrapTheme, ComponentSize } from '../types/theme'
import { biClass, cn } from '../lib/class-name'

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    theme?: BootstrapTheme
    outline?: boolean
    size?: ComponentSize
    icon?: string
    label?: string
    block?: boolean
  }>(),
  { type: 'button', theme: 'primary' }
)

const buttonClass = computed(() =>
  cn(
    'btn',
    `btn-${props.outline ? 'outline-' : ''}${props.theme}`,
    props.size && `btn-${props.size}`,
    props.block && 'w-100'
  )
)
</script>

<template>
  <button :type="type" :class="buttonClass">
    <i v-if="icon" :class="cn(biClass(icon), (label || $slots.default) ? 'me-1' : '')"></i>
    <slot>{{ label }}</slot>
  </button>
</template>
