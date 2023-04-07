// import { TOKEN } from '@/global/content'
// import { local } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/index.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/noPage/not-found.vue')
    }
  ]
})

const localRoute = [
  {
    path: '/main/analysis/overview',
    component: () => import('@/views/main/analysis/overview/overview.vue')
  },
  {
    path: '/main/analysis/dashboard',
    component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
  },
  {
    path: '/main/system/role',
    component: () => import('@/views/main/system/role/role.vue')
  },
  {
    path: '/main/system/user',
    component: () => import('@/views/main/system/user/user.vue')
  }
]

router.addRoute('main', localRoute[0])
router.addRoute('main', localRoute[1])
router.addRoute('main', localRoute[2])
router.addRoute('main', localRoute[3])

// router.beforeEach((to) => {
//   const token = local.getCache(TOKEN)
//   if (to.path.startsWith('/main') && !token) {
//     return "/login"
//   }
//   if (to.path === '/main' && token) {
//     return firstMenu?.url
//   }
// })

export default router
