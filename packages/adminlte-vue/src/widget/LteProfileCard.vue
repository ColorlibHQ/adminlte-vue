<script setup lang="ts">
defineProps<{
  name: string
  image: string
  role?: string
  coverImage?: string
  stats?: Array<{ label: string; value: string | number }>
}>()
</script>

<template>
  <div class="card card-primary card-outline">
    <div class="card-body box-profile">
      <div
        v-if="coverImage"
        class="rounded-top mb-3"
        :style="{ height: '120px', background: `center/cover url(${coverImage})` }"
      ></div>
      <div class="text-center">
        <img
          :src="image"
          :alt="name"
          class="profile-user-img img-fluid img-circle rounded-circle shadow"
          width="100"
          height="100"
        />
      </div>
      <h3 class="profile-username text-center">{{ name }}</h3>
      <p v-if="role" class="text-body-secondary text-center">{{ role }}</p>

      <ul v-if="stats && stats.length" class="list-group list-group-unbordered mb-3">
        <li v-for="(stat, idx) in stats" :key="idx" class="list-group-item">
          <b>{{ stat.label }}</b> <span class="float-end">{{ stat.value }}</span>
        </li>
      </ul>

      <slot />
    </div>
  </div>
</template>
