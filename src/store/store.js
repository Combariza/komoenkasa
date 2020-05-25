import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        menuItems: {
            1: {
            'nombre': 'Trucha en las finas hierbas',
            'descripcion': 'Trucha al limón y ensalada',
            'plato': 1,
            'opciones': [{
                'tipo': 'prelista',
                'tiempoCoccion': '5 min',
                'precioPorcion': 20000,
                'tiempoLimpieza': '2 min',
                'utensilios': ['Ensaladera'],
                'calorias': 300,
                'nivel': 1
            }, {
                'tipo': 'Souce vide',
                'tiempoCoccion': '20 min',
                'precioPorcion': 12000,
                'tiempoLimpieza': '6 min',
                'utensilios': ['Ensaladera', 'Souse vide', 'bolsas de vacio'],
                'calorias': 300,
                'nivel': 3
            }]
            },
            2: {
            'nombre': 'Pasta Amatriciana',
            'descripcion': 'Pasta lista para preparar, con salsa hecha en casa',
            'plato': 2,
            'opciones': [{
                'tipo': 'prelista',
                'tiempoCoccion': '10 min',
                'precioPorcion': 7000,
                'tiempoLimpieza': '5 min',
                'utensilios': ['Olla', 'Colador'],
                'calorias': 150,
                'nivel': 1
            }, {
                'tipo': 'preparación rápida',
                'tiempoCoccion': '20 min',
                'precioPorcion': 5000,
                'tiempoLimpieza': '10 min',
                'utensilios': ['Olla', 'Colador', 'Cuchillo', 'Sarten onda'],
                'calorias': 150,
                'nivel': 2
            },
            {
                'tipo': 'preparación completa, desde la preparación de la pasta',
                'tiempoCoccion': '35 min',
                'precioPorcion': 4500,
                'tiempoLimpieza': '15 min',
                'utensilios': ['Olla', 'Colador', 'Cuchillo', 'Sarten onda'],
                'calorias': 120,
                'nivel': 3
            }]
            },
            3: {
            'nombre': 'Ensalada cesar con lomo de cerdo',
            'descripcion': 'Ensalada natural, cerdo en cocción perfecta',
            'plato': 3,
            'opciones': [{
                'tipo': 'prelista',
                'tiempoCoccion': '10 min',
                'precioPorcion': 20000,
                'tiempoLimpieza': '10 min',
                'utensilios': ['Sarten', 'Ensaladera'],
                'calorias': 70,
                'nivel': 1
            }, {
                'tipo': 'Souce vide',
                'tiempoCoccion': '35 min',
                'precioPorcion': 17000,
                'tiempoLimpieza': '10 min',
                'utensilios': ['Ensaladera', 'Souse vide', 'bolsas de vacio'],
                'calorias': 50,
                'nivel': 3
            }]
            }

        },
        orders: [], 
        currentUser: null
    },
    getters: {
        getMenuItems: state => state.menuItems,
        numberOfOrders: state => state.orders.length,
        currentUser: state => state.currentUser
    },
    mutations: {
       addOrder: (state, orders) => state.orders.push(orders),
       userStatus (state, user) {
        if (user) {
            state.currentUser = user.email
        } else {
            state.currentUser = null
        }
    } 
    },
   actions        
})