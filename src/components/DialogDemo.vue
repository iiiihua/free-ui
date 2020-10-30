<template>
    <h1>Dialog示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
    <BottmoTouch go="/doc/tabs" goback="/doc/input" gotext="Tabs组件" gobacktext="Input组件"/>
</template>
<script lang="ts">
    import Demo from './Demo.vue';
    import Dialog1Demo from './Dialog1.demo.vue';
    import Dialog2Demo from './Dialog2.demo.vue';
    import BottmoTouch from './BottmoTouch.vue';
    export default {
        components: {
            BottmoTouch,
            Demo
        },
        setup() {
            return {
                Dialog1Demo,
                Dialog2Demo
            }
        }
    }
</script>
