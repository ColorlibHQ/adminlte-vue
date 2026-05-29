<script setup lang="ts">
import { useFullscreen } from '../composables/use-fullscreen'

const { isFullscreen, toggleFullscreen } = useFullscreen()
</script>

<template>
  <li class="nav-item">
    <button
      type="button"
      class="nav-link"
      :title="isFullscreen ? 'Exit fullscreen' : 'Fullscreen'"
      @click="toggleFullscreen"
    >
      <i :class="['bi', isFullscreen ? 'bi-fullscreen-exit' : 'bi-arrows-fullscreen']"></i>
    </button>
  </li>
</template>
