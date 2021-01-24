<template>
    <svg class="icon">
        <use :xlink:href="iconName"/>
    </svg>
</template>

<script>
    import '@/assets/icons/label.svg'
    import '@/assets/icons/gold-coin.svg'
    import '@/assets/icons/balance-list.svg'

    export default {
        props: ['iconName']
    }
</script>

<style lang="scss" scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>