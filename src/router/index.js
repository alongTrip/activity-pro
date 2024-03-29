import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
import Activity from '../views/Activity.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Activity',
    component: Activity
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
