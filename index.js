import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import App from './App'
import VueScrollTo from 'vue-scrollto'
require('./styles/base.styl')

Vue.use(VueScrollTo)
Vue.use(Router)
Vue.config.productionTip=false
const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  router,
  render(h) {
    return h(App)
  }
}).$mount('#app')
