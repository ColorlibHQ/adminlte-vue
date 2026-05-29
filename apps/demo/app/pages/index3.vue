<template>
  <LteAppContent title="Dashboard v3" :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Dashboard v3' }]">
    <div class="row">
      <div class="col-md-3 col-6">
        <LteSmallBox title="8,390" text="Visitors" theme="info" icon="bi-people" url="#" />
      </div>
      <div class="col-md-3 col-6">
        <LteSmallBox title="2,390" text="Sales" theme="success" icon="bi-cart-check" url="#" />
      </div>
      <div class="col-md-3 col-6">
        <LteSmallBox title="932" text="Reviews" theme="warning" icon="bi-star" url="#" />
      </div>
      <div class="col-md-3 col-6">
        <LteSmallBox title="$48k" text="Revenue" theme="primary" icon="bi-currency-dollar" url="#" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Featured cards" theme="primary" variant="outline">
          <LteCallout theme="info" title="Tip">Cards support collapse, maximize and remove tools.</LteCallout>
          <LteRatings :value="4.5" show-text />
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Tasks">
          <LteProgressGroup label="Design" :value="60" theme="primary" />
          <LteProgressGroup label="Development" :value="40" theme="info" />
          <LteProgressGroup label="QA" :value="20" theme="warning" />
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
