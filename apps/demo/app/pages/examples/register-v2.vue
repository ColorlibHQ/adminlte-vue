<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <LteAuthLayout auth-type="register">
    <template #logo><i class="bi bi-person-plus-fill text-success me-1"></i><b>Admin</b>LTE</template>
    <p class="register-box-msg">Create your account</p>
    <form>
      <LteInput placeholder="Full name" fgroup-class="mb-3" />
      <LteInput type="email" placeholder="Email" prepend="@" fgroup-class="mb-3" />
      <LteInput type="password" placeholder="Password" fgroup-class="mb-3" />
      <LteButton type="submit" theme="success" block>Register</LteButton>
    </form>
    <NuxtLink to="/examples/register" class="text-center d-block mt-3">Back to classic register</NuxtLink>
  </LteAuthLayout>
</template>
