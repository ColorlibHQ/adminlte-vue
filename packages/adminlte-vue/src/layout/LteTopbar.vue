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
        <li v-if="search" class="nav-item d-flex align-items-center me-2">
          <button
            type="button"
            class="btn btn-sm rounded-pill border bg-body-secondary text-secondary d-inline-flex align-items-center gap-2 px-3"
            title="Search (⌘K)"
            @click="commandPalette?.open()"
          >
            <i class="bi bi-search"></i>
            <span class="d-none d-md-inline">Search</span>
            <kbd class="d-none d-md-inline border rounded px-1 ms-1 bg-body text-body-secondary">⌘K</kbd>
          </button>
        </li>

        <slot name="end" />

        <LteFullscreenToggle v-if="fullscreen" />
        <LteColorModeToggle v-if="colorModeToggle" />

        <li class="nav-item dropdown user-menu">
          <button
            type="button"
            class="nav-link dropdown-toggle d-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            <img
              :src="resolvedUser.image"
              :alt="resolvedUser.name"
              class="user-image rounded-circle shadow"
              width="32"
              height="32"
            />
            <span class="d-none d-md-inline ms-2">{{ resolvedUser.name }}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <li class="user-header text-bg-primary">
              <img
                :src="resolvedUser.image"
                :alt="resolvedUser.name"
                class="rounded-circle shadow"
                width="80"
                height="80"
              />
              <p>
                {{ resolvedUser.name }}<template v-if="resolvedUser.role"> - {{ resolvedUser.role }}</template>
                <small v-if="resolvedUser.memberSince">Member since {{ resolvedUser.memberSince }}</small>
              </p>
            </li>
            <li class="user-body">
              <div class="row">
                <div class="col-4 text-center"><a href="#">Followers</a></div>
                <div class="col-4 text-center"><a href="#">Sales</a></div>
                <div class="col-4 text-center"><a href="#">Friends</a></div>
              </div>
            </li>
            <li class="user-footer">
              <a href="#" class="btn btn-outline-secondary">Profile</a>
              <a href="#" class="btn btn-outline-danger float-end">Sign out</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
