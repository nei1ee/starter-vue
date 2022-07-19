import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../locales/*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

export const setupI18n = (app: App<Element>) => app.use(i18n)
