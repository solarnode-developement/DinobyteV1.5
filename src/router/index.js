import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import HostingPlans from '../views/HostingPlans.vue';
import FAQ from '../views/FAQ.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/hosting', component: HostingPlans },
  { path: '/faq', component: FAQ },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
