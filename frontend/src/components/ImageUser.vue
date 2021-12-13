<template>
    <div>
        <div v-if="user.type === 'employee'">
            <img src="../assets/icon.png" alt="Photo de l'utilisateur" />
        </div>
        <div v-else-if="user.type === 'moderator'">
             <img src="../assets/admin.png" alt="Photo du modérateur" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ImageUser',
    data() { 
        return {
            user: {
                username: '',
                email: '',
                password: '',
                type: '',
                state: ''
            },
        }   
    },
    methods: {
        imageUsers() {
            axios.get('http://localhost/3000/Users', this.user, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => {
                return response.data
            })
        }    
    }
}
</script>

<style lang="scss" scoped>
img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    background-color: whitesmoke;
}
</style>