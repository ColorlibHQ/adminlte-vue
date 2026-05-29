<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Right-aligned text. Hidden on extra-small screens. */
    rightText?: string
    year?: number | string
  }>(),
  { rightText: 'Anything you want', year: new Date().getFullYear() }
)
</script>

<template>
  <footer class="app-footer">
    <div v-if="rightText || $slots.right" class="float-end d-none d-sm-inline">
      <slot name="right">{{ rightText }}</slot>
    </div>
    <slot>
      <strong>
        Copyright &copy; 2014-{{ year }}&nbsp;
        <a href="https://adminlte.io" class="text-decoration-none">AdminLTE.io</a>.
      </strong>
      All rights reserved.
    </slot>
  </footer>
</template>
