import { createRouter, createWebHistory } from 'vue-router';
import OrdersView from '../view/OrdersView.vue';
import UsersView from '../view/UsersView.vue';
import VehiculesView from '../view/VehiculesView.vue';
import HomeView from '../view/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/orders',
        name: 'orders',
        component: OrdersView
    },
    {
        path: '/users',
        name: 'users',
        component: UsersView
    },
    {
        path: '/vehicules',
        name: 'vehicules',
        component: VehiculesView
    },
    {
      path: '/home',
      name: 'dash',
      component: HomeView
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/orders'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;