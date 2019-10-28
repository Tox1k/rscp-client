import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '@/views/dashboard/dashboard'
import CatewayView from '@/views/gateway/gateway'
import IdsView from '@/views/ids/ids'
import AntivirusView from '@/views/antivirus/antivirus'
import ConfigView from '@/views/config/config'

const loadView = view => () => import(`@/routes/${view}.vue`)

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: loadView('root.route/root'),
  children: [{
    path: '',
    name: 'Root',
    redirect: {
      path: '/dashboard/'
    }
  }, {
    path: 'dashboard',
    name: 'DashboardView',
    component: DashboardView
  }, {
    path: 'gateway',
    name: 'CatewayView',
    component: CatewayView
  }, {
    path: 'ids',
    name: 'IdsView',
    component: IdsView
  }, {
    path: 'antivirus',
    name: 'AntivirusView',
    component: AntivirusView
  }, {
    path: 'config',
    name: 'ConfigView',
    component: ConfigView
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
