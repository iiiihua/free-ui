<template>
    <div class="layout">
        <Topnav :toggle-menu-button-visible="true" class="nav"/>
        <div class="content">
            <aside v-if="menuVisible">
                <div>
                    <h1>文档</h1>
                    <br>
                    <ol>
                        <li>
                            <router-link to="/doc/intro">介绍</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/install">安装</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/get-started">开始使用</router-link>
                        </li>
                    </ol>
                    <br>

                    <h1>组件列表</h1>
                    <br>
                    <ol>
                        <li>
                            <router-link to="/doc/color">Color色彩</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/icon">icon字体图标</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/switch">Switch 组件</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/button">Button 组件</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/input">Input 组件</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/dialog">Dialog 组件</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/tabs">Tabs 组件</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/linkfont">link文字链接</router-link>
                        </li>
                        <br>
                        <li>
                            <router-link to="/doc/alert">Alert警告</router-link>
                        </li>
                    </ol>
                </div>
            </aside>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>
<script lang="ts">
    import Topnav from '../components/Topnav.vue';
    import {inject, Ref} from 'vue';
    import Icon from '../lib/Icon.vue';

    export default {
        name: 'Doc.vue',
        components: {Icon, Topnav},
        setup() {
            const menuVisible = inject<Ref<boolean>>('menuVisibl'); //get
            return {menuVisible};

        }

    };
</script>
<style lang="scss" scoped>
    .router-link-active {
        color: #5cadff;
    }

    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;

        > .nav {
            flex-shrink: 0;
        }

        > .content {
            width: 85%;
            flex-grow: 1;
            padding-left: 20em;
            @media (max-width: 500px) {
                width: 100%;
                padding-left: 0;
                aside {
                    background-color: #fff;
                    z-index: 11;
                }
            }
        }
    }

    .content {
        display: flex;

        > aside {
            flex-shrink: 0;
            overflow: auto;
        }

        > main {
            flex-grow: 1;
            padding: 16px;
        }
    }

    aside {
        padding: 3em;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 7em;
        overflow: auto;

        > h2 {
            margin-bottom: 4px;
        }
        > ol {
            > li {
                padding: 4px 0;
            }
        }
    }

    main {
        margin-top: 3em;
    }
</style>
