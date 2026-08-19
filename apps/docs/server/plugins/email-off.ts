/**
 * Opt the prerendered HTML out of Cloudflare's Email Obfuscation.
 *
 * adminlte.io has the zone feature enabled, so anything that looks like an email
 * address is rewritten at the edge into
 * `<a class="__cf_email__" …>[email&#160;protected]</a>` (a script restores the
 * text after load). The Forms page's code sample contains the placeholder
 * `you@example.com`, so the browser received an *element* where Vue's client
 * render produces a *text node* — the mismatch behind
 * "Hydration completed but contains mismatches." on /components/forms/. Content
 * pages are rendered from the markdown AST by `<ContentRenderer>`, i.e. dynamic
 * vnodes that Vue really compares during hydration, which is why this page was
 * the only one affected.
 *
 * Cloudflare skips any region wrapped in `<!--email_off-->` … `<!--/email_off-->`,
 * so the served markup stays byte-identical to what the client renders. The docs
 * site publishes no real addresses, so opting the whole body out is safe.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.bodyPrepend.unshift('<!--email_off-->')
    html.bodyAppend.push('<!--/email_off-->')
  })
})
