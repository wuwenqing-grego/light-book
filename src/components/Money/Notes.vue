<template>
    <div>
        <label class="notes">
            <span>{{ fieldName }}</span>
            <input type="text" :value="fieldContent" @input="onNoteChange($event.target.value)" :placeholder="placeholderContent">
        </label>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch, Prop } from 'vue-property-decorator'

    @Component
    export default class Notes extends Vue {
        @Prop({default: ''}) readonly fieldContent!: string
        @Prop(String) fieldName!: string
        @Prop(String) placeholderContent!: string

        onNoteChange(val: string) {
            this.$emit('update:value', val)
        }
    }
</script>

<style lang="scss" scoped>
.notes {
    padding-left: 15px;
    display: flex;
    background: #f5f5f5;
    align-items: center;
    font-size: 14px;

    span {
        padding-right: 16px;
    }

    input {
        height: 64px;
        flex-grow: 1;
        background: transparent;
        border: none;
        padding-right: 16px;
    }
}
</style>