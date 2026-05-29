<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const bio = ref('')
const fruit = ref('apple')
const notify = ref(true)
const color = ref('#0d6efd')
</script>

<template>
  <LteAppContent title="Form Elements" :breadcrumbs="[{ label: 'Forms', href: '#' }, { label: 'Elements' }]">
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Text inputs">
          <LteInput v-model="name" label="Name" placeholder="Enter your name" />
          <LteInput v-model="email" label="Email" type="email" prepend="@" placeholder="you@example.com" />
          <LteTextarea v-model="bio" label="Bio" :rows="3" placeholder="A short bio…" />
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Selects & toggles">
          <LteSelect
            v-model="fruit"
            label="Favorite fruit"
            :options="[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }, { value: 'cherry', label: 'Cherry' }]"
          />
          <LteInputColor v-model="color" label="Brand color" />
          <LteInputSwitch v-model="notify" label="Email notifications" theme="success" />
          <LteInputFile label="Attachment" />
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
