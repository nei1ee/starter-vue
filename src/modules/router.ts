import type { App } from 'vue'
import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import NProgress from 'nprogress'
import type { UserModule } from '~/types'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})

router.afterEach(() => { NProgress.done() })

export const setup: UserModule = (app: App<Element>) => app.use(router)

