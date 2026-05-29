<script setup lang="ts">
const events = [
  { title: 'Standup', start: new Date().toISOString().slice(0, 10) },
  { title: 'Demo day', start: new Date(Date.now() + 3 * 864e5).toISOString().slice(0, 10), color: '#0dcaf0' },
]
</script>

<template>
  <LteAppContent title="Calendar (FullCalendar)" :breadcrumbs="[{ label: 'Plugins', href: '#' }, { label: 'Calendar' }]">
    <LteCard title="Interactive calendar">
      <ClientOnly>
        <LteCalendar :events="events" />
        <template #fallback><div class="text-center text-secondary py-5"><i class="bi bi-calendar3 fs-1"></i></div></template>
      </ClientOnly>
    </LteCard>
  </LteAppContent>
</template>
