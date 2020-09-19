<template>
    <button class="free-switch" :class="bindClassNameofvalue(), getSwitchValueColor(), getSwitchValueSize()" :style="value=== true ? {background:color} : ''" @click="toggle">
        <span :style="{background:colors}"></span>
    </button>
</template>

<script lang="ts">
    export default {
        name: "Switch",
        data (){
            return {
                clictcolor: ''
            }
        },
        props: {
            value: Boolean,
            size: {
                value: String
            },
            switchcolor:{
                value: String
            },
            color: {
                value: String
            },
            colors: {
                value: String
            }
        },
        setup(props, context) {
            const toggle = () => {
                context.emit('update:value', !props.value)
            }
            return {toggle}
        },
        methods :{
            getSwitchValueSize () {
                if (this.size === 'large'){
                    return 'fr-switch-size-large'
                }else if (this.size === 'small') {
                    return 'fr-switch-size-small'
                }return
            },
            bindClassNameofvalue () {
                if (this.size === 'large'){
                    if (this.value === true){
                        return "fr-switch-size-large-over"
                    }
                    return ''
                }
                else if (this.size === 'small') {
                    if (this.value === true) {
                        return "fr-switch-size-small-over"
                    }
                    return ''
                }else if (this.value === true) {
                    return 'free-checked'
                }
                return ''
            },
            getSwitchValueColor() {
                if (this.switchcolor === "success") {
                    if (this.value === true){
                        return 'fr-switch-color-success'
                    }
                    return ''
                }
                else if (this.switchcolor === 'warning') {
                    if (this.value === true){
                        return 'fr-switch-color-warning'
                    } return ''
                }else if (this.switchcolor === 'error') {
                    if (this.value === true){
                        return 'fr-switch-color-error'
                    }return ''
                }
            }


        }

    }
</script>

<style lang="scss">
    $h: 22px;
    $h2: $h - 4px;
    .free-switch {
        height: $h;
        width: $h*2;
        border: none;
        background: grey;
        border-radius: $h/2;
        position: relative;

        > span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2 / 2;
            transition: left 250ms;
        }
    }

    .free-switch.free-checked {
        background: blue;

        > span {
            left: calc(100% - #{$h2} - 2px);
        }
    }

    .free-switch:focus {
        outline: none;
    }
    .fr-switch-size-large{
        height: $h+5;
        width: $h*3;
        border-radius: ($h+5)/2;
        >span {
            height: $h2+5;
            width: $h2+5;
            border-radius:($h2+5)/2 ;
        }
    }
    .fr-switch-size-large-over{
        background: blue;
        > span {
            left: calc(100% - #{$h2} - 7px);
        }
    }
    .fr-switch-size-small{
        height: $h - 4;
        width: $h*2 - 7;
        border-radius: ($h+5)/2;
        >span {
            height: $h2 - 4;
            width: $h2 - 4;
            border-radius:($h2)/2 ;
        }
    }
    .fr-switch-size-small-over{
        background: blue;
        > span {
            left: calc(100% - #{$h2} + 2px);
        }
    }
    .fr-switch-color-success{
        background-color: #98d358 !important;
    }
    .fr-switch-color-warning{
        background-color: #f3c547 !important;
    }
    .fr-switch-color-error{
        background-color: #e36262 !important;
    }

</style>
