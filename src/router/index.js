import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CharactersPage from '@/views/CharactersPage';
import LocationsPage from '@/views/LocationsPage';

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
  {
    path: '/locations',
    name: 'locations',
    component: LocationsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
