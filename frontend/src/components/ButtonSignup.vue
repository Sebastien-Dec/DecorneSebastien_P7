<template>
    <router-link to="/signup">
        <button id="signup">S'inscrire</button>
    </router-link>
</template>

<script>
export default {
    name: 'ButtonSignup',
}
</script>

<style lang="scss" scoped>
$colorSignup: whitesmoke;
#signup {
    background-color: $colorSignup;
    border-radius: 5px;
    border-color: transparent;
    margin: 0 10px;
    width: 100px;
    height: 40px;
    font-weight: bold;

    &:hover {
        background-color: darken($colorSignup, 10%);
        cursor: pointer;
    }
}
</style>
