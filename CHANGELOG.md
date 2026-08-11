# Changelog

All notable changes to **adminlte-vue** (the library, the `@adminlte/nuxt` module, and the demo)
are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

Customization gaps reported in [#2](https://github.com/ColorlibHQ/adminlte-vue/issues/2):

- **Topbar user-dropdown slots.** `LteTopbar` now renders its `user-header`, `user-body` and `user-footer` blocks through same-named slots (plus `user-menu` to replace the dropdown body wholesale), and `LteDashboardLayout` forwards all four — the stock "Followers / Sales / Friends" row and "Profile / Sign out" buttons are no longer hard-coded. Each slot receives the resolved `user`; `user-footer` also receives `profile` / `logout` callbacks so custom buttons keep raising the layout's events. Defaults are unchanged when no slot is passed.
- **Footer props on the layout.** `LteDashboardLayout` gained `footerRightText` and `footerYear` props plus a `footer-right` slot, forwarded to `LteFooter` — previously reachable only by mounting `LteFooter` yourself.
- **`attrs` on menu nodes.** `MenuItem.attrs` is spread onto the rendered sidebar link and `MenuGroup.attrs` onto the group's toggle button, for `data-*` test/analytics hooks, `aria-*`, `rel`, `title`. The resolved link target always wins, so `attrs` can't overwrite `href` / `to`.
- **`LteTimeline` `body` / `footer` slots.** Escaped, scoped (`item`, `index`) alternatives to the raw-HTML `body` / `footer` fields — see Security below. When no slot is passed the rendered DOM is byte-identical to before (asserted in tests): the HTML still goes straight into `.timeline-body` / `.timeline-footer` with no wrapper element, since AdminLTE styles those directly and item bodies routinely contain block elements.
- **Sidebar links honor `navigate`.** The `navigate` callback passed to `LteDashboardLayout` now also drives sidebar navigation, not just the ⌘K command palette — client-side routing without passing a `linkComponent`. Interception is conservative: modified/middle clicks, `target="_blank"`, external, protocol-relative and hash-only hrefs stay native, and a click a router link component already handled is left alone, so passing both `linkComponent` and `navigate` never navigates twice.

### Security

A hardening pass over the library, the Nuxt module and the workspace dependencies. No known
exploited issue — these close sharp edges found while auditing.

- **`LteTimeline` raw-HTML fields are now flagged and have a safe alternative.** `TimelineItem.body` / `.footer` are written with `v-html` (AdminLTE's markup calls for it), which makes them a stored-XSS sink for anyone piping user-generated content through a timeline. The `TimelineItem` JSDoc was also actively misleading — it claimed markup came from the default slot. Both fields now carry an explicit trusted-content warning in the types and the docs, and the new `body` / `footer` slots give an escaped path for untrusted content.
- **The Nuxt module's theme script no longer interpolates config verbatim.** `initialColorMode` was substituted straight into the inline `<script>` whose head sanitizer the module deliberately disables; it is now validated against `light | dark | auto` and falls back to `auto`. Not reachable from user input (it comes from `nuxt.config`), but an untyped or runtime-assembled config value would have been script injection rather than a broken theme.
- **`pnpm audit` is clean again** (was 7 high). All seven were DoS-class advisories in build-time transitive dependencies of the docs app — none reachable from the published library, which externalizes its dependencies. Fixed with four targeted `pnpm.overrides` (`brace-expansion@>=3`, `js-yaml@4`, `ws@8`, `socket.io-parser@4`) rather than a major bump. `@nuxt/content` is pinned to `~3.14.0`: 3.15.x pulls `@nuxt/kit@4.5.2 → unctx@3.0.0 → unplugin → vite@8.0.14`, which adds seven *new* advisories (vite, postcss, nanoid, esbuild) and three unmet peer dependencies. Revisit when that chain is patched upstream.

## [0.3.0] - 2026-07-02

### Changed

- **AdminLTE core upgraded to 4.1.0.** The bundled stylesheets (`@adminlte/vue/css`, `@adminlte/vue/css/rtl`) pick up everything from core [4.0.4](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#404---2026-07-02) and [4.1.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#410---2026-07-02): ~6 KB gzip smaller (duplicate docs styles removed and the docs/FAQ styling split into a separate stylesheet applications never needed), WCAG AA contrast fix for breadcrumb links on the content-header background, and repaired callout link/code colors.

### Added

- **`@adminlte/vue/css/docs` export** — core 4.1.0 moved the documentation-site styles out of `adminlte.css` into their own file; the demo's docs layout now loads it explicitly, and consumers who clone docs-style pages can too. The library build fails loudly if any promised stylesheet can't be copied (previously a silent warning).

### Fixed

- `scripts/clone-doc.mjs` no longer hardcodes the pnpm store path for `admin-lte@4.0.0`; the docs source directory is configurable via `ADMINLTE_DIST_DOCS` (the npm package intentionally stopped shipping the demo/docs HTML in core 4.0.4).
- Package READMEs showed the pre-rename `npm i adminlte-vue` install command; both now install the scoped `@adminlte/vue`.

### Docs

- All 25 cloned documentation pages refreshed from core 4.1.0 — picks up the new component-lifecycle API docs (`getInstance`/`getOrCreateInstance`/`dispose`, delegated data-api, bubbling + cancelable events), the rewritten ColorMode page, and 4.x-accurate install snippets.

### Notes

- Core 4.1.0's new JavaScript (ESM bundle, TypeScript declarations, lifecycle, ColorMode module) does not affect this port at runtime: behavior is re-implemented natively in Vue and `adminlte.js` is never loaded. Theme preferences continue to interoperate with core via the shared `lte-theme` storage key.

## [0.2.0] - 2026-06-10

A code-review hardening pass: correctness fixes, performance work on the dataset-heavy plugin
wrappers, a modern-Vue (3.5) sweep, and accessibility upgrades for the modal and command palette.

### Fixed

- **Form control ids** — `useId()` was called inside a `computed` in all 8 form components, minting
  a new id on every re-evaluation. A new shared `useControlId(prefix, () => props.id)` composable
  captures one SSR-safe id during `setup()` (exported from the library).
- **Sidebar body classes leaked** — `provideSidebar` now diffs the applied `<body>` classes on every
  update and removes all of them on unmount, so switching layout variants or navigating
  dashboard → auth no longer leaves stale `sidebar-collapse` / `fixed-*` classes behind.
- **`sidebarBreakpoint` was a mount-time snapshot** — `ProvideSidebarOptions.sidebarBreakpoint` now
  accepts `MaybeRefOrGetter<number>` and `SidebarApi.sidebarBreakpoint` is a `ComputedRef<number>`;
  changing `LteDashboardLayout`'s `sidebarBreakpoint` prop after mount now works.
- **`LteApexChart` ignored `width` changes** — `width` joined the options watcher.
- **`LteModal` fade never animated** — the `<Transition>` now drives Bootstrap's own `.fade`/`.show`
  classes via JS hooks (the library ships no CSS of its own, so the old named transition classes
  did not exist anywhere).
- **`./plugins` types path** — `package.json` pointed at `dist/plugins.d.ts`, which was never
  emitted; it now points at the real `dist/plugins/index.d.ts`.

### Changed

- **Dataset props are watched by reference** — `series` (`LteApexChart`), `data` (`LteDatatable`),
  and `events` (`LteCalendar`) no longer use `deep: true` (a recursive traversal of potentially
  thousands of rows per flush). Replace arrays immutably to trigger updates, or set the new
  opt-in `deepWatch` prop to keep mutating in place.
- **Post-mount prop changes now apply** — `columns` (`LteDatatable` → `setColumns()`),
  `initialView` (`LteCalendar` → `changeView()`), and `options` (`LteCalendar` → `setOption()` per
  key) are reactive after mount; Tabulator's `options`/`height` are documented as mount-only.
- **Library build uses `preserveModules`** — dist is per-module ESM mirroring `src/`, so plain-Vite
  consumers tree-shake at file granularity. Entries (`.`, `./plugins`, `./css`) are unchanged.
- **Modern Vue 3.5 sweep** — `defineModel()` in every `v-model` component (8 form components,
  `LteModal`, `LteFlatpickr`, `LteTomSelect`, `LteEditor`, `LteSortable`; also fixes `LteInput`'s
  `string | number` prop vs `string` emit mismatch), `useTemplateRef()` in the plugin wrappers,
  and reactive props destructure in `LteDashboardLayout` / `LteCard`. No public API changes.
- **Stable sidebar nav keys** — menu nodes are keyed by `href` (items) / `type:text`
  (headers, groups) instead of array index.

### Accessibility

- **`LteModal` focus management** — focus moves into the dialog on open, Tab/Shift-Tab are trapped
  within it, and focus returns to the opener on close (dependency-free).
- **`LteCommandPalette`** — arrow-keying now scrolls the active option into view, and the results
  list exposes proper combobox/listbox semantics (`role="combobox"`, `aria-activedescendant`,
  `role="option"`, `aria-selected`).

### Demo & docs

- Demo: `preconnect` to `fonts.gstatic.com` (with `crossorigin`) — the font files come from gstatic,
  not googleapis, so the old preconnect never warmed the right connection.
- Docs: new `deepWatch` / reactivity notes on the plugin pages, updated `SidebarApi` /
  `ProvideSidebarOptions` types, the body-class lifecycle in the SSR-safety guide, and a
  name-collision note (`useColorMode` vs `@nuxtjs/color-mode` / VueUse) with the
  `adminlte: { composables: false }` escape hatch.

## [0.1.0] - 2026-05-29

Initial release — an AdminLTE 4 / Bootstrap 5.3 admin dashboard for Vue 3 and Nuxt, ported from the
React and Laravel editions.

### Added — `adminlte-vue` (core library)

#### Layout
- `LteDashboardLayout` — the application shell and single provider host. Provides the sidebar,
  color-mode, and command-palette state to all descendants, and wires the raw-markup behaviors and
  accessibility helpers. Props: `fixedHeader`, `fixedSidebar`, `fixedFooter`, `layoutFixed`,
  `sidebarMini`, `sidebarTheme`, `sidebarBreakpoint`, `initialColorMode`, `dir`,
  `enableSidebarPersistence`, `currentPath`, `linkComponent`, `accordion`, plus topbar/footer/logo slots.
- `LteAuthLayout` — standalone login/register layout. `LteAppContent` — page wrapper with title and breadcrumbs.
- Lower-level pieces: `LteSidebar`, `LteSidebarBrand`, `LteSidebarNav`, `LteSidebarNavItem`
  (recursive), `LteSidebarOverlay`, `LteTopbar`, `LteFooter`, `LteColorModeToggle`,
  `LteFullscreenToggle`.

#### Widgets
- `LteCard` (collapse / maximize / remove), `LteSmallBox`, `LteInfoBox`, `LteAlert`, `LteCallout`,
  `LteProgress`, `LteProgressGroup`, `LteTimeline`, `LteRatings`, `LteProfileCard`,
  `LteDescriptionBlock`, `LteDirectChat`, `LteNavMessages`, `LteNavNotifications`, `LteNavTasks`,
  `LteToast`, `LteTabs` / `LteTab`, `LteAccordion` / `LteAccordionItem`, `LteBreadcrumb`,
  `LteCommandPalette` (+ `flattenMenuToCommands`).

#### Forms
- `LteButton`, `LteInput`, `LteTextarea`, `LteSelect`, `LteInputSwitch`, `LteInputColor`,
  `LteInputFile` (all `v-model`), plus `LteInputFlatpickr` and `LteInputTomSelect`.

#### Tools
- `LteModal` (`v-model`, teleported, ESC/backdrop), `LteWizard` / `LteWizardStep`.

#### Plugins (`adminlte-vue/plugins`)
- `LteApexChart`, `LteSparklineChart`, `LteDatatable`, `LteEditor`, `LteFlatpickr`, `LteTomSelect`,
  `LteCalendar`, `LteVectorMap`, `LteSortable`, `LteKanban` — each lazy-loads its library via dynamic
  `import()` and is SSR-safe.

#### Composables (provide/inject)
- `useSidebar`, `useColorMode`, `useCardWidget`, `useFullscreen`, `useDirectChat`, `useSortable`,
  `useCommandPalette`, `useTreeviewRegistry` / `treeviewTransition`, plus internal `useLteBehaviors`
  and `useAccessibility`.

#### Types
- `MenuNode` discriminated union (`header | item | group`), `BootstrapTheme`, `ColorMode`,
  `BreakpointSize`, `TopbarUser`, `TimelineItem`, `NavMessage`/`NavNotification`/`NavTask`, and more.

#### Build / packaging
- Vite library build → **ESM-only** with `.d.ts` (via `vite-plugin-dts` + `vue-tsc`), two entries
  (`.` and `./plugins`), and `./css` + `./css/rtl` exports (prebuilt AdminLTE CSS copied at build).
- All heavy plugin libs + `vue`/`bootstrap` are externalized and declared optional peer dependencies.

### Added — `@adminlte/nuxt` (module)
- Auto-registers all components (prefix configurable), auto-imports the composables, injects
  `adminlte-vue/css`, and loads Bootstrap's JS bundle on the client.
- A blocking inline head script sets `data-bs-theme` before first paint (no FOUC).
- `defaults` option (mirrors the Laravel config) surfaced via `useAdminlteConfig()`.

### Added — demo (`apps/demo`)
- Nuxt 4 app with 54 pages: 3 dashboards, widgets, UI elements, forms, tables, profile/projects/
  calendar/kanban/invoice/chat/file-manager/settings/pricing/FAQ/error pages, mailbox, 8 layout
  variants, 5 auth screens, 8 plugin demos, docs, and a theme generator.

### Notes
- Dark mode uses Bootstrap's native `data-bs-theme`; persistence keys are `lte-theme` (color mode)
  and `lte.sidebar.state` (sidebar collapse, opt-in).
- Library JS ships only `dist/css/adminlte.css`; consumers provide Bootstrap Icons, OverlayScrollbars,
  fonts, and plugin CSS (see the demo's `nuxt.config.ts`).

[Unreleased]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/ColorlibHQ/adminlte-vue/releases/tag/v0.1.0
