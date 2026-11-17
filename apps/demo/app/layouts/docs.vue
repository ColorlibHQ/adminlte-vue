<script setup lang="ts">
// Docs-site styles live in a separate stylesheet since core 4.1.0 —
// applications never need it, so only this layout loads it (Nuxt inlines
// the layout's styles into the SSR payload and code-splits them on the
// client, so app pages never pay for it).
import '@adminlte/vue/css/docs'
import { docsMenu } from '~/lib/docsMenu'
</script>

<template>
  <DemoLayout :menu-items="docsMenu" body-class="docs-page">
    <slot />
  </DemoLayout>
</template>

<style>
/* The cloned docs render bare <table>s (core wraps them in .table-responsive at
   build time); scroll them inside the page instead of overflowing narrow screens. */
.docs-page .app-main table {
  display: block;
  max-width: 100%;
  overflow-x: auto;
}
</style>
