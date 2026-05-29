<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted } from 'vue'
import { WizardKey } from './wizard-context'

const props = defineProps<{
  id: string
  title: string
  icon?: string
}>()

const ctx = inject(WizardKey)
if (!ctx) {
  throw new Error('[adminlte-vue] <LteWizardStep> must be used inside <LteWizard>.')
}

const isActive = computed(() => ctx!.isActive(props.id))

onMounted(() => ctx!.register({ id: props.id, title: props.title, icon: props.icon }))
onBeforeUnmount(() => ctx!.unregister(props.id))
</script>

<template>
  <div v-show="isActive" class="lte-wizard-step">
    <slot />
  </div>
</template>
