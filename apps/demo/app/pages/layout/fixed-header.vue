<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-header="true" :fixed-sidebar="false" :fixed-footer="false">
    <LteAppContent title="Fixed Header" :breadcrumbs="[{ label: 'Layout', href: '#' }, { label: 'Fixed Header' }]">
      <LteCard title="Fixed Header">
        <p>The navbar stays pinned to the top while content scrolls beneath it.</p>
      </LteCard>
      <LteCard v-for="n in 6" :key="n" :title="`Filler card ${n}`">
        <p class="mb-0 text-secondary">Scroll content to observe the fixed header behavior.</p>
      </LteCard>
    </LteAppContent>
  </DemoLayout>
</template>
