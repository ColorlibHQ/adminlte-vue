/** Strip trailing slashes, but never turn the index route into an empty string. */
function normalize(path: string) {
  return path.replace(/\/+$/, '') || '/'
}

/**
 * The current route path in the one canonical form the rest of the docs app uses:
 * no trailing slash, `/` left alone.
 *
 * Nuxt prerenders (and `@nuxt/content` stores) every page **without** a trailing
 * slash — `/guide/color-mode`, never `/guide/color-mode/` — so SSR writes its
 * `useAsyncData` payload under the key `doc-/guide/color-mode`.
 *
 * Static hosts, however, serve `/guide/color-mode/index.html` and routinely
 * redirect the extensionless URL to the directory form, and vue-router passes
 * that trailing slash straight through to `route.path`. A key derived from the
 * raw path (`doc-/guide/color-mode/`) then misses everything the server
 * produced, and during hydration Nuxt does not await the replacement fetch — it
 * defers it to `onBeforeMount` — so the page setup sees an empty `doc` and
 * blanks the article out.
 *
 * Normalising here keeps the client on the same key, query and comparison values
 * as the server, whichever URL form the host happens to serve.
 */
export function useDocsPath() {
  const route = useRoute()
  return computed(() => normalize(route.path))
}
