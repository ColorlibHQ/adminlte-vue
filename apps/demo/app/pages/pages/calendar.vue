<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

// Reproduces the original Calendar page: a FullCalendar 6 month/week/day/list
// view with external draggable events. Plugins are imported on the client.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let calendar: any = null

onMounted(async () => {
  const [{ Calendar }, dayGrid, timeGrid, list, interaction] = await Promise.all([
    import('@fullcalendar/core'),
    import('@fullcalendar/daygrid'),
    import('@fullcalendar/timegrid'),
    import('@fullcalendar/list'),
    import('@fullcalendar/interaction'),
  ])
  const calendarEl = document.getElementById('calendar')
  const externalEl = document.getElementById('external-events')
  const removeAfterDrop = document.getElementById('remove-after-drop') as HTMLInputElement | null
  if (!calendarEl || !externalEl) return

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Draggable = (interaction as any).Draggable
  new Draggable(externalEl, {
    itemSelector: '.draggable-event',
    eventData: (el: HTMLElement) => ({
      title: el.textContent?.trim(),
      backgroundColor: el.dataset.color,
      borderColor: el.dataset.color,
    }),
  })

  const today = new Date()
  const isoDate = (d: Date) => d.toISOString().slice(0, 10)
  const offsetDay = (n: number) => {
    const d = new Date(today)
    d.setDate(today.getDate() + n)
    return isoDate(d)
  }

  calendar = new Calendar(calendarEl, {
    plugins: [dayGrid.default, timeGrid.default, list.default, interaction.default],
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    height: 700,
    editable: true,
    droppable: true,
    dayMaxEvents: 3,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    drop: (info: any) => {
      if (removeAfterDrop?.checked) info.draggedEl.remove()
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dateClick: (info: any) => {
      const title = prompt('Event title:')
      if (title) calendar.addEvent({ title, start: info.dateStr, allDay: info.allDay })
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    eventClick: (info: any) => {
      if (confirm(`Delete "${info.event.title}"?`)) info.event.remove()
    },
    events: [
      { title: 'Quarterly planning', start: offsetDay(-2), backgroundColor: '#0d6efd', borderColor: '#0d6efd' },
      { title: 'Onboarding session', start: offsetDay(1), backgroundColor: '#198754', borderColor: '#198754' },
      { title: 'Design review', start: offsetDay(3), end: offsetDay(4), backgroundColor: '#ffc107', borderColor: '#ffc107', textColor: '#000' },
      { title: 'Release v2.5', start: offsetDay(7), backgroundColor: '#dc3545', borderColor: '#dc3545' },
      { title: 'All-hands', start: offsetDay(10), backgroundColor: '#6f42c1', borderColor: '#6f42c1' },
    ],
  })
  calendar.render()
})

onBeforeUnmount(() => {
  calendar?.destroy()
  calendar = null
})
</script>

<template>
  <LteAppContent
    title="Calendar"
    :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Calendar' }]"
  >
            <div class="row g-3">
              <!-- Sidebar: draggable events -->
              <div class="col-lg-3">
                <LteCard title="Draggable events">
                    <p class="text-secondary small mb-3">
                      Drag an event to the calendar to schedule it.
                    </p>
                    <div id="external-events">
                      <div
                        class="draggable-event badge text-bg-primary p-2 mb-2 d-block text-start"
                        data-color="#0d6efd"
                      >
                        <i class="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                        Team standup
                      </div>
                      <div
                        class="draggable-event badge text-bg-success p-2 mb-2 d-block text-start"
                        data-color="#198754"
                      >
                        <i class="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                        Customer call
                      </div>
                      <div
                        class="draggable-event badge text-bg-warning p-2 mb-2 d-block text-start"
                        data-color="#ffc107"
                      >
                        <i class="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                        Design review
                      </div>
                      <div
                        class="draggable-event badge text-bg-info p-2 mb-2 d-block text-start"
                        data-color="#0dcaf0"
                      >
                        <i class="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                        1:1 with manager
                      </div>
                      <div
                        class="draggable-event badge text-bg-danger p-2 d-block text-start"
                        data-color="#dc3545"
                      >
                        <i class="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                        Release window
                      </div>
                    </div>
                    <hr />
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="remove-after-drop"
                      />
                      <label class="form-check-label small" for="remove-after-drop">
                        Remove from list after dropping
                      </label>
                    </div>
                </LteCard>
              </div>
              <!-- Calendar -->
              <div class="col-lg-9">
                <LteCard footer-class="text-secondary small">
                    <div id="calendar"></div>
                  <template #footer>
                    Powered by
                    <a href="https://fullcalendar.io/" target="_blank" rel="noopener"
                      >FullCalendar 6</a
                    >
                    &mdash; MIT licensed, jQuery-free.
                  </template>
                </LteCard>
              </div>
            </div>
  </LteAppContent>
</template>

<style>
/* Let the FullCalendar toolbar wrap instead of overflowing narrow viewports. */
#calendar .fc-header-toolbar {
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
