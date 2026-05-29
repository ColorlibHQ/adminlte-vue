<template>
  <LteAppContent title="Profile" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'Profile' }]">
    <div class="row">
      <div class="col-md-3">
        <LteProfileCard
          name="Aigars Silkalns"
          image="https://www.gravatar.com/avatar/?d=mp"
          role="Software Engineer"
          :stats="[{ label: 'Followers', value: '1,322' }, { label: 'Following', value: 543 }, { label: 'Friends', value: '13,287' }]"
        >
          <LteButton theme="primary" block>Follow</LteButton>
        </LteProfileCard>
      </div>
      <div class="col-md-9">
        <LteCard>
          <LteTabs model-value="activity">
            <LteTab id="activity" title="Activity" icon="bi-activity">
              <LteTimeline
                :items="[
                  { time: '2 hours ago', icon: 'bi-chat', iconTheme: 'primary', title: 'Commented on a post' },
                  { time: 'Yesterday', icon: 'bi-upload', iconTheme: 'success', title: 'Uploaded 3 new photos' },
                ]"
              />
            </LteTab>
            <LteTab id="timeline" title="Timeline" icon="bi-clock-history">
              <p class="text-secondary">Timeline content goes here.</p>
            </LteTab>
            <LteTab id="settings" title="Settings" icon="bi-gear">
              <LteInput label="Name" model-value="Aigars Silkalns" />
              <LteInput label="Email" type="email" model-value="aigars@example.com" />
              <LteButton theme="primary">Save changes</LteButton>
            </LteTab>
          </LteTabs>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
