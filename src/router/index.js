import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pag1 from '../views/Pag1.vue';
import Pag2 from '../views/Pag2.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/pag1',
    name: 'Pag1',
    component: Pag1
  },{
    path: '/Pag2',
    name: 'Pag2',
    component: Pag2
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;