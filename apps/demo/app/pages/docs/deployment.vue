<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Deployment & Performance'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Deployment' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      AdminLTE is a static HTML/CSS/JS template — there’s nothing exotic about
                      deploying it. But there are a handful of choices that meaningfully change page
                      weight, time-to-interactive, and CDN reliability. This page documents the ones
                      worth getting right.
                    </p>
                    <h5 id="what-to-deploy">What to deploy</h5>
                    <p>
                      The deployable artefact is everything under <code>dist/</code> plus your own
                      HTML / server-rendered templates:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="text"
                    ><code><span class="line"><span>dist/</span></span>
<span class="line"><span>├── css/                ← stylesheets (LTR + RTL, dev + minified)</span></span>
<span class="line"><span>│   ├── adminlte.css</span></span>
<span class="line"><span>│   ├── adminlte.min.css</span></span>
<span class="line"><span>│   ├── adminlte.rtl.css</span></span>
<span class="line"><span>│   └── adminlte.rtl.min.css</span></span>
<span class="line"><span>├── js/                 ← JavaScript bundle (dev + minified)</span></span>
<span class="line"><span>│   ├── adminlte.js</span></span>
<span class="line"><span>│   └── adminlte.min.js</span></span>
<span class="line"><span>└── assets/             ← demo images / fonts (replace with your own)</span></span></code></pre>
                    <p>
                      You don’t ship <code>src/</code>, <code>node_modules/</code>, or the demo HTML
                      if you’re embedding AdminLTE into your own app.
                    </p>
                    <h5 id="always-use-the-min-variants-in-production">
                      Always use the <code>.min</code> variants in production
                    </h5>
                    <p>
                      The minified builds are the same code with whitespace stripped and identifiers
                      shortened. For <code>adminlte.css</code> the saving is roughly 15-20%; for
                      <code>adminlte.js</code> it’s bigger (about 30% after gzip). The non-minified
                      files are useful in development for readable source-map debugging — never
                      serve them to users.
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Asset</th>
                          <th>Dev</th>
                          <th>Production</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Stylesheet</td>
                          <td><code>dist/css/adminlte.css</code></td>
                          <td>
                            <strong><code>dist/css/adminlte.min.css</code></strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Script</td>
                          <td><code>dist/js/adminlte.js</code></td>
                          <td>
                            <strong><code>dist/js/adminlte.min.js</code></strong>
                          </td>
                        </tr>
                        <tr>
                          <td>RTL stylesheet</td>
                          <td><code>dist/css/adminlte.rtl.css</code></td>
                          <td>
                            <strong><code>dist/css/adminlte.rtl.min.css</code></strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="compression-at-the-edge">Compression at the edge</h5>
                    <p>
                      Make sure your web server / CDN gzips (or brotlis) responses for the relevant
                      content types:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="nginx"
                    ><code><span class="line"><span style="color:#6A9955"># nginx</span></span>
<span class="line"><span style="color:#569CD6">gzip on</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#569CD6">gzip_types </span><span style="color:#D4D4D4">text/css application/javascript text/html image/svg+xml;</span></span>
<span class="line"><span style="color:#569CD6">gzip_comp_level </span><span style="color:#B5CEA8">6</span><span style="color:#D4D4D4">;</span></span></code></pre>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="apache"
                    ><code><span class="line"><span style="color:#6A9955"># Apache</span></span>
