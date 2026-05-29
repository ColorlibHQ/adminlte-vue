<script setup lang="ts">
import { ref } from 'vue'

// useColorMode is provided by <LteDashboardLayout> (auto-imported by the module).
const { colorMode, resolvedMode, setColorMode } = useColorMode()

const accent = ref('#0d6efd')
const sidebarDark = ref(true)
</script>

<template>
  <LteAppContent title="Theme Generator" :breadcrumbs="[{ label: 'Theme Generator' }]">
    <div class="row">
      <div class="col-md-5">
        <LteCard title="Options">
          <label class="form-label">Color mode</label>
          <div class="btn-group d-flex mb-3" role="group">
            <button
              v-for="m in (['light', 'dark', 'auto'] as const)"
              :key="m"
              type="button"
              class="btn"
              :class="colorMode === m ? 'btn-primary' : 'btn-outline-primary'"
              @click="setColorMode(m)"
            >{{ m }}</button>
          </div>
          <LteInputColor v-model="accent" label="Accent color" />
          <LteInputSwitch v-model="sidebarDark" label="Dark sidebar" theme="primary" />
        </LteCard>
      </div>
      <div class="col-md-7">
        <LteCard title="Preview">
          <p>Current preference: <code>{{ colorMode }}</code> · resolved: <code>{{ resolvedMode }}</code></p>
          <div class="d-flex flex-wrap gap-2">
            <LteButton :style="{ backgroundColor: accent, borderColor: accent }" theme="primary">Accent button</LteButton>
            <span class="badge text-bg-primary align-self-center">Badge</span>
          </div>
          <LteProgress :value="65" theme="primary" show-label class="mt-3" />
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
