import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokedexView from '../views/PokedexView.vue'
import GameView from '../views/GameView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: PokedexView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },
  {
    path: '*',
    redirect: "/",
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes
})

export default router
