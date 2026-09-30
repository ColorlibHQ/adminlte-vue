<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='RTL Support'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'RTL' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      AdminLTE ships an RTL (right-to-left) stylesheet alongside the standard LTR
                      one, generated from the same source via
                      <a href="https://rtlcss.com/"><code>rtlcss</code></a
                      >. Use it for Arabic, Hebrew, Persian, Urdu, and any other right-to-left
                      scripts.
                    </p>
                    <h5 id="the-pre-built-rtl-stylesheet">The pre-built RTL stylesheet</h5>
                    <p>Every release publishes RTL variants of every CSS file:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="text"
                    ><code><span class="line"><span>dist/css/adminlte.css           ← LTR (default)</span></span>
<span class="line"><span>dist/css/adminlte.rtl.css       ← RTL</span></span>
<span class="line"><span>dist/css/adminlte.min.css</span></span>
<span class="line"><span>dist/css/adminlte.rtl.min.css</span></span></code></pre>
                    <p>
                      To switch a page to RTL, swap the stylesheet and set
                      <code>dir=&quot;rtl&quot;</code> on the <code>&lt;html&gt;</code> element:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">html</span><span style="color:#9CDCFE"> lang</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"ar"</span><span style="color:#9CDCFE"> dir</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"rtl"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">head</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dist/css/adminlte.rtl.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">head</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">body</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"layout-fixed sidebar-expand-lg bg-body-tertiary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!-- ...same markup as LTR --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">body</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">html</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      That’s it — the sidebar now docks to the right, scroll bars flip,
                      padding/margin utilities mirror, and Bootstrap Icons stay LTR-safe (most icons
                      aren’t directional). For a live example, see
                      <a href="/layout/layout-rtl"><code>layout/layout-rtl.html</code></a
                      >.
                    </p>
                    <h5 id="bootstraps-dirrtl-attribute">
                      Bootstrap’s <code>dir=&quot;rtl&quot;</code> attribute
                    </h5>
                    <p>
                      Setting <code>dir=&quot;rtl&quot;</code> triggers Bootstrap 5.3’s logical
                      property pathway as well — <code>.ms-*</code> becomes right-margin instead of
                      left, <code>.float-start</code> floats right, etc. You don’t need separate
                      Bootstrap classes for RTL; the same utility names work in both directions.
                    </p>
                    <h5 id="when-you-have-a-mixed-language-ui">
                      When you have a mixed-language UI
                    </h5>
                    <p>
                      If your app shows RTL content on an otherwise-LTR page (eg. an Arabic text
                      block inside an English admin panel), you can scope
                      <code>dir=&quot;rtl&quot;</code> to a single element:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">body</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- LTR app shell --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">main</span><span style="color:#9CDCFE"> dir</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"rtl"</span><span style="color:#9CDCFE"> lang</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"ar"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!-- this block only is RTL --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">main</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">body</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Bootstrap and AdminLTE handle nested direction switches correctly — the inner
                      element’s direction is what counts.
                    </p>
                    <h5 id="building-rtl-yourself">Building RTL yourself</h5>
                    <p>
                      If you’re building AdminLTE from source and you’ve modified the SCSS,
                      regenerate the RTL CSS:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="bash"
                    ><code><span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> run</span><span style="color:#CE9178"> css-compile</span><span style="color:#6A9955">     # builds LTR</span></span>
<span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> run</span><span style="color:#CE9178"> css-prefix</span><span style="color:#6A9955">      # adds autoprefixer</span></span>
<span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> run</span><span style="color:#CE9178"> css-rtl</span><span style="color:#6A9955">         # generates *.rtl.css from the LTR output</span></span>
<span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> run</span><span style="color:#CE9178"> css-minify</span></span></code></pre>
                    <p>
                      The full pipeline is wired into <code>npm run css</code>, so most of the time
                      you just run that.
                    </p>
                    <p>
                      The conversion is handled by
                      <a href="https://postcss.org/"><code>postcss</code></a> running
                      <a href="https://rtlcss.com/"><code>rtlcss</code></a> — both are already in
                      devDependencies. If you need to opt-out a specific rule from the LTR-to-RTL
                      flip, use rtlcss control directives in your SCSS:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="scss"
                    ><code><span class="line"><span style="color:#D7BA7D">.brand-link</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#6A9955">  /*rtl:ignore*/</span></span>
<span class="line"><span style="color:#9CDCFE">  margin-left</span><span style="color:#D4D4D4">: </span><span style="color:#B5CEA8">.5rem</span><span style="color:#D4D4D4">;   </span><span style="color:#6A9955">// stays left-margin in both LTR and RTL</span></span>
<span class="line"><span style="color:#D4D4D4">}</span></span></code></pre>
                    <h5 id="what-flips-automatically">What flips automatically</h5>
                    <table>
                      <thead>
                        <tr>
                          <th>Direction-aware property</th>
                          <th>Behaviour in RTL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>margin-left</code> / <code>padding-left</code></td>
                          <td>Swapped to right</td>
                        </tr>
                        <tr>
                          <td><code>left</code>, <code>right</code> positioning</td>
                          <td>Swapped</td>
                        </tr>
                        <tr>
                          <td><code>text-align: left</code> / <code>right</code></td>
                          <td>Swapped</td>
                        </tr>
                        <tr>
                          <td>
                            Bootstrap <code>.ms-*</code>, <code>.me-*</code>,
                            <code>.float-start</code>, <code>.float-end</code>
                          </td>
                          <td>Mirror via Bootstrap’s logical properties</td>
                        </tr>
                        <tr>
                          <td><code>transform: translateX()</code></td>
                          <td>Sign inverted</td>
                        </tr>
                        <tr>
                          <td>Sidebar position</td>
                          <td>Docks to the right</td>
                        </tr>
                        <tr>
                          <td>Dropdown menu open direction</td>
                          <td>Flips automatically (Bootstrap handles this)</td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="what-doesnt-flip">What doesn’t flip</h5>
                    <ul>
                      <li>
                        Bootstrap Icons (SVG glyphs) — most icons are direction-neutral; arrows that
                        <em>do</em> indicate direction (<code>bi-arrow-right</code>,
                        <code>bi-chevron-right</code>, etc.) need to be manually swapped to their
                        <code>-left</code> siblings.
                      </li>
                      <li>
                        Inline images, charts, and third-party widgets — their internal layout
                        doesn’t react to <code>dir</code>. Check each integration (Chart.js,
                        FullCalendar, Tabulator) for an RTL option.
                      </li>
                      <li>
                        Numbers — digits stay LTR even in RTL contexts (this is standard Unicode
                        bidi behaviour, not a bug).
                      </li>
                    </ul>
                    <h5 id="common-gotchas">Common gotchas</h5>
                    <ul>
                      <li>
                        <strong
                          >The <code>.min.css</code> minified RTL build is
                          <code>.rtl.min.css</code>, not <code>.min.rtl.css</code>.</strong
                        >
                        Filename order matters; the build script emits the former.
                      </li>
                      <li>
                        <strong>Don’t mix LTR and RTL stylesheets on the same page</strong> — pick
                        one. If you need a mixed-direction app, use
                        <code>dir=&quot;rtl&quot;</code> on the relevant subtree, not a separate
                        stylesheet.
                      </li>
                      <li>
                        <strong>Icon mirroring</strong>: when you swap an icon for RTL, also update
                        its <code>aria-label</code> if it indicates direction (eg. “Next page”
                        should still say “Next page” — only the glyph rotates).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
