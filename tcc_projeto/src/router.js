import Vue from 'vue';
import Router from 'vue-router';
import RegisterLink from './pages/RegisterLink';
import EditLink from './pages/EditLink';
import ListLinks from './pages/ListLinks';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
  
        {
            name: 'listLinks',
            path: '/',
            component: ListLinks,
        },
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