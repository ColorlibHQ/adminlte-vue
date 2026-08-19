import { fileURLToPath } from 'node:url'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url))

/**
 * Copy AdminLTE's prebuilt CSS out of the `admin-lte` package into our dist/css,
 * mirroring the React port's `copy-css` build step. The trailing
 * `sourceMappingURL` comment is stripped — we don't ship the dependency's `.map`,
 * and leaving it makes consuming bundlers warn about the missing file.
 */
function copyAdminLteCss() {
  return {
    name: 'adminlte-vue:copy-css',
    closeBundle() {
      const fromRoots = [
        (id: string) => fileURLToPath(new URL(`./node_modules/${id}`, import.meta.url)),
        (id: string) => resolve(process.cwd(), '../../node_modules', id),
      ]
      const pairs: Array<[string, string]> = [
        ['admin-lte/dist/css/adminlte.css', 'dist/css/adminlte.css'],
        ['admin-lte/dist/css/adminlte.rtl.css', 'dist/css/adminlte.rtl.css'],
        // Opt-in colour palettes, added in core 4.4.0 / 4.5.0 (exported as
        // `@adminlte/vue/css/colors` and `.../css/colors/v3`). Neither is
        // loaded by default — they only add classes on top of adminlte.css,
        // and their `data-lte-primary` / `data-lte-contrast` rules outrank
        // Bootstrap's own by specificity, so load order does not matter. No
        // RTL variants are copied: core's `.rtl` builds of these two sheets
        // are byte-identical apart from the source-map comment (colours carry
        // no directional properties).
        ['admin-lte/dist/css/adminlte-colors.css', 'dist/css/adminlte-colors.css'],
        ['admin-lte/dist/css/adminlte-colors-v3.css', 'dist/css/adminlte-colors-v3.css'],
        // Docs-site styles: split out of adminlte.css in core 4.1.0.
        // Applications never need this file — only the demo's cloned docs
        // pages load it (exported as `@adminlte/vue/css/docs`).
        ['admin-lte/dist/css/adminlte-docs.css', 'dist/css/adminlte-docs.css'],
      ]
      for (const [from, to] of pairs) {
        const dest = r(`./${to}`)
        let css: string | undefined
        for (const root of fromRoots) {
          try {
            css = readFileSync(root(from), 'utf8')
            break
          } catch {
            /* try the next resolution root */
          }
        }
        if (css == null) {
          // A missing file means the published package would silently lack a
          // stylesheet the exports map promises — fail the build instead.
          throw new Error(`[adminlte-vue] could not read ${from}`)
        }
        const stripped = css.replace(/\n?\/\*#\s*sourceMappingURL=.*?\*\/\s*$/, '\n')
        mkdirSync(dirname(dest), { recursive: true })
        writeFileSync(dest, stripped)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.json',
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/**/*.test.ts'],
      cleanVueFileName: true,
    }),
    copyAdminLteCss(),
  ],
  build: {
    target: 'es2022',
    cssCodeSplit: false,
    // Ship readable ESM — the consuming app handles minification. Also avoids an
    // esbuild lib-mode identifier-mangling collision in shared chunks.
    minify: false,
    lib: {
      entry: {
        index: r('./src/index.ts'),
        plugins: r('./src/plugins/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        /^vue\//,
        'bootstrap',
        'apexcharts',
        'tabulator-tables',
        'quill',
        'flatpickr',
        'tom-select',
        'sortablejs',
        'jsvectormap',
        'overlayscrollbars',
        /^@fullcalendar\//,
      ],
      output: {
        // Per-module output: consumers importing one widget pull only that
        // module's graph instead of relying on export-level tree-shaking of a
        // single bundled chunk. Also keeps the .js layout aligned with the
        // .d.ts tree (dist/plugins/index.js ↔ dist/plugins/index.d.ts).
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        assetFileNames: 'css/[name][extname]',
      },
    },
  },
})
