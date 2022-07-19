import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import { setupHead } from './modules/head'
import { setupPinia } from './modules/pinia'
import { setupI18n } from './modules/i18n'
import { router, setupRouter } from './modules/router'

async function bootstrap() {
  const app = createApp(App)

  // Configure @vueuse/head
  setupHead(app)

  // Configure store
  setupPinia(app)

  // Multilingual configuration
  setupI18n(app)

  // Configure routing
  setupRouter(app)

  // Mount when the route is ready
  // https://next.router.vuejs.org/api/#isready
  await router.isReady()

  app.mount('#app', true)
}

bootstrap()
