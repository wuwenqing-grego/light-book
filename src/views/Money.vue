<template>
    <div>
        <Layout class-prefix="layout">
            <Tags :data-source.sync="tags" @update:value="onUpdateSelectedTags"/>
            <Notes @update:value="onUpdateNote"/>
            <Types @update:value="onUpdateType"/>
            <NumPanel @update:value="onUpdateAmount"/>
        </Layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Tags from '@/components/Money/Tags.vue'
import Notes from '@/components/Money/Notes.vue'
import Types from '@/components/Money/Types.vue'
import NumPanel from '@/components/Money/NumPanel.vue'

type Record = {
    tags: string[];
    note: string;
    type: string;
    amount: number;
}

@Component({
    components: { Tags, Notes, Types, NumPanel}
})
export default class Money extends Vue {
    tags: string[] = ['衣', '食', '住', '行', '吃', '喝', '玩', '乐']

    record: Record = {
        tags: [],
        note: '',
        type: '',
        amount: 0
    }
    
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