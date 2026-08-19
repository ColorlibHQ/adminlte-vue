/**
 * The content document for the current route.
 *
 * The page and the table of contents both need it, so it lives here: one key,
 * one handler, one cached fetch. The key is a getter rather than a snapshotted
 * string because `<DocsToc>` sits in the persistent layout — its setup runs once
 * and a fixed key would pin the TOC to whichever page was loaded first.
 */
export function useCurrentDoc() {
  const path = useDocsPath()
  return useAsyncData(
    () => `doc-${path.value}`,
    () => queryCollection('docs').path(path.value).first()
  )
}
