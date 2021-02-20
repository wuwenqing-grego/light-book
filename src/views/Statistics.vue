<template>
    <Layout>
        <Tabs class-prefix="type" :tab-list="recordTypeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :tab-list="intervalList" :value.sync="interval"/>
    </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Tabs from '@/components/Money/Tabs.vue'
import recordTypeList from '@/constants/recordTypeList'
import intervalList from '@/constants/intervalList'

@Component({
    components: { Tabs }
})
export default class Statistics extends Vue {
    type = '-'
    recordTypeList = recordTypeList
    interval = 'day'
    intervalList = intervalList
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