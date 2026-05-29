<script setup lang="ts">
const files = [
  { name: 'design.fig', icon: 'bi-file-earmark-image', theme: 'primary', size: '2.3 MB' },
  { name: 'report.pdf', icon: 'bi-file-earmark-pdf', theme: 'danger', size: '1.1 MB' },
  { name: 'data.csv', icon: 'bi-file-earmark-spreadsheet', theme: 'success', size: '320 KB' },
  { name: 'notes.txt', icon: 'bi-file-earmark-text', theme: 'secondary', size: '12 KB' },
  { name: 'archive.zip', icon: 'bi-file-earmark-zip', theme: 'warning', size: '8.7 MB' },
  { name: 'video.mp4', icon: 'bi-file-earmark-play', theme: 'info', size: '45 MB' },
]
</script>

<template>
  <LteAppContent title="File Manager" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'File Manager' }]">
    <div class="row">
      <div class="col-md-3">
        <LteCard title="Folders">
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action active"><i class="bi bi-folder me-2"></i>Recent</a>
            <a href="#" class="list-group-item list-group-item-action"><i class="bi bi-star me-2"></i>Starred</a>
            <a href="#" class="list-group-item list-group-item-action"><i class="bi bi-share me-2"></i>Shared</a>
            <a href="#" class="list-group-item list-group-item-action"><i class="bi bi-trash me-2"></i>Trash</a>
          </div>
        </LteCard>
      </div>
      <div class="col-md-9">
        <LteCard title="Recent files">
          <div class="row g-3">
            <div v-for="file in files" :key="file.name" class="col-6 col-md-4 col-lg-3">
              <div class="border rounded p-3 text-center h-100">
                <i :class="['bi', file.icon, `text-${file.theme}`, 'fs-1']"></i>
                <p class="mb-0 mt-2 text-truncate">{{ file.name }}</p>
                <small class="text-secondary">{{ file.size }}</small>
              </div>
            </div>
          </div>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
