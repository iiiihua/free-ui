<template>
    <h2>Switch开关</h2><br>
    <h3>概述</h3><br>
    <span>在两种状态之间切换的时候用到的开关选择器</span><br><br>
    <h3>代码示例</h3><br>
    <div class="fr-demo-switch-cg">
        <div class="fr-demo-switch-cg1">
            <Switch v-model:value="bool"/>
            {{bool}}
            <div><span>基本用法，通过控制 v-model 双向绑定 Boolean 类型变量来切换「开/关」，当状态切换时会触发事件</span></div>
        </div>
        <div class="fr-demo-switch-cg-dm" ref="frDmid">11</div>

    </div>
    <button @click="frSwitchHide" class="fr-demo-switch-hide">{{dmvalue}}</button>
    <h3>尺寸</h3><br>
    <span>设置size属性可以更改Switch开关的大小</span>
    <br><br>
    <div class="fr-demo-switch-size">
        <div class="fr-demo-switch-size1">
            <div>
                <Switch v-model:value="bool2" size="large"/>
            </div>
            <br>
            <div>
                <Switch v-model:value="bool3"/>
            </div>
            <br>
            <div>
                <Switch v-model:value="bool4" size="small"/>
            </div>
        </div>
        <div class="fr-demo-switch-cg-dm" ref="frDmidSize">111</div>
    </div>
    <button class="fr-demo-switch-hide" @click="frSwitchHideSize">{{dmvaluesize}}</button>

    <div>
        <span>
            按钮颜色可以更改switchcolor的值，分别为success，warning，error
        </span><br>
        <div class="fr-demo-switch-color">
            <div class="fr-demo-switch-color1">
                <div>
                    <Switch v-model:value="bool5"/>
                </div>
                <div>
                    <Switch switchcolor="success" v-model:value="bool6"/>
                </div>
                <div>
                    <Switch switchcolor="warning" v-model:value="bool7"/>
                </div>
                <div>
                    <Switch switchcolor="error" v-model:value="bool8"/>
                </div>

            </div>
            <div class="fr-demo-switch-cg-dm" ref="frDmidColor">111</div>
        </div>

    </div>
    <button class="fr-demo-switch-hide" @click="frSwitchHidecolor">{{dmvaluecolor}}</button>
    <br><br><br>
    <h3>API</h3><br><br>
    <table>
        <tr><td><h4>参数</h4></td><td><h4>说明</h4></td><td>类型</td></tr>
        <tr><td>value</td><td>当前状态，可以使用v-model双向绑定数据</td><td>Boolean</td></tr>
        <tr><td>size</td><td>设置当前开关的大小</td><td>String</td></tr>
        <tr><td>switchcolor</td><td>设置当前开关的提醒色</td><td>String</td></tr>
    </table>

</template>

<script>
    import Switch from "../lib/Switch.vue";
    import {ref} from 'vue'

    export default {
        name: "SwitchDemo",
        components: {Switch},
        data() {
            return {
                dmvalue: '显示代码',
                dmvalueBool: true,
                dmvaluesize: '显示代码',
                dmvalueBoolSize: true,
                dmvaluecolor: '显示代码',
                dmvalueBoolcolor: true
            }
        },
        setup() {
            const bool = ref(true)
            const bool2 = ref(true)
            const bool3 = ref(true)
            const bool4 = ref(true)
            const bool5 = ref(true)
            const bool6 = ref(true)
            const bool7 = ref(true)
            const bool8 = ref(true)
            const bool9 = ref(true)
            return {
                bool,
                bool2,
                bool3,
                bool4,
                bool5,
                bool6,
                bool7,
                bool8,
                bool9
            }
        },
        methods: {
            frSwitchHide() {
                if (this.dmvalueBool === true) {
                    this.$refs.frDmid.style.height = '270px'
                    this.$refs.frDmid.style.borderTop = '#d7dde4 1px solid'
                    this.dmvalue = '隐藏代码'
                    this.dmvalueBool = false
                    return
                }
                this.$refs.frDmid.style.height = '0px'
                this.dmvalue = '显示代码'
                this.dmvalueBool = true
                this.$refs.frDmid.style.borderTop = 'none'
            },
            frSwitchHideSize() {
                if (this.dmvalueBoolSize === true) {
                    this.$refs.frDmidSize.style.height = '270px'
                    this.$refs.frDmidSize.style.borderTop = '#d7dde4 1px solid'
                    this.dmvaluesize = '隐藏代码'
                    this.dmvalueBoolSize = false
                    return
                }
                this.$refs.frDmidSize.style.height = '0px'
                this.dmvaluesize = '显示代码'
                this.dmvalueBoolSize = true
                this.$refs.frDmidSize.style.borderTop = 'none'
            },
            frSwitchHidecolor(){
                if (this.dmvalueBoolcolor === true) {
                    this.$refs.frDmidColor.style.height = '270px'
                    this.$refs.frDmidColor.style.borderTop = '#d7dde4 1px solid'
                    this.dmvaluecolor = '隐藏代码'
                    this.dmvalueBoolcolor = false
                    return
                }
                this.$refs.frDmidColor.style.height = '0px'
                this.dmvaluecolor = '显示代码'
                this.dmvalueBoolcolor = true
                this.$refs.frDmidColor.style.borderTop = 'none'
            }

        }
    }
</script>

<style lang="scss" scoped>
    .fr-demo-switch-cg {
        border: #d7dde4 1px solid;

        .fr-demo-switch-cg1 {
            height: 120px;
            padding: 15px;
        }

        span {
            display: block;
            height: 40px;
            margin-top: 20px;;
        }
    }

    .fr-demo-switch-cg-dm {
        height: 0px;
        overflow: hidden;
        transition: all 1s;
    }

    .fr-demo-switch-hide {
        background-color: #fff;
        border: none;
        outline: none;
        margin-left: 50%;
        transform: translateX(-50%);
    }

    .fr-demo-switch-hide:hover {
        color: #5cadff;
        transition: color 250ms;
    }

    .fr-demo-switch-size {
        border: #d7dde4 1px solid;

        .fr-demo-switch-size1 {
            height: 200px;
            padding: 15px;
        }
    }

    .fr-demo-switch-color {
        border: #d7dde4 1px solid;

        .fr-demo-switch-color1 {
            height: 200px;
            padding: 15px;
            div {
                margin: 10px;
            }

        }
    }
    table{
        td{
            padding: 10px 200px 10px 0px;
        }
    }


</style>
