import type { App } from 'vue'
import { createPinia } from 'pinia'
import type { UserModule } from '~/types'

// https://pinia.esm.dev/
export const pinia = createPinia()

export const setup: UserModule = (app: App<Element>) => app.use(pinia)
