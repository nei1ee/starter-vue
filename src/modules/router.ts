import type { App } from 'vue'
import type { Router } from 'vue-router/auto'
import { createRouter, createWebHistory } from 'vue-router/auto'
import NProgress from 'nprogress'
import type { UserModule } from '~/types'

export const router: Router = createRouter({
  history: createWebHistory(),
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export const setup: UserModule = (app: App<Element>) => app.use(router)
