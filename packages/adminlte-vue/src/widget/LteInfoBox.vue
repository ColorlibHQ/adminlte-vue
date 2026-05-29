<script setup lang="ts">
import { computed } from 'vue'
import type { BootstrapTheme } from '../types/theme'
import { biClass } from '../lib/class-name'

const props = withDefaults(
  defineProps<{
    title?: string | number
    text?: string
    icon?: string
    theme?: BootstrapTheme
    iconTheme?: BootstrapTheme
    progress?: number
    progressText?: string
  }>(),
  { theme: 'info' }
)

const iconClass = computed(() => `info-box-icon text-bg-${props.iconTheme ?? props.theme}`)
</script>

<template>
  <div class="info-box">
    <span v-if="icon" :class="iconClass">
      <i :class="biClass(icon)" aria-hidden="true"></i>
    </span>
    <div class="info-box-content">
      <span v-if="text" class="info-box-text">{{ text }}</span>
      <span v-if="title != null" class="info-box-number">{{ title }}</span>
      <slot />
      <template v-if="progress != null">
        <div class="progress">
          <div class="progress-bar" :class="`bg-${theme}`" :style="{ width: `${progress}%` }"></div>
        </div>
        <span v-if="progressText" class="progress-description">{{ progressText }}</span>
      </template>
    </div>
  </div>
</template>
