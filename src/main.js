import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

import config from './config/config'

Vue.config.productionTip = false

Vue.use({
  install (Vue) {
    // Vue.prototype.$api = axios.create({
    //   // baseUrl: config.apiUrl
    // })
    Vue.prototype.$api = axios.create()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
