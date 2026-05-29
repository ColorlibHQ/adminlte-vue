<script setup lang="ts">
const sections = [
  { icon: 'bi-rocket-takeoff', title: 'Getting started', text: 'Install adminlte-vue or @adminlte/nuxt and import the CSS.' },
  { icon: 'bi-layout-sidebar', title: 'Layout', text: 'Use <LteDashboardLayout> with a MenuNode[] and slots for the topbar.' },
  { icon: 'bi-moon-stars', title: 'Color mode', text: 'Dark mode via data-bs-theme, with an SSR-safe head script.' },
  { icon: 'bi-puzzle', title: 'Composables', text: 'useSidebar, useColorMode, useCardWidget, useFullscreen and more.' },
  { icon: 'bi-plugin', title: 'Plugins', text: 'Charts, tables, editor, datepicker, calendar and maps wrappers.' },
  { icon: 'bi-universal-access', title: 'Accessibility', text: 'Skip links, live region, reduced-motion support out of the box.' },
]
</script>

<template>
  <LteAppContent title="Documentation" :breadcrumbs="[{ label: 'Docs' }]">
    <LteCard>
      <h2 class="mb-1">AdminLTE Vue</h2>
      <p class="text-secondary">AdminLTE 4 for Vue 3 &amp; Nuxt. Pick a topic below.</p>
    </LteCard>
    <div class="row">
      <div v-for="s in sections" :key="s.title" class="col-md-6 col-lg-4">
        <LteCard :title="s.title" :icon="s.icon" theme="primary" variant="outline">
          {{ s.text }}
        </LteCard>
      </div>
    </div>
    <LteCard title="Install">
      <pre class="bg-body-secondary p-3 rounded mb-0"><code># Vue 3 (any Vite app)
npm i adminlte-vue bootstrap

# Nuxt
npm i @adminlte/nuxt adminlte-vue bootstrap
# nuxt.config.ts → modules: ['@adminlte/nuxt']</code></pre>
    </LteCard>
  </LteAppContent>
</template>
