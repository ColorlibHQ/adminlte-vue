<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import type { AuthLayoutProps } from '../types/layout'

const props = withDefaults(defineProps<AuthLayoutProps>(), {
  authType: 'login',
  logoHref: '/',
})

// Apply the page-level body classes client-side (the host owns <body>).
const bodyClasses = [`${props.authType}-page`, 'bg-body-secondary']
onMounted(() => document.body.classList.add(...bodyClasses))
onBeforeUnmount(() => document.body.classList.remove(...bodyClasses))
</script>

<template>
  <div :class="`${authType}-box`">
    <div :class="`${authType}-logo`">
      <a :href="logoHref">
        <slot name="logo">
          <template v-if="logo">
            <img :src="logo" alt="Logo" height="48" />
          </template>
          <template v-else><b>Admin</b>LTE</template>
        </slot>
      </a>
    </div>

    <div class="card">
      <div :class="`card-body ${authType}-card-body`">
        <slot />
      </div>
    </div>
  </div>
</template>
