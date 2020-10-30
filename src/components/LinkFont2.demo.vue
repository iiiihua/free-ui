<demo>
    带icon用法
</demo>
<template>
    <LinkFont href="http://www.testall.top" iconleft="search">
        左侧icon
    </LinkFont>
    <LinkFont href="http://www.testall.top" iconright="goods-outline">
        右侧icon
    </LinkFont>
</template>

<script lang="ts">


    import LinkFont from '../lib/LinkFont.vue';
    export default {
        components: {
            LinkFont
        }
    };
</script>
