<demo>
    支持更改颜色
</demo>
<template>
    <Switch v-model:value="bool" size="small"/><br/>
    <Switch v-model:value="bool2"/><br/>
    <Switch v-model:value="bool3" size="large"/>
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
