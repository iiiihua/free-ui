<template>
    <h1>Tabs 示例</h1>
    <Demo :component="Tabs1Demo"/>
    <BottmoTouch go="/doc/linkfont" goback="/doc/dialog" gotext="Link文字链接" gobacktext="Dialog组件"/>
</template>
<script lang="ts">
    import Demo from './Demo.vue';
    import Tabs1Demo from './Tabs1.demo.vue';
    import BottmoTouch from './BottmoTouch.vue';

    export default {
        components: {
            BottmoTouch,
            Demo
        },
        setup() {
            return {
                Tabs1Demo
            };
        }
    };
</script>
