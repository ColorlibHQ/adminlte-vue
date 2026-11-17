<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='FAQ'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'FAQ' }]"
  >

            <!-- Hero -->
            <section class="faq-hero text-center mb-4">
              <span class="faq-hero-eyebrow">
                <i class="bi bi-patch-question-fill" aria-hidden="true"></i>
                Frequently Asked Questions
              </span>
              <h1 class="faq-hero-title">How can we help?</h1>
              <p class="faq-hero-lead">
                Quick answers to the 21 questions we get asked most often. Use the search to jump to
                anything, or click a topic below.
              </p>
              <form class="faq-search" role="search" onsubmit="return false;">
                <i class="bi bi-search faq-search-icon" aria-hidden="true"></i>
                <input
                  type="search"
                  id="faq-search-input"
                  class="form-control form-control-lg"
                  placeholder="Search the FAQ&hellip;"
                  aria-label="Search the FAQ"
                  autocomplete="off"
                />
                <button
                  type="button"
                  class="faq-search-clear d-none"
                  id="faq-search-clear"
                  aria-label="Clear search"
                >
                  <i class="bi bi-x-lg" aria-hidden="true"></i>
                </button>
              </form>
              <p class="faq-empty-state d-none" id="faq-empty-state">
                <i class="bi bi-emoji-frown" aria-hidden="true"></i>
                No questions match your search. Try a different keyword or
                <a
                  href="https://github.com/ColorlibHQ/AdminLTE/discussions"
                  target="_blank"
                  rel="noopener"
                  >open a Discussion</a
                >.
              </p>
            </section>

            <!-- Section nav chips -->
            <nav class="faq-chips mb-4" aria-label="FAQ sections">
              <a href="#getting-started" class="faq-chip faq-chip-primary">
                <i class="bi bi-rocket-takeoff" aria-hidden="true"></i>
                <span>Getting started</span>
                <span class="faq-chip-count">4</span> </a
              ><a href="#framework-integrations" class="faq-chip faq-chip-info">
                <i class="bi bi-puzzle" aria-hidden="true"></i>
                <span>Framework integrations</span>
                <span class="faq-chip-count">3</span> </a
              ><a href="#customization" class="faq-chip faq-chip-warning">
                <i class="bi bi-palette" aria-hidden="true"></i>
                <span>Customization</span>
                <span class="faq-chip-count">3</span> </a
              ><a href="#versions" class="faq-chip faq-chip-success">
                <i class="bi bi-arrow-clockwise" aria-hidden="true"></i>
                <span>Versions and updates</span>
                <span class="faq-chip-count">3</span> </a
              ><a href="#licensing" class="faq-chip faq-chip-secondary">
                <i class="bi bi-shield-check" aria-hidden="true"></i>
                <span>Licensing</span>
                <span class="faq-chip-count">3</span> </a
              ><a href="#troubleshooting" class="faq-chip faq-chip-danger">
                <i class="bi bi-wrench-adjustable" aria-hidden="true"></i>
                <span>Troubleshooting</span>
                <span class="faq-chip-count">5</span>
              </a>
            </nav>

            <!-- Sections -->
            <div class="faq-sections">
              <section id="getting-started" class="faq-section" data-faq-section>
                <header class="faq-section-header faq-section-primary">
                  <span class="faq-section-icon">
                    <i class="bi bi-rocket-takeoff" aria-hidden="true"></i>
                  </span>
                  <div>
                    <h2 class="faq-section-title">Getting started</h2>
                    <p class="faq-section-count">4 questions</p>
                  </div>
                </header>
                <div class="faq-section-items">
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">What is AdminLTE, exactly?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      A free, MIT-licensed admin dashboard <em>template</em>. It's a set of HTML,
                      CSS, and JavaScript files built on top of Bootstrap 5.3 — not a framework, not
                      an npm component library. You drop it into your project, modify the markup to
                      suit your app, and ship.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Do I need a build step to use it?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      No. The <a href="/docs/getting-started">Getting Started</a> guide shows the
                      CDN-only approach — copy four <code>&lt;link&gt;</code> tags and four
                      <code>&lt;script&gt;</code> tags into your HTML and you're done. The npm-based
                      workflow is there if you want to customise SCSS variables or tree-shake the
                      JavaScript.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Which Bootstrap version does v4 require?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      Bootstrap 5.3.x. The current <code>package.json</code> pins 5.3.9 — older 5.3
                      minors should work but aren't tested. Bootstrap 5.0 / 5.1 / 5.2 will not work
                      (the color-mode and <code>data-bs-theme</code> system landed in 5.3).
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Can I use AdminLTE 4 with jQuery?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      You don't <em>need</em> jQuery — AdminLTE 4's JavaScript is vanilla. If your
                      existing app already uses jQuery, it'll coexist fine. But none of AdminLTE 4's
                      own plugins call into jQuery, and there are no <code>$.fn.xxx()</code> plugin
                      shims.
                    </div>
                  </details>
                </div>
              </section>
              <section id="framework-integrations" class="faq-section" data-faq-section>
                <header class="faq-section-header faq-section-info">
                  <span class="faq-section-icon">
                    <i class="bi bi-puzzle" aria-hidden="true"></i>
                  </span>
                  <div>
                    <h2 class="faq-section-title">Framework integrations</h2>
                    <p class="faq-section-count">3 questions</p>
                  </div>
                </header>
                <div class="faq-section-items">
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Can AdminLTE be used with WordPress?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      Yes — it's just HTML/CSS/JS. The typical path is to build a custom WordPress
                      theme that wraps AdminLTE's markup around <code>wp_head()</code>,
                      <code>wp_footer()</code>, and WordPress's loops. AdminLTE doesn't ship a
                      WordPress-specific build; the work of porting nav-walker classes and
                      authentication forms is yours.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Laravel? Symfony? Yii? Django? Rails?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      All workable. AdminLTE is a server-rendered template — copy the demo pages
                      into your views/templates, replace static content with your framework's
                      template variables, and wire up routes/auth as usual. Community
                      Composer/Packagist packages exist for Laravel and Symfony, though they
                      typically lag the upstream version — verify they ship v4 before you depend on
                      them.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">React, Vue, Svelte, Angular?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      <p>
                        Workable but less natural. AdminLTE's JavaScript plugins use DOM lifecycle
                        hooks (<code>DOMContentLoaded</code>, MutationObserver patterns) which fight
                        with framework reconciliation. If you're using a SPA framework, consider:
                      </p>
                      <ul>
                        <li>
                          Using AdminLTE <em>only</em> for CSS — keep the visual style, but write
                          your own React/Vue components for the interactive parts.
                        </li>
                        <li>
                          Or pick a component library built for your framework (PrimeReact, Vuetify,
                          etc.).
                        </li>
                      </ul>
                      <p class="mb-0">
                        We don't recommend wrapping AdminLTE's jQuery-era plugins in SPA framework
                        components — it's a maintenance burden that outweighs the visual win.
                      </p>
                    </div>
                  </details>
                </div>
              </section>
              <section id="customization" class="faq-section" data-faq-section>
                <header class="faq-section-header faq-section-warning">
                  <span class="faq-section-icon">
                    <i class="bi bi-palette" aria-hidden="true"></i>
                  </span>
                  <div>
                    <h2 class="faq-section-title">Customization</h2>
                    <p class="faq-section-count">3 questions</p>
                  </div>
                </header>
                <div class="faq-section-items">
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">How do I change the primary colour?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      <p>
                        Override <code>--bs-primary</code> (and its RGB counterpart) on
                        <code>:root</code>:
                      </p>
                      <pre class="astro-code"><code>:root {
  --bs-primary: #6610f2;
  --bs-primary-rgb: 102, 16, 242;
}</code></pre>
                      <p class="mb-0">
                        For deeper control (sidebar width, breakpoints, spacing scale), see
                        <a href="/docs/customization">Customization &amp; Theming</a>.
                      </p>
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text"
                        >How do I add a date picker / multi-select / rich text editor?</span
                      >
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      AdminLTE deliberately doesn't bundle these — they'd bloat the framework. The
                      <a href="/docs/integrations">Recommended Integrations</a> page lists
                      best-in-class third-party libraries (Flatpickr, Tom Select, Quill, etc.) with
                      copy-paste install snippets.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text"
                        >Can I use FontAwesome instead of Bootstrap Icons?</span
                      >
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      Yes. Bootstrap Icons is the default in the demos because it's MIT, ships with
                      Bootstrap, and is SVG-based — but nothing in AdminLTE's CSS or JS requires it.
                      Drop in FontAwesome's stylesheet and replace
                      <code>&lt;i class="bi bi-x"&gt;</code> with
                      <code>&lt;i class="fas fa-x"&gt;</code> throughout.
                    </div>
                  </details>
                </div>
              </section>
              <section id="versions" class="faq-section" data-faq-section>
                <header class="faq-section-header faq-section-success">
                  <span class="faq-section-icon">
                    <i class="bi bi-arrow-clockwise" aria-hidden="true"></i>
                  </span>
                  <div>
                    <h2 class="faq-section-title">Versions and updates</h2>
                    <p class="faq-section-count">3 questions</p>
                  </div>
                </header>
                <div class="faq-section-items">
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">How do I get notified of new versions?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      <a href="https://github.com/ColorlibHQ/AdminLTE">Watch the GitHub repo</a>
                      (Releases-only mode) or subscribe to the RSS feed at
                      <code>https://github.com/ColorlibHQ/AdminLTE/releases.atom</code>.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Where's the AdminLTE 3 documentation?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      Still online at
                      <a href="https://adminlte.io/docs/3.2/">adminlte.io/docs/3.2</a> and earlier
                      versions are linked there. The v3 branch on GitHub continues to receive
                      critical bug fixes; new features land in v4 only.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">How do I upgrade from v3 to v4?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      See the dedicated <a href="/docs/migration">Migration from v3</a> guide. The
                      short version: class names changed (<code>.wrapper</code> →
                      <code>.app-wrapper</code>), <code>data-toggle</code> →
                      <code>data-bs-toggle</code>, dark mode uses <code>data-bs-theme</code> instead
                      of <code>.dark-mode</code>, and jQuery isn't required anymore.
                    </div>
                  </details>
                </div>
              </section>
              <section id="licensing" class="faq-section" data-faq-section>
                <header class="faq-section-header faq-section-secondary">
                  <span class="faq-section-icon">
                    <i class="bi bi-shield-check" aria-hidden="true"></i>
                  </span>
                  <div>
                    <h2 class="faq-section-title">Licensing</h2>
                    <p class="faq-section-count">3 questions</p>
                  </div>
                </header>
                <div class="faq-section-items">
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Is AdminLTE free for commercial use?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      Yes — MIT licensed. You can use it in commercial products, SaaS apps, client
                      work, anything. The only requirement is preserving the copyright notice in the
                      source files (<code>adminlte.css</code> / <code>adminlte.js</code>). You don't
                      need to display attribution in the UI.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Do I need to credit AdminLTE in my app?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      No. The MIT license requires you to keep the licence notice in the source
                      files you distribute — that's it. You don't have to mention AdminLTE in the
                      rendered UI, your About page, or your README.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Can I sell a product made with AdminLTE?</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      Yes. The MIT license explicitly permits this. You can also resell modified
                      versions of AdminLTE itself (theme marketplaces frequently do this) — just
                      preserve the original copyright notice.
                    </div>
                  </details>
                </div>
              </section>
              <section id="troubleshooting" class="faq-section" data-faq-section>
                <header class="faq-section-header faq-section-danger">
                  <span class="faq-section-icon">
                    <i class="bi bi-wrench-adjustable" aria-hidden="true"></i>
                  </span>
                  <div>
                    <h2 class="faq-section-title">Troubleshooting</h2>
                    <p class="faq-section-count">5 questions</p>
                  </div>
                </header>
                <div class="faq-section-items">
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text"
                        >The sidebar doesn't collapse when I click the hamburger menu.</span
                      >
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      Check that the PushMenu plugin is loaded. It's bundled into
                      <code>adminlte.js</code> — make sure the script tag is on the page and
                      <em>after</em> the markup it operates on. Also verify your hamburger button
                      has <code>data-lte-toggle="sidebar"</code> (not
                      <code>data-widget="pushmenu"</code>, which is the v3 attribute).
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text">Dark mode doesn't persist after refresh.</span>
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      The included <a href="/docs/color-mode">Color Mode</a> toggle writes to
                      <code>localStorage</code> under the key <code>lte-theme</code>. If you're
                      using a different toggle implementation, make sure it both sets
                      <code>document.documentElement.setAttribute('data-bs-theme', ...)</code> and
                      writes to localStorage on change.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text"
                        >Bootstrap modal closes when I press Escape, but the AdminLTE sidebar closes
                        too.</span
                      >
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      Fixed in v4.0.0 (#5993). If you're still seeing this, you're on an older RC —
                      update to the latest.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text"
                        >My custom SCSS doesn't override AdminLTE's defaults.</span
                      >
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      Put your overrides <em>before</em> the <code>@import</code> of AdminLTE's
                      SCSS. AdminLTE uses <code>!default</code> on its variables, which means the
                      first declaration wins. See
                      <a href="/docs/customization#scss-variables">Customization &amp; Theming</a>
                      for the import order.
                    </div>
                  </details>
                  <details class="faq-item" data-faq-item>
                    <summary>
                      <span class="faq-q-icon">
                        <i class="bi bi-question-lg" aria-hidden="true"></i>
                      </span>
                      <span class="faq-q-text"
                        ><code>npm install</code> fails with peer dependency errors.</span
                      >
                      <span class="faq-q-chevron">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </span>
                    </summary>
                    <div class="faq-answer">
                      We use an npm <code>overrides</code> block in <code>package.json</code> to
                      keep peers happy — make sure you're on npm 8.3+ which respects them. If you're
                      on an older npm, install with <code>--legacy-peer-deps</code>.
                    </div>
                  </details>
                </div>
              </section>
            </div>

            <!-- CTA footer -->
            <section class="faq-cta mt-5">
              <div class="faq-cta-icon">
                <i class="bi bi-chat-quote" aria-hidden="true"></i>
              </div>
              <h2>Still need help?</h2>
              <p>
                Open a discussion on GitHub or browse the documentation for more in-depth answers.
              </p>
              <div class="faq-cta-actions">
                <a
                  href="https://github.com/ColorlibHQ/AdminLTE/discussions"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-primary"
                >
                  <i class="bi bi-github me-2" aria-hidden="true"></i>
                  Open a Discussion
                </a>
                <a href="/docs/introduction" class="btn btn-outline-secondary">
                  <i class="bi bi-book me-2" aria-hidden="true"></i>
                  Browse Documentation
                </a>
              </div>
            </section>
  </LteAppContent>
</template>
