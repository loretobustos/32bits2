import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productos: [{
                id: "001",
                nombre: "Sekiro",
                stock: 100,
                precio: 30000,
                color: "red",
                destacado: true,
            },
            {
                id: "002",
                nombre: "Fifa 21",
                stock: 100,
                precio: 25000,
                color: "blue",
                destacado: false,
            },
            {
                id: "003",
                nombre: "Gears of War 4",
                stock: 100,
                precio: 15000,
                color: "green",
                destacado: true,
            },
            {
                id: "004",
                nombre: "Mario Tennis Aces",
                stock: 100,
                precio: 35000,
                color: "yellow",
                destacado: false,
            },
            {
                id: "005",
                nombre: "Bloodborne",
                stock: 100,
                precio: 10000,
                color: "blue",
                destacado: false,
            },
            {
                id: "006",
                nombre: "Forza Horizon 4",
                stock: 100,
                precio: 20000,
                color: "red",
                destacado: true,
            },

        ],
        ventas: [],
        titulo: "Productos en venta",
    },
    mutations: {},
    actions: {},
    getters: {
        totalProductos: state => {
            return state.productos.length;
        },
        ventasRealizadas: state => {
            return state.ventas.length;
        }
    },
    modules: {}
})