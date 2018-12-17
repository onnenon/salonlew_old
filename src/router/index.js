import Vue from 'vue'
import Router from 'vue-router'

import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Services from '@/components/Services'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: AboutUs
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
