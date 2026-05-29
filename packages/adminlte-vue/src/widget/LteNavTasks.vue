<script setup lang="ts">
import type { BootstrapTheme } from '../types/theme'
import type { NavTask } from '../types/widgets'

withDefaults(
  defineProps<{
    tasks: NavTask[]
    badgeColor?: BootstrapTheme
    count?: number | string
    seeAllUrl?: string
    seeAllText?: string
  }>(),
  { badgeColor: 'success', seeAllUrl: '#', seeAllText: 'View All Tasks' }
)
</script>

<template>
  <li class="nav-item dropdown">
    <a class="nav-link" data-bs-toggle="dropdown" href="#">
      <i class="bi bi-list-check"></i>
      <span v-if="tasks.length" :class="`navbar-badge badge text-bg-${badgeColor}`">
        {{ count ?? tasks.length }}
      </span>
    </a>
    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
      <span class="dropdown-item dropdown-header">{{ tasks.length }} Tasks</span>
      <template v-for="(task, idx) in tasks" :key="idx">
        <div class="dropdown-divider"></div>
        <a :href="task.url || '#'" class="dropdown-item">
          <h3 class="dropdown-item-title">
            {{ task.text }}
            <span class="float-end fs-7">{{ task.progress }}%</span>
          </h3>
          <div class="progress progress-sm">
            <div class="progress-bar" :class="`bg-${task.theme || badgeColor}`" :style="{ width: `${task.progress}%` }"></div>
          </div>
        </a>
      </template>
      <div class="dropdown-divider"></div>
      <a :href="seeAllUrl" class="dropdown-item dropdown-footer">{{ seeAllText }}</a>
    </div>
  </li>
</template>
