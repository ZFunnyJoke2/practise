import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Characters from "@/views/Characters.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    }
  ]
})

export default router
