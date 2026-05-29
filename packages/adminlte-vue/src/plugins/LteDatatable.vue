<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    columns?: Array<Record<string, unknown>>
    data?: unknown[]
    /** Extra Tabulator options merged over { columns, data }. */
    options?: Record<string, unknown>
    height?: string
  }>(),
  { columns: () => [], data: () => [] }
)

const el = ref<HTMLElement | null>(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let table: any = null

onMounted(async () => {
  if (!el.value) return
  const { TabulatorFull } = await import('tabulator-tables')
  if (!el.value) return
  table = new TabulatorFull(el.value, {
    layout: 'fitColumns',
    height: props.height,
    columns: props.columns,
    data: props.data,
    ...props.options,
  })
})

watch(
  () => props.data,
  (data) => table?.replaceData(data as never[]),
  { deep: true }
)

onBeforeUnmount(() => {
  table?.destroy()
  table = null
})
</script>

<template>
  <div ref="el"></div>
</template>
