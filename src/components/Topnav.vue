<template>
    <div class="topnav">
        <div class="logo">
            <img src="../assets/logo1.png" alt="">
            <span style="color: purple ">i</span>
            <span style="color: blue ">u</span>
            <span style="color: #5cadff ">-</span>
            <span style="color: chartreuse">e</span>
            <span style="color: yellow">e</span>
            <span style="color: orange">r</span>
            <span style="color: red">f</span>
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside" @click="toggleMenu">|||</span>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from 'vue'

    export default {
        name: "Topnav",
        setup() {
            const menuVisible = inject<Ref<boolean>>('menuVisibl') //get
            const toggleMenu = () => {
                menuVisible.value = !menuVisible.value
            }
            return {toggleMenu}
        }
    }
</script>

<style lang="scss" scoped>
    .topnav {
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 12;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        > .logo {
            max-width: 10em;
            margin-left: 1em;
            margin-right: auto;

            > img {
                width: 40%;
            }

            > span {
                float: right;
                font-size: 2em;
                color: cyan
            }
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

            > li {
                margin: 0 1em;
            }
        }

        > .toggleAside {
            width: 24px;
            height: 24px;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
            font-size: 20px;
            text-align: center;
            cursor: pointer;
            user-select: none;

        }

        @media (max-width: 500px) {
            > .menu {
                display: none
            }
            > .logo {
                margin: 0 auto
            }
            > .toggleAside {
                display: inline-block
            }
        }
    }
</style>
