<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component"/>
        </div>
        <div class="demo-actions">
            <Button @click="test">{{see}}</Button>
        </div>
        <div class="demo-code" v-if="seeValue">
            <pre class="language-html" v-html="html"/>
        </div>

    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue';
    import 'prismjs';
    import 'prismjs/themes/prism-coy.css';
    import {
        computed,
        ref
    } from 'vue';


    const Prism = (window as any).Prism;
    export default {
        components: {
            Button
        },
        props: {
            component: Object
        },
        data() {
            return {
                seeValue: false,
                see: '显示代码'
            };
        },
        methods: {
            test() {
                if (this.seeValue) {
                    this.see = '显示代码';
                    this.seeValue = !this.seeValue;
                } else {
                    this.see = '隐藏代码';
                    this.seeValue = !this.seeValue;
                }
            }
        },
        setup(props) {
            const html = computed(() => {
                return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
            });
            return {
                Prism, html
            };
        }
    };
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;

        > h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }

        &-component {
            padding: 16px;
        }

        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }

        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            overflow-x: auto;

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>
