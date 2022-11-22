import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CharactersPage from '@/views/CharactersPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/characters',
    name: 'characters',
    component: CharactersPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
