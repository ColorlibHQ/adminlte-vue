<template>
  <LteAppContent title="Dashboard v2" :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Dashboard v2' }]">
    <div class="row">
      <div class="col-lg-3 col-6">
        <LteInfoBox title="1,410" text="Bookmarks" icon="bi-bookmark" theme="primary" />
      </div>
      <div class="col-lg-3 col-6">
        <LteInfoBox title="410" text="Comments" icon="bi-chat" theme="danger" />
      </div>
      <div class="col-lg-3 col-6">
        <LteInfoBox title="13,648" text="Uploads" icon="bi-cloud-upload" theme="success" />
      </div>
      <div class="col-lg-3 col-6">
        <LteInfoBox title="93,139" text="Likes" icon="bi-hand-thumbs-up" theme="warning" />
      </div>
    </div>
    <LteCard title="Monthly recap report" collapsible>
      <p class="text-secondary">A second dashboard variant focused on info boxes and reporting cards.</p>
      <div class="row">
        <div class="col-md-4"><LteProgress :value="80" theme="primary" show-label /></div>
        <div class="col-md-4"><LteProgress :value="55" theme="success" striped animated show-label /></div>
        <div class="col-md-4"><LteProgress :value="35" theme="danger" show-label /></div>
      </div>
    </LteCard>
  </LteAppContent>
</template>
