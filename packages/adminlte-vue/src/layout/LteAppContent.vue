<script setup lang="ts">
import { computed } from 'vue'
import type { AppContentProps } from '../types/layout'

const props = withDefaults(defineProps<AppContentProps>(), { fluid: true })

const containerClass = computed(() => (props.fluid ? 'container-fluid' : 'container-lg'))
</script>

<template>
  <div v-if="title || (breadcrumbs && breadcrumbs.length) || $slots.header" class="app-content-header">
    <div :class="containerClass">
      <div class="row">
        <div class="col-sm-6">
          <slot name="header">
            <h3 v-if="title" class="mb-0">{{ title }}</h3>
          </slot>
        </div>
        <div v-if="breadcrumbs && breadcrumbs.length" class="col-sm-6">
          <ol class="breadcrumb float-sm-end">
            <li
              v-for="(crumb, idx) in breadcrumbs"
              :key="idx"
              :class="['breadcrumb-item', idx === breadcrumbs.length - 1 && 'active']"
            >
              <a v-if="crumb.href" :href="crumb.href">{{ crumb.label }}</a>
              <template v-else>{{ crumb.label }}</template>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <div class="app-content">
    <div :class="containerClass">
      <slot />
    </div>
  </div>
</template>
