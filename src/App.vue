<script setup lang="ts">
import { computed } from 'vue'
import {
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  darkTheme,
} from 'naive-ui'
import Home from './components/Home.vue'
import { isDark } from './composables'

const getDarkTheme = computed(() => isDark.value ? darkTheme : undefined)
</script>

<template>
  <NConfigProvider :theme="getDarkTheme">
    <NLoadingBarProvider>
      <NMessageProvider>
        <NNotificationProvider>
          <NDialogProvider>
            <Home />
          </NDialogProvider>
        </NNotificationProvider>
      </NMessageProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
