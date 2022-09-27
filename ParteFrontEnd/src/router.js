import Vue from 'vue';
import Router from 'vue-router';
import RegisterLink from './pages/RegisterLink';
import EditLink from './pages/EditLink';


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/registerLink',
            component: RegisterLink,
        },
        {
            path: '/editLink',
            component: EditLink,
        },
    ]
});

export default router;