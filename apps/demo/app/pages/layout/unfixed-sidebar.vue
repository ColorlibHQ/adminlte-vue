<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-header="false" :fixed-sidebar="false" :fixed-footer="false">
    <LteAppContent title="Unfixed Sidebar" :breadcrumbs="[{ label: 'Layout', href: '#' }, { label: 'Unfixed Sidebar' }]">
      <LteCard title="Unfixed (static) Layout">
        <p>Nothing is fixed — the header, sidebar, and footer all scroll with the page.</p>
      </LteCard>
      <LteCard v-for="n in 6" :key="n" :title="`Filler card ${n}`">
        <p class="mb-0 text-secondary">Scroll to see everything move together.</p>
      </LteCard>
    </LteAppContent>
  </DemoLayout>
</template>
