<script setup lang="ts">
import { onMounted, ref } from 'vue'

const ready = ref(false)
const failed = ref(false)

onMounted(async () => {
  try {
    // Register the world map data with jsVectorMap before rendering.
    await import('jsvectormap')
    // @ts-expect-error — map data module has no types
    await import('jsvectormap/dist/maps/world.js')
    ready.value = true
  } catch {
    failed.value = true
  }
})
</script>

<template>
  <LteAppContent title="Vector Map" :breadcrumbs="[{ label: 'Plugins', href: '#' }, { label: 'Vector Map' }]">
    <LteCard title="World map (jsVectorMap)">
      <ClientOnly>
        <LteVectorMap v-if="ready" map="world" height="450px" />
        <div v-else-if="failed" class="text-secondary text-center py-5">
          <i class="bi bi-globe fs-1"></i>
          <p>Install <code>jsvectormap</code> and its map data to view this demo.</p>
        </div>
        <div v-else class="text-center text-secondary py-5"><i class="bi bi-globe fs-1"></i><p>Loading map…</p></div>
      </ClientOnly>
    </LteCard>
  </LteAppContent>
</template>
