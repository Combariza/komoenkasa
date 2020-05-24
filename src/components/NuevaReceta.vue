<template>
    <form>
        <h3>Añadir nueva receta: </h3>

        <div class="form-group row">
            <label class="col-sm-3">Nombre</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.nombre">
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3">Descripcion</label>
            <div class="col-sm-9">
                <textarea type="text" class="form-control" rows="5" v-model="nuevaReceta.descripcion"></textarea>
            </div>
        </div>
        <p><strong>Opcion 1:</strong></p>
        <div class="form-group row">
            <label class="col-sm-3">Tipo</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[0].tipo">
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3">Precio</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[0].precioPorcion">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Tiempo de coccion</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[0].tiempoCoccion">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Tiempo de limpieza</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[0].tiempoLimpieza">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Calorias</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[0].calorias">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Utensilios</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[0].utensilios">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Nivel</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[0].nivel">
            </div>
        </div>

        <p><strong>Opcion 2:</strong></p>
        <div class="form-group row">
            <label class="col-sm-3">Tipo</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[1].tipo">
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3">Precio</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[1].precioPorcion">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Tiempo de coccion</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[1].tiempoCoccion">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Tiempo de limpieza</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[1].tiempoLimpieza">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Calorias</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[1].calorias">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Utensilios</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[1].utensilios">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3">Nivel</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="nuevaReceta.opciones[1].nivel">
            </div>
        </div>

        <div class="form-group row">
            <button type="button" class="btn btn-success btn-block" @click="addNewMenu">Añadir</button>
        </div>
    </form>
</template>

<script>
import { dbMenuRef } from '../firebaseConfig'
export default {
    data() {
        return {
            nuevaReceta: {
                'nombre': 'Ej Trucha en las finas hierbas',
                'descripcion': 'Ej Trucha al limón y ensalada',
                'opciones': [{
                    'tipo': 'Ej prelista',
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

            }
    },
    methods: {
        addNewMenu() {
            dbMenuRef.push(this.nuevaReceta)
        }
    }
}
</script>