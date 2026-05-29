<script setup lang="ts">
import { computed } from 'vue'
import type { BootstrapTheme } from '../types/theme'

const props = withDefaults(
  defineProps<{
    title?: string | number
    text?: string
    icon?: string
    theme?: BootstrapTheme
    url?: string
    urlText?: string
    loading?: boolean
  }>(),
  { theme: 'primary', urlText: 'More info' }
)

// Light backgrounds need dark link text for contrast.
const linkColor = computed(() =>
  props.theme === 'warning' || props.theme === 'light' ? 'link-dark' : 'link-light'
)
</script>

<template>
  <div :class="`small-box text-bg-${theme}`">
    <div class="inner">
      <h3><slot name="title">{{ title }}</slot></h3>
      <p v-if="text || $slots.default"><slot>{{ text }}</slot></p>
    </div>
    <slot name="icon">
      <i v-if="icon" :class="['small-box-icon', 'bi', icon]"></i>
    </slot>
    <div v-if="loading" class="overlay">
      <i class="bi bi-arrow-repeat spinner-border-sm"></i>
    </div>
    <a
      v-if="url"
      :href="url"
      :class="`small-box-footer ${linkColor} link-underline-opacity-0 link-underline-opacity-50-hover`"
    >
      {{ urlText }} <i class="bi bi-link-45deg"></i>
    </a>
  </div>
</template>
