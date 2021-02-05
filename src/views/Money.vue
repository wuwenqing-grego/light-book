<template>
    <div>
        <Layout class-prefix="layout">
            <Tags :data-source.sync="tags" @update:value="onUpdateSelectedTags"/>
            <Notes @update:value="onUpdateNote"/>
            <Types @update:value="onUpdateType"/>
            <NumPanel @update:value="onUpdateAmount" @submit="saveRecord"/>
        </Layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Tags from '@/components/Money/Tags.vue'
import Notes from '@/components/Money/Notes.vue'
import Types from '@/components/Money/Types.vue'
import NumPanel from '@/components/Money/NumPanel.vue'

type Record = {
    tags: string[];
    note: string;
    type: string;
    amount: number;
    createdAt?: Date;
}

@Component({
    components: { Tags, Notes, Types, NumPanel}
})
export default class Money extends Vue {
    tags: string[] = ['衣', '食', '住', '行', '吃', '喝', '玩', '乐']

    record: Record = {
        tags: [],
        note: '',
        type: '-',
        amount: 0,
    }

    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')
    
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
        const clone: Record = JSON.parse(JSON.stringify(this.record))
        clone.createdAt = new Date()
        this.recordList.push(clone)
    }

    @Watch('recordList')
    onRecordListChange() {
        window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
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