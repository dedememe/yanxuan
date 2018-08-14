import Vue from 'vue'
import Router from 'vue-router'
import Distinguish from '../pages/Distinguish/Distinguish'
import Profile from '../pages/Profile/Profile'
import Msite from '../pages/Msite/Msite'
import Classification from '../pages/Classification/Classification'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    // {
    //   path: '/',
    //   redirect: '/msite'
    // },
    {
      path: '/classification',
      component: Classification
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/distinguish',
      component: Distinguish
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
