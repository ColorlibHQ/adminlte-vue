<script setup lang="ts">
definePageMeta({ layout: false })
import { onMounted, onBeforeUnmount } from 'vue'

// Start with the sidebar collapsed by toggling the body class on mount.
onMounted(() => document.body.classList.add('sidebar-collapse'))
onBeforeUnmount(() => document.body.classList.remove('sidebar-collapse'))
</script>

<template>
  <DemoLayout :fixed-sidebar="true">
    <LteAppContent title="Collapsed Sidebar" :breadcrumbs="[{ label: 'Layout', href: '#' }, { label: 'Collapsed Sidebar' }]">
      <LteCard title="Collapsed Sidebar">
        <p>The sidebar starts collapsed. Use the navbar toggle (☰) to expand it.</p>
      </LteCard>
    </LteAppContent>
  </DemoLayout>
</template>
