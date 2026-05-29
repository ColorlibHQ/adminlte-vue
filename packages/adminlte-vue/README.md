# adminlte-vue

[AdminLTE 4](https://adminlte.io) as a **framework-agnostic Vue 3 component library**. Works in
any Vue 3 app (Vite, Nuxt, Vue CLI). For Nuxt, prefer [`@adminlte/nuxt`](../nuxt) which auto-imports
everything and handles SSR-safe theming.

## Install

```bash
npm i adminlte-vue bootstrap
# optional plugin libs, only if you use the matching components:
# apexcharts tabulator-tables quill flatpickr tom-select sortablejs jsvectormap overlayscrollbars @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction
```

## Usage

```ts
// main.ts
import { createApp } from 'vue'
import AdminLteVue from 'adminlte-vue'
import 'adminlte-vue/css'          // prebuilt AdminLTE + Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'

createApp(App).use(AdminLteVue).mount('#app')
```

```vue
<script setup lang="ts">
import type { MenuNode } from 'adminlte-vue'
const menu: MenuNode[] = [
  { type: 'item', text: 'Dashboard', href: '/', icon: 'bi-speedometer' },
  { type: 'group', text: 'Pages', icon: 'bi-files', children: [
    { type: 'item', text: 'Profile', href: '/profile' },
  ] },
]
</script>

<template>
  <LteDashboardLayout :menu-items="menu" :current-path="$route.path">
    <LteAppContent title="Dashboard">
      <LteCard title="Hello" collapsible>It works!</LteCard>
    </LteAppContent>
  </LteDashboardLayout>
</template>
```

You can also import components individually (tree-shakeable):

```ts
import { LteCard, useSidebar } from 'adminlte-vue'
import { LteApexChart } from 'adminlte-vue/plugins'
```

## Exports

| Entry | Contents |
| --- | --- |
| `adminlte-vue` | ~45 core components + composables + the install plugin (default export) |
| `adminlte-vue/plugins` | Plugin wrappers (charts, datatable, editor, datepicker, select, calendar, vector map, sortable, kanban). Heavy libs are lazy-loaded and listed as optional peer deps. |
| `adminlte-vue/css` | Prebuilt AdminLTE + Bootstrap CSS |
| `adminlte-vue/css/rtl` | RTL CSS variant |

## Composables

`useSidebar`, `useColorMode`, `useCardWidget`, `useTreeviewRegistry`/`treeviewTransition`,
`useFullscreen`, `useDirectChat`, `useSortable`, `useCommandPalette`. Sidebar and color-mode
state are provided by `<LteDashboardLayout>` and consumed via `inject` — the Vue equivalent of the
React port's Context + hooks.

## Notes

- **Styling** comes entirely from the prebuilt `admin-lte` package (no SCSS shipped).
- **Dark mode** uses Bootstrap's native `data-bs-theme` on `<html>`; state persists under the
  `lte-theme` localStorage key. Sidebar collapse persists under `lte.sidebar.state` (opt-in).
- **Behaviors** (push-menu, treeview, card collapse/maximize, fullscreen, direct-chat) are
  reimplemented as composables — no jQuery, no vanilla adminlte.js.
- All browser-API access is guarded for SSR.

MIT licensed.
