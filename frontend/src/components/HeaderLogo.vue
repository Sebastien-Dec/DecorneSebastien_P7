<template>
    <div class='header-logo'>
        <router-link to="/">
            <img src="../assets/icon.png" class='logo' alt="Logo Groupomania">
            <span class='text-logo'>Groupomania</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderLogo',
}
</script>

<style lang="scss" scoped>
$colorLogo: #fd2d01;

.header-logo {
    text-align: center;
    margin-right: 30px;
}

.logo {
    width: 2.3rem;
    height: 2.3rem;
}
.text-logo {
    color: $colorLogo;
    font-size: 2rem;
    font-weight: bold;
}

a {
    text-decoration: none;
    display:flex;
    
    &:hover {
        cursor: pointer;
    }
}
</style>


