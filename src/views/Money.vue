<template>
    <div>
        <Layout>
            <Tags/>
            <Notes/>
            <Types/>
            <NumPanel/>
        </Layout>
    </div>
</template>

<script lang="ts">
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

<style lang="scss" scoped>

</style>