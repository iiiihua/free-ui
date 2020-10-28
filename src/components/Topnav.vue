<template>
    <div class="topnav">
        <router-link class="logo" to="/">
            <img src="../assets/logo1.png" alt="">
            <span style="color: purple ">i</span>
            <span style="color: blue ">u</span>
            <span style="color: #5cadff ">-</span>
            <span style="color: chartreuse">e</span>
            <span style="color: yellow">e</span>
            <span style="color: orange">r</span>
            <span style="color: red">f</span>
        </router-link>
        <ul class="menu">
            <router-link to="/doc">文档</router-link>
        </ul>
        <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
            <use xlink:href="#icon-menu"></use>
        </svg>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from 'vue'

    export default {
        name: "Topnav",
        props: {
           toggleMenuButtonVisible: {
               type: Boolean,
               default: false
           }
        },
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
        color: #007974;
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        justify-content: center;
        align-items: center;

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
            width: 32px;
            height: 32px;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
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
