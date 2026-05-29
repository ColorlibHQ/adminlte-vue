<script setup lang="ts">
const icons = [
  'bi-house', 'bi-gear', 'bi-person', 'bi-bell', 'bi-envelope', 'bi-calendar',
  'bi-cart', 'bi-bag', 'bi-heart', 'bi-star', 'bi-search', 'bi-trash',
  'bi-pencil', 'bi-cloud', 'bi-camera', 'bi-chat', 'bi-graph-up', 'bi-pie-chart',
  'bi-shield-lock', 'bi-globe', 'bi-printer', 'bi-paperclip', 'bi-bookmark', 'bi-flag',
]
</script>

<template>
  <LteAppContent title="Icons" :breadcrumbs="[{ label: 'UI', href: '#' }, { label: 'Icons' }]">
    <LteCard title="Bootstrap Icons">
      <p class="text-secondary">A sample of the Bootstrap Icons set used throughout the template.</p>
      <div class="row g-3 text-center">
        <div v-for="icon in icons" :key="icon" class="col-3 col-md-2 col-lg-1">
          <i :class="['bi', icon, 'fs-3 d-block']"></i>
          <small class="text-secondary">{{ icon.replace('bi-', '') }}</small>
        </div>
      </div>
    </LteCard>
  </LteAppContent>
</template>
