import Vue from 'vue'
import Router from 'vue-router'
import Information from './views/Information.vue'
import GeneralFilter from './views/GeneralFilter.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/information/:id', component: Information },
    { path: '/', component: GeneralFilter },
    {
      path: "/*", redirect: "/"
    }
  ]
})

