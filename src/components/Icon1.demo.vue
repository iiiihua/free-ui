<demo>
    Icon 字体图标示例
</demo>
<template>
    <div>
        <Icon name="user"/>
        <Icon name="mac"/>
        <Icon name="key"/>
        <Button iconleft="search">搜索</Button>
    </div>
</template>

<script lang="ts">
    import Icon from '../lib/Icon.vue';
    import Button from '../lib/Button.vue';
    export default {
        components: {
            Button,
            Icon
        }
    }
</script>
<style lang="scss" scoped>
    .g-icon{
        height: 2em;
        width: 2em;
        margin-right: 2em;
    }
</style>
