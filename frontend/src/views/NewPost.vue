<template>
    <div id="new-post">
        <form>
            <h1>Ajouter une publication</h1>
            <label for="title">Titre de la publication</label>
            <input type="text" id="title" name="title" placeholder="Titre de votre publication" v-model="newPost.title" />
            <label for="gifUrl">Lien URL du Gif</label>
            <input type="link" id="gifUrl" name="gifUrl" placeholder="https://www.gif.com" v-model="newPost.gifUrl"/>
            <label for="text">Votre texte</label>
            <input type="text" id="text" name="text" placeholder="Votre texte" v-model="newPost.text"/>
            <div class="button">
                <ButtonNewPost text="Ajouter une publication" @click.prevent="createPost"/>
            </div>
        </form>
    </div>
</template>

<script>
import ButtonNewPost from '../components/ButtonNewPost.vue'
import axios from 'axios'

export default {
    name:'NewPost', 
    components: {
        ButtonNewPost
    },
    data() {
        return {
            newPost: {
                title: '',
                gifUrl: '',
                text: '',
                createdAt: new Date,
                updatedAt: new Date
            }
        }
    },
    methods: {
        createPost() {
            axios.post('http://localhost:3000/api/publications/', this.newPost, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('response', response.data);
            })
            .catch(error => console.log('error', error.response.data));

        } 
    }
}
</script>

<style lang="scss" scoped>
$colorText: #FF3D1D;
#new-post {
    margin-top: 50px;
}

h1 {
    text-align: center;
    font-size: 1.8rem;
    color: $colorText;
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
}

.button {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>