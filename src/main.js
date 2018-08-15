// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/rem'
import './mock/mockServer'
import store from '../src/store'

import VueLazyload from 'vue-lazyload'
import loading from './common/img/lazyload2.gif'
Vue.use(VueLazyload, {
  loading
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
