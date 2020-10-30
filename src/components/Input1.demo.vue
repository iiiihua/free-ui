<demo>
    常规用法
</demo>
<template>
    <Input v-model:value="value" placeholder="请输入内容"/>
</template>

<script lang="ts">
    import Input from '../lib/Input.vue';

    export default {
        components: {
            Input
        },
        data(){
            return{
                value: ''
            }
        }
    };
</script>
