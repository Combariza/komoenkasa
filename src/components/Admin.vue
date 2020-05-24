<template>
<div>
    <div class="row">
        <div class="col-6-sm col-md-6">
            <pp-nueva-receta></pp-nueva-receta>
        </div>
        <div class="col-6-sm col-md-6">
            <h3>Menu:</h3>
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>Remove from menu</th>
                    </tr>
                </thead>>
                <tbody v-for="item in getMenuItems">
                    <tr>
                        <td>{{ item.nombre }} </td>
                        <td><button class="btn btn-success">x</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h3>Current Orden: {{ numberOfOrders }}</h3>
             <table class="table table-sm">
                <thead class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>Tamaño</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>>
                <tbody>
                    <div class="orden-number">
                        <strong><em>Numero orden: 1</em></strong>
                        <button class="btn btn-outline-danger btn sm">x</button>
                    </div>
                    <tr>
                        <td>Marguerita</td>
                        <td>9"</td>
                        <td>1</td>
                        <td>6.95</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <pp-login></pp-login>
        </div>
    </div>
</div>    
</template>


<script>
import NuevaReceta from './NuevaReceta.vue'
import Login from './Login.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        ppNuevaReceta: NuevaReceta,
        ppLogin: Login
    },
     computed: {
        ...mapGetters ([
            'numberOfOrders',
            'getMenuItems'
        ])
    },
    
    
}
</script>