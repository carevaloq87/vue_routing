import Home from './components/Home.vue';
import Header from './components/Header.vue';
import allRoutes from './routes/index.js';

export const routes = [
    {
        path: '', name: 'home', components: {
            default: Home,
            'header-top': Header
        }
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
].concat(allRoutes);