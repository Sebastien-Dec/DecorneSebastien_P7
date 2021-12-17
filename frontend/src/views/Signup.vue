<template>
    <div id="signup">
        <h1>Créer votre compte</h1>
        <form>
            <label for="username">Votre Pseudonyme</label>
            <input type="text" id="username" name="username" placeholder="Pseudo" v-model="user.username"/>
            <label for="email">Votre email</label>
            <input type="email" id="email" name="email" placeholder="exemple@groupomania.fr" v-model="user.email"/>
            <label for="password">Votre mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Votre mot de passe" v-model="user.password" />
            <label for="confirmPassword">Confirmer votre mot de passe</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Saisissez de nouveau votre mot de passe" v-model="user.confirmPassword">
            <p class='error' v-if="user.confirmPassword !== user.password">Votre mot de passe ne correspond pas à votre saisie</p>
            <div class="type">
                <p>Qui êtes-vous ?</p>
                <input type="radio" id="employee" name="type" value="employee" v-model="user.type"/>
                <label for="employee">Salarié</label>
                <input type="radio" id="moderator" name="type" value="moderator" v-model="user.type"/>
                <label for="moderator">Modérateur</label>
            </div>
            <button @click.prevent="createUser">Créer mon compte</button>
        </form>
        <router-link to="/login" class="link-login">J'ai déjà un compte !</router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Signup',
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                type: '',
                createdAt: '',
                updatedAt: ''
            },
        }
    },
    methods: {
        createUser: function() {
            if(this.user.confirmPassword === this.user.password) {
                axios.post('http://localhost:3000/api/auth/signup', this.user, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => {
                console.log('response',response.data);
                return response.data;
            })
            .catch(error => console.log(error.response));
            }
        }
    } 
}

</script>

<style lang="scss" scoped>
$colorText: #FF3D1D;

#signup {
    margin-top: 100px;
    
    h1 {
        text-align: center;
        color: $colorText;
    }
}

.error {
    color: red;
}

.link-login {
    display: flex;
    justify-content: center;
}

form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 300px;
    padding: 10px;
    font-size: 1.2rem;

    label, input {
        margin: 5px;
    }

    button {
        background-color: $colorText;
        border-radius: 5px;
        border-color: transparent;
        margin: 20px 5px;
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