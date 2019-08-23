import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: '首頁',
      path: '/abc',
      component: Home
    }
  ]
})
