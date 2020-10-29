<demo>
    支持自定义颜色选择
</demo>
<template>
    <Switch v-model:value="bool" color="#CC3399"/><br/>
    <Switch v-model:value="bool2" color="#00CCFF"/><br/>
    <Switch v-model:value="bool3" color="#FF3300"/>
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
                bool3
            };
        }
    };
</script>
