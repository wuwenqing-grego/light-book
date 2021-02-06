<template>
    <Layout class-prefix="layout">
        <!-- {{recordList}} -->
        <Tags :data-source.sync="tags" @update:value="onUpdateSelectedTags"/>
        <Notes @update:value="onUpdateNote"/>
        <Types @update:value="onUpdateType"/>
        <NumPanel @update:value="onUpdateAmount" @submit="saveRecord"/>
    </Layout>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Tags from '@/components/Money/Tags.vue'
import Notes from '@/components/Money/Notes.vue'
import Types from '@/components/Money/Types.vue'
import NumPanel from '@/components/Money/NumPanel.vue'
import model from '@/model.ts'

@Component({
    components: { Tags, Notes, Types, NumPanel}
})
export default class Money extends Vue {
    tags: string[] = ['衣', '食', '住', '行', '吃', '喝', '玩', '乐']

    record: RecordItem = {
        tags: [],
        note: '',
        type: '-',
        amount: 0,
    }
    
    recordList: RecordItem[] = model.fetch()
    
    onUpdateSelectedTags(value: string[]) {
        this.record.tags = value
    }

    onUpdateNote(value: string) {
        this.record.note = value
    }

    onUpdateType(value: string) {
        this.record.type = value
    }

    onUpdateAmount(value: string) {
        this.record.amount = parseFloat(value)
    }

    saveRecord() {
        const clone: RecordItem = model.clone(this.record)
        clone.createdAt = new Date()
        this.recordList.push(clone)
    }

    @Watch('recordList')
    onRecordListChange() {
        model.save(this.recordList)
    }
}
</script>

<style lang="scss">
.layout-content {
    display: flex;
    flex-direction: column;
}

// .layout-wrapper {
//     border: 1px solid blue;
// }
</style>