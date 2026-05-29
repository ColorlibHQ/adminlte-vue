<template>
  <LteAppContent title="Maintenance" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'Maintenance' }]">
    <div class="text-center py-5">
      <h1 class="display-3 fw-bold text-info"><i class="bi bi-tools"></i></h1>
      <h3 class="mt-3">We&rsquo;ll be back soon!</h3>
      <p class="text-secondary">The site is under scheduled maintenance. Thanks for your patience.</p>
      <div class="row justify-content-center mt-4">
        <div class="col-md-6">
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Notify me when it's ready" />
            <LteButton theme="info" icon="bi-bell">Notify</LteButton>
          </div>
        </div>
      </div>
    </div>
  </LteAppContent>
</template>
