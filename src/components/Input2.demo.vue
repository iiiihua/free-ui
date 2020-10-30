<demo>
    支持Disable
</demo>
<template>
    <Input v-model:value="value" disabled />
</template>

<script lang="ts">
    import Input from '../lib/Input.vue';

    export default {
        components: {
            Input
        },
        data(){
            return{
                value: '禁止'
            }
        }
    };
</script>
