<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center text-center vh-100 bg-body-tertiary">
    <h1 class="display-1 fw-bold text-primary">{{ error.statusCode }}</h1>
    <h3 class="mb-2">{{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}</h3>
    <p class="text-secondary">{{ error.message }}</p>
    <button class="btn btn-primary mt-2" @click="handleError">
      <i class="bi bi-house me-1"></i>Return Home
    </button>
  </div>
</template>
