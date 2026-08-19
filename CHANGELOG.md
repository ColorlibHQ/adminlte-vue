# Changelog

All notable changes to **adminlte-vue** (the library, the `@adminlte/nuxt` module, and the demo)
are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- The docs' form example no longer uses an email-shaped placeholder, and the
  `email_off` server plugin added alongside it is gone. Cloudflare's Email
  Obfuscation rewrites any `name@host.tld` in a text node, which is what made
  that one page log a hydration mismatch; removing the pattern removes the
  trigger without a server plugin. See the known issue below — the mismatch was
  a symptom, not the cause of the docs' content pages rendering empty.

### Known issues
- **The docs site's content pages hydrate to an empty article.** The server-
  rendered HTML is complete (7 061 characters on `guide/color-mode`), but after
  hydration `<article v-if="doc">` collapses to `<!---->` and only the layout
  shell remains — `queryCollection('docs').path(route.path).first()` resolves to
  `null` on the client while `_payload.json` and `__nuxt_content/docs/sql_dump.txt`
  both load with 200. It reproduces identically on the 0.6.0 build, locally and
  on the deployed site, so it predates the 0.7.0 work; the likely culprit is the
  `app.baseURL` (`/themes/vue-nuxt/docs/`) leaking into the `useAsyncData` key or
  the queried path in the subpath export. Tracked separately.

## [0.7.0] - 2026-08-19

Three defects found by a live audit of
[adminlte.io/themes/vue-nuxt](https://adminlte.io/themes/vue-nuxt/): one functional (the RTL layout
page was not RTL at all), two cosmetic. Slated for **0.7.0, not 0.6.1** — the RTL repair is not a
demo patch. `<LteDashboardLayout>`'s `dir` prop was accepted and then dropped on the floor, so
making it work changes the behaviour of the published component, adds a new exported composable
(`useDirection`, also auto-imported by `@adminlte/nuxt`), and makes `adminlte.defaults.dir` in the
Nuxt module do something it never did. New public API in the shipped packages is a minor, not a
patch.

### Fixed

