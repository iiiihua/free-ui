<template>
    <Demo :component="Input1"></Demo>
    <Demo :component="Input2"></Demo>
    <Demo :component="Input3"></Demo>
    <BottmoTouch go="/doc/dialog" goback="/doc/button" gotext="Dialog组件" gobacktext="Button组件"/>
</template>

<script>
    import Input from "../lib/Input.vue";
    import Demo from "./Demo.vue";
    import Input1 from './Input1.demo.vue'
    import Input2 from './Input2.demo.vue'
    import Input3 from './Input3.demo.vue'
    import BottmoTouch from "./BottmoTouch.vue";
    export default {
        name: "InputDemo",
        components: {BottmoTouch, Demo, Input},
        data(){
            return{
                Input1,
                Input2,
                Input3,
            }
        }
    }
</script>

<style scoped>

</style>
