<script setup lang="ts">
const mails = [
  { from: 'AdminLTE', subject: 'Welcome to AdminLTE Vue', time: '12:34', unread: true, star: true },
  { from: 'Jane Cooper', subject: 'Re: Project kickoff', time: 'Yesterday', unread: true, star: false },
  { from: 'Newsletter', subject: 'Weekly digest', time: '2 days', unread: false, star: false },
  { from: 'Robert Fox', subject: 'Invoice #007612', time: '3 days', unread: false, star: true },
]
</script>

<template>
  <LteAppContent title="Inbox" :breadcrumbs="[{ label: 'Mailbox', href: '#' }, { label: 'Inbox' }]">
    <div class="row">
      <div class="col-md-3">
        <NuxtLink to="/mailbox/compose" class="btn btn-primary w-100 mb-3"><i class="bi bi-pencil me-1"></i>Compose</NuxtLink>
        <LteCard title="Folders">
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action active"><i class="bi bi-inbox me-2"></i>Inbox <span class="badge text-bg-primary float-end">2</span></a>
            <a href="#" class="list-group-item list-group-item-action"><i class="bi bi-send me-2"></i>Sent</a>
            <a href="#" class="list-group-item list-group-item-action"><i class="bi bi-file-earmark me-2"></i>Drafts</a>
            <a href="#" class="list-group-item list-group-item-action"><i class="bi bi-trash me-2"></i>Trash</a>
          </div>
        </LteCard>
      </div>
      <div class="col-md-9">
        <LteCard title="Inbox">
          <table class="table table-hover mb-0">
            <tbody>
              <tr v-for="(m, idx) in mails" :key="idx" :class="{ 'fw-semibold': m.unread }">
                <td style="width: 40px"><i :class="['bi', m.star ? 'bi-star-fill text-warning' : 'bi-star text-secondary']"></i></td>
                <td style="width: 160px">{{ m.from }}</td>
                <td><NuxtLink to="/mailbox/read" class="text-decoration-none text-body">{{ m.subject }}</NuxtLink></td>
                <td class="text-end text-secondary">{{ m.time }}</td>
              </tr>
            </tbody>
          </table>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
