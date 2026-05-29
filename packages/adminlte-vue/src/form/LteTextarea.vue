<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '../lib/class-name'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    id?: string
    rows?: number
    placeholder?: string
    error?: string
    fgroupClass?: string
    disabled?: boolean
  }>(),
  { rows: 4 }
)
defineEmits<{ 'update:modelValue': [value: string] }>()
defineOptions({ inheritAttrs: false })

const inputId = computed(() => props.id ?? `lte-textarea-${useId()}`)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <textarea
      :id="inputId"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      :class="cn('form-control', error && 'is-invalid')"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    ></textarea>
    <div v-if="error" class="invalid-feedback d-block">{{ error }}</div>
  </div>
</template>
