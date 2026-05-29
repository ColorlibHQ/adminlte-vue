<template>
  <LteAppContent title="Info Box" :breadcrumbs="[{ label: 'Widgets', href: '#' }, { label: 'Info Box' }]">
    <div class="row">
      <div class="col-md-6"><LteInfoBox title="1,410" text="Bookmarks" icon="bi-bookmark" theme="primary" /></div>
      <div class="col-md-6"><LteInfoBox title="410" text="Comments" icon="bi-chat" theme="danger" /></div>
      <div class="col-md-6"><LteInfoBox title="13,648" text="Uploads" icon="bi-cloud-upload" theme="success" :progress="70" progress-text="70% Increase in 30 Days" /></div>
      <div class="col-md-6"><LteInfoBox title="93,139" text="Likes" icon="bi-hand-thumbs-up" theme="warning" :progress="50" progress-text="50% Increase in 30 Days" /></div>
    </div>
  </LteAppContent>
</template>
