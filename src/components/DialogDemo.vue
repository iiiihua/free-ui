<template>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
        <div>h1</div>
        <div>h2</div>
    </Dialog>
</template>

<script lang="ts">
    import {ref} from 'vue'
    import Dialog from "../lib/Dialog.vue";
    import Button from "../lib/Button.vue";

    export default {
        name: "SwitchDemo",
        components: {Dialog, Button},
        setup() {
            const x = ref(false)
            const toggle = () => {
                x.value = !x.value
            }
            const f1 = () => {
                return false
            }
            const f2 = () => {
            }
            return {x, toggle, f1, f2}
        }
    }
</script>

<style scoped>

</style>
