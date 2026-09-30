<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Recommended Integrations'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Recommended Integrations' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      AdminLTE deliberately ships a lean dependency tree. Rather than bundling every
                      form widget or chart library, we recommend best-in-class third-party libraries
                      you can drop in when you need them. Every library below is
                      <strong>MIT-licensed</strong>, <strong>actively maintained</strong>, and
                      <strong>jQuery-free</strong>.
                    </p>
                    <p>
                      Each section has a CDN-based “install” snippet and the minimum JavaScript
                      needed to wire it up. You can swap CDN URLs for npm installs if you’re using a
                      bundler.
                    </p>
                    <blockquote>
                      <p>
                        <strong>About the version numbers below:</strong> every CDN URL pins a
                        specific version (eg. <code>@4.6.13</code>) so the snippets stay
                        reproducible. They were current as of the latest release, but third-party
                        libraries publish new versions independently of AdminLTE. Before copying a
                        snippet into production, check the library’s homepage (linked in each
                        section) for the latest version — and consider hosting a copy yourself
                        rather than relying on the CDN long-term.
                      </p>
                    </blockquote>
                    <h5 id="form-widgets">Form widgets</h5>
                    <h6 id="date--time-picker--flatpickr">Date / time picker — Flatpickr</h6>
                    <p>
                      <a href="https://flatpickr.js.org/">Flatpickr</a> is a lightweight,
                      no-dependency date and time picker.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/flatpickr@4.6.13"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">input</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"text"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"form-control"</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"datepicker"</span><span style="color:#9CDCFE"> placeholder</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Select a date"</span><span style="color:#808080"> /></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#DCDCAA">  flatpickr</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"#datepicker"</span><span style="color:#D4D4D4">, {</span></span>
<span class="line"><span style="color:#9CDCFE">    altInput:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    altFormat:</span><span style="color:#CE9178"> "F j, Y"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    dateFormat:</span><span style="color:#CE9178"> "Y-m-d"</span></span>
<span class="line"><span style="color:#D4D4D4">  })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Supports date ranges, time-only mode, multiple dates, and i18n out of the box.
                    </p>
                    <h6 id="multi-select--tag-input--tom-select">
                      Multi-select / tag input — Tom Select
                    </h6>
                    <p>
                      <a href="https://tom-select.js.org/">Tom Select</a> is a vanilla-JS rewrite of
                      Selectize. Great fit for searchable selects, tag inputs, and remote-data
                      autocomplete.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/tom-select@2.6.1/dist/css/tom-select.bootstrap5.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/tom-select@2.6.1/dist/js/tom-select.complete.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">select</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"tags"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"form-control"</span><span style="color:#9CDCFE"> multiple</span><span style="color:#9CDCFE"> placeholder</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Pick some tags"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">option</span><span style="color:#9CDCFE"> value</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"design"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Design</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">option</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">option</span><span style="color:#9CDCFE"> value</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dev"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Development</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">option</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">option</span><span style="color:#9CDCFE"> value</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"qa"</span><span style="color:#808080">></span><span style="color:#D4D4D4">QA</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">option</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">select</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#DCDCAA"> TomSelect</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"#tags"</span><span style="color:#D4D4D4">, { </span><span style="color:#9CDCFE">plugins:</span><span style="color:#D4D4D4"> [</span><span style="color:#CE9178">"remove_button"</span><span style="color:#D4D4D4">] })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Ships a <code>tom-select.bootstrap5.min.css</code> theme that matches
                      Bootstrap form controls.
                    </p>
                    <h6 id="range-slider--nouislider">Range slider — noUiSlider</h6>
                    <p>
                      <a href="https://refreshless.com/nouislider/">noUiSlider</a> handles single,
                      range, and multi-handle sliders with no dependencies.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/nouislider@15.8.1/dist/nouislider.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/nouislider@15.8.1/dist/nouislider.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"slider"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#9CDCFE">  noUiSlider</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">create</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"slider"</span><span style="color:#D4D4D4">), {</span></span>
<span class="line"><span style="color:#9CDCFE">    start:</span><span style="color:#D4D4D4"> [</span><span style="color:#B5CEA8">20</span><span style="color:#D4D4D4">, </span><span style="color:#B5CEA8">80</span><span style="color:#D4D4D4">],</span></span>
<span class="line"><span style="color:#9CDCFE">    connect:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    range:</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">min:</span><span style="color:#B5CEA8"> 0</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">max:</span><span style="color:#B5CEA8"> 100</span><span style="color:#D4D4D4"> }</span></span>
<span class="line"><span style="color:#D4D4D4">  })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h6 id="color-picker--pickr">Color picker — Pickr</h6>
                    <p>
                      <a href="https://github.com/Simonwep/pickr">Pickr</a> is a flat, modern color
                      picker with multiple themes.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/@simonwep/pickr@1.9.1/dist/themes/classic.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/@simonwep/pickr@1.9.1/dist/pickr.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"color-picker"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#9CDCFE">  Pickr</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">create</span><span style="color:#D4D4D4">({</span></span>
