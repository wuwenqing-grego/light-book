<template>
    <Layout>
        <nav>
            <Icon icon-name="#arrow-left"/>
            <span>编辑标签</span>
        </nav>
        <Notes :value="tag.name" field-name="标签名" placeholder-content="在这里输入标签名" @update:value="update"/>
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import tagListModel from '@/models/tagListModel.ts'
    import Notes from '@/components/Money/Notes.vue'

    @Component({
        components: { Notes }
    })
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

        update() {
            console.log('update')
        }
    }
</script>

<style lang="scss" scoped>

</style>