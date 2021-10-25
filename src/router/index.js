import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobsDetails from '../views/Jobs/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    
  },
  {
    path: '/Jobs',
    name: 'Jobs',
    component: Jobs
    
  },
  {
    path: '/Jobs/:id',
    name: 'JobsDetails',
    component: JobsDetails,
    props : true
    
  },
  //redirects
  {
    path: '/all-jobs',
    redirect: '/Jobs',
  },
  //catchall 404
  {
    path:'/:catchAll(.*)',
    name : 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
