<template lang="pug">
  body
    .row
      #home.col-sm-12.text-center
        .background
          h2 Bienvenido a
          img(src="../../src/assets/kklogo.jpg" width="180" height="150" alt="")
          h3 Te acercamos lo que quieres, para que te acerques a los que quieres
          button.btn.btn-success(@click="goToMenu") Ordena ahora
  
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

