import { createRouter, createWebHistory } from 'vue-router';
import OrdersView from '../view/OrdersView.vue';
import UsersView from '../view/UsersView.vue';
import VehiculesView from '../view/VehiculesView.vue';
import AdminVehicule from "@/components/AdminVehicule.vue";
import AdminView from "@/view/AdminView.vue";
import HomeView from "@/view/HomeView.vue";
import NotFoundView from "@/view/NotFoundView.vue";

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
        path: '/admin',
        name: 'admin',
        component: AdminView,
        children: [
            {
                path: 'vehicule',
                name: 'adminVehicule',
                component: AdminVehicule
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Notfound',
        component: NotFoundView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;