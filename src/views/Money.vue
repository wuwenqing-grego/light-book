<template>
    <Layout class-prefix="layout" :style="{height: vh + 'px'}">
        <Tags @update:value="onUpdateSelectedTags"/>
        <Notes field-name="备注" placeholder-content="在这里输入备注" @update:value="onUpdateNote"/>
        <Tabs :tab-list="recordTypeList" :value.sync="record.type"/>
        <NumPanel @update:value="onUpdateAmount" @submit="saveRecord"/>
    </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Tags from '@/components/Money/Tags.vue'
import Notes from '@/components/Money/Notes.vue'
import Tabs from '@/components/Money/Tabs.vue'
import NumPanel from '@/components/Money/NumPanel.vue'
import recordTypeList from '@/constants/recordTypeList'
import RecordHelper from '@/mixins/RecordHelper'

@Component({
    components: { Tags, Notes, Tabs, NumPanel }
})
export default class Money extends mixins(RecordHelper) {
    vh = document.documentElement.clientHeight

    record: RecordItem = {
        tags: [],
        note: '',
        type: '-',
        amount: 0,
    }

    recordTypeList = recordTypeList
    
    onUpdateSelectedTags(value: Tag[]) {
        this.record.tags = value
    }

    onUpdateNote(value: string) {
        this.record.note = value
    }

    onUpdateAmount(value: string) {
        this.record.amount = parseFloat(value)
    }

    saveRecord() {
        this.$store.commit('record/create', this.record)
        this.$router.go(0)
    }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
    display: flex;
    flex-direction: column;
}
</style>