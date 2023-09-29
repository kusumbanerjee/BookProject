
import { createRouter, createWebHistory } from 'vue-router';
import index from './pages/index.vue';


const routes = [
  
  {
    path: '/',
    name: 'Index',
    component: index,
  },
  {
    path: '/want-to-read',
    name: 'WantToRead',
    component:'@/pages/WantToRead.vue', 
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

  {
  path: '/want-to-read',
  name: 'WantToRead',
  component: () => import('@/pages/WantToRead.vue'),
},

{
  path: '/index',
  name: 'index',
  component: index,
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
