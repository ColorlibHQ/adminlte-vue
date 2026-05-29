<template>
  <LteAppContent title="General UI" :breadcrumbs="[{ label: 'UI', href: '#' }, { label: 'General' }]">
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Alerts">
          <LteAlert theme="success" icon="bi-check-circle" title="Success!" dismissible>Your action completed.</LteAlert>
          <LteAlert theme="danger" icon="bi-x-circle" title="Error!">Something went wrong.</LteAlert>
          <LteAlert theme="warning" icon="bi-exclamation-triangle">A plain warning alert.</LteAlert>
        </LteCard>
        <LteCard title="Callouts">
          <LteCallout theme="info" title="Info">An informational callout.</LteCallout>
          <LteCallout theme="warning" title="Warning">A warning callout.</LteCallout>
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Buttons">
          <div class="d-flex flex-wrap gap-2 mb-3">
            <LteButton theme="primary">Primary</LteButton>
            <LteButton theme="success" icon="bi-check-lg">Save</LteButton>
            <LteButton theme="danger" outline>Outline</LteButton>
            <LteButton theme="warning" size="sm">Small</LteButton>
          </div>
        </LteCard>
        <LteCard title="Progress bars">
          <LteProgress :value="80" theme="primary" show-label class="mb-2" />
          <LteProgress :value="55" theme="success" striped animated show-label class="mb-2" />
          <LteProgress :value="35" theme="danger" show-label />
        </LteCard>
        <LteCard title="Ratings">
          <LteRatings :value="3.5" show-text />
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
