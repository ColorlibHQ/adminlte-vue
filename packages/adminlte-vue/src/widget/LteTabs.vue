<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import { biClass } from '../lib/class-name'
import { TabsKey, type TabMeta } from './tabs-context'

const props = withDefaults(
  defineProps<{
    /** v-model — the active tab id. */
    modelValue?: string
    pills?: boolean
    justified?: boolean
  }>(),
  {}
)
const emit = defineEmits<{ 'update:modelValue': [id: string] }>()

const tabs = ref<TabMeta[]>([])
const activeId = ref<string | undefined>(props.modelValue)

watch(
  () => props.modelValue,
  (id) => {
    if (id !== undefined) activeId.value = id
  }
)

function select(id: string) {
  activeId.value = id
  emit('update:modelValue', id)
}

provide(TabsKey, {
  activeId,
  tabs,
  register(tab) {
    if (!tabs.value.some((t) => t.id === tab.id)) tabs.value.push(tab)
    if (activeId.value === undefined) activeId.value = tab.id
  },
  unregister(id) {
    tabs.value = tabs.value.filter((t) => t.id !== id)
    if (activeId.value === id) activeId.value = tabs.value[0]?.id
  },
  select,
})
</script>

<template>
  <div>
    <ul :class="['nav', pills ? 'nav-pills' : 'nav-tabs', justified && 'nav-justified']" role="tablist">
      <li v-for="tab in tabs" :key="tab.id" class="nav-item" role="presentation">
        <button
          type="button"
          :class="['nav-link', activeId === tab.id && 'active', tab.disabled && 'disabled']"
          role="tab"
          :aria-selected="activeId === tab.id"
          :disabled="tab.disabled"
          @click="select(tab.id)"
        >
          <i v-if="tab.icon" :class="[biClass(tab.icon), 'me-1']"></i>{{ tab.title }}
        </button>
      </li>
    </ul>
    <div class="tab-content pt-3">
      <slot />
    </div>
  </div>
</template>
