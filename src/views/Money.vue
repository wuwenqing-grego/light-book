<template>
    <div>
        <Layout class-prefix="layout">
            <Tags/>
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