<template>
  <LteAppContent title="Small Box" :breadcrumbs="[{ label: 'Widgets', href: '#' }, { label: 'Small Box' }]">
    <div class="row">
      <div class="col-lg-3 col-6"><LteSmallBox title="150" text="New Orders" theme="primary" icon="bi-bag" url="#" /></div>
      <div class="col-lg-3 col-6"><LteSmallBox title="53%" text="Bounce Rate" theme="success" icon="bi-graph-up" url="#" /></div>
      <div class="col-lg-3 col-6"><LteSmallBox title="44" text="User Registrations" theme="warning" icon="bi-person-plus" url="#" /></div>
      <div class="col-lg-3 col-6"><LteSmallBox title="65" text="Unique Visitors" theme="danger" icon="bi-pie-chart" url="#" /></div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-6"><LteSmallBox title="150" text="Info" theme="info" icon="bi-info-circle" url="#" /></div>
      <div class="col-lg-3 col-6"><LteSmallBox title="53" text="Secondary" theme="secondary" icon="bi-gear" url="#" /></div>
      <div class="col-lg-3 col-6"><LteSmallBox title="44" text="Light" theme="light" icon="bi-sun" url="#" /></div>
      <div class="col-lg-3 col-6"><LteSmallBox title="65" text="Dark" theme="dark" icon="bi-moon" url="#" /></div>
    </div>
  </LteAppContent>
</template>
