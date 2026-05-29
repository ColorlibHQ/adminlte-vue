<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-footer="true" :fixed-header="false" :fixed-sidebar="false">
    <LteAppContent title="Fixed Footer" :breadcrumbs="[{ label: 'Layout', href: '#' }, { label: 'Fixed Footer' }]">
      <LteCard title="Fixed Footer">
        <p>The footer stays pinned to the bottom of the viewport.</p>
      </LteCard>
      <LteCard v-for="n in 6" :key="n" :title="`Filler card ${n}`">
        <p class="mb-0 text-secondary">Scroll content to observe the fixed footer behavior.</p>
      </LteCard>
    </LteAppContent>
  </DemoLayout>
</template>
