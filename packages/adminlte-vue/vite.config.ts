import { fileURLToPath } from 'node:url'
import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url))

/**
 * Copy AdminLTE's prebuilt CSS out of the `admin-lte` package into our dist/css,
 * mirroring the React port's `copy-css` build step. Runs once after the bundle
 * is written.
 */
function copyAdminLteCss() {
  return {
    name: 'adminlte-vue:copy-css',
    closeBundle() {
      const require = (id: string) =>
        fileURLToPath(new URL(`./node_modules/${id}`, import.meta.url))
      const pairs: Array<[string, string]> = [
        ['admin-lte/dist/css/adminlte.css', 'dist/css/adminlte.css'],
        ['admin-lte/dist/css/adminlte.rtl.css', 'dist/css/adminlte.rtl.css'],
      ]
      for (const [from, to] of pairs) {
        const dest = r(`./${to}`)
        try {
          mkdirSync(dirname(dest), { recursive: true })
          copyFileSync(require(from), dest)
        } catch (err) {
          // Fall back to resolving from the workspace root node_modules (hoisted).
          try {
            copyFileSync(
              resolve(process.cwd(), '../../node_modules', from),
              dest
            )
          } catch {
            console.warn(`[adminlte-vue] could not copy ${from}:`, err)
          }
        }
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
