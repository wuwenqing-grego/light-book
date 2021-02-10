<template>
    <Layout>
        editlabel
        {{tag}}
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import tagListModel from '@/models/tagListModel.ts'

    @Component
    export default class EditLabel extends Vue {
        tag?: { id: string; name: string } = undefined
        
        created() {
            const id = this.$route.params.id
            const tags = tagListModel.fetch()
            const currTag = tags.filter(item => item.id === id)[0]

            if (currTag) {
                this.tag = currTag
            } else {
                this.$router.replace('/404')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>