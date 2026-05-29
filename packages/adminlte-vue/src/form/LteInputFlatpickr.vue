<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '../lib/class-name'
import LteFlatpickr from '../plugins/LteFlatpickr.vue'
import type { Options } from 'flatpickr/dist/types/options'

const props = defineProps<{
  modelValue?: string
  label?: string
  id?: string
  placeholder?: string
  fgroupClass?: string
  options?: Partial<Options>
}>()
defineEmits<{ 'update:modelValue': [value: string] }>()

const inputId = computed(() => props.id ?? `lte-flatpickr-${useId()}`)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <LteFlatpickr
      :id="inputId"
      :model-value="modelValue"
      :placeholder="placeholder"
      :options="options"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>
