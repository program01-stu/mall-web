import Vue from 'vue'
import Router from 'vue-router'
// import Phone from '../components/routerCmp/phone.vue'
// import TV from '../components/routerCmp/TV.vue'
// import Computer from '../components/routerCmp/computer.vue'
// import Household from '../components/routerCmp/household.vue'
// import Clothes from '../components/routerCmp/clothes.vue'
// import Routers from '../components/routerCmp/routers.vue'
// import Electrity from '../components/routerCmp/electrity.vue'
// import Health from '../components/routerCmp/health.vue'
// import Audio from '../components/routerCmp/audio.vue'
// import Bag from '../components/routerCmp/bag.vue'
import Index from '../views/index.vue'
import Detail from '../views/detail.vue'
import Pay from '../views/Pay.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    // {
    //   path: '/phone',
    //   name: 'Phone',
    //   component: Phone
    // },
    // {
    //   path: '/TV',
    //   name: 'TV',
    //   component: TV
    // },
    // {
    //   path: '/computer',
    //   name: 'Computer',
    //   component: Computer
    // },
    // {
    //   path: '/household',
    //   name: 'Household',
    //   component: Household
    // },
    // {
    //   path: '/clothes',
    //   name: 'Clothes',
    //   component: Clothes
    // },
    // {
    //   path: '/routers',
    //   name: 'Routers',
    //   component: Routers
    // },
    // {
    //   path: '/electrity',
    //   name: 'Electrity',
    //   component: Electrity
    // },
    // {
    //   path: '/health',
    //   name: 'Health',
    //   component: Health
    // },
    // {
    //   path: '/audio',
    //   name: 'Audio',
    //   component: Audio
    // },
    // {
    //   path: '/bag',
    //   name: 'Bag',
    //   component: Bag
    // }
  ],
  mode:'history'
})
