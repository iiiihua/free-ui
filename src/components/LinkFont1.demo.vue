<demo>
    常规用法
</demo>
<template>
    <LinkFont href="http://www.testall.top">
        默认链接
    </LinkFont><LinkFont href="http://www.testall.top" type="primary">
        主要链接
    </LinkFont><LinkFont href="http://www.testall.top" type="success">
        成功链接
    </LinkFont><LinkFont href="http://www.testall.top" type="warning">
        警告链接
    </LinkFont><LinkFont href="http://www.testall.top" type="danger">
        危险链接
    </LinkFont><LinkFont href="http://www.testall.top" type="info">
        信息链接
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
