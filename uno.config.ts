// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  rules: [
    ['max-h-screen', { 'max-height': 'calc(var(--vh, 1vh) * 100)' }],
    ['h-screen', { height: 'calc(var(--vh, 1vh) * 100)' }],
    ['border-hover-g', {
      'box-shadow': '0 0 0 1px green',
    }],
  ],
});
