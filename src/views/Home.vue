<template>
    <div>
        <div class="topnavAndBanner">
            <Topnav/>
            <div class="banner">
                <h1>free-ui</h1>
                <h2>一个自由的ui框架</h2>
                <p class="actions">
                    <a href="https://github.com/iiiihua/year-ui.git">Github</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>使用了 Vue 3 Composition API</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-type"></use>
                    </svg>
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-linggan"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>

            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import Topnav from '../components/Topnav.vue';

    export default {
        name: 'Home',
        components: {Topnav}
    };
</script>

<style lang="scss" scoped>
    .topnavAndBanner {
        background: linear-gradient(153deg, rgba(10, 6, 64, 1) 6%, rgba(0, 245, 228, 1) 100%);
        clip-path: ellipse(90% 60% at 50% 40%);
    }

    .features {
        margin: 64px auto;
        padding: 0 27px;
        @media (min-width: 800px) {
            width: 800px;
            >ul {
                >li {
                    width: 50%;
                }
            }
        }
        @media (min-width: 1200px) {
            width: 1200px;
            >ul {
                >li {
                    width: 33.3333%;
                }
            }
        }

        > ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                width: 400px;
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas: "icon title" "icon text";
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;

                > svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }

                > h3 {
                    grid-area: title;
                    font-size: 28px;
                }

                > p {
                    grid-area: text
                }
            }
        }
    }

    .banner {
        color: #28d1c9;
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > .actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: #02bcb0;
                color: white;
                display: inline-block;
                padding: 8px 24px;
                border-radius: 4px;

                &:hover {
                    text-decoration: none;
                }

            }
        }
    }

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>
