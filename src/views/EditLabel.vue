<template>
    <Layout>
        <nav>
            <Icon icon-name="#arrow-left" class="back" @click.native="goBack"/>
            <span>编辑标签</span>
            <span class="back"></span>
        </nav>
        <div class="form-wrapper">
            <Notes :field-content="currTag.name" field-name="标签名" placeholder-content="在这里输入标签名" @update:value="update"/>
        </div>
        <div class="button-wrapper">
            <Button @click.native="confirm">确认更改</Button>
            <Button @click.native="remove" class-prefix="delete">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import Notes from '@/components/Money/Notes.vue'
    import Button from '@/components/Button.vue'

    @Component({
        components: { Notes, Button }
    })
    export default class EditLabel extends Vue {
        cache = ''

        get currTag() {
            return this.$store.state.tag.currTag
        }
        
        created() {
            const id = this.$route.params.id
            this.$store.commit('tag/fetch')
            this.$store.commit('tag/setCurrTag', id)

            if (!this.currTag) {
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
                } else if (this.currTag) {
                    this.$store.commit('tag/update', {id: this.currTag.id, name: this.cache})
                }
            }
        }

        remove() {
            if (window.confirm('是否确认删除？')) {
                if (this.currTag) {
                    this.$store.commit('tag/remove', this.currTag.id)
                    this.$router.back()
                }
            }
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

::v-deep {
    .delete-button {
        background: red;
    }
}
</style>