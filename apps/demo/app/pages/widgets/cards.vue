<template>
  <LteAppContent title="Cards" :breadcrumbs="[{ label: 'Widgets', href: '#' }, { label: 'Cards' }]">
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Collapsible & maximizable" icon="bi-gear" collapsible maximizable removable>
          This card can be collapsed, maximized to fullscreen, and removed using its header tools.
        </LteCard>
        <LteCard title="Primary header" theme="primary">
          A card with a colored header (default variant).
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Outline" theme="success" variant="outline">
          A card with a colored top border (outline variant).
          <template #footer>Card footer content</template>
        </LteCard>
        <LteCard title="Solid" theme="info" variant="solid">
          A fully colored card (solid variant).
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
