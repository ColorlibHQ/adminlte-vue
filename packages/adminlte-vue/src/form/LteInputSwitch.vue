<script setup lang="ts">
import { computed, useId } from 'vue'
import type { BootstrapTheme } from '../types/theme'

const props = defineProps<{
  modelValue?: boolean
  label?: string
  id?: string
  theme?: BootstrapTheme
  disabled?: boolean
}>()
defineEmits<{ 'update:modelValue': [value: boolean] }>()
defineOptions({ inheritAttrs: false })

const inputId = computed(() => props.id ?? `lte-switch-${useId()}`)
</script>

<template>
  <div class="form-check form-switch">
    <input
      :id="inputId"
      class="form-check-input"
      type="checkbox"
      role="switch"
      :checked="modelValue"
      :disabled="disabled"
      v-bind="$attrs"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <label v-if="label" class="form-check-label" :for="inputId">{{ label }}</label>
  </div>
</template>
