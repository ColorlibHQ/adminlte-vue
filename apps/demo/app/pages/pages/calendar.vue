<script setup lang="ts">
const events = [
  { title: 'Kickoff', start: new Date().toISOString().slice(0, 10) },
  { title: 'Release', start: new Date(Date.now() + 5 * 864e5).toISOString().slice(0, 10), color: '#198754' },
  { title: 'Retro', start: new Date(Date.now() + 9 * 864e5).toISOString().slice(0, 10), color: '#dc3545' },
]
</script>

<template>
  <LteAppContent title="Calendar" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'Calendar' }]">
    <LteCard title="Schedule">
      <ClientOnly>
        <LteCalendar :events="events" />
        <template #fallback>
          <div class="text-center text-secondary py-5"><i class="bi bi-calendar3 fs-1"></i></div>
        </template>
      </ClientOnly>
    </LteCard>
  </LteAppContent>
</template>
