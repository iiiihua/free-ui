<demo>
    支持只读操作
</demo>
<template>
    <Input v-model:value="value" readonly/>
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
