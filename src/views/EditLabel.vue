<template>
    <Layout>
        <nav>
            <Icon icon-name="#arrow-left" class="back"/>
            <span>编辑标签</span>
            <span class="back"></span>
        </nav>
        <div class="form-wrapper">
            <Notes :value="tag.name" field-name="标签名" placeholder-content="在这里输入标签名" @update:value="update"/>
        </div>
        <div class="button-wrapper">
            <Button>删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import tagListModel from '@/models/tagListModel.ts'
    import Notes from '@/components/Money/Notes.vue'
    import Button from '@/components/Button.vue'

    @Component({
        components: { Notes, Button }
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
nav {
    background: #f5f5f5;
    font-size: 16px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .back {
        width: 24px;
        height: 24px;
    }
}

.form-wrapper {
    margin-top: 16px;
}

.button-wrapper {
    text-align: center;
    margin-top: 40px;
}
</style>