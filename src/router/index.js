import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/film/:id',
      name: 'film',
      component: ProductPage
    }
  ]
})
