<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <LteAuthLayout auth-type="register">
    <template #logo><b>Admin</b>LTE</template>
    <p class="register-box-msg">Register a new membership</p>
    <form>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Full name" />
        <span class="input-group-text"><i class="bi bi-person"></i></span>
      </div>
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
            <input class="form-check-input" type="checkbox" id="agree" />
            <label class="form-check-label" for="agree">I agree to the terms</label>
          </div>
        </div>
        <div class="col-4"><LteButton type="submit" theme="primary" block>Register</LteButton></div>
      </div>
    </form>
    <NuxtLink to="/examples/login" class="text-center d-block mt-3">I already have a membership</NuxtLink>
  </LteAuthLayout>
</template>
