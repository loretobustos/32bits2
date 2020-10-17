import Vue from 'vue'
import VueRouter from 'vue-router'
import Busqueda from '../views/Busqueda.vue'
import Inicio from '../views/Inicio.vue'
import Total from '../views/Total.vue'
import Ventas from '../views/Ventas.vue'
import Error from '../views/Error.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'





Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/busqueda',
        name: 'Busqueda',
        component: Busqueda
    },
    {
        path: '/inicio',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/total',
        name: 'Total',
        component: Total
    },
    {
        path: '/ventas',
        name: 'Ventas',
        component: Ventas
    },
    {
        path: '/error',
        name: 'Error',
        component: Error
    },
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound
    }


]

const routes = new VueRouter({
    node: 'history',
    base: process.env.BASE_URL,
    routes

})

export default routes