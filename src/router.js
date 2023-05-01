import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/project1', name: 'Project 1', component: () => import('@/views/Project1.vue') },
  { path: '/project2', name: 'Project 2', component: () => import('@/views/Project2.vue') },
  { path: '/project3', name: 'Project 3', component: () => import('@/views/Project3.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
