<script setup lang="ts">
import { NButton, NIcon,NSpace,NLayout } from 'naive-ui'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'
import { isDark, toggleDark } from '../composables'
</script>

<template>
<n-space>
  <n-layout>
    <div class="page">
      <n-button @click="toggleDark()">
        <template #icon>
          <n-icon v-if="isDark" :component="SunnyOutline" />
          <n-icon v-else :component="MoonOutline" />
        </template>
      </n-button>
    </div>
  </n-layout>
</n-space>
</template>

<style>
.page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
}
</style>
