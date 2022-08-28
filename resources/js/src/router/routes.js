export default [
    { path: '/', redirect: '/home'},
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        name: 'home',
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/login',
        component: () => import('@/pages/auth/Login'),
        name: 'login',
        meta : {
            guard : 'guest'
        }
    },
    {
        path: '/register',
        component: () => import('@/pages/auth/Register'),
        name: 'register',
        meta : {
            guard : 'guest'
        }
    },
    { path: '/:notFound(.*)', redirect: '/home' }
]
