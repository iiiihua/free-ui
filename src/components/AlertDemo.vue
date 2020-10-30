<template>
<Alert/>
    <BottmoTouch go="/" goback="/doc/linkfont" gobacktext="Link文字链接" gotext="无"></BottmoTouch>
</template>

<script>
    import Alert from "../lib/Alert.vue";
    import BottmoTouch from "./BottmoTouch.vue";
    export default {
        name: "AlertDemo",
        components: {BottmoTouch, Alert}
    }
</script>

<style scoped>

</style>
