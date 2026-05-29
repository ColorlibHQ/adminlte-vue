<script setup lang="ts">
import type { TimelineItem } from '../types/widgets'
import { biClass } from '../lib/class-name'

defineProps<{ items: TimelineItem[] }>()
</script>

<template>
  <div class="timeline">
    <div v-for="(item, idx) in items" :key="idx" class="timeline-item">
      <span v-if="item.icon" :class="`timeline-icon bg-${item.iconTheme || 'primary'}`">
        <i :class="biClass(item.icon)"></i>
      </span>
      <div class="timeline-content">
        <h3 class="timeline-header">
          <a v-if="item.url" :href="item.url">{{ item.title }}</a>
          <template v-else>{{ item.title }}</template>
        </h3>
        <div v-if="item.body" class="timeline-body" v-html="item.body"></div>
        <div v-if="item.footer" class="timeline-footer" v-html="item.footer"></div>
        <span class="timeline-time">{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>
