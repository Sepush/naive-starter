<script setup lang="ts">
import {
  darkTheme,
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
} from 'naive-ui';
import { computed } from 'vue';
import Home from './components/Home.vue';
import { isDark } from './composables';

const getDarkTheme = computed(() => isDark.value ? darkTheme : undefined);
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
