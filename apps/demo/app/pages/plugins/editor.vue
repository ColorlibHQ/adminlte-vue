<script setup lang="ts">
import { ref } from 'vue'
const content = ref('<h3>Hello from Quill 👋</h3><p>This is a rich-text editor wrapper.</p>')
</script>

<template>
  <LteAppContent title="Editor (Quill)" :breadcrumbs="[{ label: 'Plugins', href: '#' }, { label: 'Editor' }]">
    <div class="row">
      <div class="col-md-8">
        <LteCard title="Rich text editor">
          <ClientOnly>
            <LteEditor v-model="content" />
            <template #fallback><div class="border rounded p-3 text-secondary">Loading editor…</div></template>
          </ClientOnly>
        </LteCard>
      </div>
      <div class="col-md-4">
        <LteCard title="HTML output">
          <pre class="small mb-0" style="white-space: pre-wrap">{{ content }}</pre>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
