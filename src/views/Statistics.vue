<template>
    <Layout>
        <Tabs class-prefix="type" :tab-list="recordTypeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :tab-list="intervalList" :value.sync="interval"/>
    </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Tabs from '@/components/Money/Tabs.vue'

@Component({
    components: { Tabs }
})
export default class Statistics extends Vue {
    type = '-'
    recordTypeList = [
        {text: '支出', value: '-'},
        {text: '收入', value: '+'},
    ]
    interval = 'day'
    intervalList = [
        {text: '按天', value: 'day'},
        {text: '按周', value: 'week'},
        {text: '按月', value: 'month'},
    ]
}
</script>

<style lang="scss" scoped>
::v-deep {
    .type-tabs-item {
        &.selected {
            background: white;
        }
    }

    li.interval-tabs-item {
        height: 48px;
    }
}
</style>