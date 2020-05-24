<template>
    <header class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
            <img src="../../src/assets/kklogo.jpg" width="55" height="55" class="d-inline-block align-top" alt=""/>
            KOMO EN KASA</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{ name: 'homeLink' }"><a class="nav-item nav-link active">Home</a><span class="sr-only">(current)</span></router-link>
                    <router-link :to="{ name: 'menuLink' }"><a class="nav-item nav-link active">Menu</a></router-link>
                </div>
            </div>
        </nav>    
    </header>    
</template>

<style>
    header {
        margin-bottom: 20px;
    }
    .navbar-brand {
        font-size: 1.5em;
    }
</style>

