import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Characters from "@/views/Characters.vue";
import AboutView from "@/views/AboutView.vue";
import Season from "@/views/Season.vue";

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
    },
    {
      path:'/about',
      name: 'about',
      component: AboutView
    },
    {
      path:'/season',
      name:'season',
      component: Season
    }
  ]
})

export default router
