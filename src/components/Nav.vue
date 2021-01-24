<template>
    <div class="nav">
        <router-link to="/money">
            <Icon icon-name="#gold-coin"/>
            Money
        </router-link>
        <router-link to="/labels">
            <Icon icon-name="#label"/>
            Labels
        </router-link>
        <router-link to="/statistics">
            <Icon icon-name="#balance-list"/>
            Statistics
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav {
    border: 1px solid red;
}
</style>