<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'
import type { BootstrapTheme } from '../types/theme'
import { cn } from '../lib/class-name'

const props = withDefaults(
  defineProps<{
    /** v-model — open/closed. */
    modelValue?: boolean
    title?: string
    size?: 'sm' | 'lg' | 'xl'
    theme?: BootstrapTheme
    centered?: boolean
    scrollable?: boolean
    staticBackdrop?: boolean
  }>(),
  { modelValue: false }
)
const emit = defineEmits<{ 'update:modelValue': [value: boolean]; close: [] }>()

const dialogClass = computed(() =>
  cn(
    'modal-dialog',
    props.size && `modal-${props.size}`,
    props.centered && 'modal-dialog-centered',
    props.scrollable && 'modal-dialog-scrollable'
  )
)

function close() {
  emit('update:modelValue', false)
  emit('close')
}
function onBackdrop() {
  if (!props.staticBackdrop) close()
}
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && !props.staticBackdrop) close()
}

// Lock body scroll + add the backdrop class while open.
watch(
  () => props.modelValue,
  (open) => {
    if (typeof document === 'undefined') return
    document.body.classList.toggle('modal-open', open)
    if (open) document.addEventListener('keydown', onKeydown)
    else document.removeEventListener('keydown', onKeydown)
  }
)

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.body.classList.remove('modal-open')
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="lte-modal-fade">
      <div v-if="modelValue">
        <div
          class="modal fade show d-block"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          @mousedown.self="onBackdrop"
        >
          <div :class="dialogClass" role="document">
            <div class="modal-content">
              <div v-if="title || $slots.header || $slots.title" :class="cn('modal-header', theme && `text-bg-${theme}`)">
                <slot name="header">
                  <h5 class="modal-title"><slot name="title">{{ title }}</slot></h5>
                  <button type="button" class="btn-close" aria-label="Close" @click="close"></button>
                </slot>
              </div>
              <div class="modal-body">
                <slot />
              </div>
              <div v-if="$slots.footer" class="modal-footer">
                <slot name="footer" :close="close" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade show"></div>
      </div>
    </Transition>
  </Teleport>
</template>
