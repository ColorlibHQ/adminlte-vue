<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Common Patterns & Recipes'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Recipes' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      Copy-paste solutions for the patterns that show up in every admin dashboard.
                      Each recipe assumes you’ve followed
                      <a href="/docs/getting-started">Getting Started</a> and have a working AdminLTE
                      page to build on.
                    </p>
                    <h5 id="a-multi-level-sidebar-with-icons-badges-and-headers">
                      A multi-level sidebar with icons, badges, and headers
                    </h5>
                    <p>
                      The demo dashboards use this exact pattern. Group sections with
                      <code>.nav-header</code>, indicate item depth with nested
                      <code>.nav-treeview</code> lists, and use <code>.navbar-badge</code> for
                      counts.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar bg-body-secondary shadow"</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-brand"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-text fw-light"</span><span style="color:#808080">></span><span style="color:#D4D4D4">My Dashboard</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-wrapper"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"mt-2"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav sidebar-menu flex-column"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"treeview"</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"menu"</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-header"</span><span style="color:#808080">></span><span style="color:#D4D4D4">MAIN</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link active"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-speedometer"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Dashboard</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-folder"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">              Projects</span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"badge text-bg-info ms-2"</span><span style="color:#808080">></span><span style="color:#D4D4D4">12</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-arrow bi bi-chevron-right"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav nav-treeview"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Active</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Archived</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-header"</span><span style="color:#808080">></span><span style="color:#D4D4D4">REPORTS</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-bar-chart"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Sales</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"badge text-bg-danger ms-auto"</span><span style="color:#808080">></span><span style="color:#D4D4D4">3</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      To mark the current page as active, server-render the
                      <code>.active</code> class onto the matching <code>.nav-link</code>. For SPA
                      frameworks, add it on route change.
                    </p>
                    <h5 id="highlighting-the-active-sidebar-item-from-javascript">
                      Highlighting the active sidebar item from JavaScript
                    </h5>
                    <p>
                      If you’re rendering the sidebar once and want client-side route highlighting:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#569CD6">function</span><span style="color:#DCDCAA"> setActiveSidebarItem</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">href</span><span style="color:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#9CDCFE">  document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelectorAll</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">".sidebar-menu .nav-link"</span><span style="color:#D4D4D4">).</span><span style="color:#DCDCAA">forEach</span><span style="color:#D4D4D4">((</span><span style="color:#9CDCFE">el</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">    el</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">classList</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">toggle</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"active"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">el</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"href"</span><span style="color:#D4D4D4">) === </span><span style="color:#9CDCFE">href</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">  })</span></span>
