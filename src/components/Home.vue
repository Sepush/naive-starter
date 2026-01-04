<script setup lang="ts">
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5';
import { NButton, NIcon, NLayout, NSpace } from 'naive-ui';
import { isDark, toggleDark } from '../composables';
</script>

<template>
  <NSpace>
    <NLayout>
      <div
        flex
        justify-center
        items-cetner
        w-screen
        h-screen
        gap-3
        m-3
      >
        <NButton @click="toggleDark()" w-10>
          <template #icon>
            <NIcon v-if="isDark" :component="SunnyOutline" />
            <NIcon v-else :component="MoonOutline" />
          </template>
        </NButton>
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
    </NLayout>
  </NSpace>
</template>
