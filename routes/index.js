import App from '../views/App'
import NotFound from '../views/pages/404.vue'

export default [
  {
    path: '/',
    component: App
  },
  {
    path: '*',
    component: NotFound,
    meta: { title: 'NotFound' }
  }
]