<span class="line"><span style="color:#D4D4D4">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Call on route change</span></span>
<span class="line"><span style="color:#DCDCAA">setActiveSidebarItem</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">window</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">location</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">pathname</span><span style="color:#D4D4D4">)</span></span></code></pre>
                    <h5 id="responsive-data-tables">Responsive data tables</h5>
                    <p>
                      Wrap a <code>&lt;table&gt;</code> in <code>.table-responsive</code> so it gets
                      a horizontal scrollbar on narrow viewports instead of overflowing the card.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-title"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Recent orders</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-body p-0"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"table-responsive"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">table</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"table table-striped align-middle mb-0"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">thead</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">tr</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">th</span><span style="color:#808080">></span><span style="color:#D4D4D4">#</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">th</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">th</span><span style="color:#808080">></span><span style="color:#D4D4D4">Customer</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">th</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">th</span><span style="color:#808080">></span><span style="color:#D4D4D4">Total</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">th</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">th</span><span style="color:#808080">></span><span style="color:#D4D4D4">Status</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">th</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">th</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"text-end"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Actions</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">th</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">tr</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">thead</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">tbody</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">          &#x3C;!-- rows --></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">tbody</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">table</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      For interactive sorting/filtering/pagination, use
                      <a href="/docs/integrations#tabulator">Tabulator</a> —
                      <code>tables/data.html</code> in the demo has a full example.
                    </p>
                    <h5 id="a-user-dropdown-in-the-topbar">A user dropdown in the topbar</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item dropdown user-menu"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link dropdown-toggle"</span><span style="color:#9CDCFE"> data-bs-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"d-none d-md-inline me-1"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Jane Doe</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-person-circle fs-5"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-menu dropdown-menu-end"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/profile"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-person me-2"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4">Profile</span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/settings"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-gear me-2"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4">Settings</span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">hr</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-divider"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/logout"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item text-danger"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-box-arrow-right me-2"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4">Sign out</span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Put this inside the
                      <code>&lt;ul class=&quot;navbar-nav ms-auto&quot;&gt;</code> in
                      <code>.app-header</code>.
                    </p>
                    <h5 id="a-kpi-card-small-box">A KPI card (small-box)</h5>
                    <p>The bright-coloured stat boxes at the top of most dashboards:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"row g-3"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"col-lg-3 col-6"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"small-box text-bg-primary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"inner"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span><span style="color:#D4D4D4">150</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">New orders</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-cart small-box-icon"</span><span style="color:#9CDCFE"> aria-hidden</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"true"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"small-box-footer link-light"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">        More info </span><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-arrow-right"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- repeat 3 more times with different values + colours --></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Swap <code>text-bg-primary</code> for <code>text-bg-success</code>,
                      <code>text-bg-warning</code>, <code>text-bg-danger</code>, etc.
                    </p>
                    <h5 id="a-breadcrumb--page-title-row">A breadcrumb + page-title row</h5>
                    <p>
                      This is the standard <code>.app-content-header</code> pattern used across
                      every demo page:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-content-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"container-fluid"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"row"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"col-sm-6"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"mb-0"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Page Title</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"col-sm-6"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">ol</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"breadcrumb float-sm-end"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"breadcrumb-item"</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Home</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"breadcrumb-item"</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/section"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Section</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"breadcrumb-item active"</span><span style="color:#9CDCFE"> aria-current</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"page"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Current page</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">ol</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="a-timeline">A timeline</h5>
                    <p>For activity feeds, audit logs, or roadmap views:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"timeline"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-envelope bg-info"</span><span style="color:#9CDCFE"> aria-hidden</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"true"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"timeline-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"time"</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-clock"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4"> 12:05</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"timeline-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Olivia</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span><span style="color:#D4D4D4"> sent you a message</span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"timeline-body"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">        Hey, can we review the Q4 numbers tomorrow at 10?</span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"timeline-footer"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-primary btn-sm"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Read more</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- repeat --></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      The timeline component lives in <code>_timeline.scss</code> and has variants.
                      See <a href="/ui/timeline"><code>/UI/timeline.html</code></a> for the
                      full set.
                    </p>
                    <h5 id="a-direct-chat-widget">A direct-chat widget</h5>
                    <p>
                      The chat-style card used for live customer support, team chat, etc. Includes
                      contact toggle and message bubbles.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card direct-chat direct-chat-primary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-title"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Direct Chat</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-tools"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"badge text-bg-primary"</span><span style="color:#808080">></span><span style="color:#D4D4D4">3 new</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-tool"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"chat-pane"</span><span style="color:#9CDCFE"> title</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Contacts"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-people-fill"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-body"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-messages"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-msg"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-infos clearfix"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-name float-start"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Olivia</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-timestamp float-end"</span><span style="color:#808080">></span><span style="color:#D4D4D4">12:05</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">img</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-img"</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/avatars/olivia.jpg"</span><span style="color:#9CDCFE"> alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">""</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-text"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Hey, ready for the review?</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-msg right"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-infos clearfix"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-name float-end"</span><span style="color:#808080">></span><span style="color:#D4D4D4">You</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-timestamp float-start"</span><span style="color:#808080">></span><span style="color:#D4D4D4">12:06</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">img</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-img"</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/avatars/me.jpg"</span><span style="color:#9CDCFE"> alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">""</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-text"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Yes, on my way.</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"direct-chat-contacts"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!-- contacts list, shown when chat-pane toggled --></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-footer"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">form</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"input-group"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">input</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"text"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"form-control"</span><span style="color:#9CDCFE"> placeholder</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Message…"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"submit"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-primary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-send"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">form</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      For a full-page chat application, see <code>/pages/chat.html</code> in the
                      demo.
                    </p>
                    <h5 id="reacting-to-layoutsidebar-changes">
                      Reacting to layout/sidebar changes
                    </h5>
                    <p>
                      Listen for plugin events to coordinate with your own code — e.g., refit a
                      chart when the sidebar collapses (so the chart re-measures its container
                      width):
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#569CD6">let</span><span style="color:#9CDCFE"> chart</span><span style="color:#D4D4D4"> = </span><span style="color:#6A9955">/* your Chart.js instance */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"collapse.lte.push-menu"</span><span style="color:#D4D4D4">, () </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#6A9955">  // wait for the transition to finish (~300ms by default)</span></span>
<span class="line"><span style="color:#DCDCAA">  setTimeout</span><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=></span><span style="color:#9CDCFE"> chart</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">resize</span><span style="color:#D4D4D4">(), </span><span style="color:#B5CEA8">350</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"open.lte.push-menu"</span><span style="color:#D4D4D4">, () </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#DCDCAA">  setTimeout</span><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=></span><span style="color:#9CDCFE"> chart</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">resize</span><span style="color:#D4D4D4">(), </span><span style="color:#B5CEA8">350</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <p>
                      The same pattern works for Tabulator, FullCalendar, and any other library that
                      reads its container width on init.
                    </p>
                    <h5 id="loading-content-into-a-card-via-fetch">
                      Loading content into a card via fetch
                    </h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card"</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"users-card"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-title"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Users</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-tools"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"spinner-border spinner-border-sm text-secondary d-none"</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"users-spinner"</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"status"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-body p-0"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"users-body"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"text-secondary p-3"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Loading</span><span style="color:#569CD6">&#x26;hellip;</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#569CD6">  const</span><span style="color:#4FC1FF"> spinner</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"users-spinner"</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#569CD6">  const</span><span style="color:#4FC1FF"> body</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"users-body"</span><span style="color:#D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">  spinner</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">classList</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">remove</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"d-none"</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#DCDCAA">  fetch</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"/api/users"</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">then</span><span style="color:#D4D4D4">((</span><span style="color:#9CDCFE">r</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=></span><span style="color:#9CDCFE"> r</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">text</span><span style="color:#D4D4D4">())</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">then</span><span style="color:#D4D4D4">((</span><span style="color:#9CDCFE">html</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">body</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">innerHTML</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">html</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">catch</span><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">body</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">textContent</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">"Failed to load."</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">finally</span><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=></span><span style="color:#9CDCFE"> spinner</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">classList</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">add</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"d-none"</span><span style="color:#D4D4D4">))</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="confirming-destructive-actions-before-submission">
                      Confirming destructive actions before submission
                    </h5>
                    <p>Bootstrap modal + a tiny confirmation pattern:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-danger"</span><span style="color:#9CDCFE"> data-bs-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal"</span><span style="color:#9CDCFE"> data-bs-target</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#confirmDelete"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">  Delete account</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal fade"</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"confirmDelete"</span><span style="color:#9CDCFE"> tabindex</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"-1"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal-dialog"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal-content"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">h5</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal-title"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Delete account?</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h5</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn-close"</span><span style="color:#9CDCFE"> data-bs-dismiss</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal-body"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">        This permanently deletes your account and all associated data. This cannot be undone.</span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal-footer"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-outline-secondary"</span><span style="color:#9CDCFE"> data-bs-dismiss</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"modal"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Cancel</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">form</span><span style="color:#9CDCFE"> action</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/account/delete"</span><span style="color:#9CDCFE"> method</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"POST"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"d-inline"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"submit"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-danger"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Yes, delete it</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">form</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      The <a href="/docs/color-mode">Color Mode</a>,
                      <a href="/docs/javascript/accessibility">Accessibility</a>, and the bundled JS
                      handle Escape-to-close, focus trap, and keyboard navigation inside the modal
                      automatically.
                    </p>
                    <h5 id="where-to-next">Where to next</h5>
                    <ul>
                      <li>
                        <a href="/docs/javascript/plugins-overview">JavaScript Plugins Overview</a> —
                        every plugin’s event names and methods
                      </li>
                      <li>
                        <a href="/docs/integrations">Recommended Integrations</a> — when you need
                        more than what’s in this list
                      </li>
                      <li>
                        <a href="/docs/customization">Customization</a> — change colours, sidebar
                        width, breakpoints
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
