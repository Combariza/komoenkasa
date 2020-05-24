<template>
    <div>
        <p>Para mayor información haga click en la pestaña de su interes</p>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link :to="{ name: 'historyLink' }" tag="li"><a class="nav-link">Nuestra historia</a></router-link>
                        <router-link :to="{ name: 'contactLink' }" tag="li"><a class="nav-link" href="">Contactenos</a></router-link>
                        <router-link :to="{ name: 'orderingGuideLink' }" tag="li"><a class="nav-link" href="">Como ordenar</a></router-link>
                        <router-link :to="{ name: 'deliveryLink' }" tag="li"><a class="nav-link" href="">Envio</a></router-link>
                    </div>
                </div>
            </nav>
            <router-view></router-view>
    </div>      
</template>