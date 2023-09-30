
import { createRouter, createWebHistory } from 'vue-router';
import index from './pages/index.vue';


const routes = [
  //  {
  //   middleware: ['authenticated'],
  // },
  // pages
  {
    name: 'page1',
    path: '/',
    component: '~/pages/index.vue', 
  },
  {
    name: 'page2', 
    path: '/pages', 
    component: '~/pages/Page2.vue', 
  },
  {
    name: 'page3', 
    path: '/page3',
    component: '~/pages/Page3.vue', t
  },
  {
    name: 'page4', 
    path: '/page4', 
    component: '~/pages/Page4.vue', 
  },
  {
    name: 'page5', 
    path: '/page5', 
    component: '~/pages/Page5.vue', 
  },
  {
    name: 'page6', 
    path: '/page6', 
    component: '~/pages/Page6.vue', 
  },
  
  
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
