<script setup lang="ts">
import { ref } from 'vue'
const body = ref('<p>Write your message…</p>')
</script>

<template>
  <LteAppContent title="Compose" :breadcrumbs="[{ label: 'Mailbox', href: '/mailbox/inbox' }, { label: 'Compose' }]">
    <LteCard title="New message">
      <LteInput label="To" placeholder="recipient@example.com" />
      <LteInput label="Subject" placeholder="Subject" />
      <label class="form-label">Message</label>
      <ClientOnly>
        <LteEditor v-model="body" />
        <template #fallback><div class="border rounded p-3 text-secondary">Loading editor…</div></template>
      </ClientOnly>
      <template #footer>
        <LteButton theme="primary" icon="bi-send">Send</LteButton>
        <LteButton theme="secondary" outline icon="bi-paperclip" class="ms-2">Attach</LteButton>
      </template>
    </LteCard>
  </LteAppContent>
</template>
