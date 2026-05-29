<template>
  <LteAppContent title="Read Mail" :breadcrumbs="[{ label: 'Mailbox', href: '/mailbox/inbox' }, { label: 'Read' }]">
    <LteCard title="Welcome to AdminLTE Vue">
      <div class="d-flex align-items-center mb-3">
        <img src="https://www.gravatar.com/avatar/?d=mp" class="rounded-circle me-2" width="40" height="40" alt="" />
        <div>
          <strong>AdminLTE</strong> <span class="text-secondary">&lt;hello@adminlte.io&gt;</span>
          <div class="text-secondary small">To: you@example.com · 12:34</div>
        </div>
      </div>
      <p>Hello,</p>
      <p>Thanks for trying the Vue / Nuxt port of AdminLTE. This message is rendered inside the
        mailbox read view, demonstrating cards and typography.</p>
      <p>Best,<br />The AdminLTE Team</p>
      <template #footer>
        <LteButton theme="primary" icon="bi-reply">Reply</LteButton>
        <LteButton theme="secondary" outline icon="bi-forward" class="ms-2">Forward</LteButton>
      </template>
    </LteCard>
  </LteAppContent>
</template>
