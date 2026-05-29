<script setup lang="ts">
import { ref } from 'vue'
const list = ref(['Draft the spec', 'Build components', 'Write tests', 'Ship the release', 'Celebrate 🎉'])
</script>

<template>
  <LteAppContent title="Sortable" :breadcrumbs="[{ label: 'Plugins', href: '#' }, { label: 'Sortable' }]">
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Drag to reorder">
          <ClientOnly>
            <LteSortable v-model="list" tag="ul" class="list-group" :options="{ handle: '.handle' }">
              <li v-for="item in list" :key="item" class="list-group-item d-flex align-items-center">
                <i class="bi bi-grip-vertical handle me-2 text-secondary" style="cursor: grab"></i>
                {{ item }}
              </li>
            </LteSortable>
          </ClientOnly>
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Current order">
          <ol class="mb-0">
            <li v-for="item in list" :key="item">{{ item }}</li>
          </ol>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
