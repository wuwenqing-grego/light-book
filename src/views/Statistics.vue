<template>
    <Layout>
        <Tabs class-prefix="type" :tab-list="recordTypeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :tab-list="intervalList" :value.sync="interval"/>
        <ol>
            <li v-for="(records, date) in sortedRecordList" :key="date">
                <h3 class="title">{{beautify(date)}}</h3>
                <ol>
                    <li v-for="record in records" :key="record.id" class="record">
                        <span>{{tagString(record.tags)}}</span>
                        <span class="note">{{record.note}}</span>
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
import dayjs from 'dayjs'

@Component({
    components: { Tabs }
})
export default class Statistics extends mixins(RecordHelper) {
    type = '-'
    recordTypeList = recordTypeList
    interval = 'day'
    intervalList = intervalList

    tagString(tags: Tag[]) {
        return tags.length ? tags.map(tag => tag.name).join(', ') : '无'
    }

    beautify(dateStr: string) {
        const day = dayjs(dateStr)
        const now = dayjs()

        if (day.isSame(now, 'day')) {
            return '今天'
        } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
            return '昨天'
        } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
            return '前天'
        } else if (day.isSame(now, 'year')) {
            return day.format('M月D日')
        } else {
            return day.format('YYYY年M月D日')
        }
    }

    get sortedRecordList() {
        if (!this.recordList.length) {return []}

        const newList = clone(this.recordList)
            .filter((record: RecordItem) => record.type === this.type)
            .sort((a: RecordItem, b: RecordItem) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf())

        const map: { [key: string]: RecordItem[] } = {}
        for (const record of newList) {
            const date = dayjs(record.createdAt).format('YYYY-MM-DD')
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

%item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    @extend %item;
    background: #d9d9d9
}

.record {
    @extend %item;
}

.note {
    margin-left: 16px;
    margin-right: auto;
    color: #999;
}
</style>