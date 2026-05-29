<script setup lang="ts">
import { ref } from 'vue'
const step = ref(0)
</script>

<template>
  <LteAppContent title="Wizard" :breadcrumbs="[{ label: 'Forms', href: '#' }, { label: 'Wizard' }]">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <LteCard title="Sign-up wizard">
          <LteWizard v-model="step" @finish="step = 0">
            <LteWizardStep id="account" title="Account" icon="bi-person">
              <LteInput label="Email" type="email" placeholder="you@example.com" />
              <LteInput label="Password" type="password" />
            </LteWizardStep>
            <LteWizardStep id="profile" title="Profile" icon="bi-card-text">
              <LteInput label="Full name" />
              <LteTextarea label="Bio" :rows="3" />
            </LteWizardStep>
            <LteWizardStep id="confirm" title="Confirm" icon="bi-check2-circle">
              <p>Review your details and finish.</p>
            </LteWizardStep>
          </LteWizard>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
