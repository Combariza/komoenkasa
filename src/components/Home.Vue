<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h2>Bienvenido a</h2>
                <h1> Komo en Kasa</h1>
                <h3>Te acercamos lo que quieres, para que te acerques a los que quieres</h3>
                <button class="btn btn-success" @click="goToMenu">Ordena ahora</button>
            </div>
        </div>   
    </div>   
</template>

<script>
export default {
    methods: {
        goToMenu() {
            this.$router.push({ name: 'menuLink' })
        }
    }
}
</script>

<style>
    #home {
        background: url('../../src/assets/1.jpg');
        height: 800px;
        padding: 10%;
    }
    h1, h3 {
        margin: 6%;
    }
    .background {
        background: #eee;
        opacity: 0.8;
        max-width: 60%;
        margin: 0 auto;
        padding: 20px 0;
        
    }

    body {
        background-color: #98bea8;
    }

</style>

