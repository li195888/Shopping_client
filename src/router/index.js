import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})