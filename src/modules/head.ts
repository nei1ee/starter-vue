import type { App } from 'vue'
import { createHead } from '@vueuse/head'

export const head = createHead()

export const setupHead = (app: App<Element>) => app.use(head)
