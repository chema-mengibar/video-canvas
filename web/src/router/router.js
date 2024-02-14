import * as vueRouter from 'vue-router';

const routes = [


    {
        path: '/',
        name: 'Home',
        component: () => (
            import ('../views/Home.vue')),
    },
    {
        path: '/about-us',
        name: 'Aboutus',
        meta: { transition: 'slide-left' },
        component: () => (
            import ('../views/Aboutus.vue')),

    },
    {
        path: '/editor',
        name: 'Editor',
        meta: { transition: 'slide-left' },
        component: () => (
            import ('../views/Editor.vue'))
    },

    {
        path: '/settings',
        name: 'Settings',
        meta: { transition: 'slide-left' },
        component: () => (
            import ('../views/Settings.vue')),

    },


];

const baseUrl = ''

const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(baseUrl),
    routes
});

router.beforeEach(() => {
    window.scrollTo(0, 0)
})

export default router;