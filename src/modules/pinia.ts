import type { App } from 'vue'
import { createPinia } from 'pinia'

// Setup Pinia
// https://pinia.esm.dev/
const pinia = createPinia()

export const setupPinia = (app: App<Element>) => app.use(pinia)

