<template>
    <div class="numPanel">
        <div class="output">{{ output }}</div>
        <div class="buttons">
            <button @click="typeIn">1</button>
            <button @click="typeIn">2</button>
            <button @click="typeIn">3</button>
            <button @click="arith">+</button>
            <button @click="remove">DEL</button>
            <button @click="typeIn">4</button>
            <button @click="typeIn">5</button>
            <button @click="typeIn">6</button>
            <button @click="arith">-</button>
            <button @click="clear">C</button>
            <button @click="typeIn">7</button>
            <button @click="typeIn">8</button>
            <button @click="typeIn">9</button>
            <button @click="arith">*</button>
            <button @click="enter" class="ok">OK</button>
            <button @click="typeIn" class="zero">0</button>
            <button @click="typeIn">.</button>
            <!-- <button>%</button> -->
            <button @click="arith">/</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class NumPanel extends Vue{
        output = '0'
        readyForNext = false
        validResult = true
        stack: string[] = []

        typeIn(e: MouseEvent) {
            const text = (e.target as HTMLButtonElement).textContent as string

            if (this.output.length === 16) {
                return
            }

            if (this.output === '0' || this.readyForNext) {
                if (this.readyForNext) {this.readyForNext = false}
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
            this.readyForNext = false
            this.validResult = true
            this.stack = []
        }

        arith(e: MouseEvent) {
            const operator = (e.target as HTMLButtonElement).textContent as string
            console.log(operator)

            if (this.stack.length && this.readyForNext) {
                this.stack.pop()
                this.stack.push(operator)
                return
            } else if (this.stack.length) {
                this.clearStack()
            } else {
                this.stack.push(this.output)
            }

            this.stack.push(operator)
            this.readyForNext = true

            if (!this.validResult) {
                this.clear()
            }
        }

        clearStack() {
            const operator = this.stack.pop() as string
            const num1 = parseFloat(this.stack.pop() as string)
            const num2 = parseFloat(this.output)
            let result = this.calculate(operator, num1, num2) + ''
            console.log(result)

            if (result === 'Infinity' || result === '-Infinity' || result === 'NaN') {
                window.alert('计算不合法！')
                this.validResult = false
            } else {
                const real = result.split('.')[0]
                const frac = result.split('.')[1]
                if (real.length > 15) {
                    window.alert('数值超出范围！')
                    this.validResult = false
                } else if (frac && frac.length > 2) {
                    result = real + '.' + frac.slice(0, 2)
                }
            }
            
            this.stack.push(result)
            this.output = result
        }

        calculate(operator: string, num1: number, num2: number) {
            if (operator === '+') {
                return num1 + num2
            } else if (operator === '-') {
                return num1 - num2
            } else if (operator === '*') {
                return num1 * num2
            } else if (operator === '/') {
                return num1 / num2
            }
        }

        enter() {
            if (this.stack.length && !this.readyForNext) {
                console.log('1')
                this.clearStack()
            }

            if (this.validResult) {
                this.$emit('update:value', this.output)
                this.$emit('submit')
            }
            this.clear()
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

            &.zero {
                grid-column: 1 / 3;
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

            &:nth-child(4), &:nth-child(8), &:nth-child(12) {
                background: darken($bg, 4*3%);
            }

            &:nth-child(5), &:nth-child(9), &:nth-child(13), &:nth-child(16) {
                background: darken($bg, 4*4%);
            }

            &:nth-child(10), &:nth-child(14), &:nth-child(17) {
                background: darken($bg, 4*5%);
            }

            &:last-child {
                background: darken($bg, 4*6%);
            }
        }
    }
}
</style>