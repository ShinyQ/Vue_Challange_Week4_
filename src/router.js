import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/booking/:id',
      name: 'booking',
      component: () => import('./views/Booking.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
})
