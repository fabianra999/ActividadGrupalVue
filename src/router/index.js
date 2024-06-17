import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pag1 from '../views/Pag1.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/pag1',
    name: 'Pag1',
    component: Pag1
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;