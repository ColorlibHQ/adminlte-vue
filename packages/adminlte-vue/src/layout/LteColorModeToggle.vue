<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '../composables/use-color-mode'
import type { ColorMode } from '../types/theme'

const { colorMode, setColorMode } = useColorMode()

const triggerIcon = computed(() =>
  colorMode.value === 'light'
    ? 'bi-sun-fill'
    : colorMode.value === 'dark'
      ? 'bi-moon-fill'
      : 'bi-circle-half'
)

const modes: Array<{ value: ColorMode; icon: string; label: string }> = [
  { value: 'light', icon: 'bi-sun-fill', label: 'Light' },
  { value: 'dark', icon: 'bi-moon-fill', label: 'Dark' },
  { value: 'auto', icon: 'bi-circle-half', label: 'Auto' },
]
</script>

<template>
  <li class="nav-item dropdown">
    <button
      id="bd-theme"
      class="nav-link"
      type="button"
      aria-label="Toggle color scheme"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i :class="['bi', triggerIcon]"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme">
      <li v-for="mode in modes" :key="mode.value">
        <button
          type="button"
          :class="[
            'dropdown-item d-flex align-items-center',
            colorMode === mode.value && 'active',
          ]"
          @click="setColorMode(mode.value)"
        >
          <i :class="['bi', mode.icon, 'me-2']"></i>
          {{ mode.label }}
          <i v-if="colorMode === mode.value" class="bi bi-check-lg ms-auto"></i>
        </button>
      </li>
    </ul>
  </li>
</template>
