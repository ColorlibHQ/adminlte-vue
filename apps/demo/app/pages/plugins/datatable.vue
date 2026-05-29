<script setup lang="ts">
const columns = [
  { title: 'ID', field: 'id', width: 80, sorter: 'number' },
  { title: 'Name', field: 'name', headerFilter: 'input' },
  { title: 'Progress', field: 'progress', formatter: 'progress', formatterParams: { color: '#0d6efd' } },
  { title: 'Rating', field: 'rating', formatter: 'star' },
]
const data = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: ['Alice', 'Bob', 'Carol', 'Dave', 'Erin', 'Frank'][i % 6] + ' ' + (i + 1),
  progress: Math.floor(Math.random() * 100),
  rating: (i % 5) + 1,
}))
</script>

<template>
  <LteAppContent title="DataTable (Tabulator)" :breadcrumbs="[{ label: 'Plugins', href: '#' }, { label: 'DataTable' }]">
    <LteCard title="Interactive table">
      <ClientOnly>
        <LteDatatable :columns="columns" :data="data" :options="{ pagination: true, paginationSize: 8 }" />
        <template #fallback><div class="text-secondary py-3">Loading table…</div></template>
      </ClientOnly>
    </LteCard>
  </LteAppContent>
</template>
