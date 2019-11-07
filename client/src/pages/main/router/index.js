import Vue from 'vue';
import vueRouter from 'vue-router';
import MainCache from '../components/MainCache';
import MainContent from '../components/MainContent';

Vue.use(vueRouter);

export default new vueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/content'
        },
        {
            path: '/cache',
            name: 'Cache',
            component: MainCache
        },
        {
            path: '/content',
            name: 'Content',
            component: MainContent
        }
    ]
})