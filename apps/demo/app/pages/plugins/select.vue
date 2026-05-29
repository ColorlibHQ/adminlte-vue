<script setup lang="ts">
import { ref } from 'vue'
const single = ref('vue')
const multi = ref<string[]>(['vue', 'nuxt'])
const opts = [
  { value: 'vue', text: 'Vue' },
  { value: 'nuxt', text: 'Nuxt' },
  { value: 'react', text: 'React' },
  { value: 'svelte', text: 'Svelte' },
  { value: 'angular', text: 'Angular' },
]
</script>

<template>
  <LteAppContent title="Select (Tom Select)" :breadcrumbs="[{ label: 'Plugins', href: '#' }, { label: 'Select' }]">
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Single select (searchable)">
          <ClientOnly>
            <LteInputTomSelect v-model="single" label="Framework" :options="opts" placeholder="Pick one" />
          </ClientOnly>
          <p class="text-secondary">Selected: <code>{{ single }}</code></p>
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Multi select (tags)">
          <ClientOnly>
            <LteInputTomSelect v-model="multi" label="Frameworks" :options="opts" multiple placeholder="Pick many" />
          </ClientOnly>
          <p class="text-secondary">Selected: <code>{{ multi }}</code></p>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
