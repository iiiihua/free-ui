<template><router-view/></template>

<script lang="ts">
    import {ref, provide} from 'vue'
    import {router} from "./router";

    export default {
        name: 'App',
        setup() {
            const width = document.documentElement.clientWidth
            const menuVisible = ref(width <= 500 ? false : true)
            provide('menuVisibl', menuVisible) //set
            // 每次切换路由都会执行这个函数
            router.afterEach(() => {
                if (width <= 500) {
                    menuVisible.value = false
                }

            })


        }
    }
</script>
