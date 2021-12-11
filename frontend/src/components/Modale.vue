<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" @click='toggleModale'>
        </div>
        <div class="modale">
            <div class="btn-modale" @click='toggleModale'>X</div>
            <Comment />
        </div>
    </div>

</template>

<script>
import Comment from '../views/Comment.vue'

export default {
    name: 'Modale',
    props: ['revele', 'toggleModale'],
    components: {
        Comment
    }
}
</script>

<style lang="scss" scoped>
.bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.overlay {
    background: rgba(241, 241, 241, 0.2);
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale {
    background: whitesmoke;
    color: #333;
    padding: 50px;
    position: fixed;
    top: 30%;
    border: solid darken(whitesmoke, 10%);
}

.btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
        cursor: pointer;
    }
}
</style>
