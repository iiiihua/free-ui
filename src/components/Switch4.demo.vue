<demo>
    支持更改按钮背景提醒色
</demo>
<template>
    <Switch v-model:value="bool" switchcolor="success"/><br/>
    <Switch v-model:value="bool2" switchcolor="warning"/><br/>
    <Switch v-model:value="bool3" switchcolor="error"/>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue';
    import {ref} from 'vue';

    export default {
        components: {
            Switch,
        },
        setup() {
            const bool = ref(true);
            const bool2 = ref(true);
            const bool3 = ref(true);
            return {
                bool,
                bool2,
                bool3,
            };
        }
    };
</script>
