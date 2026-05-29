<template>
  <LteAppContent title="500 Error" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: '500' }]">
    <div class="text-center py-5">
      <h1 class="display-1 fw-bold text-danger"><i class="bi bi-bug"></i> 500</h1>
      <h3 class="mt-3">Oops! Something went wrong.</h3>
      <p class="text-secondary">We will work on fixing that right away. Meanwhile, you may return home.</p>
      <NuxtLink to="/" class="btn btn-primary mt-2"><i class="bi bi-house me-1"></i>Return Home</NuxtLink>
    </div>
  </LteAppContent>
</template>
