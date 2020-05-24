<template>
    <footer class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <router-link :to="{ name: 'homeLink' }" tag="li"><a class="nav-link">Home</a></router-link>
                <router-link :to="{ name: 'aboutLink' }" tag="li"><a class="nav-link">About</a></router-link>
                <router-link :to="{ name: 'adminLink' }" tag="li"><a class="nav-link">Admin</a></router-link>
            </div>
        </div>
        </nav>   
    </footer>    
</template>