<span class="line"><span style="color:#569CD6">AddOutputFilterByType</span><span style="color:#D4D4D4"> DEFLATE text/css application/javascript text/html image/svg+xml</span></span></code></pre>
                    <p>
                      Cloudflare, Vercel, Netlify, and most managed hosting do this automatically.
                      Verify with
                      <code>curl -I -H &quot;Accept-Encoding: gzip&quot; your-page-url</code> and
                      look for <code>content-encoding: gzip</code> in the response.
                    </p>
                    <h5 id="cache-headers">Cache headers</h5>
                    <p>
                      The dist artefacts have content hashes in their filenames
                      <em>only if you wire it up via your bundler</em> — AdminLTE itself ships fixed
                      filenames. Two reasonable strategies:
                    </p>
                    <ol>
                      <li>
                        <p>
                          <strong>Short cache + version query string</strong> (simple, works without
                          a build pipeline):
                        </p>
                        <pre
                          class="astro-code dark-plus"
                          style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                          tabindex="0"
                          data-language="html"
                        ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/dist/css/adminlte.min.css?v=4.0.0"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/dist/js/adminlte.min.js?v=4.0.0"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                        <p>
                          Set <code>Cache-Control: public, max-age=86400</code> (1 day) at the
                          server. Bump <code>?v=</code> on every release to force cache
                          invalidation.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Fingerprinted filenames</strong> (production-grade, requires a
                          bundler):
                        </p>
                        <p>
                          Let your bundler emit <code>adminlte.[hash].min.css</code> and reference
                          that hash in your HTML. Set
                          <code>Cache-Control: public, max-age=31536000, immutable</code> (1 year).
                          This is what Vite/Webpack/Rollup do by default if you import AdminLTE
                          through them.
                        </p>
                      </li>
                    </ol>
                    <h5 id="cdn-integrity-hashes">CDN integrity hashes</h5>
                    <p>
                      If you load AdminLTE from a public CDN (jsDelivr, unpkg), include a
                      Subresource Integrity (SRI) hash so a compromised CDN can’t serve malicious
                      JavaScript silently:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span></span>
<span class="line"><span style="color:#9CDCFE">  rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span></span>
<span class="line"><span style="color:#9CDCFE">  href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/admin-lte@4.8.1/dist/css/adminlte.min.css"</span></span>
<span class="line"><span style="color:#9CDCFE">  integrity</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sha384-PASTE_THE_HASH_HERE"</span></span>
<span class="line"><span style="color:#9CDCFE">  crossorigin</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"anonymous"</span></span>
<span class="line"><span style="color:#808080">/></span></span></code></pre>
                    <p>
                      You can get the hash from the
                      <a href="https://www.jsdelivr.com/package/npm/admin-lte"
                        >jsDelivr file detail page</a
                      >
                      — click any file and copy the “SRI” line. Do the same for Bootstrap, Popper,
                      OverlayScrollbars, and Bootstrap Icons.
                    </p>
                    <p>For private-hosted assets, generate the hash yourself:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="bash"
                    ><code><span class="line"><span style="color:#DCDCAA">openssl</span><span style="color:#CE9178"> dgst</span><span style="color:#569CD6"> -sha384</span><span style="color:#569CD6"> -binary</span><span style="color:#CE9178"> dist/css/adminlte.min.css</span><span style="color:#D4D4D4"> | </span><span style="color:#DCDCAA">openssl</span><span style="color:#CE9178"> base64</span><span style="color:#569CD6"> -A</span></span></code></pre>
                    <h5 id="loading-order-matters">Loading order matters</h5>
                    <p>Get the script order right or things break silently:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">head</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- 1. Bootstrap Icons (font CSS) — load first so icons render with the page --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- 2. OverlayScrollbars (optional, for the sidebar scroller) --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/styles/overlayscrollbars.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- 3. AdminLTE — includes Bootstrap CSS via its imports --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/admin-lte@4.8.1/dist/css/adminlte.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">head</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">body</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">  …</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- Scripts at the END of body --></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- 4. Popper (Bootstrap dependency for dropdowns/tooltips/popovers) --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- 5. Bootstrap --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- 6. OverlayScrollbars --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/browser/overlayscrollbars.browser.es6.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- 7. AdminLTE — must load AFTER Bootstrap --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/admin-lte@4.8.1/dist/js/adminlte.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">body</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="defer-or-async">Defer or async?</h5>
                    <p>
                      The AdminLTE bundle waits for <code>DOMContentLoaded</code> before wiring its
                      data API, so <code>defer</code> is safe and recommended:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> defer</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/dist/js/adminlte.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Don’t use <code>async</code> — the script could execute before its
                      dependencies (Bootstrap, Popper) have parsed, and listeners would attach to
                      elements that don’t exist yet.
                    </p>
                    <h5 id="critical-css">Critical CSS</h5>
                    <p>
                      For sub-1-second first paint, inline the styles that the above-the-fold layout
                      uses (header + brand + first visible content) and load the rest of
                      <code>adminlte.min.css</code> asynchronously:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">style</span><span style="color:#808080">></span><span style="color:#6A9955">/* extracted critical CSS for /dashboard */</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">style</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span></span>
