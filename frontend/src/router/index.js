import { createRouter, createWebHistory } from 'vue-router'
import QuizView from '../views/QuizView.vue'
import RulesView from '../views/RulesView.vue'
import ResultView from '../views/ResultView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: QuizView
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView
    },
    {
      path: '/result/:status',
      name: 'result',
      component: ResultView
    }
  ]
})

export default router
