import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }  // 添加这行
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 添加导航守卫
router.beforeEach((to: any, _from: any, next: any) => {
  const isAuthenticated = localStorage.getItem('LOGIN_PASSWORD')
  const correctPassword = import.meta.env.VITE_LOGIN_PASSWORD as string
  if (to.matched.some((record: any) => record.meta.requiresAuth) && isAuthenticated !== correctPassword) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router