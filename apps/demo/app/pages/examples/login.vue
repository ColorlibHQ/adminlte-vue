<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <LteAuthLayout auth-type="login">
    <template #logo><b>Admin</b>LTE</template>
    <p class="login-box-msg">Sign in to start your session</p>
    <form>
      <div class="input-group mb-3">
        <input type="email" class="form-control" placeholder="Email" />
        <span class="input-group-text"><i class="bi bi-envelope"></i></span>
      </div>
      <div class="input-group mb-3">
        <input type="password" class="form-control" placeholder="Password" />
        <span class="input-group-text"><i class="bi bi-lock"></i></span>
      </div>
      <div class="row">
        <div class="col-8">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="remember" />
            <label class="form-check-label" for="remember">Remember Me</label>
          </div>
        </div>
        <div class="col-4">
          <LteButton type="submit" theme="primary" block>Sign In</LteButton>
        </div>
      </div>
    </form>
    <p class="mb-1 mt-3"><a href="#">I forgot my password</a></p>
    <p class="mb-0"><NuxtLink to="/examples/register" class="text-center">Register a new membership</NuxtLink></p>
  </LteAuthLayout>
</template>
