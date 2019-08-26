import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import 'bootstrap'

import App from './App.vue'
import router from './router'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
axios.defaults.withCredentials = true

Vue.component('loading', Loading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next)
  if (to.meta.requiresAuth) {
    const api = 'https://vue-course-api.hexschool.io/api/user/check'
    axios.post(api).then(response => {
      console.log(response.data.success)
      if (response.data.success) {
        // vm.$router.push('/')
        next()
      } else {
        next('/login')
      }
    })
  } else {
    next()
  }
})
