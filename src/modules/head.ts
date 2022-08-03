import type { App } from 'vue'
import { createHead } from '@vueuse/head'
import type { UserModule } from '~/types'

export const head = createHead()

export const setup: UserModule = (app: App<Element>) => app.use(head)
