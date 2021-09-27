import Home from '../../views/Home.vue';
import About from '../../views/About.vue'
import NotFound from '../../views/NotFound.vue';
import PermissionDenied from '../../views/PermissionDenied.vue';


export default [
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
        path: '/permissions-denied',
        name: 'PermissionDenied',
        component: PermissionDenied
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]