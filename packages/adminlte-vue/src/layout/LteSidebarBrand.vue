<script setup lang="ts">
defineProps<{
  /** Logo image src. When omitted, the `default` slot (or AdminLTE text) is used. */
  logo?: string
  href?: string
  /** Brand text shown next to the logo. */
  brandText?: string
}>()
</script>

<template>
  <div class="sidebar-brand">
    <a :href="href ?? '/'" class="brand-link">
      <template v-if="logo">
        <img :src="logo" alt="Logo" class="brand-image opacity-75 shadow" />
        <span class="brand-text fw-light">{{ brandText ?? 'AdminLTE 4' }}</span>
      </template>
      <template v-else>
        <span class="brand-image opacity-75 shadow"></span>
        <span class="brand-text fw-light">
          <slot><b>Admin</b>LTE</slot>
        </span>
      </template>
    </a>
  </div>
</template>
