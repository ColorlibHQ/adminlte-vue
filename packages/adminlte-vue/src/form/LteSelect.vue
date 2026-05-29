<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '../lib/class-name'

interface SelectOption {
  value: string | number
  label: string
}

const props = withDefaults(
  defineProps<{
    modelValue?: string | number | Array<string | number>
    label?: string
    id?: string
    options?: SelectOption[]
    error?: string
    fgroupClass?: string
    multiple?: boolean
    disabled?: boolean
  }>(),
  { options: () => [] }
)
const emit = defineEmits<{
  'update:modelValue': [value: string | number | Array<string | number>]
}>()
defineOptions({ inheritAttrs: false })

const inputId = computed(() => props.id ?? `lte-select-${useId()}`)

function onChange(event: Event) {
  const el = event.target as HTMLSelectElement
  if (props.multiple) {
    emit(
      'update:modelValue',
      Array.from(el.selectedOptions, (o) => o.value)
    )
  } else {
    emit('update:modelValue', el.value)
  }
}
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <select
      :id="inputId"
      :multiple="multiple"
      :disabled="disabled"
      :class="cn('form-select', error && 'is-invalid')"
      v-bind="$attrs"
      @change="onChange"
    >
      <slot>
        <option
          v-for="opt in options"
          :key="opt.value"
          :value="opt.value"
          :selected="Array.isArray(modelValue) ? modelValue.includes(opt.value) : modelValue === opt.value"
        >
          {{ opt.label }}
        </option>
      </slot>
    </select>
    <div v-if="error" class="invalid-feedback d-block">{{ error }}</div>
  </div>
</template>
