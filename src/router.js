import Vue from 'vue'
import Router from 'vue-router'

import DashboardView from '@/views/dashboard/dashboard'
import OssecView from '@/views/ossec/ossec'
import SuricataView from '@/views/suricata/suricata'
import ClamavView from '@/views/clamav/clamav'

const loadView = view => () => import(`@/routes/${view}.vue`)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
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
      path: 'ossec',
      name: 'OssecView',
      component: OssecView
    }, {
      path: 'suricata',
      name: 'SuricataView',
      component: SuricataView
    }, {
      path: 'clamav',
      name: 'ClamavView',
      component: ClamavView
    }]
  }]
})
