<template>
    <svg class="g-icon" v-if="name">
        <use :xlink:href="`#icon-free-${name}`"></use>
    </svg>
</template>


<script lang="ts">
    import '//at.alicdn.com/t/font_2166045_v6qx5n2f8lc.js'
    export default {
        props: {
            name
        }
    }
</script>

<style>
    .g-icon {
        width: 50px;
        height: 50px;
    }
</style>
