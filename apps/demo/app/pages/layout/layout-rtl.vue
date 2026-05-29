<script setup lang="ts">
definePageMeta({ layout: false })
import { onMounted, onBeforeUnmount } from 'vue'

// Switch document direction to RTL for this page only.
onMounted(() => document.documentElement.setAttribute('dir', 'rtl'))
onBeforeUnmount(() => document.documentElement.removeAttribute('dir'))
</script>

<template>
  <DemoLayout dir="rtl" :fixed-sidebar="true">
    <LteAppContent title="Layout RTL" :breadcrumbs="[{ label: 'Layout', href: '#' }, { label: 'RTL' }]">
      <LteCard title="Right-to-Left">
        <p>The layout flips to RTL. For full RTL styling, load <code>adminlte-vue/css/rtl</code>.</p>
      </LteCard>
    </LteAppContent>
  </DemoLayout>
</template>
