import Vue from 'vue'
import Router from 'vue-router'
// import Distinguish from '../pages/Distinguish/Distinguish'
import Profile from '../pages/Profile/Profile'
//
// import Msite from '../pages/Msite/Msite'
// import Classification from '../pages/Classification/Classification'
// import Cart from '../pages/Cart/Cart'
// import Login from '../pages/Login/Login'
// import s from '../pages/Interlayer/Interlayer'

//  路由懒加载 使用import()引入模块, webpack会对组件进行拆分(单独)打包(code split)
const Interlayer = () => import('../pages/Interlayer/Interlayer')
const Msite = () => import('../pages/Msite/Msite')
const Login = () => import('../pages/Login/Login')
const Cart = () => import('../pages/Cart/Cart')
const Classification = () => import('../pages/Classification/Classification')
const Distinguish = () => import('../pages/Distinguish/Distinguish')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/interlayer',
      component: Interlayer,
      meta: {
        showFoot: false
      }
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/',
      redirect: '/interlayer',
      meta: {
        showFoot: false
      }
    },
    {
      path: '/classification',
      component: Classification,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/distinguish',
      component: Distinguish,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFoot: false
      }
    }
  ]
})
