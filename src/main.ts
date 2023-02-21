import { createApp } from 'vue'
import App from './App.vue'
import type { UserModule } from './types'
import { router } from './modules/router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

async function bootstrap() {
  const app = createApp(App)

  // Configure @vueuse/head, pinia, multi-language, and router
  Object.values(
    import.meta.glob<{ setup: UserModule }>('./modules/*.ts', { eager: true }),
  ).forEach(m => m.setup?.(app))

  // Mount when the route is ready
  // https://next.router.vuejs.org/api/#isready
  await router.isReady()

  app.mount('#app', true)
}

await bootstrap()
