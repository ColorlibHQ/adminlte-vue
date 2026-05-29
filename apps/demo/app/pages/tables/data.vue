<script setup lang="ts">
const columns = [
  { title: 'Name', field: 'name', headerFilter: 'input' },
  { title: 'Email', field: 'email' },
  { title: 'Role', field: 'role', headerFilter: 'input' },
  { title: 'Joined', field: 'joined', sorter: 'date' },
]
const data = [
  { name: 'Aigars Silkalns', email: 'aigars@example.com', role: 'Admin', joined: '2024-01-12' },
  { name: 'Jane Cooper', email: 'jane@example.com', role: 'Editor', joined: '2024-02-03' },
  { name: 'Robert Fox', email: 'robert@example.com', role: 'Viewer', joined: '2024-03-21' },
  { name: 'Esther Howard', email: 'esther@example.com', role: 'Editor', joined: '2024-04-18' },
  { name: 'Cody Fisher', email: 'cody@example.com', role: 'Admin', joined: '2024-05-09' },
]
</script>

<template>
  <LteAppContent title="Data Tables" :breadcrumbs="[{ label: 'Tables', href: '#' }, { label: 'Data' }]">
    <LteCard title="Tabulator (sortable, filterable, paginated)">
      <ClientOnly>
        <LteDatatable
          :columns="columns"
          :data="data"
          :options="{ pagination: true, paginationSize: 5, movableColumns: true }"
        />
        <template #fallback>
          <div class="text-center text-secondary py-4"><i class="bi bi-table fs-3"></i><p>Loading table…</p></div>
        </template>
      </ClientOnly>
    </LteCard>
  </LteAppContent>
</template>
