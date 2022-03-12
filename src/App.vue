<script setup lang="ts">
import { computed } from 'vue'
import {
  NSpace,
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
<n-config-provider :theme="getDarkTheme">
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <Home />
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</n-config-provider>
</template>
