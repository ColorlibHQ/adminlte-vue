<script setup lang="ts">
import type { BootstrapTheme } from '../types/theme'
import type { NavMessage } from '../types/widgets'

withDefaults(
  defineProps<{
    messages: NavMessage[]
    badgeColor?: BootstrapTheme
    count?: number | string
    seeAllUrl?: string
    seeAllText?: string
  }>(),
  { badgeColor: 'danger', seeAllUrl: '#', seeAllText: 'See All Messages' }
)
</script>

<template>
  <li class="nav-item dropdown">
    <a class="nav-link" data-bs-toggle="dropdown" href="#">
      <i class="bi bi-chat-text"></i>
      <span v-if="messages.length" :class="`navbar-badge badge text-bg-${badgeColor}`">
        {{ count ?? messages.length }}
      </span>
    </a>
    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
      <span class="dropdown-item dropdown-header">{{ messages.length }} Messages</span>
      <template v-for="(msg, idx) in messages" :key="idx">
        <div class="dropdown-divider"></div>
        <a :href="msg.url || '#'" class="dropdown-item">
          <div class="d-flex align-items-center">
            <img v-if="msg.image" :src="msg.image" :alt="msg.from" class="rounded-circle me-3" width="40" height="40" />
            <div class="flex-grow-1">
              <h3 class="dropdown-item-title">
                {{ msg.from }}
                <span v-if="msg.star" :class="`float-end fs-7 text-${msg.star}`"><i class="bi bi-star-fill"></i></span>
              </h3>
              <p class="fs-7 mb-0">{{ msg.text }}</p>
              <p v-if="msg.time" class="fs-7 text-secondary mb-0"><i class="bi bi-clock me-1"></i>{{ msg.time }}</p>
            </div>
          </div>
        </a>
      </template>
      <div class="dropdown-divider"></div>
      <a :href="seeAllUrl" class="dropdown-item dropdown-footer">{{ seeAllText }}</a>
    </div>
  </li>
</template>
