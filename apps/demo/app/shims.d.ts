// Ambient declarations for optional plugin libraries that ship no (or
// unresolved) TypeScript types — mirrors packages/adminlte-vue/src/shims.d.ts.
declare module 'jsvectormap'
declare module 'jsvectormap/dist/maps/world.js'
declare module 'tabulator-tables'
declare module 'bootstrap'
declare module 'sortablejs'

// Extensionless CSS subpath exports (`@adminlte/vue/css`, `.../css/docs`, …)
// aren't matched by Vite's `*.css` wildcard, and TypeScript 6 reports TS2882
// for side-effect imports it cannot resolve to a typed module.
declare module '@adminlte/vue/css'
declare module '@adminlte/vue/css/rtl'
declare module '@adminlte/vue/css/colors'
declare module '@adminlte/vue/css/colors/v3'
declare module '@adminlte/vue/css/docs'
