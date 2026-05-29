<script setup lang="ts">
const items = [
  { qty: 1, desc: 'AdminLTE Vue license', price: 99 },
  { qty: 2, desc: 'Priority support (months)', price: 49 },
  { qty: 5, desc: 'Custom component', price: 120 },
]
const total = items.reduce((s, i) => s + i.qty * i.price, 0)
</script>

<template>
  <LteAppContent title="Invoice" :breadcrumbs="[{ label: 'Pages', href: '#' }, { label: 'Invoice' }]">
    <LteCard>
      <div class="d-flex justify-content-between align-items-start mb-4">
        <h2><i class="bi bi-globe me-2"></i>AdminLTE, Inc.</h2>
        <div class="text-end">
          <h4>Invoice #007612</h4>
          <p class="text-secondary mb-0">Date: 2/05/2024</p>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead><tr><th>Qty</th><th>Description</th><th class="text-end">Price</th><th class="text-end">Subtotal</th></tr></thead>
          <tbody>
            <tr v-for="(it, idx) in items" :key="idx">
              <td>{{ it.qty }}</td><td>{{ it.desc }}</td>
              <td class="text-end">${{ it.price }}</td>
              <td class="text-end">${{ it.qty * it.price }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr><th colspan="3" class="text-end">Total</th><th class="text-end">${{ total }}</th></tr>
          </tfoot>
        </table>
      </div>
      <template #footer>
        <LteButton theme="primary" icon="bi-printer">Print</LteButton>
        <LteButton theme="success" icon="bi-credit-card" class="ms-2">Submit Payment</LteButton>
      </template>
    </LteCard>
  </LteAppContent>
</template>
