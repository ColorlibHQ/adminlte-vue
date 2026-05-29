<script setup lang="ts">
import type { Breadcrumb } from '../types/layout'

defineProps<{ items: Breadcrumb[] }>()
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(crumb, idx) in items"
        :key="idx"
        :class="['breadcrumb-item', idx === items.length - 1 && 'active']"
        :aria-current="idx === items.length - 1 ? 'page' : undefined"
      >
        <a v-if="crumb.href && idx !== items.length - 1" :href="crumb.href">{{ crumb.label }}</a>
        <template v-else>{{ crumb.label }}</template>
      </li>
    </ol>
  </nav>
</template>
