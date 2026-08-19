<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Introduction'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Introduction' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h2 id="what-is-adminlte">What is AdminLTE?</h2>
                    <p>
                      AdminLTE is a free, MIT-licensed admin dashboard template built on
                      <strong>Bootstrap 5.3.8</strong> with vanilla TypeScript (no jQuery). It ships
                      responsive layouts, a sidebar navigation system, light/dark/auto color mode,
                      RTL support, and a growing catalog of demo pages — calendar, kanban, chat,
                      file manager, invoice, profile, settings, and more.
                    </p>
                    <p>
                      It’s a <em>template</em>, not a component library. You drop the markup into
                      your own project (or framework templates) and customize the parts you need.
                      Bootstrap 5 handles the components; AdminLTE provides the application shell.
                    </p>
                    <p>
                      If you’ve never used AdminLTE before, start with
                      <a href="/docs/getting-started">Getting Started</a> — it walks through a
                      working dashboard in ten minutes.
                    </p>
                    <h2 id="installation-paths">Installation paths</h2>
                    <p>Pick the path that matches how you’ll actually use AdminLTE:</p>
                    <table>
                      <thead>
                        <tr>
                          <th>Path</th>
                          <th>Best for</th>
                          <th>Setup time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>CDN</strong></td>
                          <td>Prototyping, demos, simple sites</td>
                          <td>1 minute</td>
                        </tr>
                        <tr>
                          <td><strong>npm + bundler</strong></td>
                          <td>Production apps, framework projects (Laravel, Symfony, Rails)</td>
                          <td>5 minutes</td>
                        </tr>
                        <tr>
                          <td><strong>Build from source</strong></td>
                          <td>You need to customize SCSS variables, sidebar width, breakpoints</td>
                          <td>10 minutes</td>
                        </tr>
                        <tr>
                          <td><strong>Composer</strong></td>
                          <td>PHP projects that prefer Packagist over npm</td>
                          <td>2 minutes</td>
                        </tr>
                      </tbody>
                    </table>
                    <h3 id="cdn--fastest-path">CDN — fastest path</h3>
                    <p>
                      Drop these four CSS tags into <code>&lt;head&gt;</code> and four script tags
                      before <code>&lt;/body&gt;</code>. No install, no build step:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- In &#x3C;head> --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/styles/overlayscrollbars.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/admin-lte@4.8.1/dist/css/adminlte.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- Before &#x3C;/body> --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/browser/overlayscrollbars.browser.es6.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/admin-lte@4.8.1/dist/js/adminlte.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Then copy any
                      <a href="https://github.com/ColorlibHQ/AdminLTE/tree/master/dist"
                        >demo page</a
                      >
                      HTML into your own file. See
                      <a href="/docs/getting-started">Getting Started</a> for the minimum-viable
                      layout.
                    </p>
                    <h3 id="npm--bundler">npm + bundler</h3>
                    <p>
                      Requires Node.js 18+ and a bundler (Vite, Webpack, Rollup, esbuild, etc.).
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="bash"
                    ><code><span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> install</span><span style="color:#CE9178"> admin-lte@4.8.1</span></span></code></pre>
                    <p>Then import the CSS and JS in your app entry point:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#6A9955">// CSS</span></span>
<span class="line"><span style="color:#C586C0">import</span><span style="color:#CE9178"> "admin-lte/dist/css/adminlte.min.css"</span></span>
<span class="line"><span style="color:#6A9955">// Plus Bootstrap and dependency CSS</span></span>
<span class="line"><span style="color:#C586C0">import</span><span style="color:#CE9178"> "bootstrap-icons/font/bootstrap-icons.css"</span></span>
<span class="line"><span style="color:#C586C0">import</span><span style="color:#CE9178"> "overlayscrollbars/styles/overlayscrollbars.css"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// JS</span></span>
<span class="line"><span style="color:#C586C0">import</span><span style="color:#CE9178"> "bootstrap"</span></span>
<span class="line"><span style="color:#C586C0">import</span><span style="color:#CE9178"> "admin-lte"</span></span></code></pre>
                    <p>
                      Yarn and pnpm work the same way — substitute <code>yarn add</code> or
                      <code>pnpm add</code> for the install.
                    </p>
                    <h3 id="build-from-source">Build from source</h3>
                    <p>
                      If you want to customize SCSS variables (sidebar width, breakpoints, brand
                      colours), clone the repo and build locally:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="bash"
                    ><code><span class="line"><span style="color:#DCDCAA">git</span><span style="color:#CE9178"> clone</span><span style="color:#CE9178"> https://github.com/ColorlibHQ/AdminLTE.git</span></span>
