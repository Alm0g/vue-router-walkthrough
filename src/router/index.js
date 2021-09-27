import { createRouter, createWebHistory } from 'vue-router'

// Guards
import globalGuard from './guards';

// Views
import publicRoutes from './modules/publicRoutes';
import jobsRoutes from './modules/jobsRoutes';

const routes = [
  ...publicRoutes,
  ...jobsRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Global Guard
router.beforeEach((to, from, next) => globalGuard(to, from, next));

export default router
