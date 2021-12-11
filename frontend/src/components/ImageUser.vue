<template>
    <div>
        <div v-if="users.employee === true">
            <img src="../assets/icon.png" alt="Photo de l'utilisateur" />
        </div>
        <div v-else-if="users.moderator === true">
             <img src="../assets/admin.png" alt="Photo du modérateur" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageUser',
    data() { 
        return {
            users: {
                id: '0',
                username: 'sebastien',
                email: 'sebastien@decorne.com',
                password: 'sebastien',
                employee: false,
                moderator: true,
                state: 'actif',
                createdAt: '02/12/2021 11:25',
                updatedAt: '02/12/2021 11:25'
            },
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