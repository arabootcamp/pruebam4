import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Opinions from '../views/Opinions.vue'
import Administration from '../views/Administration.vue'
import EditOpinion from '../components/EditOpinion.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home'
  },
  {
    path: '/opinions',
    name: 'Opinions',
    component: Opinions
  },
  {
    path: '/administration/:NumOpinion',
    name: 'Administration',
    component: Administration,
    children: [{
      path: 'editOpinion',
      component: EditOpinion,
      name: 'editOpinion'
    }, ]

  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router