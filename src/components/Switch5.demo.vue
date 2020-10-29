<demo>
    支持更改按钮颜色
</demo>
<template>
    <Switch v-model:value="bool" colors="#CC3399"/><br/>
    <Switch v-model:value="bool2" colors="#00CCFF"/><br/>
    <Switch v-model:value="bool3" colors="#FF3300"/>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue';
    import {ref} from 'vue';

    export default {
        components: {
            Switch,
        },
        setup() {
            const bool = ref(false);
            const bool2 = ref(false);
            const bool3 = ref(false);
            return {
                bool,
                bool2,
                bool3,
            };
        }
    };
</script>
