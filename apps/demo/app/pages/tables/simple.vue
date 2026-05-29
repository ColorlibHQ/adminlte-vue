<script setup lang="ts">
const rows = [
  { id: 183, product: 'AdminLTE v4', date: '11-7-2024', status: 'Pending', popularity: 90 },
  { id: 219, product: 'Vue Port', date: '11-7-2024', status: 'Active', popularity: 80 },
  { id: 657, product: 'Nuxt Module', date: '11-7-2024', status: 'Active', popularity: 95 },
  { id: 175, product: 'React Port', date: '11-7-2024', status: 'Inactive', popularity: 60 },
]
const statusTheme = (s: string) => (s === 'Active' ? 'success' : s === 'Pending' ? 'warning' : 'secondary')
</script>

<template>
  <LteAppContent title="Simple Tables" :breadcrumbs="[{ label: 'Tables', href: '#' }, { label: 'Simple' }]">
    <LteCard title="Striped, hover table">
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">
          <thead>
            <tr><th>ID</th><th>Product</th><th>Date</th><th>Status</th><th>Popularity</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.id">
              <td>{{ row.id }}</td>
              <td>{{ row.product }}</td>
              <td>{{ row.date }}</td>
              <td><span :class="`badge text-bg-${statusTheme(row.status)}`">{{ row.status }}</span></td>
              <td style="width: 30%"><LteProgress :value="row.popularity" theme="primary" size="sm" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </LteCard>
  </LteAppContent>
</template>
