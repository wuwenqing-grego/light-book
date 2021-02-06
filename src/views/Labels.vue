<template>
    <Layout>
        <ul class="tags">
            <li class="tag"><span>衣</span> <Icon icon-name="#arrow"/></li>
            <li class="tag"><span>食</span> <Icon icon-name="#arrow"/></li>
            <li class="tag"><span>住</span> <Icon icon-name="#arrow"/></li>
            <li class="tag"><span>行</span> <Icon icon-name="#arrow"/></li>
        </ul>
        <div class="newTag-wrapper">
            <button class="newTag">新建标签</button>
        </div>
    </Layout>
</template>

<script>
    export default {
        
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
