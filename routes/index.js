
import NotFound from '../views/pages/404.vue'
import Home from '../views/pages/home.vue'
export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: NotFound,
    meta: { title: 'NotFound' }
  }
]
