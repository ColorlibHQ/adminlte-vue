<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Registered map name, e.g. 'world'. The map data must be imported by the consumer. */
    map?: string
    options?: Record<string, unknown>
    height?: string
  }>(),
  { map: 'world', height: '400px' }
)

const el = ref<HTMLElement | null>(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let instance: any = null

onMounted(async () => {
  if (!el.value) return
  const mod = await import('jsvectormap')
  const JsVectorMap = (mod as { default: unknown }).default ?? mod
  if (!el.value) return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instance = new (JsVectorMap as any)({
    selector: el.value,
    map: props.map,
    ...props.options,
  })
})

onBeforeUnmount(() => {
  instance?.destroy?.()
  instance = null
})
</script>

<template>
  <div ref="el" :style="{ height }"></div>
</template>
