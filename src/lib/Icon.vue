<template>
    <svg class="g-icon" v-if="name">
        <use :xlink:href="`#icon-free-${name}`"></use>
    </svg>
</template>


<script lang="ts">
    export default {
        props: {
            name
        }
    }
</script>

<style>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>
