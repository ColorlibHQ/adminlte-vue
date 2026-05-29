<script setup lang="ts">
import { ref } from 'vue'
import type { KanbanColumn } from 'adminlte-vue/plugins'

const columns = ref<KanbanColumn[]>([
  {
    id: 'todo', title: 'To Do', theme: 'secondary',
    cards: [
      { id: 'c1', title: 'Design system', text: 'Define tokens' },
      { id: 'c2', title: 'Write docs', text: 'Getting started' },
    ],
  },
  {
    id: 'doing', title: 'In Progress', theme: 'primary',
    cards: [{ id: 'c3', title: 'Build components', text: '45 done' }],
  },
  {
    id: 'review', title: 'Review', theme: 'warning',
    cards: [{ id: 'c4', title: 'SSR audit' }],
  },
  {
    id: 'done', title: 'Done', theme: 'success',
    cards: [{ id: 'c5', title: 'Scaffold monorepo' }],
  },
])
</script>

<template>
  <LteAppContent title="Kanban" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'Kanban' }]">
    <ClientOnly>
      <LteKanban :columns="columns" />
      <template #fallback>
        <div class="text-secondary">Loading board…</div>
      </template>
    </ClientOnly>
  </LteAppContent>
</template>
