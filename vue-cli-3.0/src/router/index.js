import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Home from '@/components/HelloWorld.vue'
import Page from '@/components/pages/page'
import child1 from '@/components/pages/child1'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'
import Menu from '@/components/pages/menu'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: '首頁',
      path: '/index',
      component: Home
    },
    {
      // name: '分頁',
      path: '/page',
      // component: Page,
      components: {
        default: Page,
        menu: Menu
      },
      children: [
        {
          name: '卡片1',
          path: '',
          component: child1
        },
        {
          name: '卡片2',
          path: 'child2',
          component: child2
        },
        {
          name: '卡片3',
          path: 'child3',
          component: child3
        }
      ]
    }
  ]
})
