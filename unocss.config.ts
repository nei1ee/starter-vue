import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  // gray-200 dark:gray-700
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-100',
    'bg-base': 'bg-white dark:bg-dark-300',
    'bg-base-soft': 'bg-white dark:bg-dark-100',
    'color-base': 'text-gray-700 dark:text-gray-300',
    'color-fade': 'text-gray-700:50 dark:text-gray-300:50',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
