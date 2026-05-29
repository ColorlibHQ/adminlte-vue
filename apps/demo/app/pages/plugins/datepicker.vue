<script setup lang="ts">
import { ref } from 'vue'
const date = ref('')
const range = ref('')
</script>

<template>
  <LteAppContent title="Datepicker (Flatpickr)" :breadcrumbs="[{ label: 'Plugins', href: '#' }, { label: 'Datepicker' }]">
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Single date">
          <ClientOnly>
            <LteInputFlatpickr v-model="date" label="Pick a date" placeholder="Select date…" />
          </ClientOnly>
          <p class="text-secondary">Value: <code>{{ date || '—' }}</code></p>
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Date range + time">
          <ClientOnly>
            <LteInputFlatpickr v-model="range" label="Range" :options="{ mode: 'range', enableTime: true }" placeholder="Select range…" />
          </ClientOnly>
          <p class="text-secondary">Value: <code>{{ range || '—' }}</code></p>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
