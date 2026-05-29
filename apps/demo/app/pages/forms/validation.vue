<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errors = ref<{ email?: string; password?: string }>({})

function submit() {
  errors.value = {}
  if (!email.value.includes('@')) errors.value.email = 'Please enter a valid email.'
  if (password.value.length < 6) errors.value.password = 'Password must be at least 6 characters.'
}
</script>

<template>
  <LteAppContent title="Validation" :breadcrumbs="[{ label: 'Forms', href: '#' }, { label: 'Validation' }]">
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Reactive validation">
          <LteInput v-model="email" label="Email" type="email" :error="errors.email" placeholder="you@example.com" />
          <LteInput v-model="password" label="Password" type="password" :error="errors.password" />
          <LteButton theme="primary" @click="submit">Validate</LteButton>
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Bootstrap needs-validation">
          <p class="text-secondary">
            The dashboard layout auto-wires Bootstrap's <code>.needs-validation</code> behavior.
          </p>
          <form class="needs-validation" novalidate>
            <div class="mb-3">
              <label class="form-label">Username</label>
              <input type="text" class="form-control" required />
              <div class="invalid-feedback">Username is required.</div>
            </div>
            <LteButton type="submit" theme="primary">Submit</LteButton>
          </form>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
