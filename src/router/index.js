import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            meta: { requiresAuth: true },
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: '/Search',
                    name: 'search',
                    component: () => import('@/views/pages/Search/indexSearch.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: '/Online',
                    name: 'online',
                    component: () => import('@/views/pages/OnlineAuctions/indexOnlineAuctions.vue'),
                    meta: { requiresAuth: true }
                },
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
});
export default router;
