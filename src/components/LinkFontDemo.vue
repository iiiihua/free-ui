<template>
    <Demo :component="LinkFount1"/>
    <Demo :component="LinkFount2"/>
    <Demo :component="LinkFount3"/>
    <BottmoTouch go="/doc/alert" goback="/doc/tabs" gotext="Alert警告" gobacktext="Tabs组件"/>
</template>

<script lang="ts" >

    import LinkFont from "../lib/LinkFont.vue";
    import LinkFount1 from "./LinkFont1.demo.vue"
    import LinkFount2 from "./LinkFont2.demo.vue"
    import LinkFount3 from "./LinkFont3.demo.vue"
    import Demo from './Demo.vue';
    import BottmoTouch from './BottmoTouch.vue';
    export default {
        name: "LinkFontDemo",
        components: {BottmoTouch, Demo, LinkFont},
        data(){
            return{
                LinkFount1,
                LinkFount2,
                LinkFount3
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
