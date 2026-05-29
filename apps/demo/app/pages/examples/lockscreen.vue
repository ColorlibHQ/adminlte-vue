<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <LteAuthLayout auth-type="login">
    <template #logo><b>Admin</b>LTE</template>
    <div class="text-center mb-3">
      <img src="https://www.gravatar.com/avatar/?d=mp" class="rounded-circle shadow" width="90" height="90" alt="avatar" />
      <h5 class="mt-2 mb-0">Aigars Silkalns</h5>
      <small class="text-secondary">Enter your password to unlock</small>
    </div>
    <form>
      <div class="input-group mb-3">
        <input type="password" class="form-control" placeholder="Password" />
        <LteButton type="submit" theme="primary" icon="bi-arrow-right" />
      </div>
    </form>
    <NuxtLink to="/examples/login" class="text-center d-block">Or sign in as a different user</NuxtLink>
  </LteAuthLayout>
</template>
