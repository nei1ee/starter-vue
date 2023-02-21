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
  shortcuts: {
    'u-bg': 'bg-gray-100 dark:bg-black',
    'u-bg-2': 'bg-white dark:bg-[#1C1C1E]',
    'u-border': 'border-[#EBEDF0] dark:border-[#3A3A3C]',
    'u-active': 'bg-[#F2F3F5] dark:!bg-[#3A3A3C]',
    'u-text-color': 'text-[#323233] dark:text-[#F5F5F5]',
    'u-text-color-2': 'text-[#969799] dark:text-[#707070]',
    'u-text-color-3': 'text-[#C8C9CC] dark:text-[#4D4D4D]',
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
