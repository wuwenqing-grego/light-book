<template>
    <nav>
        <router-link to="/money" class="item">
            <Icon icon-name="#gold-coin"/>
            Money
        </router-link>
        <router-link to="/labels" class="item">
            <Icon icon-name="#label"/>
            Labels
        </router-link>
        <router-link to="/statistics" class="item">
            <Icon icon-name="#balance-list"/>
            Statistics
        </router-link>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    // font-size: 12px;

    .item {
        padding: 2px 0;
        width: 33.333%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .icon {
            width: 32px;
            height: 32px;
        }
    }
}
</style>