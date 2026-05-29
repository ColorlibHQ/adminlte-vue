<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :sidebar-mini="true" :fixed-sidebar="true">
    <LteAppContent title="Sidebar Mini" :breadcrumbs="[{ label: 'Layout', href: '#' }, { label: 'Sidebar Mini' }]">
      <LteCard title="Sidebar Mini">
        <p>When collapsed, the sidebar shrinks to an icon-only rail instead of hiding completely.
          Toggle the sidebar to see the mini mode.</p>
      </LteCard>
    </LteAppContent>
  </DemoLayout>
</template>
