import { createRouter, createWebHistory } from 'vue-router'
import BoroughChart from '@/views/BoroughChart.vue'
import ContributingFactor from '@/views/ContributingFactor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BoroughChart',
      component: BoroughChart,
    },
    {
      path: '/factor',
      name: 'ContributingFactor',
      component: ContributingFactor,
    },
  ],
})

export default router
