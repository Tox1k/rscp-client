import Vue from 'vue'
import Router from 'vue-router'

import OssecView from '@/views/ossec/ossec'
import SuricataView from '@/views/suricata/suricata'
import ClamavView from '@/views/clamav/clamav'

const loadView = view => () => import(`@/routes/${view}.vue`)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: loadView('root.route/root'),
    children: [{
      path: '',
      name: 'Root',
      redirect: {
        path: '/ossec/'
      }
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
