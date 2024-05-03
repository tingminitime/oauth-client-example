import Index from '~/pages/index.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('~/pages/member.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('~/pages/NotFound.vue'),
  },
]
