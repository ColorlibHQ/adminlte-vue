<script setup lang="ts">
import { useSidebar } from '../composables/use-sidebar'

const { collapse } = useSidebar()
</script>

<template>
  <div class="sidebar-overlay" role="presentation" @click="collapse" @touchend="collapse"></div>
</template>