<span class="line"><span style="color:#DCDCAA">cd</span><span style="color:#CE9178"> AdminLTE</span></span>
<span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> install</span></span>
<span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> run</span><span style="color:#CE9178"> dev</span><span style="color:#6A9955">          # dev server with hot-reload at localhost:3000</span></span>
<span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> run</span><span style="color:#CE9178"> production</span><span style="color:#6A9955">   # one-off production build (clean + lint + compile)</span></span></code></pre>
                    <p>
                      The compiled output lands in <code>dist/</code>. Edit
                      <code>src/scss/_variables.scss</code> or
                      <code>src/scss/_bootstrap-overrides.scss</code>, then rerun the build. See
                      <a href="/docs/customization">Customization &amp; Theming</a> for which
                      variables matter.
                    </p>
                    <h3 id="composer">Composer</h3>
                    <p>For PHP projects:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="bash"
                    ><code><span class="line"><span style="color:#DCDCAA">composer</span><span style="color:#CE9178"> require</span><span style="color:#CE9178"> "almasaeed2010/adminlte=4.0.0"</span></span></code></pre>
                    <p>
                      The package is published from the same source tree — you get the
                      <code>dist/</code> folder ready to serve.
                    </p>
                    <h2 id="prerequisites">Prerequisites</h2>
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Minimum</th>
                          <th>Recommended</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Bootstrap</td>
                          <td>5.3.0</td>
                          <td>5.3.8 (pinned in <code>package.json</code>)</td>
                        </tr>
                        <tr>
                          <td>Node.js</td>
                          <td>18 LTS</td>
                          <td>22 LTS (used by CI)</td>
                        </tr>
                        <tr>
                          <td>Browser</td>
                          <td>Modern evergreen</td>
                          <td>Latest stable Chrome/Firefox/Safari/Edge</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      AdminLTE 4 does <strong>not</strong> support Internet Explorer. If you need
                      IE11, stay on
                      <a href="https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.2.0"
                        >AdminLTE 3</a
                      >
                      or earlier.
                    </p>
                    <h2 id="where-to-next">Where to next</h2>
                    <ul>
                      <li>
                        <strong><a href="/docs/getting-started">Getting Started</a></strong> — a
                        working dashboard in 10 minutes
                      </li>
                      <li>
                        <strong><a href="/docs/layout">Layout</a></strong> — the app-wrapper
                        structure and responsive options
                      </li>
                      <li>
                        <strong><a href="/docs/customization">Customization</a></strong> — change
                        colours, sidebar width, spacing
                      </li>
                      <li>
                        <strong><a href="/docs/migration">Migration from v3</a></strong> — upgrading
                        an existing AdminLTE 3 project
                      </li>
                    </ul>
                    <h2 id="releases-and-changelog">Releases and changelog</h2>
                    <p>
                      Always grab the latest from the
                      <a href="https://github.com/ColorlibHQ/AdminLTE/releases"
                        >GitHub releases page</a
                      >
                      — that’s where the changelog lives.
                    </p>
                    <p>
                      Legacy releases:
                      <a href="https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.2.0"
                        >AdminLTE 3.2</a
                      >
                      ·
                      <a href="https://github.com/ColorlibHQ/AdminLTE/releases/tag/v2.4.18"
                        >AdminLTE 2</a
                      >
                      ·
                      <a href="https://github.com/ColorlibHQ/AdminLTE/releases/tag/1.3.1"
                        >AdminLTE 1</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
