<template>
    <header id="header">
        <nav class='navbar' id="connectionBar" v-if="!['welcome', 'newpost', 'home'].includes($route.name)">
            <HeaderLogo />
            <ButtonLogin />
            <ButtonSignup />
        </nav>
        <nav class='navbar' id="connectedBar" v-else-if="!['welcome', 'login', 'signup'].includes($route.name)">
            <HeaderLogo />
            <ImageUser />
            <ButtonNewPost text="Nouvelle Publication" />
            <ButtonLogout />
        </nav>
    </header>
</template>

<script>
import HeaderLogo from'./HeaderLogo.vue'
import ButtonLogin from './ButtonLogin.vue'
import ButtonSignup from './ButtonSignup.vue'
import ButtonNewPost from './ButtonNewPost.vue'
import ImageUser from './ImageUser.vue'
import ButtonLogout from './ButtonLogout.vue'

export default {
    name: 'Header',
    components: {
      HeaderLogo,
      ButtonLogin,
      ButtonSignup,
      ButtonNewPost,
      ImageUser,
      ButtonLogout
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: center;
    margin: 20px;
}
</style>