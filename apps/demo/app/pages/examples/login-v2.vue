<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <LteAuthLayout auth-type="login">
    <template #logo><i class="bi bi-shield-lock-fill text-primary me-1"></i><b>Admin</b>LTE</template>
    <p class="login-box-msg">Welcome back — please sign in</p>
    <form>
      <LteInput type="email" placeholder="Email" prepend="@" fgroup-class="mb-3" />
      <LteInput type="password" placeholder="Password" fgroup-class="mb-3" />
      <LteButton type="submit" theme="primary" block>Sign In</LteButton>
    </form>
    <div class="text-center mt-3">
      <a href="#" class="d-block">Forgot password?</a>
      <NuxtLink to="/examples/login">Back to classic login</NuxtLink>
    </div>
  </LteAuthLayout>
</template>
