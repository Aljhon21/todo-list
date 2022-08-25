import { createRouter, createWebHistory } from 'vue-router';


export const blankMeta = {
    layout: 'blank',
};

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: () => import('@/pages/Home')},
    ]
});


export default router;
