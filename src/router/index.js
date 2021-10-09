import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    alias: '/home'
  },
  {
    path: '/opinions',
    name: 'Opinions',
    component: () => import(/* webpackChunkName: "Opinions" */ '../views/Opinions.vue')
  },
  {
    path: '/administration',
    component: () => import(/* webpackChunkName: "Administration" */ '../views/Administration.vue'),
    name: 'Administration',
  },
  {
    path: '/edit/:numOpinion',
    component: () => import(/* webpackChunkName: "Edit" */ '../views/Edit.vue'),
    name: 'Edit',
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router