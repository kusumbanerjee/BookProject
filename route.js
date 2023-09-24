// created the pages of 3 dropdown options from the bookmark button : wanna read, reading, read

const routes = [
  {
    path: '/want-to-read',
    name: 'WantToRead',
    component: () => import('@/pages/WantToRead.vue'), 
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import('@/pages/Read.vue'), 
  },
  {
    path: '/reading',
    name: 'Reading',
    component: () => import('@/pages/Reading.vue'), 
  },
];

// signup

import { createRouter, createWebHistory } from 'vue-router';

import index from './pages/index.vue'; 

const routes = [
  {
    path: '/pages/index.vue',
    name: 'index',
    component: index,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
