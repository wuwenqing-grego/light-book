<template>
    <Layout>
        <Tabs class-prefix="type" :tab-list="recordTypeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :tab-list="intervalList" :value.sync="interval"/>
        <ol>
            <li v-for="(records, date) in sortedRecordList" :key="date">
                <h3>{{date}}</h3>
                <ol>
                    <li v-for="record in records" :key="record.id">
                        <span>{{record.tags}}</span>
                        <span>{{record.note}}</span>
                        <span>￥{{record.amount}}</span>
                    </li>
                </ol>
            </li>
        </ol>
    </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Tabs from '@/components/Money/Tabs.vue'
import recordTypeList from '@/constants/recordTypeList'
import intervalList from '@/constants/intervalList'
import RecordHelper from '@/mixins/RecordHelper'
import clone from '@/lib/clone'

@Component({
    components: { Tabs }
})
export default class Statistics extends mixins(RecordHelper) {
    type = '-'
    recordTypeList = recordTypeList
    interval = 'day'
    intervalList = intervalList

    get sortedRecordList() {
        if (!this.recordList.length) {return []}

        const newList = clone(this.recordList)
        const map: { [key: string]: RecordItem[] } = {}
        for (const record of newList) {
            const date = record.createdAt.split('T')[0]
            map[date] = map[date] || []
            map[date].push(record)
        }

        return map
    }
}
</script>

<style lang="scss" scoped>
::v-deep {
    .type-tabs-item {
        &.selected {
            background: white;
        }
    }

    .interval-tabs-item {
        height: 48px;
    }
}
</style>