<span class="line"><span style="color:#9CDCFE">    el:</span><span style="color:#CE9178"> "#color-picker"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    theme:</span><span style="color:#CE9178"> "classic"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    default:</span><span style="color:#CE9178"> "#0d6efd"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    components:</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">preview:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">opacity:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">hue:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">interaction:</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">input:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">save:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4"> } }</span></span>
<span class="line"><span style="color:#D4D4D4">  })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h6 id="input-mask--imask">Input mask — IMask</h6>
                    <p>
                      <a href="https://imask.js.org/">IMask</a> handles phone numbers, credit cards,
                      dates, currency — anything with a fixed pattern.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/imask@7.6.1/dist/imask.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">input</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"form-control"</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"phone"</span><span style="color:#9CDCFE"> placeholder</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"(123) 456-7890"</span><span style="color:#808080"> /></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#DCDCAA">  IMask</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"phone"</span><span style="color:#D4D4D4">), { </span><span style="color:#9CDCFE">mask:</span><span style="color:#CE9178"> "(000) 000-0000"</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="file-handling">File handling</h5>
                    <h6 id="file-uploader--dropzone">File uploader — Dropzone</h6>
                    <p>
                      <a href="https://www.dropzone.dev/">Dropzone</a> is the de-facto drag-and-drop
                      uploader. The v6 rewrite is plain JavaScript (the older v5 had jQuery-coupled
                      examples; v6+ does not).
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/dropzone@6.0.0-beta.2/dist/dropzone.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/dropzone@6.0.0-beta.2/dist/dropzone-min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">form</span><span style="color:#9CDCFE"> action</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/upload"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropzone"</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"uploader"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">form</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#9CDCFE">  Dropzone</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">autoDiscover</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">false</span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#DCDCAA"> Dropzone</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"#uploader"</span><span style="color:#D4D4D4">, { </span><span style="color:#9CDCFE">paramName:</span><span style="color:#CE9178"> "file"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">maxFilesize:</span><span style="color:#B5CEA8"> 5</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h6 id="file-uploader--filepond">File uploader — FilePond</h6>
                    <p>
                      <a href="https://pqina.nl/filepond/">FilePond</a> is a more modern alternative
                      with a polished UX and a plugin system for image preview, validation, EXIF,
                      etc.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/filepond@4.32.12/dist/filepond.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/filepond@4.32.12/dist/filepond.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">input</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"file"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"filepond"</span><span style="color:#808080"> /></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#9CDCFE">  FilePond</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">create</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">".filepond"</span><span style="color:#D4D4D4">), { </span><span style="color:#9CDCFE">allowMultiple:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="rich-text--markdown-editors">Rich text &amp; markdown editors</h5>
                    <h6 id="rich-text--quill">Rich text — Quill</h6>
                    <p>
                      <a href="https://quilljs.com/">Quill</a> is the best-supported open-source
                      WYSIWYG editor. Lightweight, modular, no dependencies.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"editor"</span><span style="color:#9CDCFE"> style</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"height: 12rem;"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#DCDCAA"> Quill</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"#editor"</span><span style="color:#D4D4D4">, {</span></span>
<span class="line"><span style="color:#9CDCFE">    theme:</span><span style="color:#CE9178"> "snow"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    placeholder:</span><span style="color:#CE9178"> "Write something fancy&#x26;hellip;"</span></span>
<span class="line"><span style="color:#D4D4D4">  })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h6 id="markdown--easymde">Markdown — EasyMDE</h6>
                    <p>
                      <a href="https://github.com/Ionaru/easy-markdown-editor">EasyMDE</a> is the
                      actively-maintained fork of SimpleMDE. Same look, same API, but still gets
                      updates.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/easymde@2.21.0/dist/easymde.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/easymde@2.21.0/dist/easymde.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">textarea</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"markdown"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">textarea</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#DCDCAA"> EasyMDE</span><span style="color:#D4D4D4">({ </span><span style="color:#9CDCFE">element:</span><span style="color:#9CDCFE"> document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"markdown"</span><span style="color:#D4D4D4">) })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h6 id="wysiwyg--markdown--toast-ui-editor">
                      WYSIWYG + Markdown — Toast UI Editor
                    </h6>
                    <p>
                      <a href="https://ui.toast.com/tui-editor">Toast UI Editor</a> supports both
                      markdown and WYSIWYG modes side-by-side. Best when you want users to pick
                      their preferred mode.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://uicdn.toast.com/editor/latest/toastui-editor.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"md-editor"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#9CDCFE"> toastui</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">Editor</span><span style="color:#D4D4D4">({</span></span>
