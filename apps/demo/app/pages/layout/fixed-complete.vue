<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-header="true" :fixed-sidebar="true" :fixed-footer="true">
    <LteAppContent title="Fixed Complete" :breadcrumbs="[{ label: 'Layout', href: '#' }, { label: 'Fixed Complete' }]">
      <LteCard title="Fixed Header, Sidebar & Footer">
        <p>All three regions are fixed; only the main content area scrolls.</p>
      </LteCard>
      <LteCard v-for="n in 6" :key="n" :title="`Filler card ${n}`">
        <p class="mb-0 text-secondary">Scroll content to observe the fully-fixed layout.</p>
      </LteCard>
    </LteAppContent>
  </DemoLayout>
</template>
