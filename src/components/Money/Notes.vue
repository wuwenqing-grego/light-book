<template>
    <div>
        <label class="notes">
            <span>备注{{note}}</span>
            <input type="text" :value="note" @input="onInput" placeholder="在这里添加备注">
        </label>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Notes extends Vue {
        note = ''

        onInput(e: KeyboardEvent) {
            this.note = (e.target as HTMLInputElement).value
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