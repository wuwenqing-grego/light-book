<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon icon-name="#gold-coin"/>
            Money
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon icon-name="#label"/>
            Labels
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
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
@import '~@/assets/style/common.scss';
nav {
    display: flex;
    @extend %outerShadow;
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

    .selected {
        color: red;
    }
}
</style>