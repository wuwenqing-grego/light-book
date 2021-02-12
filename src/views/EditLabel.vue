<template>
    <Layout>
        <nav>
            <Icon icon-name="#arrow-left" class="back" @click.native="goBack"/>
            <span>编辑标签</span>
            <span class="back"></span>
        </nav>
        <div class="form-wrapper">
            <Notes :field-content="tag.name" field-name="标签名" placeholder-content="在这里输入标签名" @update:value="update"/>
        </div>
        <div class="button-wrapper">
            <Button @click.native="confirm">确认更改</Button>
            <Button @click.native="remove">删除标签</Button>
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
        cache = ''
        
        created() {
            const id = this.$route.params.id
            const tags = tagListModel.fetch()
            const currTag = tags.filter(item => item.id === id)[0]

            if (currTag) {
                this.tag = currTag
                this.cache = currTag.name
            } else {
                this.$router.replace('/404')
            }
        }

        update(name: string) {
            this.cache = name
        }

        confirm() {
            if (window.confirm('是否确认更改？')) {
                if (this.cache === '') {
                    window.alert('标签名不能为空！')
                } else if (this.tag) {
                    const msg = tagListModel.update(this.tag.id, this.cache)

                    if (msg === 'duplicated') {
                        window.alert('标签名已被使用！')
                    } else if (msg === 'success') {
                        window.alert('标签修改成功！')
                    } else {
                        window.alert('标签不存在！')
                    }
                }
            }
        }

        remove() {
            console.log('remove')
        }

        goBack() {
            this.$router.back()
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
    display: flex;
    justify-content: space-evenly;
}
</style>