<template>
    <div>
        <Layout class-prefix="layout">
            <Tags :data-source.sync="tags"/>
            <Notes/>
            <Types/>
            <NumPanel/>
        </Layout>
    </div>
</template>

<script>
import Tags from '@/components/Money/Tags.vue'
import Notes from '@/components/Money/Notes.vue'
import Types from '@/components/Money/Types.vue'
import NumPanel from '@/components/Money/NumPanel.vue'

export default {
    components: {
        Tags,
        Notes,
        Types,
        NumPanel
    },

    data() {
        return {
            tags: ['衣', '食', '住', '行', '吃', '喝', '玩', '乐']
        }
    },
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