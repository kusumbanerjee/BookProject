
import { createRouter, createWebHistory } from 'vue-router';
import index from './pages/index.vue';


const routes = [

  // pages
  {
    name: 'page1',
    path: '/',
    component: '~/pages/index.vue', // Set 'Page1.vue' as your index page
  },
  {
    name: 'page2', // Name your route
    path: '/pages', // Define the route path
    component: '~/pages/Page2.vue', // Point to your Page 2 component
  },
  {
    name: 'page3', // Name your route
    path: '/page3', // Define the route path
    component: '~/pages/Page3.vue', // Point to your Page 3 component
  },
  {
    name: 'page4', // Name your route
    path: '/page4', // Define the route path
    component: '~/pages/Page4.vue', // Point to your Page 4 component
  },
  {
    name: 'page5', // Name your route
    path: '/page5', // Define the route path
    component: '~/pages/Page5.vue', // Point to your Page 5 component
  },
  {
    name: 'page6', // Name your route
    path: '/page6', // Define the route path
    component: '~/pages/Page6.vue', // Point to your Page 6 component
  },
  
  {
    name: 'pagination',
    path: '/pagination/:page',
    component: '~/pages/pagination/_page.vue',
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
