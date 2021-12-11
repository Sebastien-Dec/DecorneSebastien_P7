<template>
    <div>
        <router-link to="/newpost">
            <button id="new-post">{{ text }}</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ButtonNewPost',
    props: ['text']
}
</script>

<style lang="scss" scoped>
$colorNewPost: #FF3D1D;
#new-post {
    background-color: $colorNewPost;
    color: whitesmoke;
    border-radius: 5px;
    border-color: transparent;
    margin: 0 10px;
    width: 100px;
    height: 40px;
    font-weight: bold;

    &:hover {
        background-color: darken($colorNewPost, 10%);
        cursor: pointer;

    }
}
</style>