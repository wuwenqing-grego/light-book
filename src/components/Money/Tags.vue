<template>
    <div class="tags">
        <ul class="list">
            <li v-for="tag in dataSource" :key="tag" 
            :class="{selected: selectedTags.includes(tag)}"
            @click="toggle(tag)">{{ tag }}</li>
        </ul>
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component
    export default class Tags extends Vue{
        @Prop(Array) readonly dataSource!: string[]
        selectedTags: string[] = []

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag)
            index >= 0 ? this.selectedTags.splice(index, 1) : this.selectedTags.push(tag)
            this.$emit('update:value', this.selectedTags)
        }

        create() {
            const name = window.prompt('请输入标签名：')
            if (name === '') {
                window.alert('标签名不能为空！')
            } else if (name) {
                this.$emit('update:dataSource', [...this.dataSource, name])
            }
        }
    }
</script>

<style lang="scss" scoped>
.tags {
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 300px;
    overflow: auto;

    .list {
        display: flex;
        flex-wrap: wrap;

        li {
            background: #d9d9d9;
            height: 24px;
            line-height: 24px;
            border-radius: 12px;
            padding: 0 16px;
            margin-right: 12px;
            margin-top: 4px;

            &.selected {
                background: darken(#d9d9d9, 50%);
                color: white;
            }
        }
    }

    .new {
        padding-top: 16px;

        button {
            background: transparent;
            border: none;
            color: #999;
            border-bottom: 1px solid;
            padding: 0 4px;
        }
    }
}
</style>