<template>
    <div class="tags">
        <ul class="list">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
        <div class="new">
            <button>新增标签</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.tags {
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;

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