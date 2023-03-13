import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Form from '../views/Form.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
