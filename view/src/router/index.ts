import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import QRCode from '../components/QRCode.vue'
const Profile = () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/codes',
    name: 'QRCodes',
    component: QRCode,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
