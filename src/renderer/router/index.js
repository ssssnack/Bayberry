import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: { name: 'movie' },
      component: require('@/views/main').default,
      children:[
        {
          path:"movie",
          name:"movie",
          component:()=> import('../views/movie/index.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
