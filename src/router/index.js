import Vue from 'vue'
import VueRouter from 'vue-router'
import vInstructions from '@/pages/instructions.vue'
import vSearch from '@/pages/search.vue'
import Catalog from '@/pages/Catalog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Instructions',
    component: vInstructions
  },
  {
    path: '/busca',
    name: 'Search',
    component: vSearch
  },
  {
    path:'/catalog',
    name:'Catalogo',
    component: Catalog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
