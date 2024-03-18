import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import '@/plugins/tailwind.css'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import App from './App.vue'
import store from './store'

const routes: any = [
  { path: '/', component: () => import('@/views/playground/Playground.vue') },
  { path: '/4-size', component: () => import('@/views/4-size/FourSizeIndex.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(store).mount('#app')
