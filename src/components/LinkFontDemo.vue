<template>
    <Demo :component="LinkFount1"/>
    <Demo :component="LinkFount2"/>
    <Demo :component="LinkFount3"/>

</template>

<script lang="ts" >

    import LinkFont from "../lib/LinkFont.vue";
    import LinkFount1 from "./LinkFont1.demo.vue"
    import LinkFount2 from "./LinkFont2.demo.vue"
    import LinkFount3 from "./LinkFont3.demo.vue"
    import Demo from './Demo.vue';
    export default {
        name: "LinkFontDemo",
        components: {Demo, LinkFont},
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
