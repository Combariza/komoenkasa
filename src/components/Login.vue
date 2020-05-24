<template>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="ingrese su email">
            <small id="emailHelp" class="form-text text-muted">Nunca comparta sus datos.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="password" placeholder="ingrese su password">
        </div>
        <button type="button" class="btn btn-primary" @click.prevent="signIn">Iniciar sesion</button>
        <button type="button" class="btn btn-danger" @click.prevent="signOut">Cerrar sesion</button>
</form>
</template>

<script>
import Firebase from 'firebase'

export default {
    methods: {
        signIn() {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            Firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if(errorCode==='auth/wrong-password') {
                    alert('password incorrecto')
                }
                else {
                    alert(errorMessage);
                }
            })
                
            }
        },
        signOut() {
            Firebase.auth().signOut().then(function() {
                alert('Cerrar sesion');
            }).catch(function(error) {
                alert(error)
            })
        }
    }
</script>