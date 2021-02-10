<template>
    <Layout>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon icon-name="#arrow"/>
            </router-link>
        </div>
        <div class="newTag-wrapper">
            <button class="newTag" @click="createTag">新建标签</button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import tagListModel from '@/models/tagListModel.ts'

    @Component
    export default class Labels extends Vue {
        tags = tagListModel.fetch()
        
        createTag() {
            const name = window.prompt('请输入标签名：')
            if (name === '') {
                window.alert('标签名不能为空！')
            } else if (name) {
                const msg = tagListModel.create(name)

                if (msg === 'duplicated') {
                    window.alert('标签名已被使用！')
                } else if (msg === 'success') {
                    window.alert('标签添加成功！')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;

    .tag {
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;

        svg {
            width: 18px;
            height: 18px;
            color: #666;
            margin-right: 16px;
        }
    }
}

.newTag-wrapper {
    margin-top: 40px;
    padding: 16px;
    text-align: center;

    .newTag {
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;
    }
}
</style>
