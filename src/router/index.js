import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/goodList',
    name: 'goodList',
    component: () => import('@/views/goodList.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/path/baojia1',
    name: 'baojia1',
    component: () => import('@/views/path/baojia1.vue')
  },
  {
    path: '/path/yufukuan1',
    name: 'yufukuan1',
    component: () => import('@/views/path/yufukuan1.vue')
  },
  {
    path: '/path/baojia1',
    name: 'baojia1',
    component: () => import('@/views/path/baojia1.vue')
  },
  {
    path: '/path/khxd1',
    name: 'khxd1',
    component: () => import('@/views/path/khxd1.vue')
  },
  {
    path: '/path/sheji1',
    name: 'sheji1',
    component: () => import('@/views/path/sheji1.vue')
  },
  {
    path: '/path/kehu1',
    name: 'kehu1',
    component: () => import('@/views/path/kehu1.vue')
  },
  {
    path: '/path/lianban1',
    name: 'lianban1',
    component: () => import('@/views/path/lianban1.vue')
  },
  {
    path: '/path/caigou1',
    name: 'caigou1',
    component: () => import('@/views/path/caigou1.vue')
  },
  {
    path: '/path/kucun1',
    name: 'kucun1',
    component: () => import('@/views/path/kucun1.vue')
  },
  {
    path: '/path/wanshan1',
    name: 'wanshan1',
    component: () => import('@/views/path/wanshan1.vue')
  },
  {
    path: '/path/shenhe1',
    name: 'shenhe1',
    component: () => import('@/views/path/shenhe1.vue')
  },
  {
    path: '/path/shenhe2',
    name: 'shenhe2',
    component: () => import('@/views/path/shenhe2.vue')
  },
  {
    path: '/path/daishou1',
    name: 'daishou1',
    component: () => import('@/views/path/daishou1.vue')
  },
  {
    path: '/path/chuzhi1',
    name: 'chuzhi1',
    component: () => import('@/views/path/chuzhi1.vue')
  },
  {
    path: '/path/chuban1',
    name: 'chuban1',
    component: () => import('@/views/path/chuban1.vue')
  },
  {
    path: '/path/yinshua1',
    name: 'yinshua1',
    component: () => import('@/views/path/yinshua1.vue')
  },
  {
    path: '/path/fahuo1',
    name: 'fahuo1',
    component: () => import('@/views/path/fahuo1.vue')
  },
  {
    path: '/path/dabao1',
    name: 'dabao1',
    component: () => import('@/views/path/dabao1.vue')
  },
  {
    path: '/path/hougong1',
    name: 'hougong1',
    component: () => import('@/views/path/hougong1.vue')
  },
  {
    path: '/path/yinshua2',
    name: 'yinshua2',
    component: () => import('@/views/path/yinshua2.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
