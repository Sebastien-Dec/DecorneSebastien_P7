<template>
    <div id="comment">
        <!--<div class="otherComment">
            <ImageUser /> 
            {{ user.username }}
            {{ publication.createdAt }}
            {{ comment.text }}
        </div>-->
        <div class="user">
            <ImageUser />
            <h1>{{ user.username }}</h1>
        </div>
        <input type="text" id="comment" name="comment" placeholder="Votre commentaire" v-model="user.comment"/>
        <button>Poster</button>
    </div>
</template>

<script>
import ImageUser from '../components/ImageUser.vue'

export default {
    name: 'Comment',
    components: {
        ImageUser
    },
    data() {
        return {
            user: {
                id: 0,
                username: 'sebastien',
                email: 'sebastien@decorne.com',
                password: 'sebastien',
                employee: false,
                moderator: true,
                state: 'actif',
                createdAt: Date,
                updatedAt: Date,
                comment: ''
            }
        }   
    }
}
</script>

<style lang="scss" scoped>
$colorButton: #FF3D1D;

#comment {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
}

.user {
    display: flex;
    font-size: 0.5rem;

    h1 {
        margin-left: 10px;
    }
}

button {
    margin: 10px auto;
    background-color: $colorButton;
    color: whitesmoke;
    border-radius: 5px;
    border-color: transparent;
    width: 100px;
    height: 40px;
    font-weight: bold;

    &:hover {
        background-color: darken($colorButton, 10%);
        cursor: pointer;
    }
}
</style>