<span class="line"><span style="color:#9CDCFE">  rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"preload"</span></span>
<span class="line"><span style="color:#9CDCFE">  as</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"style"</span></span>
<span class="line"><span style="color:#9CDCFE">  href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/dist/css/adminlte.min.css"</span></span>
<span class="line"><span style="color:#9CDCFE">  onload</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"</span><span style="color:#569CD6">this</span><span style="color:#CE9178">.</span><span style="color:#9CDCFE">onload</span><span style="color:#D4D4D4">=</span><span style="color:#569CD6">null</span><span style="color:#CE9178">;</span><span style="color:#569CD6">this</span><span style="color:#CE9178">.</span><span style="color:#9CDCFE">rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">'stylesheet'"</span></span>
<span class="line"><span style="color:#808080">/></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">noscript</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/dist/css/adminlte.min.css"</span><span style="color:#808080"> />&#x3C;/</span><span style="color:#569CD6">noscript</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Extract critical CSS with a tool like
                      <a href="https://github.com/GoogleChromeLabs/critters">Critters</a> or
                      <a href="https://github.com/pocketjoso/penthouse">Penthouse</a> as part of
                      your build. For dashboards behind a login (where first-load speed matters less
                      than for marketing pages), this is usually overkill.
                    </p>
                    <h5 id="preload-key-assets">Preload key assets</h5>
                    <p>
                      Push critical resources to the browser before it discovers them in the HTML:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"preload"</span><span style="color:#9CDCFE"> as</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"style"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/dist/css/adminlte.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"preload"</span><span style="color:#9CDCFE"> as</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"font"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/fonts/source-sans-3.woff2"</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"font/woff2"</span><span style="color:#9CDCFE"> crossorigin</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"preconnect"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net"</span><span style="color:#9CDCFE"> crossorigin</span><span style="color:#808080"> /></span></span></code></pre>
                    <p>
                      Only preload what’s used on every page. Preloading per-route assets in a
                      shared layout wastes bandwidth.
                    </p>
                    <h5 id="lazy-loading-sub-pages">Lazy-loading sub-pages</h5>
                    <p>
                      If your dashboard has many routes and the JS is server-rendered HTML per
                      route, prefer per-route CSS imports rather than one mega-stylesheet.
                      AdminLTE’s core CSS is small (~44KB gzipped) but page-specific styles (charts,
                      calendars, tables) can add up — only load them where they’re used.
                    </p>
                    <p>For SPAs, code-split heavy integrations:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#6A9955">// Don't bundle the calendar app into the main chunk</span></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#DCDCAA"> Calendar</span><span style="color:#D4D4D4"> = () </span><span style="color:#569CD6">=></span><span style="color:#569CD6"> import</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"./Calendar.vue"</span><span style="color:#D4D4D4">)</span></span></code></pre>
                    <h5 id="bundle-size-budget">Bundle size budget</h5>
                    <p>The current published <code>dist/</code> artefacts gzip to:</p>
                    <table>
                      <thead>
                        <tr>
                          <th>Asset</th>
                          <th>Size (gzip)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>adminlte.min.css</code></td>
                          <td>~40 KB</td>
                        </tr>
                        <tr>
                          <td><code>adminlte.rtl.min.css</code></td>
                          <td>~40 KB</td>
                        </tr>
                        <tr>
                          <td><code>adminlte.min.js</code></td>
                          <td>~5 KB</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      The full first-page payload (HTML + Bootstrap + AdminLTE + Bootstrap Icons +
                      Popper + OverlayScrollbars) is around <strong>180 KB gzipped</strong> when
                      loaded from CDN. The CI build enforces a <code>bundlewatch</code> check that
                      fails if any asset crosses its budget.
                    </p>
                    <h5 id="service-workers--offline-support">Service workers / offline support</h5>
                    <p>
                      AdminLTE is just static files — caching them in a service worker works without
                      changes. A minimal Workbox config:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">precacheAndRoute</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> "workbox-precaching"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA">precacheAndRoute</span><span style="color:#D4D4D4">([</span></span>
<span class="line"><span style="color:#D4D4D4">  { </span><span style="color:#9CDCFE">url:</span><span style="color:#CE9178"> "/dist/css/adminlte.min.css"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">revision:</span><span style="color:#CE9178"> "4.0.0"</span><span style="color:#D4D4D4"> },</span></span>
<span class="line"><span style="color:#D4D4D4">  { </span><span style="color:#9CDCFE">url:</span><span style="color:#CE9178"> "/dist/js/adminlte.min.js"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">revision:</span><span style="color:#CE9178"> "4.0.0"</span><span style="color:#D4D4D4"> },</span></span>
<span class="line"><span style="color:#6A9955">  // ...your own pages</span></span>
<span class="line"><span style="color:#D4D4D4">])</span></span></code></pre>
                    <h5 id="removing-dev-only-files-before-deploy">
                      Removing dev-only files before deploy
                    </h5>
                    <p>
                      If you’re deploying the demo <code>dist/</code> folder verbatim, strip these
                      patterns from the upload:
                    </p>
                    <ul>
                      <li>
                        <code>*.map</code> (source maps — leak source code to anyone who opens
                        devtools)
                      </li>
                      <li><code>**/html/</code> (the Astro intermediate build, if present)</li>
                      <li><code>**/.astro/</code> (Astro cache)</li>
                    </ul>
                    <p>For <code>rclone</code> / <code>rsync</code>:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="bash"
                    ><code><span class="line"><span style="color:#DCDCAA">rsync</span><span style="color:#569CD6"> -avz</span><span style="color:#569CD6"> --delete</span><span style="color:#D7BA7D"> \</span></span>
<span class="line"><span style="color:#569CD6">  --exclude=</span><span style="color:#CE9178">'*.map'</span><span style="color:#D7BA7D"> \</span></span>
<span class="line"><span style="color:#569CD6">  --exclude=</span><span style="color:#CE9178">'html/'</span><span style="color:#D7BA7D"> \</span></span>
<span class="line"><span style="color:#569CD6">  --exclude=</span><span style="color:#CE9178">'.astro/'</span><span style="color:#D7BA7D"> \</span></span>
<span class="line"><span style="color:#CE9178">  dist/</span><span style="color:#CE9178"> user@server:/var/www/your-app/</span></span></code></pre>
                    <h5 id="a-note-on-cloudflare-cache">A note on Cloudflare cache</h5>
                    <p>
                      Cloudflare’s default Browser Cache TTL is 4 hours. If you push a new release
                      and want users to see it immediately,
                      <a href="https://developers.cloudflare.com/cache/how-to/purge-cache/"
                        >purge the affected paths</a
                      >
                      from the Cloudflare dashboard or API. Otherwise, users on cached pages will
                      see your old CSS / JS for up to four hours.
                    </p>
                    <h5 id="where-to-next">Where to next</h5>
                    <ul>
                      <li>
                        <a href="/docs/customization">Customization</a> — change colours, sidebar
                        width, breakpoints before you deploy
                      </li>
                      <li>
                        <a href="/docs/integrations">Recommended Integrations</a> — pick lightweight
                        libraries for the things AdminLTE doesn’t bundle
                      </li>
                      <li>
                        <a href="/docs/javascript/accessibility">Accessibility</a> — make sure your
                        deployed pages keep their a11y guarantees
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
