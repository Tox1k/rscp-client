import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import NProgress from 'vue-nprogress'

import nprogress from '@/utils/nprogress'

Vue.config.productionTip = false

Vue.use(NProgress)

new Vue({
  router,
  nprogress,
  render: h => h(App)
}).$mount('#app')
