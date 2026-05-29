<template>
  <LteAppContent title="FAQ" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'FAQ' }]">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <LteCard title="Frequently asked questions">
          <LteAccordion :model-value="'q1'">
            <LteAccordionItem id="q1" title="Is AdminLTE Vue free?" default-open>
              Yes — it's MIT licensed, like the original AdminLTE template.
            </LteAccordionItem>
            <LteAccordionItem id="q2" title="Does it work with plain Vite (no Nuxt)?">
              Absolutely. The core <code>adminlte-vue</code> library is framework-agnostic; the Nuxt
              module is an optional convenience layer.
            </LteAccordionItem>
            <LteAccordionItem id="q3" title="How is dark mode handled?">
              Via Bootstrap's native <code>data-bs-theme</code> attribute on <code>&lt;html&gt;</code>,
              with an SSR-safe blocking head script to avoid a flash.
            </LteAccordionItem>
            <LteAccordionItem id="q4" title="Can I use my own router links?">
              Yes — pass <code>linkComponent</code> (e.g. NuxtLink) to the dashboard layout.
            </LteAccordionItem>
          </LteAccordion>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
