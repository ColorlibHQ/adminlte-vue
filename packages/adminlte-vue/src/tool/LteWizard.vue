<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { biClass } from '../lib/class-name'
import { WizardKey, type WizardStepMeta } from './wizard-context'

const props = withDefaults(
  defineProps<{
    /** v-model — active step index. */
    modelValue?: number
    finishLabel?: string
    nextLabel?: string
    prevLabel?: string
  }>(),
  { modelValue: 0, finishLabel: 'Finish', nextLabel: 'Next', prevLabel: 'Previous' }
)
const emit = defineEmits<{
  'update:modelValue': [index: number]
  finish: []
}>()

const steps = ref<WizardStepMeta[]>([])
const activeIndex = ref(props.modelValue)

watch(() => props.modelValue, (i) => (activeIndex.value = i))
watch(activeIndex, (i) => emit('update:modelValue', i))

const isLast = computed(() => activeIndex.value >= steps.value.length - 1)
const isFirst = computed(() => activeIndex.value <= 0)

function next() {
  if (isLast.value) emit('finish')
  else activeIndex.value++
}
function prev() {
  if (!isFirst.value) activeIndex.value--
}
function goTo(i: number) {
  if (i >= 0 && i < steps.value.length) activeIndex.value = i
}

provide(WizardKey, {
  steps,
  activeIndex,
  register(step) {
    if (!steps.value.some((s) => s.id === step.id)) steps.value.push(step)
  },
  unregister(id) {
    steps.value = steps.value.filter((s) => s.id !== id)
  },
  isActive: (id) => steps.value[activeIndex.value]?.id === id,
})
</script>

<template>
  <div class="lte-wizard">
    <ul class="nav nav-pills nav-justified mb-4">
      <li v-for="(step, idx) in steps" :key="step.id" class="nav-item">
        <button
          type="button"
          :class="['nav-link', idx === activeIndex && 'active', idx < activeIndex && 'text-success']"
          @click="goTo(idx)"
        >
          <i v-if="step.icon" :class="[biClass(step.icon), 'me-1']"></i>{{ step.title }}
        </button>
      </li>
    </ul>

    <slot />

    <div class="d-flex justify-content-between mt-4">
      <button type="button" class="btn btn-outline-secondary" :disabled="isFirst" @click="prev">
        {{ prevLabel }}
      </button>
      <button type="button" class="btn btn-primary" @click="next">
        {{ isLast ? finishLabel : nextLabel }}
      </button>
    </div>
  </div>
</template>
