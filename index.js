import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import App from './App'
Vue.use(Router)
Vue.config.productionTip=false
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'owl'
})
new Vue({
  router,
  render(h) {
    return h(App)
  }
}).$mount('#app')
