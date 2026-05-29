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
          console.warn(`[adminlte-vue] could not read ${from}`)
          continue
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
        preserveModules: false,
        assetFileNames: 'css/[name][extname]',
      },
    },
  },
})
