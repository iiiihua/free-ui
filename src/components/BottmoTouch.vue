<template>
    <div class="bottomtouch">
        <router-link :to="goback" class="left">{{gobacktext}}</router-link>
        <router-link :to="go" class="right">{{gotext}}</router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: "BottmoTouch",
        props:{
            goback: {
                type:String
            },
            go: {
                type: String
            },
            gobacktext: {
                type: String
            },
            gotext: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    .bottomtouch{
        margin-top: 2em;
        width: 100%;
    }
    .left{
        color: #5cadff;
        float: left;
    }
    .right{
        color: #5cadff;
        float: right;
    }

</style>
