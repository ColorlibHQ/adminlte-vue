<template>
  <LteAppContent title="404 Error" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: '404' }]">
    <div class="text-center py-5">
      <h1 class="display-1 fw-bold text-warning"><i class="bi bi-exclamation-triangle"></i> 404</h1>
      <h3 class="mt-3">Oops! Page not found.</h3>
      <p class="text-secondary">We could not find the page you were looking for.</p>
      <NuxtLink to="/" class="btn btn-primary mt-2"><i class="bi bi-house me-1"></i>Return Home</NuxtLink>
    </div>
  </LteAppContent>
</template>
