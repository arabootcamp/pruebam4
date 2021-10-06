import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Opinions from '../views/Opinions.vue'
import Administration from '../views/Administration.vue'
import OpinionsTable from '../components/OpinionsTable.vue'
//import EditOpinion from '../components/EditOpinion.vue'
import NotFound from '../views/NotFound.vue'
//borrar
import EditOpinion from '../components/EditOpinion.vue'

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
    path: '/administration',
    component: Administration,
    redirect:'/notFound',
    children: [{
        path: 'table',
        component: OpinionsTable,
        name: 'OpinionsTable'
      },
      {
        path: 'edit/:numOpinion',
        component: EditOpinion,
        name: 'Edit',
        props: true
      },
      {
        path: '*',
        redirect:'/notFound'
      }
    ]
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