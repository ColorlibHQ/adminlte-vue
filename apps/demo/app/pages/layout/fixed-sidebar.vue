<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-sidebar="true" :fixed-header="false" :fixed-footer="false">
    <LteAppContent title="Fixed Sidebar" :breadcrumbs="[{ label: 'Layout', href: '#' }, { label: 'Fixed Sidebar' }]">
      <LteCard title="Fixed Sidebar">
        <p>The sidebar stays fixed while the main content scrolls. Scroll the page to see it in action.</p>
      </LteCard>
      <LteCard v-for="n in 6" :key="n" :title="`Filler card ${n}`">
        <p class="mb-0 text-secondary">Scroll content to observe the fixed sidebar behavior.</p>
      </LteCard>
    </LteAppContent>
  </DemoLayout>
</template>