- **The RTL layout demo is actually RTL.** `<LteDashboardLayout>` declared a `dir` prop but never
  read it: it was not destructured from `defineProps()` and was rendered nowhere, and because Vue
  treats a declared prop as consumed it did not fall through to an element either. The demo page
  duly passed `dir="rtl"` into a black hole, and
  [/layout/layout-rtl/](https://adminlte.io/themes/vue-nuxt/layout/layout-rtl/) rendered
  byte-identically to the LTR layout — `dir` was `null` and `direction: ltr` on `<html>`, `<body>`,
  `.app-wrapper` and `.app-main`, with the sidebar still at `x=0`. The prop is now rendered on
  `.app-wrapper` (so server-rendered markup is directional before hydration) and written to
  `<html dir>` by the new `useDirection()` composable for as long as the layout is mounted.
- **Leaving an RTL route restores LTR.** `useDirection()` captures whatever `dir` was on `<html>`
  beforehand and puts it back on unmount, so one RTL page inside an otherwise LTR SPA cannot flip
  every route visited afterwards. The demo's RTL stylesheet is loaded (and torn down) the same way,
  keyed so unhead reconciles the server-rendered `<link>` instead of leaving an orphan behind.
- **Mailbox inbox rows no longer overflow the page.**
  [/mailbox/inbox/](https://adminlte.io/themes/vue-nuxt/mailbox/inbox/) scrolled 298px sideways at
  1440px wide (document `scrollWidth` 1738, `.list-group` 1175 in an 857px box). A flex item's
  `min-width` defaults to `auto`, so `span.text-truncate` refused to shrink below its content and
  pushed the row — and the whole document — wide. Both the row link and the elastic middle span
  carry `min-width: 0`, matching the core HTML template's `mailbox/inbox.astro`.
- **No more hydration mismatch on the docs Forms page.**
  [/docs/components/forms/](https://adminlte.io/themes/vue-nuxt/docs/components/forms/) was the only
  page of 104 audited to log `Hydration completed but contains mismatches.` The cause is not in the
  markdown or in `@nuxt/content`: adminlte.io has Cloudflare's **Email Obfuscation** enabled, and
  the `you@example.com` placeholder inside the page's first code sample comes back from the edge as
  `<a class="__cf_email__">[email&#160;protected]</a>` — an element where Vue's client render
  produces a text node. It is the only email-shaped string in the whole `content/` tree, and content
  pages are the only ones rendered from a dynamic vnode tree (`<ContentRenderer>`) rather than
  static vnodes Vue adopts without comparing, which is why no other page was affected. The docs app
  now wraps its rendered body in Cloudflare's `<!--email_off-->` … `<!--/email_off-->` opt-out
  (`apps/docs/server/plugins/email-off.ts`), so the served markup matches what the client renders.

### Added

- **`useDirection(dir)`** exported from `@adminlte/vue` and auto-imported by `@adminlte/nuxt`.
  Applies `'ltr'` / `'rtl'` to `<html>` while the calling component is mounted, follows changes, and
  restores the previous value on unmount. SSR-safe — the document is only touched from `onMounted`.
- **`adminlte: { defaults: { dir: 'rtl' } }` now configures a genuinely RTL app.** The Nuxt module
  injects `@adminlte/vue/css/rtl` instead of `@adminlte/vue/css` (they are two builds of the same
  sheet and must never be loaded together) and sets `<html dir="rtl">` server-side. Apps that are
  only partly RTL leave the option alone and pass `dir` per layout, loading the RTL sheet for those
  routes themselves.
- Five unit tests covering the `dir` prop end to end — attribute on `<html>` and the wrapper,
  reaction to changes, restore-on-unmount, and restore-to-previous-value (59 → 64 tests).

### Docs

- `useDirection` documented on the Component composables page, including how to load the RTL
  stylesheet globally versus per route, and the `dir` rows in the layout prop table and the Nuxt
  module defaults table now say what the option actually does.

## [0.6.0] - 2026-08-19

A toolchain and dependency refresh. Every direct dependency in the workspace is on its latest
release except three that are held back for stated reasons (below). Two majors land —
**TypeScript 6** and **ApexCharts 6** — plus Nuxt 4.5. Nothing about the rendered output changes:
the library builds byte-identical CSS, all 59 unit tests pass, and every chart page in the demo was
loaded headlessly to confirm ApexCharts 6 still renders.

### Changed

- **ApexCharts 6** (from 5.13.0), and the `apexcharts` peer range widens to `^4.0.0 || ^5.0.0 || ^6.0.0`. `LteApexChart` and `LteSparklineChart` only use the stable surface — `new ApexCharts(el, options)`, `render()`, `updateSeries()`, `updateOptions()`, `destroy()` — so nothing in the components changed. Consumers on ApexCharts 4 or 5 are unaffected; the peer range is additive.
- **TypeScript 6.0.3** (from 5.9.3) across the workspace. TypeScript 7 is available but **held back** — `typescript-eslint@8.67.0`, the latest release, still declares `typescript: ">=4.8.4 <6.1.0"`, and there is no newer major of it. 6.0.3 is the highest version inside that range.
- **Nuxt 4.5.2** (from 4.4.6) for `@adminlte/nuxt`, the demo and the docs site, with `@nuxt/kit` / `@nuxt/schema` in step, `@nuxt/module-builder` 1.0.3 and `@nuxt/content` 3.15.2.
- **Vite 8.2.1** (from 8.0.14), **Vitest 4.1.11** (from 4.1.7), **jsdom 30** (from 29), **Vue 3.5.41** (from 3.5.35), **vue-tsc 3.3.10**, `@vitejs/plugin-vue` 6.0.8, `vite-plugin-dts` 5.0.3, `@vue/test-utils` 2.4.11, `@types/node` 26 (from 22).
- **Lint stack:** ESLint 10.8.1 (from 10.4.1), `eslint-plugin-vue` 10.10.0, `typescript-eslint` 8.67.0, `globals` 17.11.0.
- **Plugin libraries:** Tabulator 6.5.2 (from 6.4.0), Tom Select 2.6.2, FullCalendar 6.1.21 (from 6.1.20) across `core` / `daygrid` / `interaction` / `list` / `timegrid`, Playwright 1.62.1.
- AdminLTE core stays at **4.8.1** — it was just upgraded in 0.5.0 and is current.

### Fixed

- **`@adminlte/nuxt` builds again under Nuxt 4.5.** `@nuxt/schema` 4.5.2 restructured its types such that the type inferred for `defineNuxtModule()`'s result can no longer be named from pnpm's store layout, and `nuxt-module-build` failed with `TS2742: The inferred type of 'default' cannot be named without a reference to '.pnpm/@nuxt+schema@4.5.2/…'`. The module's default export now carries an explicit `NuxtModule<AdminlteModuleOptions>` annotation — the emitted `dist/types.d.mts` already imported that type from `@nuxt/schema`, so the shipped type surface is unchanged.
- **`import '@adminlte/vue/css/…'` type-checks under TypeScript 6.** The CSS subpath exports have no file extension, so Vite's `*.css` wildcard declaration doesn't match them, and TypeScript 6's new `TS2882` diagnostic rejects a side-effect import it can't resolve to a typed module. The demo declares the five CSS subpaths ambiently; consumers who hit the same diagnostic can do likewise.

### Held back

- **TypeScript 7.0.2** — blocked by `typescript-eslint@8.67.0`'s peer range (`<6.1.0`). Revisit when typescript-eslint ships TypeScript 7 support.
- **`@fullcalendar/core` 7.0.2** — only `core` has a stable 7; `daygrid`, `interaction`, `list` and `timegrid` are still 6.1.21 (7.0.0-beta/rc at best). The family is kept consistent on 6.1.21, and the library's FullCalendar peers stay `^6.0.0`.
- **`better-sqlite3` 13.0.3** (docs site) — `@nuxt/content@3.15.2` peers `better-sqlite3: "^12.5.0"`. It does build and prerender all 36 docs routes on 13, but it is an unmet peer on the one package that consumes it, and it adds ~19 MB of foreign-platform prebuilds to the Nitro server bundle. Staying on 12.10.0.

## [0.5.0] - 2026-08-19

A dependency-refresh release: AdminLTE core jumps seven minor versions, and the two colour
stylesheets it grew along the way are re-exported from this package. No breaking changes — the
default stylesheet is still the only one loaded, and every component renders exactly as before.

### Changed

- **AdminLTE core upgraded to 4.8.1** (from 4.1.0). The bundled stylesheets (`@adminlte/vue/css`, `@adminlte/vue/css/rtl`) pick up everything from core [4.2.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#420---2026-08-06) through [4.8.1](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#481---2026-08-19), most of which lands in `@adminlte/vue` for free because the port ships core's prebuilt CSS:
  - **Sidebar no longer overflows the viewport.** `.app-sidebar` is a flex column and `.sidebar-wrapper` fills what is left of it, instead of being sized with a hard-coded `100vh − header`. Anything placed above or below the menu now sizes correctly (core 4.4.0).
  - **`d-print-none` works on the sidebar and the app wrapper.** The print-layout rules from 4.0.0 were `!important` and beat Bootstrap's utility; both are now scoped with `:not(.d-print-none)` (core 4.6.0).
  - **`data-lte-print="plain"`** on `<html>`, `<body>` or any container prints a page as a document: no `(https://…)` appended after every external link, no black outline around buttons. Useful for invoices and work orders (core 4.7.0). It lives in `adminlte.css`, so it needs no extra stylesheet.
  - **Sidebar menu items print as text**, not each in a black box (core 4.7.0), and the skip link stays visible on hover (core 4.6.0).
  - New CSS for **ribbons**, the **social / post widgets** (`.user-block`, `.post`, `.widget-user`) and the **sidebar filter field** (core 4.3.0/4.3.1/4.4.0). There are no `Lte*` components for these yet — the classes are available to hand-written markup.
  - The **header search and sidebar filter** are restyled as quiet pills coloured from theme-relative tokens, so they no longer turn near-black under `data-bs-theme="dark"` (core 4.4.0).

### Added

- **Two opt-in colour palettes, re-exported.** Core 4.4.0 and 4.5.0 added stylesheets that `adminlte.css` does not include; the library build now copies both and the package exports them:
  - `@adminlte/vue/css/colors` — the designed palette: 14 extra colours generated so white text on each clears WCAG AA, with the full `.bg-*` / `.text-bg-*` / `.text-*` / `.border-*` / `.link-*` / `.bg-gradient-*` / `.card-*` / `.callout-*` / `.direct-chat-*` families and 17 skin presets.
  - `@adminlte/vue/css/colors/v3` — the 18 AdminLTE 3 colours with their original values, emitting the same class families.

  Load one or the other (they share class names); neither is loaded by default, and `@adminlte/vue/css` is byte-for-byte what it would be without them. No RTL variants are copied — core's `.rtl` builds of these two sheets differ only in the source-map comment.
- **`data-lte-primary` works with the port.** With a palette sheet loaded, `<html data-lte-primary="teal">` repoints Bootstrap's `primary` at that colour, so every component you already render with `theme="primary"` — `LteCard`, `LteSmallBox`, `LteButton`, `LteCallout`, `LteDirectChat` — plus links, pagination, `.nav-pills`, progress bars, list groups, accordions and form-control / checkbox focus rings follow it, in both colour modes (core 4.6.0). The typed `theme` props stay the eight Bootstrap names; palette colours are used as plain classes. `data-lte-contrast="aa"` (core 4.8.0) flips the eight AdminLTE 3 colours that miss 4.5:1 to the ink that passes.

### Fixed

- `packages/adminlte-vue/README.md` still imported from the pre-rename `adminlte-vue` in every usage snippet and in the exports table — those lines were copy-paste failures since the package became `@adminlte/vue`. Only the install command had been fixed in 0.3.0.

### Docs

- New **"Extended color palettes"** section on the Color mode guide page: which sheet to load, how to load it in Nuxt and in plain Vue, `data-lte-primary`, and `data-lte-contrast="aa"`.
- The Deployment page's description of the library build lists all five stylesheets the `closeBundle` hook copies, not two.
- The cloned core documentation pages pin `admin-lte@4.8.1` in their CDN and `npm install` snippets (they showed 4.0.0), matching core 4.8.1's own docs.

### Notes

- Core's own JavaScript still does not affect this port at runtime — behaviour is re-implemented natively in Vue and `adminlte.js` is never loaded — so the `SidebarSearch` plugin core added in 4.3.0 is CSS-only here until a component wraps it. Theme preferences continue to interoperate with core via the shared `lte-theme` storage key.
- Core 4.5.0 through 4.8.0 were never published to npm; 4.8.1 is the first release on the registry since 4.4.1 and contains all of them.

## [0.4.0] - 2026-08-11

Customization work driven by [#2](https://github.com/ColorlibHQ/adminlte-vue/issues/2), a security
hardening pass, and a CI repair. Everything here is additive — no breaking changes, and defaults
render exactly as before.

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
- **`pnpm audit` is clean again** (was 7 high, now 0). All seven were DoS-class advisories in build-time transitive dependencies of the docs app — none reachable from the published library, which externalizes its dependencies. Fixed with four targeted `pnpm.overrides` (`brace-expansion@>=3`, `js-yaml@4`, `ws@8`, `socket.io-parser@4`) rather than a major bump. `@nuxt/content` is pinned to `~3.14.0`: 3.15.x pulls `@nuxt/kit@4.5.2 → unctx@3.0.0 → unplugin → vite@8.0.14`, which adds seven *new* advisories (vite, postcss, nanoid, esbuild) and three unmet peer dependencies. Revisit when that chain is patched upstream.

### Fixed

- **CI runs again.** The workflow had failed on every run since 2026-06-11, for two reasons unrelated to the code under test: `pnpm/action-setup@v4` hard-errors when both a `version:` input and package.json's `packageManager` key specify a version (the input is gone; `packageManager` is the source of truth), and the root `build` script passed an unquoted `./packages/*` to `--filter`, which the shell expanded into two paths so pnpm read the second as a script name. The setup failure had masked the second bug entirely.

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

[Unreleased]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.6.0...HEAD
[0.7.0]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.1.0...v0.3.0
[0.2.0]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/ColorlibHQ/adminlte-vue/releases/tag/v0.1.0
