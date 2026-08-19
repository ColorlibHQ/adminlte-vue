<script setup lang="ts">
import { computed } from 'vue'

// Reuses the page's cached fetch (same useAsyncData key).
const { data: doc } = await useCurrentDoc()

interface TocLink {
  id: string
  text: string
  depth: number
  children?: TocLink[]
}
const links = computed<TocLink[]>(() => (doc.value?.body?.toc?.links as TocLink[]) ?? [])
</script>

<template>
  <nav v-if="links.length" class="docs-toc" aria-label="On this page">
    <div class="docs-toc-heading">On this page</div>
    <ul class="list-unstyled mb-0">
      <li v-for="l in links" :key="l.id">
        <a :href="`#${l.id}`" class="docs-toc-link">{{ l.text }}</a>
        <ul v-if="l.children?.length" class="list-unstyled mb-0">
          <li v-for="c in l.children" :key="c.id">
            <a :href="`#${c.id}`" class="docs-toc-link sub">{{ c.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
