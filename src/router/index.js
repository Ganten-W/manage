import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("../pages/login")
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import("../pages/manage"),
      children: [
        {
          path: '',
          component: ()=>import("../pages/home"),
          meta:[],
        },
        {
          path: '/goods-class',
          component: () => import("../pages/goodsClass"),
          meta:['商品','商品分类'],
        },
        {
          path: '/data-monitor',
          component: () => import("../pages/dataMonitor"),
          meta:['订单','数据监控'],
        }]
    }
  ]
})
