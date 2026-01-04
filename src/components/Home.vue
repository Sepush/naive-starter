<script setup lang="ts">
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5';
import { NButton, NIcon, NLayout, NSpace } from 'naive-ui';
import { isDark, toggleDark } from '../composables';
</script>

<template>
  <n-space>
    <n-layout>
      <div
        flex
        justify-center
        items-cetner
        w-screen
        h-screen
        gap-3
        m-3
      >
        <n-button @click="toggleDark()" w-10>
          <template #icon>
            <n-icon v-if="isDark" :component="SunnyOutline" />
            <n-icon v-else :component="MoonOutline" />
          </template>
        </n-button>
        <div
          flex
          ustify-center
          items-center
          text-gray
          h-fit
          w-fit
          hover="border-hover-g"
        >
          <div class="i-logos-naiveui text-3xl" />
          Naïve UI with UnoCSS
        </div>
      </div>
    </n-layout>
  </n-space>
</template>
