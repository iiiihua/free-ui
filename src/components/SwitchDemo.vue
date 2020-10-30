<template>
    <div>
        <h1>Switch 组件示例 </h1>
        <Demo :component="Switch1Demo"/>
        <Demo :component="Switch2Demo"/>
        <Demo :component="Switch3Demo"/>
        <Demo :component="Switch5Demo"/>
        <Demo :component="Switch6Demo"/>
        <Demo :component="Switch4Demo"/>
        <BottmoTouch go="/doc/button" goback="/doc/icon" gotext="Button组件" gobacktext="Icon字体图标"/>
    </div>
</template>
<script lang="ts">
    import Switch1Demo from './Switch1.demo.vue';
    import Switch2Demo from './Switch2.demo.vue';
    import Switch3Demo from './Switch3.demo.vue';
    import Switch4Demo from './Switch4.demo.vue';
    import Switch5Demo from './Switch5.demo.vue';
    import Switch6Demo from './Switch6.demo.vue';
    import Demo from './Demo.vue';
    import BottmoTouch from './BottmoTouch.vue';
    export default {
        components: {
            BottmoTouch,
            Demo
        },
        setup() {
            return {
                Switch1Demo, Switch2Demo,
                Switch3Demo, Switch4Demo,
                Switch5Demo, Switch6Demo,
            };
        }
    };
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;

        > h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }

        &-component {
            padding: 16px;
        }

        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }

        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>
