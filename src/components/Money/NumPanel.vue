<template>
    <div class="numPanel">
        <div class="output">{{ output }}</div>
        <div class="buttons">
            <button @click="typeIn">1</button>
            <button @click="typeIn">2</button>
            <button @click="typeIn">3</button>
            <button>+</button>
            <button @click="remove">DEL</button>
            <button @click="typeIn">4</button>
            <button @click="typeIn">5</button>
            <button @click="typeIn">6</button>
            <button>-</button>
            <button @click="clear">C</button>
            <button @click="typeIn">7</button>
            <button @click="typeIn">8</button>
            <button @click="typeIn">9</button>
            <button>*</button>
            <button @click="enter" class="ok">OK</button>
            <button @click="typeIn">0</button>
            <button @click="typeIn">.</button>
            <button>%</button>
            <button>/</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class NumPanel extends Vue{
        output = '0'

        typeIn(e: MouseEvent) {
            const text = (e.target as HTMLButtonElement).textContent as string

            if (this.output.length === 16) {
                return
            }

            if (this.output === '0') {
                if (/[0-9]/.test(text)) {
                    this.output = text
                    return
                }
            }

            if (text === '.' && this.output.includes('.')) {
                return
            }

            this.output += text
        }

        remove() {
            this.output = this.output.length > 1 ? this.output.slice(0, -1) : '0'
        }

        clear() {
            this.output = '0'
        }

        enter() {
            console.log('submit')
        }
    }
</script>

<style lang="scss" scoped>
@import '~@/assets/style/common.scss';
.numPanel {
    .output {
        font-size: 36px;
        font-family: Consolas, monospace;
        padding: 9px 16px;
        text-align: right;
        @extend %innerShadow;
        height: 72px;
    }

    .buttons {
        display: grid;
        grid: 64px 64px 64px 64px / 1fr 1fr 1fr 1fr 1fr;

        button {
            border: none;
            background: transparent;
            $bg: #f2f2f2;

            &.ok {
                grid-row: 3 / 5;
                grid-column: 5;
                background: darken($bg, 4*7%);
            }

            &:nth-child(1) {
                background: $bg;
            }

            &:nth-child(2), &:nth-child(6) {
                background: darken($bg, 4%);
            }

            &:nth-child(3), &:nth-child(7), &:nth-child(11) {
                background: darken($bg, 4*2%);
            }

            &:nth-child(4), &:nth-child(8), &:nth-child(12), &:nth-child(16) {
                background: darken($bg, 4*3%);
            }

            &:nth-child(5), &:nth-child(9), &:nth-child(13), &:nth-child(17) {
                background: darken($bg, 4*4%);
            }

            &:nth-child(10), &:nth-child(14), &:nth-child(18) {
                background: darken($bg, 4*5%);
            }

            &:last-child {
                background: darken($bg, 4*6%);
            }
        }
    }
}
</style>