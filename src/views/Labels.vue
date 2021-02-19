<template>
    <Layout>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon icon-name="#arrow"/>
            </router-link>
        </div>
        <div class="newTag-wrapper">
            <Button @click.native="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import { mixins } from 'vue-class-component'
    import Button from '@/components/Button.vue'
    import TagHelper from '@/mixins/TagHelper'

    @Component({
        components: { Button }
    })
    export default class Labels extends mixins(TagHelper) {
        
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
