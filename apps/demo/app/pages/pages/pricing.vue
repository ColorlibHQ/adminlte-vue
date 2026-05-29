<script setup lang="ts">
const plans = [
  { name: 'Free', price: 0, theme: 'secondary', features: ['1 project', 'Community support', '1 GB storage'], featured: false },
  { name: 'Pro', price: 29, theme: 'primary', features: ['Unlimited projects', 'Priority support', '100 GB storage', 'Custom domain'], featured: true },
  { name: 'Enterprise', price: 99, theme: 'success', features: ['Everything in Pro', 'SLA & SSO', 'Unlimited storage', 'Dedicated manager'], featured: false },
] as const
</script>

<template>
  <LteAppContent title="Pricing" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'Pricing' }]">
    <div class="row justify-content-center">
      <div v-for="plan in plans" :key="plan.name" class="col-md-4">
        <LteCard :theme="plan.featured ? 'primary' : undefined" :variant="plan.featured ? 'outline' : 'default'">
          <div class="text-center">
            <h3>{{ plan.name }}</h3>
            <div class="display-5 fw-bold">${{ plan.price }}<small class="fs-6 text-secondary">/mo</small></div>
          </div>
          <ul class="list-group list-group-flush my-3">
            <li v-for="f in plan.features" :key="f" class="list-group-item">
              <i class="bi bi-check-lg text-success me-2"></i>{{ f }}
            </li>
          </ul>
          <LteButton :theme="plan.theme" block>Choose {{ plan.name }}</LteButton>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
