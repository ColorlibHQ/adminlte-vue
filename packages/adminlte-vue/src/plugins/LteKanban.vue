<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type Sortable from 'sortablejs'
import type { SortableEvent } from 'sortablejs'
import type { BootstrapTheme } from '../types/theme'

export interface KanbanCard {
  id: string
  title: string
  text?: string
}
export interface KanbanColumn {
  id: string
  title: string
  theme?: BootstrapTheme
  cards: KanbanCard[]
}

const props = defineProps<{ columns: KanbanColumn[] }>()
const emit = defineEmits<{
  move: [payload: { card: string; from: string; to: string; newIndex: number }]
}>()

const root = ref<HTMLElement | null>(null)
const instances: Sortable[] = []

onMounted(async () => {
  if (!root.value) return
  const { default: SortableCtor } = await import('sortablejs')
  const lists = root.value.querySelectorAll<HTMLElement>('[data-kanban-list]')
  lists.forEach((list) => {
    instances.push(
      SortableCtor.create(list, {
        group: 'kanban',
        animation: 150,
        ghostClass: 'bg-body-secondary',
        onEnd: (event: SortableEvent) => {
          emit('move', {
            card: event.item.dataset.cardId ?? '',
            from: (event.from as HTMLElement).dataset.columnId ?? '',
            to: (event.to as HTMLElement).dataset.columnId ?? '',
            newIndex: event.newIndex ?? 0,
          })
        },
      })
    )
  })
})

onBeforeUnmount(() => {
  instances.forEach((i) => i.destroy())
  instances.length = 0
})
</script>

<template>
  <div ref="root" class="row g-3">
    <div v-for="col in columns" :key="col.id" class="col-12 col-md-6 col-lg-3">
      <div class="card h-100">
        <div :class="['card-header', col.theme && `text-bg-${col.theme}`]">
          <h3 class="card-title">{{ col.title }}</h3>
        </div>
        <div class="card-body" data-kanban-list :data-column-id="col.id" style="min-height: 80px">
          <div
            v-for="card in col.cards"
            :key="card.id"
            class="card mb-2"
            :data-card-id="card.id"
            role="button"
          >
            <div class="card-body py-2">
              <strong class="d-block">{{ card.title }}</strong>
              <small v-if="card.text" class="text-secondary">{{ card.text }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
