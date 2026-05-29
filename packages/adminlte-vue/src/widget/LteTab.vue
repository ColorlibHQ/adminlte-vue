<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted } from 'vue'
import { TabsKey } from './tabs-context'

const props = defineProps<{
  id: string
  title: string
  icon?: string
  disabled?: boolean
}>()

const ctx = inject(TabsKey)
if (!ctx) {
  throw new Error('[adminlte-vue] <LteTab> must be used inside <LteTabs>.')
}

const isActive = computed(() => ctx!.activeId.value === props.id)

onMounted(() =>
  ctx!.register({ id: props.id, title: props.title, icon: props.icon, disabled: props.disabled })
)
onBeforeUnmount(() => ctx!.unregister(props.id))
</script>

<template>
  <div
    v-show="isActive"
    class="tab-pane fade"
    :class="{ 'show active': isActive }"
    role="tabpanel"
  >
    <slot />
  </div>
</template>
