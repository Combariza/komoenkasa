<template>
<div class="menu">
    <nav class="navbar navbar-expand-lg navbar-dark"  style="background-color: #44bd32">
                <a class="navbar-brand">Menu</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click="filtrarPlato(1)">Entradas y sopas </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click="filtrarPlato(2)">Platos fuertes</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click="filtrarPlato(3)">Postres</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click="filtrarPlato(4)">Menu infantil</a>
                        </li>
                        <li><p></p></li>
                        <li>          </li>
                        <form class="form-inline my-2 my-lg-0">
                            <li><picture>
                                <a href="#" title="Bajo en Calorias"><img src="../../src/assets/lowCalorie.jpg" class="img-fluid img-thumbnail rounded-circle float-right"
                                width="45" height="45" alt="Bajo en Calorias" ></a>
                            </picture></li>
                            <li><picture>
                                <a href="#" title="Sin azucar añadido"><img src="../../src/assets/noSugar.jpg" class="img-fluid rounded-circle"
                                width="45" height="45" alt="..."></a>
                            </picture></li>
                            <li><picture>
                                <a href="#" title="Vegano"><img src="../../src/assets/vegan.jpg" class="img-fluid rounded-circle"
                                width="45" height="45" alt="..."></a>
                            </picture></li>
                            <li><picture>
                                <a href="#" title="Dieta keto"><img src="../../src/assets/keto.jpg" class="img-fluid img-thumbnail rounded-circle"
                                width="45" height="45" alt="..."></a>
                            </picture></li>
                            <li><picture>
                                <a href="#" title="20 min o menos de preparacion"><img src="../../src/assets/20min.jpg" class="img-fluid rounded-circle"
                                width="45" height="45" alt="..."></a>
                            </picture></li>
                            <li><picture>
                                <a href="#" title="Sin gluten"><img src="../../src/assets/glutenFree.jpg" class="img-fluid img-thumbnail rounded-circle float-right"
                                width="45" height="45" alt="..."></a>
                            </picture></li>
                        </form>
                    </ul>
                </div>
    </nav>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Tipo</th>
                        <th>Tiempo de cocción</th>
                        <th>Precio Porcion</th>
                        <th>Calorias</th>
                        <th>Añadir al carrito</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems">
                    <tr v-show="item.plato === n">
                        <td><strong>{{ item.nombre }}</strong></td>
                        <td colspan="4">{{ item.descripcion }}</td>
                    </tr>
                    <tr v-show="item.plato === n" v-for="option in item.opciones">
                        <td>{{ option.tipo }}</td>
                        <td>{{ option.tiempoCoccion }}</td>
                        <td>{{ option.precioPorcion }}</td>
                        <td>{{ option.calorias }}</td>
                        <td><button class="btn btn-sm btn-outline-success" 
                        type="button"
                        @click="addToBasket( item, option )">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Carrito de mercado -->
        <div class="col-sm-12 col-md-6">
            <div v-if="basket.length > 0"> 
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Porciones</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in basket">
                        <tr>
                            <td><button class="btn btn-sm" type="button"
                            @click="disminuirPorciones(item)">-</button>
                                <span>{{ item.porciones}} </span>
                                <button class="btn btn-sm" type="button"
                                @click="incrementarPorciones(item)">+</button></td>
                            <td>{{ item.nombre}} {{ item.tipo }} </td>
                            <td>{{ item.precio * item.porciones }} </td>
                        </tr>
                    </tbody>
                </table>
                <p> Total Orden: </p>
                <button class="btn btn-success btn-block" @click="addNewOrder">Haga su pedido</button>
            </div>
            <div v-else>
                <p>{{ basketText }} </p> {{ this.$store.state.orders }}
            </div> 
        </div>
        
        </div>
    </div>  
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            basket: [],
            n: 1,
            basketText: 'Tu carrito esta vacio !',
        
            
        }
    },
    computed: {

        ...mapGetters ([
            'getMenuItems'
        ])
        
    },           
   
    
    
    methods: {
        addToBasket( item, option ) {
            this.basket.push( {
                nombre: item.nombre,
                precio: option.precioPorcion,
                porciones: 1
                
            })
        
        },
        removeFromBasket( item ) {
                    this.basket.splice(this.basket.indexOf(item), 1);
                },
        disminuirPorciones( item ){
            if(item.porciones === 0 ) {
                this.removeFromBasket(item)
            }
            return item.porciones -= 1
        },
        incrementarPorciones( item ) {
            item.porciones++;
        },
        filtrarPlato(n) {
            return this.n = n;
        },
        addNewOrder() {
            this.$store.commit('addOrder', this.basket)
            this.basket = []
            this.basketText = "Gracias por hacer su pedido"
        }
    }
}
</script>

<style>
.menu {
    background-color: white;
}
</style>