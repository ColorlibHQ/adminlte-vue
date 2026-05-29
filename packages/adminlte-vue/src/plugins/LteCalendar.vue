<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { Calendar, CalendarOptions, EventInput } from '@fullcalendar/core'

const props = withDefaults(
  defineProps<{
    events?: EventInput[]
    initialView?: string
    options?: Partial<CalendarOptions>
  }>(),
  { events: () => [], initialView: 'dayGridMonth' }
)

const el = ref<HTMLElement | null>(null)
let calendar: Calendar | null = null

onMounted(async () => {
  if (!el.value) return
  const [{ Calendar: FullCalendar }, dayGrid, interaction] = await Promise.all([
    import('@fullcalendar/core'),
    import('@fullcalendar/daygrid'),
    import('@fullcalendar/interaction'),
  ])
  if (!el.value) return
  calendar = new FullCalendar(el.value, {
    plugins: [dayGrid.default, interaction.default],
    initialView: props.initialView,
    headerToolbar: { left: 'prev,next today', center: 'title', right: 'dayGridMonth,dayGridWeek' },
    editable: true,
    events: props.events,
    ...props.options,
  })
  calendar.render()
})

watch(
  () => props.events,
  (events) => {
    if (!calendar) return
    calendar.removeAllEvents()
    calendar.addEventSource(events)
  },
  { deep: true }
)

onBeforeUnmount(() => {
  calendar?.destroy()
  calendar = null
})
</script>

<template>
  <div ref="el"></div>
</template>
