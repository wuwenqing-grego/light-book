<template>
    <Layout class-prefix="layout">
        <!-- {{recordList}} -->
        <Tags :data-source.sync="tags" @update:value="onUpdateSelectedTags"/>
        <Notes field-name="备注" placeholder-content="在这里输入备注" @update:value="onUpdateNote"/>
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
import recordListModel from '@/models/recordListModel.ts'
import tagListModel from '@/models/tagListModel.ts'

@Component({
    components: { Tags, Notes, Types, NumPanel }
})
export default class Money extends Vue {
    tags = tagListModel.fetch()

    record: RecordItem = {
        tags: [],
        note: '',
        type: '-',
        amount: 0,
    }
    
    recordList = recordListModel.fetch()
    
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
        recordListModel.create(this.record)
    }

    @Watch('recordList')
    onRecordListChange() {
        recordListModel.save()
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