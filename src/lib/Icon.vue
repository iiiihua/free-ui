<template>
    <svg class="g-icon" v-if="name">
        <use :xlink:href="`#icon-free-${name}`"></use>
    </svg>
</template>


<script>
    import '//at.alicdn.com/t/font_2166045_zm5ptim00pb.js'
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
