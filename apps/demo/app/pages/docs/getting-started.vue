<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Getting Started'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Getting Started' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      AdminLTE is an HTML template — there’s no build step required to use it. This
                      page gets you to a working dashboard in about ten minutes, without npm,
                      without a build pipeline, without learning Astro.
                    </p>
                    <p>
                      If you’re integrating AdminLTE into a real project, the
                      <a href="/docs/introduction">Installation</a> page covers npm, Composer, and
                      source-build workflows.
                    </p>
                    <h5 id="1-grab-the-cdn-snippets">1. Grab the CDN snippets</h5>
                    <p>
                      Copy these tags into the <code>&lt;head&gt;</code> of a new HTML file. They
                      pull AdminLTE, Bootstrap 5.3, Popper, OverlayScrollbars, and Bootstrap Icons
                      from jsDelivr — no install needed.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- AdminLTE 4 + Bootstrap 5.3 (CSS) --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/styles/overlayscrollbars.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/admin-lte@4.8.1/dist/css/adminlte.min.css"</span><span style="color:#808080"> /></span></span></code></pre>
                    <p>And these just before <code>&lt;/body&gt;</code>:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- Bootstrap + Popper + AdminLTE (JS) --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/browser/overlayscrollbars.browser.es6.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/admin-lte@4.8.1/dist/js/adminlte.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="2-the-minimum-viable-layout">2. The minimum viable layout</h5>
                    <p>
                      This is the smallest AdminLTE page that still feels like AdminLTE — a header,
                      a collapsible sidebar, and a main content area. Drop it between the CSS and JS
                      tags above:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">body</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"layout-fixed sidebar-expand-lg bg-body-tertiary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-wrapper"</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!-- Header --></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-header navbar navbar-expand bg-body"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"container-fluid"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"navbar-nav"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-list"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!-- Sidebar --></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar bg-body-secondary shadow"</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-brand"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-text fw-light"</span><span style="color:#808080">></span><span style="color:#D4D4D4">My Dashboard</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-wrapper"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"mt-2"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav sidebar-menu flex-column"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"treeview"</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"menu"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link active"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-speedometer"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Dashboard</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-bar-chart"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Reports</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!-- Main content --></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">main</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-main"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-content-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"container-fluid"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"mb-0"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Hello, AdminLTE</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-content"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"container-fluid"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-header"</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">h5</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-title"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Welcome</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h5</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-body"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">              Edit this file to start building your dashboard.</span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">main</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">body</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Open it in a browser. The hamburger button at the top-left collapses the
                      sidebar — that’s AdminLTE’s
                      <a href="/docs/javascript/pushmenu">PushMenu</a> plugin working out of the box,
                      wired by <code>data-lte-toggle=&quot;sidebar&quot;</code>.
                    </p>
                    <h5 id="3-whats-actually-happening">3. What’s actually happening</h5>
                    <p>The four classes that do the heavy lifting:</p>
                    <table>
                      <thead>
                        <tr>
                          <th>Class</th>
                          <th>What it does</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>app-wrapper</code></td>
                          <td>
                            The CSS grid root — defines header / sidebar / main / footer regions
                          </td>
                        </tr>
                        <tr>
                          <td><code>app-header</code></td>
                          <td>
                            Stuck to the top of the viewport when <code>layout-fixed</code> is on
                            the body
                          </td>
                        </tr>
                        <tr>
                          <td><code>app-sidebar</code></td>
                          <td>
                            Collapsible side rail. Add <code>sidebar-expand-lg</code> to body to
                            control breakpoint
                          </td>
                        </tr>
                        <tr>
                          <td><code>app-main</code></td>
                          <td>Scrollable content region — everything else lives here</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      The <a href="/docs/layout">Layout</a> page covers the full wrapper structure
                      and the responsive options.
                    </p>
                    <h5 id="4-add-a-working-javascript-widget">
                      4. Add a working JavaScript widget
                    </h5>
                    <p>
                      AdminLTE ships seven JavaScript plugins. All of them are wired via
                      <code>data-lte-*</code> attributes — no JavaScript code needed.
                    </p>
                    <p>
                      Drop this in the content area to see the card-widget plugin in action (try the
                      buttons in the card header):
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">h5</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-title"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Collapsible card</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h5</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-tools"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-sm btn-tool"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-collapse"</span><span style="color:#9CDCFE"> aria-label</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Collapse card"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"expand"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-dash-lg"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"collapse"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-plus-lg"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-sm btn-tool"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-remove"</span><span style="color:#9CDCFE"> aria-label</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Remove card"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-x-lg"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-body"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">    Click the minus icon to collapse; the X to remove.</span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="5-where-to-go-next">5. Where to go next</h5>
                    <p>You now have a working AdminLTE page. From here:</p>
                    <ul>
                      <li>
                        <strong>Make it pretty</strong> →
                        <a href="/docs/customization">Customization &amp; Theming</a> — change
                        colors, fonts, and spacing via SCSS variables or CSS custom properties.
                      </li>
                      <li>
                        <strong>Make it functional</strong> →
                        <a href="/docs/javascript/layout">JavaScript Plugins</a> — full reference for
                        all seven plugins.
                      </li>
                      <li>
                        <strong>Make it dark</strong> → <a href="/docs/color-mode">Color Mode</a> —
                        light/dark/auto toggle.
                      </li>
                      <li>
                        <strong>Make it international</strong> →
                        <a href="/docs/rtl">RTL Support</a> — right-to-left layouts for Arabic,
                        Hebrew, Persian, etc.
                      </li>
                      <li>
                        <strong>Add real widgets</strong> →
                        <a href="/docs/integrations">Recommended Integrations</a> — date pickers,
                        multi-selects, charts, rich text editors. AdminLTE keeps its dep tree lean;
                        this page tells you which third-party libraries to drop in.
                      </li>
                    </ul>
                    <p>
                      If you’re upgrading an existing AdminLTE 3 project, see the
                      <a href="/docs/migration">Migration from v3</a> guide for breaking changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
