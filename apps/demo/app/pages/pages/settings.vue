<script setup lang="ts">
import { ref } from 'vue'
const emailNotifs = ref(true)
const pushNotifs = ref(false)
const publicProfile = ref(true)
</script>

<template>
  <LteAppContent title="Settings" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'Settings' }]">
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Account">
          <LteInput label="Display name" model-value="Aigars Silkalns" />
          <LteInput label="Email" type="email" model-value="aigars@example.com" />
          <LteSelect label="Language" :options="[{ value: 'en', label: 'English' }, { value: 'lv', label: 'Latvian' }]" />
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Preferences">
          <LteInputSwitch v-model="emailNotifs" label="Email notifications" theme="success" />
          <LteInputSwitch v-model="pushNotifs" label="Push notifications" theme="primary" />
          <LteInputSwitch v-model="publicProfile" label="Public profile" theme="info" />
          <hr />
          <LteButton theme="primary">Save settings</LteButton>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
