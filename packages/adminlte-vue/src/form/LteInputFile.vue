<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '../lib/class-name'

const props = defineProps<{
  label?: string
  id?: string
  accept?: string
  multiple?: boolean
  fgroupClass?: string
  disabled?: boolean
}>()
defineEmits<{ 'update:modelValue': [value: FileList | null] }>()
defineOptions({ inheritAttrs: false })

const inputId = computed(() => props.id ?? `lte-file-${useId()}`)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <input
      :id="inputId"
      type="file"
      class="form-control"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      v-bind="$attrs"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).files)"
    />
  </div>
</template>
