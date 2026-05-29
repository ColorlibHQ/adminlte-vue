<template>
  <LteAppContent title="Chat" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'Chat' }]">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <LteDirectChat
          title="Direct Chat"
          theme="primary"
          :messages="[
            { from: 'Alexander Pierce', image: 'https://www.gravatar.com/avatar/?d=mp', timestamp: '23 Jan 2:00 pm', text: 'Is this template really for free? That\'s unbelievable!' },
            { from: 'Sarah Bullock', image: 'https://www.gravatar.com/avatar/?d=mp', timestamp: '23 Jan 2:05 pm', text: 'You better believe it!', isOwn: true },
            { from: 'Alexander Pierce', image: 'https://www.gravatar.com/avatar/?d=mp', timestamp: '23 Jan 5:37 pm', text: 'Working with Vue + Nuxt now!' },
          ]"
          :contacts="[
            { name: 'Count Dracula', image: 'https://www.gravatar.com/avatar/?d=mp', date: '1/1/2024', preview: 'How have you been?' },
            { name: 'Sarah Doe', image: 'https://www.gravatar.com/avatar/?d=mp', date: '2/28/2024', preview: 'I will be by your side.' },
          ]"
        >
          <template #footer>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Type a message…" />
              <LteButton theme="primary" icon="bi-send">Send</LteButton>
            </div>
          </template>
        </LteDirectChat>
      </div>
    </div>
  </LteAppContent>
</template>
