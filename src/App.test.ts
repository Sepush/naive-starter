import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import App from './App.vue';

describe('App', () => {
  it('renders', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          NConfigProvider: true,
          NDialogProvider: true,
          NLoadingBarProvider: true,
          NMessageProvider: true,
          NNotificationProvider: true,
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
