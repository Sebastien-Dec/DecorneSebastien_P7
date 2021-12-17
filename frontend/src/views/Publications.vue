<template>
    <div id='home'>
        <section id="userId" v-for="user in users" :key="user">
            <div class="id">
                <ImageUser />
                <div class="id__margin-left">
                    <h1>{{ user.username }}</h1>
                    <h2>{{ user.createdAtPublication }}</h2>
                </div>
            </div>
            <h1>{{ user.title }}</h1>
            <img :src="user.gifUrl" alt="Gif de la publication">
            <p>{{ user.text }}</p>
            <div class="comment">
                <modale :revele="revele" :toggleModale="toggleModale"></modale>
                <div>
                    <button @click="toggleModale">{{ numberOfComments }} commentaires</button>
                </div>
            </div>
            
        </section>
    </div>
</template>

<script>
import ImageUser from '../components/ImageUser.vue'
import Modale from '../components/Modale.vue'

export default {
    name: 'Publications',
    components:  {
        ImageUser,
        'modale' : Modale,
    },
    data() { 
        return {
            users: {
                username: '',
                email: '',
                password: '',
                type: '',
                state: '',
                createdAt: '',
                updatedAt: '',
            },
            publications: {
                title: '',
                createdAtPublication: '',
                gifUrl: '',
                text: '',
                User_Id: ''
            },
            comments: {
                comment: '',
                User_Id: '',
                Publication_Id: ''
            },
            revele: false
        }
    },
    methods: {
        toggleModale: function() {
            this.revele = !this.revele
        },
        

    }
}
</script>

<style lang="scss" scoped>
$colorHome: whitesmoke;

#home {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 50px auto;
}
#userId {
    display: flex;
    flex-direction: column;
    width: 300px; 
    margin: 25px 0;
    border: solid $colorHome;
    border-radius: 10px;

    h1 {
        font-weight: bold;
        text-align: center;
    }
}

.id {
    display: flex;
    align-items: center;
    border-bottom: solid $colorHome;
    padding: 5px 0 0 5px;

    &__margin-left {
        margin-left: 10px;
    }

    h1 {
        font-size: 1rem;
        margin: 0;
    }

    h2 {
        font-size: 0.5rem;
        margin: 0;
    }
}

.comment {
    border-top: solid $colorHome;
    button {
        margin: 10px;
        border: solid $colorHome;
        border-radius: 5px;
        background-color: $colorHome;

        &:hover {
            background-color: darken($colorHome, 10%);
            cursor: pointer;
        }
    }
}
</style>