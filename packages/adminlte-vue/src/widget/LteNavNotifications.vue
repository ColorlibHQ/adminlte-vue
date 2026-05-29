<script setup lang="ts">
import type { BootstrapTheme } from '../types/theme'
import type { NavNotification } from '../types/widgets'
import { biClass } from '../lib/class-name'

withDefaults(
  defineProps<{
    notifications: NavNotification[]
    badgeColor?: BootstrapTheme
    count?: number | string
    seeAllUrl?: string
    seeAllText?: string
  }>(),
  { badgeColor: 'warning', seeAllUrl: '#', seeAllText: 'See All Notifications' }
)
</script>

<template>
  <li class="nav-item dropdown">
    <a class="nav-link" data-bs-toggle="dropdown" href="#">
      <i class="bi bi-bell-fill"></i>
      <span v-if="notifications.length" :class="`navbar-badge badge text-bg-${badgeColor}`">
        {{ count ?? notifications.length }}
      </span>
    </a>
    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
      <span class="dropdown-item dropdown-header">{{ notifications.length }} Notifications</span>
      <template v-for="(n, idx) in notifications" :key="idx">
        <div class="dropdown-divider"></div>
        <a :href="n.url || '#'" class="dropdown-item">
          <i :class="[biClass(n.icon || 'bi-info-circle'), n.iconTheme && `text-${n.iconTheme}`, 'me-2']"></i>
          {{ n.text }}
          <span v-if="n.time" class="float-end text-secondary fs-7">{{ n.time }}</span>
        </a>
      </template>
      <div class="dropdown-divider"></div>
      <a :href="seeAllUrl" class="dropdown-item dropdown-footer">{{ seeAllText }}</a>
    </div>
  </li>
</template>
