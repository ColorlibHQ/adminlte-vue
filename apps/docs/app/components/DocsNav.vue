<script setup lang="ts">
import { computed } from 'vue'
import { DOCS_SECTIONS, type DocsPage } from '~/composables/useDocsPages'

const path = useDocsPath()
const { data: pages } = await useDocsPages()

// Group the already reading-ordered flat list by section.
const grouped = computed(() => {
  const present = new Set((pages.value ?? []).map((p) => p.section || 'Docs'))
  const order = [...DOCS_SECTIONS, ...[...present].filter((s) => !DOCS_SECTIONS.includes(s))]
  return order
    .map((s) => [s, (pages.value ?? []).filter((p) => (p.section || 'Docs') === s)] as const)
    .filter(([, items]) => items.length > 0)
})
</script>

<template>
  <nav class="docs-nav" aria-label="Documentation">
    <div v-for="[section, items] in grouped" :key="section" class="docs-nav-section">
      <div class="docs-nav-heading">{{ section }}</div>
      <ul class="list-unstyled mb-0">
        <li v-for="p in items" :key="p.path">
          <NuxtLink :to="p.path" class="docs-nav-link" :class="{ active: path === p.path }">
            {{ p.navTitle || p.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
