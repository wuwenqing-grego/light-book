<template>
    <div>
        <ul class="tabs" :class="{[classPrefix + '-tabs']: classPrefix}">
            <li v-for="tab in tabList" :key="tab.value" class="tabs-item"
            :class="tabClass(tab)" @click="select(tab)">
                {{tab.text}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    type TabItem = { text: string; value: string }

    @Component
    export default class Tabs extends Vue {
        @Prop({required: true, type: Array}) tabList!: TabItem[]
        @Prop(String) readonly value!: string
        @Prop(String) classPrefix?: string

        select(tab: TabItem) {
            this.$emit('update:value', tab.value)
        }

        tabClass(tab: TabItem) {
            return {
                selected: tab.value === this.value,
                [this.classPrefix + '-tabs-item']: this.classPrefix
            }
        }
    }

</script>

<style lang="scss" scoped>
.tabs {
    background: #c4c4c4;
    display: flex;
    font-size: 24px;

    &-item {
        width: 50%;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &.selected::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #333;
        }
    }
}
</style>