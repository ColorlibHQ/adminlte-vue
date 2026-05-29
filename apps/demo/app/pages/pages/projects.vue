<script setup lang="ts">
const projects = [
  { name: 'AdminLTE Vue', progress: 80, theme: 'primary', members: 4 },
  { name: 'Nuxt Module', progress: 95, theme: 'success', members: 2 },
  { name: 'Docs site', progress: 40, theme: 'warning', members: 3 },
  { name: 'Marketing page', progress: 15, theme: 'danger', members: 1 },
] as const
</script>

<template>
  <LteAppContent title="Projects" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'Projects' }]">
    <div class="row">
      <div v-for="p in projects" :key="p.name" class="col-md-6 col-lg-3">
        <LteCard :title="p.name" :theme="p.theme" variant="outline">
          <p class="text-secondary mb-2">{{ p.members }} team members</p>
          <LteProgress :value="p.progress" :theme="p.theme" show-label />
          <template #footer>
            <LteButton :theme="p.theme" size="sm" outline>Open</LteButton>
          </template>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
