<script setup lang="ts">
// Canonical (trailing-slash-free) path. `route.path` carries a trailing slash or
// not depending on how the host serves the page, and the collection stores only
// the bare form — see `useDocsPath`.
const path = useDocsPath()

const { data: doc, status } = await useCurrentDoc()

// `status` is still `idle` when Nuxt deferred the fetch to `onBeforeMount`
// (a payload-key miss during hydration), so an empty `doc` here does not yet
// mean the page is missing — only a query that actually ran can say that.
if (!doc.value && status.value !== 'idle') {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Prev/next follow the sidebar's reading order (not filesystem order).
const { data: pages } = await useDocsPages()

useSeoMeta({
  title: () => `${doc.value?.title ?? 'Docs'} · AdminLTE Vue`,
  description: () => doc.value?.description,
})

const idx = computed(() => (pages.value ?? []).findIndex((p) => p.path === path.value))
const prev = computed(() => (idx.value > 0 ? pages.value?.[idx.value - 1] : undefined))
const next = computed(() => {
  const list = pages.value ?? []
  return idx.value >= 0 && idx.value < list.length - 1 ? list[idx.value + 1] : undefined
})
</script>

<template>
  <article v-if="doc" class="docs-article">
    <header class="mb-4">
      <h1 class="docs-title">{{ doc.title }}</h1>
      <p v-if="doc.description" class="lead text-secondary">{{ doc.description }}</p>
    </header>

    <div class="docs-prose">
      <ContentRenderer :value="doc" />
    </div>

    <nav class="docs-pager d-flex justify-content-between gap-3 mt-5 pt-4 border-top">
      <NuxtLink v-if="prev" :to="prev.path" class="docs-pager-link text-start">
        <span class="d-block small text-secondary"><i class="bi bi-arrow-left me-1" />Previous</span>
        <span class="fw-medium">{{ prev.title }}</span>
      </NuxtLink>
      <span v-else />
      <NuxtLink v-if="next" :to="next.path" class="docs-pager-link text-end ms-auto">
        <span class="d-block small text-secondary">Next<i class="bi bi-arrow-right ms-1" /></span>
        <span class="fw-medium">{{ next.title }}</span>
      </NuxtLink>
    </nav>
  </article>
</template>
