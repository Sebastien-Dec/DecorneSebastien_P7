<template>
<div id="login">
        <h1>Me Connecter</h1>
        <form>
            <label for="email" class="margin-form">Votre adresse email</label>
            <input type="email" id="email" class="margin-form" name="email" placeholder="exemple@groupomania.fr" v-model="user.email">
            <label for="password" class="margin-form">Mot de passe</label>
            <input type="password" id="password" class="margin-form" name="password" placeholder="Mon mot de passe" v-model="user.password">
            <button @click.prevent="loginUser">Connexion</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return { 
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        loginUser: function() {
            axios.post('http://localhost:3000/api/auth/login', this.user, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                console.log('response',response.data)
            })
            .catch(error => console.log(error.response.data)); 
        }
    }
}
</script>

<style lang="scss" scoped>
$colorText: #FF3D1D;
#login {
    margin-top: 100px;
}

h1 {
    text-align: center;
    color: $colorText;
}

form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 300px;
    padding: 10px;

    button {
        background-color: $colorText;
        border-radius: 5px;
        border-color: transparent;
        margin: 10px 5px;
        color: whitesmoke;
        font-weight: bold;
        font-size: 1.2rem;
        height: 40px;

        &:hover {
            background-color: darken($colorText, 10%);
            cursor: pointer;
        }
    }
}

.margin-form {
    margin: 5px;
    font-size: 1.2rem;
}
</style>