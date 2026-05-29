<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '../lib/class-name'
import LteTomSelect from '../plugins/LteTomSelect.vue'

interface TomOption {
  value: string
  text: string
}

const props = defineProps<{
  modelValue?: string | string[]
  label?: string
  id?: string
  options?: TomOption[]
  multiple?: boolean
  placeholder?: string
  fgroupClass?: string
}>()
defineEmits<{ 'update:modelValue': [value: string | string[]] }>()

const inputId = computed(() => props.id ?? `lte-tomselect-${useId()}`)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <LteTomSelect
      :model-value="modelValue"
      :options="options"
      :multiple="multiple"
      :placeholder="placeholder"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>
