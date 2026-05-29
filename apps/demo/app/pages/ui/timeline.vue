<template>
  <LteAppContent title="Timeline" :breadcrumbs="[{ label: 'UI', href: '#' }, { label: 'Timeline' }]">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <LteCard title="Activity">
          <LteTimeline
            :items="[
              { time: '12:05', icon: 'bi-envelope', iconTheme: 'primary', title: 'Support Team sent you an email', body: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles.' },
              { time: '5 mins ago', icon: 'bi-person', iconTheme: 'success', title: 'New user registered', footer: 'View profile' },
              { time: '27 mins ago', icon: 'bi-cart', iconTheme: 'warning', title: 'New order received' },
              { time: '2 hours ago', icon: 'bi-trash', iconTheme: 'danger', title: 'Deleted a comment' },
            ]"
          />
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
