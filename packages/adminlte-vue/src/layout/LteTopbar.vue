<script setup lang="ts">
import { computed } from 'vue'
import { useSidebar } from '../composables/use-sidebar'
import { useCommandPalette } from '../composables/use-command-palette'
import LteColorModeToggle from './LteColorModeToggle.vue'
import LteFullscreenToggle from './LteFullscreenToggle.vue'
import type { TopbarUser } from '../types/layout'
import { cn } from '../lib/class-name'

const props = withDefaults(
  defineProps<{
    user?: TopbarUser
    colorModeToggle?: boolean
    search?: boolean
    fullscreen?: boolean
    navbarClass?: string
  }>(),
  { colorModeToggle: true, search: true, fullscreen: true }
)

const emit = defineEmits<{ logout: []; profile: [] }>()

// Exposed to the `user-footer` slot so custom markup can raise the same events.
const onProfile = () => emit('profile')
const onLogout = () => emit('logout')

const { toggle } = useSidebar()
const commandPalette = useCommandPalette()

const resolvedUser = computed<TopbarUser>(
  () =>
    props.user ?? {
      name: 'Alexander Pierce',
      image: '/assets/img/user2-160x160.jpg',
      role: 'Web Developer',
      memberSince: 'Nov. 2023',
    }
)
</script>

<template>
  <nav :class="cn('app-header navbar navbar-expand bg-body', navbarClass)">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <button type="button" class="nav-link" title="Toggle sidebar" @click="toggle">
            <i class="bi bi-list"></i>
          </button>
        </li>
        <slot name="start" />
      </ul>

      <ul class="navbar-nav ms-auto">
        <li v-if="search" class="nav-item">
          <a class="nav-link" href="#" role="button" title="Search (⌘K)" @click.prevent="commandPalette?.open()">
            <i class="bi bi-search"></i>
          </a>
        </li>

        <slot name="end" />

        <LteFullscreenToggle v-if="fullscreen" />
        <LteColorModeToggle v-if="colorModeToggle" />

        <li class="nav-item dropdown user-menu">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" @click.prevent>
            <img :src="resolvedUser.image" class="user-image rounded-circle shadow" :alt="resolvedUser.name" />
            <span class="d-none d-md-inline">{{ resolvedUser.name }}</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <slot name="user-menu" :user="resolvedUser">
              <li class="user-header text-bg-primary">
                <slot name="user-header" :user="resolvedUser">
                  <img :src="resolvedUser.image" class="rounded-circle shadow" :alt="resolvedUser.name" />
                  <p>
                    {{ resolvedUser.name }}<template v-if="resolvedUser.role"> - {{ resolvedUser.role }}</template>
                    <small v-if="resolvedUser.memberSince">Member since {{ resolvedUser.memberSince }}</small>
                  </p>
                </slot>
              </li>
              <li class="user-body">
                <slot name="user-body" :user="resolvedUser">
                  <div class="row">
                    <div class="col-4 text-center"><a href="#">Followers</a></div>
                    <div class="col-4 text-center"><a href="#">Sales</a></div>
                    <div class="col-4 text-center"><a href="#">Friends</a></div>
                  </div>
                </slot>
              </li>
              <li class="user-footer">
                <slot name="user-footer" :user="resolvedUser" :profile="onProfile" :logout="onLogout">
                  <a href="#" class="btn btn-outline-secondary" @click.prevent="onProfile">Profile</a>
                  <a href="#" class="btn btn-outline-danger float-end" @click.prevent="onLogout">Sign out</a>
                </slot>
              </li>
            </slot>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
