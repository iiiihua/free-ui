<template>
    <svg class="g-icon" v-if="name">
        <use :xlink:href="`#icon-free-${name}`"></use>
    </svg>
</template>


<script lang="ts">
    import './svg.ts'
    export default {
        props: {
            name
        }
    }
</script>

<style lang="scss">
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>