<span class="line"><span style="color:#9CDCFE">    el:</span><span style="color:#9CDCFE"> document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"md-editor"</span><span style="color:#D4D4D4">),</span></span>
<span class="line"><span style="color:#9CDCFE">    height:</span><span style="color:#CE9178"> "20rem"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    initialEditType:</span><span style="color:#CE9178"> "markdown"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    previewStyle:</span><span style="color:#CE9178"> "vertical"</span></span>
<span class="line"><span style="color:#D4D4D4">  })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="charts">Charts</h5>
                    <h6 id="chartjs">Chart.js</h6>
                    <p>
                      <a href="https://www.chartjs.org/">Chart.js</a> is the chart library used in
                      the AdminLTE Vue dashboards. Canvas-based, very wide chart-type support, MIT.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/chart.js@4.5.1"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">canvas</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bar-chart"</span><span style="color:#9CDCFE"> height</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"120"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">canvas</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#DCDCAA"> Chart</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"bar-chart"</span><span style="color:#D4D4D4">), {</span></span>
<span class="line"><span style="color:#9CDCFE">    type:</span><span style="color:#CE9178"> "bar"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    data:</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">      labels:</span><span style="color:#D4D4D4"> [</span><span style="color:#CE9178">"Q1"</span><span style="color:#D4D4D4">, </span><span style="color:#CE9178">"Q2"</span><span style="color:#D4D4D4">, </span><span style="color:#CE9178">"Q3"</span><span style="color:#D4D4D4">, </span><span style="color:#CE9178">"Q4"</span><span style="color:#D4D4D4">],</span></span>
<span class="line"><span style="color:#9CDCFE">      datasets:</span><span style="color:#D4D4D4"> [{ </span><span style="color:#9CDCFE">label:</span><span style="color:#CE9178"> "Revenue"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">data:</span><span style="color:#D4D4D4"> [</span><span style="color:#B5CEA8">120</span><span style="color:#D4D4D4">, </span><span style="color:#B5CEA8">190</span><span style="color:#D4D4D4">, </span><span style="color:#B5CEA8">170</span><span style="color:#D4D4D4">, </span><span style="color:#B5CEA8">230</span><span style="color:#D4D4D4">] }]</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#D4D4D4">  })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="data-tables">Data tables</h5>
                    <h6 id="tabulator">Tabulator</h6>
                    <p>
                      <a href="https://tabulator.info/">Tabulator</a> is the jQuery-free DataTables
                      alternative used in <code>tables/data.html</code>. Sort, filter, paginate,
                      edit, export — all built in.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/tabulator-tables@6.4.0/dist/css/tabulator_bootstrap5.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/tabulator-tables@6.4.0/dist/js/tabulator.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"table"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#DCDCAA"> Tabulator</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"#table"</span><span style="color:#D4D4D4">, {</span></span>
<span class="line"><span style="color:#9CDCFE">    data:</span><span style="color:#D4D4D4"> [{ </span><span style="color:#9CDCFE">id:</span><span style="color:#B5CEA8"> 1</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">name:</span><span style="color:#CE9178"> "Alice"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">role:</span><span style="color:#CE9178"> "Admin"</span><span style="color:#D4D4D4"> }],</span></span>
<span class="line"><span style="color:#9CDCFE">    layout:</span><span style="color:#CE9178"> "fitColumns"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    pagination:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    paginationSize:</span><span style="color:#B5CEA8"> 10</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    columns:</span><span style="color:#D4D4D4"> [</span></span>
<span class="line"><span style="color:#D4D4D4">      { </span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178"> "ID"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">field:</span><span style="color:#CE9178"> "id"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">width:</span><span style="color:#B5CEA8"> 60</span><span style="color:#D4D4D4"> },</span></span>
<span class="line"><span style="color:#D4D4D4">      { </span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178"> "Name"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">field:</span><span style="color:#CE9178"> "name"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">headerFilter:</span><span style="color:#CE9178"> "input"</span><span style="color:#D4D4D4"> },</span></span>
<span class="line"><span style="color:#D4D4D4">      { </span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178"> "Role"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">field:</span><span style="color:#CE9178"> "role"</span><span style="color:#D4D4D4"> }</span></span>
<span class="line"><span style="color:#D4D4D4">    ]</span></span>
<span class="line"><span style="color:#D4D4D4">  })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="calendar">Calendar</h5>
                    <h6 id="fullcalendar">FullCalendar</h6>
                    <p>
                      <a href="https://fullcalendar.io/">FullCalendar</a> is the calendar used in
                      <code>pages/calendar.html</code>. Drag-and-drop scheduling, multiple views,
                      recurrence, MIT.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/fullcalendar@6.1.20/index.global.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"calendar"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#9CDCFE"> FullCalendar</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">Calendar</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"calendar"</span><span style="color:#D4D4D4">), {</span></span>
<span class="line"><span style="color:#9CDCFE">    initialView:</span><span style="color:#CE9178"> "dayGridMonth"</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">    headerToolbar:</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">start:</span><span style="color:#CE9178"> "prev,next today"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">center:</span><span style="color:#CE9178"> "title"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">end:</span><span style="color:#CE9178"> "dayGridMonth,timeGridWeek,listWeek"</span><span style="color:#D4D4D4"> },</span></span>
<span class="line"><span style="color:#9CDCFE">    events:</span><span style="color:#D4D4D4"> [{ </span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178"> "Team standup"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">start:</span><span style="color:#CE9178"> "2026-06-01"</span><span style="color:#D4D4D4"> }]</span></span>
<span class="line"><span style="color:#D4D4D4">  }).</span><span style="color:#DCDCAA">render</span><span style="color:#D4D4D4">()</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="drag-and-drop">Drag and drop</h5>
                    <h6 id="sortablejs">SortableJS</h6>
                    <p>
                      <a href="https://sortablejs.github.io/Sortable/">SortableJS</a> powers the
                      kanban board demo. Reorder lists, drag between lists, touch-friendly. 31k
                      stars.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/sortablejs@1.15.7/Sortable.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"list"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"list-group"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"list-group-item"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Item 1</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"list-group-item"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Item 2</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"list-group-item"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Item 3</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#DCDCAA"> Sortable</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"list"</span><span style="color:#D4D4D4">), { </span><span style="color:#9CDCFE">animation:</span><span style="color:#B5CEA8"> 150</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="lightbox--image-viewer">Lightbox / image viewer</h5>
                    <h6 id="glightbox">GLightbox</h6>
                    <p>
                      <a href="https://biati-digital.github.io/glightbox/">GLightbox</a> is a
                      vanilla-JS lightbox for images, videos, and inline content.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">link</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"stylesheet"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/glightbox@3.3.1/dist/css/glightbox.min.css"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://cdn.jsdelivr.net/npm/glightbox@3.3.1/dist/js/glightbox.min.js"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"image-large.jpg"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"glightbox"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">img</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"image-thumb.jpg"</span><span style="color:#9CDCFE"> alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Click to enlarge"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#DCDCAA">  GLightbox</span><span style="color:#D4D4D4">()</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="icon-libraries">Icon libraries</h5>
                    <p>
                      AdminLTE ships
                      <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a> by default —
                      they’re SVG-based, ~1,900 icons, and used throughout the demo. If you need
                      more, these all work alongside AdminLTE:
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Library</th>
                          <th>Icons</th>
                          <th>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="https://icons.getbootstrap.com/">Bootstrap Icons</a></td>
                          <td>1,900+</td>
                          <td>Default, SVG, MIT</td>
                        </tr>
                        <tr>
                          <td><a href="https://lucide.dev/">Lucide</a></td>
                          <td>1,500+</td>
                          <td>Modern, SVG, ISC, very consistent style</td>
                        </tr>
                        <tr>
                          <td><a href="https://tabler.io/icons">Tabler Icons</a></td>
                          <td>5,800+</td>
                          <td>MIT, broadest free set available</td>
                        </tr>
                        <tr>
                          <td><a href="https://fonts.google.com/icons">Material Symbols</a></td>
                          <td>3,500+</td>
                          <td>Google, Apache 2.0, variable font</td>
                        </tr>
                        <tr>
                          <td><a href="https://fontawesome.com/icons">FontAwesome Free</a></td>
                          <td>2,000+ free</td>
                          <td>Most-recognized, font-based</td>
                        </tr>
                        <tr>
                          <td><a href="https://phosphoricons.com/">Phosphor</a></td>
                          <td>6,000+</td>
                          <td>MIT, six weights</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>Mix and match — they all coexist.</p>
                    <h5 id="a-note-on-bundling">A note on bundling</h5>
                    <p>
                      The examples above use jsDelivr CDNs for copy-paste convenience. For
                      production use, prefer:
                    </p>
                    <ol>
                      <li>
                        <strong>npm install + bundler</strong> (Vite, Webpack, Rollup) — best for
                        tree-shaking and version locking
                      </li>
                      <li>
                        <strong>Self-host</strong> the minified bundles — avoids CDN downtime as a
                        failure mode
                      </li>
                      <li>
                        <strong>CDN with <code>integrity</code> hashes</strong> — fine for
                        prototypes and demos
                      </li>
                    </ol>
                    <p>
                      AdminLTE doesn’t ship any of these libraries — keeping the framework’s
                      footprint small is intentional. Pick what you need, skip what you don’t.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
