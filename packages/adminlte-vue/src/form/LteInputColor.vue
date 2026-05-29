<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '../lib/class-name'

const props = defineProps<{
  modelValue?: string
  label?: string
  id?: string
  fgroupClass?: string
  disabled?: boolean
}>()
defineEmits<{ 'update:modelValue': [value: string] }>()
defineOptions({ inheritAttrs: false })

const inputId = computed(() => props.id ?? `lte-color-${useId()}`)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <input
      :id="inputId"
      type="color"
      class="form-control form-control-color"
      :value="modelValue"
      :disabled="disabled"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
