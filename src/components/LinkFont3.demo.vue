<demo>
    常规用法
</demo>
<template>
    <LinkFont href="http://www.testall.top">
        有下划线
    </LinkFont>
    <LinkFont href="http://www.testall.top"  underline="任意字符或true">
        无下划线
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
