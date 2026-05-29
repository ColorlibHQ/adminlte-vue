<script setup lang="ts">
import { computed } from 'vue'
import type { BootstrapTheme } from '../types/theme'

const props = withDefaults(
  defineProps<{
    value: number
    max?: number
    theme?: BootstrapTheme
    showText?: boolean
  }>(),
  { max: 5, theme: 'warning' }
)

const stars = computed(() =>
  Array.from({ length: props.max }, (_, i) => {
    const n = i + 1
    if (props.value >= n) return 'bi-star-fill'
    if (props.value >= n - 0.5) return 'bi-star-half'
    return 'bi-star'
  })
)
</script>

<template>
  <div class="ratings d-inline-flex align-items-center gap-1">
    <i v-for="(star, idx) in stars" :key="idx" :class="['bi', star, `text-${theme}`]"></i>
    <span v-if="showText" class="ms-2 text-secondary">{{ value }}/{{ max }}</span>
  </div>
</template>
