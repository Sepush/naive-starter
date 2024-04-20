<script setup lang="ts">
import { NButton, NIcon, NLayout, NSpace } from 'naive-ui'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'
import { isDark, toggleDark } from '../composables'
</script>

<template>
  <NSpace>
    <NLayout>
      <div class="page">
        <NButton @click="toggleDark()">
          <template #icon>
            <NIcon v-if="isDark" :component="SunnyOutline" />
            <NIcon v-else :component="MoonOutline" />
          </template>
        </NButton>
      </div>
    </NLayout>
  </NSpace>
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
