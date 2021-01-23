<template>
    <div class="nav">
        <router-link to="/money">
            <svg>
                <use xlink:href="#gold-coin"/>
            </svg>
            Money
        </router-link>
        <router-link to="/labels">
            <svg>
                <use xlink:href="#label"/>
            </svg>
            Labels
        </router-link>
        <router-link to="/statistics">
            <svg>
                <use xlink:href="#balance-list"/>
            </svg>
            Statistics
        </router-link>
    </div>
</template>

<script>
    import '@/assets/icons/label.svg'
    import '@/assets/icons/gold-coin.svg'
    import '@/assets/icons/balance-list.svg'

    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav {
    border: 1px solid red;
}
</style>