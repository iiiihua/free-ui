<template>
    <div>
        <h2>Color色彩</h2>
        <br/>
        <h3>概述</h3>
        <br/>
        <span>free-ui推荐使用一下调色板的颜色作为设计和开发的规范色彩，以保证页面和组件之间的视觉一致</span>
        <br/>
        <br/>
        <h4>基础色</h4><br>
        <span>一些常用的基础色系</span>
        <div class="fr-color-all-basics">
            <div class="fr-color-basics-black">
                <span>基础黑色</span><br>
                <span>#000000</span>
            </div>
            <div class="fr-color-basics-white">
                <span>基础白色</span><br>
                <span>#ffffff</span>
            </div>
            <div class="fr-color-basics-transparent">
                <span>透明色</span><br>
                <span>Transparent</span>
            </div>
        </div>
        <h4>主色调</h4>
        <br/>
        <span>free-ui使用明度中等的蓝色作为主色调，适用于友好、安全、稳定的产品，Light Primary常用于hover，Dark Primary常用于click</span>
        <div class="fr-color-all-blue">
            <div class="fr-color-blue">
                <span>Primary</span><br/>
                <span>#3399ff</span>
            </div>
            <div class="fr-color-light">
                <span>Light Primary</span><br/>
                <span>#5cadff</span>
            </div>
            <div class="fr-color-dark">
                <span>Dark Primary</span><br/>
                <span>3091f2</span>
            </div>
        </div>
        <br>
        <h4>辅助色</h4><br/>
        <span>辅助色是具有代表性的颜色，常用于信息提示，比如成功，警告，失败</span>
        <div class="fr-color-all-police">
            <div class="fr-color-info">
                <span>Info</span><br>
                <span>#3399ff</span>
            </div>
            <div class="fr-color-success">
                <span>Success</span><br>
                <span>#00cc66</span>
            </div>
            <div class="fr-color-warning">
                <span>Warning</span><br>
                <span>#ff9900</span>
            </div>
            <div class="fr-color-error">
                <span>Error</span><br>
                <span>#ff6600</span>
            </div>
        </div>
        <br>
        <h4>中性色</h4>
        <br>
        <span>中性色常用于文本，背景，边框，阴影等，可以体现出页面的层次结构</span>
        <div class="fr-color-all-black">
            <div class="fr-color-title">
                <span>标题 Title</span><br>
                <span>#464c5b</span>
            </div>
            <div class="fr-color-content">
                <span>正文 Content</span><br>
                <span>#657180</span>
            </div>
            <div class="fr-color-subcolor">
                <span>辅助/图标 Sub Color</span><br>
                <span>#9ea7b4</span>
            </div>
            <div class="fr-color-disabled">
                <span>失效 Disabled</span><br>
                <span>#c3cbd6</span>
            </div>
            <div class="fr-color-border">
                <span>边框 Border</span><br>
                <span>#d7dde4</span>
            </div>
            <div class="fr-color-divider">
                <span>分割线 Divider</span><br>
                <span>#e3e8ee</span>
            </div>
            <div class="fr-color-bgc">
                <span>背景 Background</span><br>
                <span>#f5f7f9</span>
            </div>
        </div>
        <BottmoTouch go="/doc/icon" goback="/doc/get-started" gotext="Icon字体图标" gobacktext="开始使用"/>
    </div>


</template>

<script>
    import BottmoTouch from "./BottmoTouch.vue";
    export default {
        name: "ColorDemo",
        components: {BottmoTouch}
    }
</script>

<style lang="scss" scoped>

    span {
        font-size: 15px;
    }

    .fr-color-all-basics {
        width: 100%;
        height: 80px;
    }

    .fr-color-basics-black {
        margin: 5px;
        float: left;
        width: 27%;
        height: 70px;
        background-color: #000000;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-basics-white {
        margin: 5px;
        float: left;
        width: 27%;
        height: 70px;
        background-color: #ffffff;
        color: #464c5b;
        text-align: center;
        line-height: 30px;
        border: #e3e8ee 1px solid;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-basics-transparent {
        margin: 5px;
        float: left;
        width: 27%;
        height: 70px;
        background-color: transparent;
        color: #464c5b;
        text-align: center;
        line-height: 30px;
        border: red 1px solid;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-all-blue {
        width: 100%;
        height: 80px;
    }

    .fr-color-blue {
        margin: 5px;
        float: left;
        width: 27%;
        height: 70px;
        background-color: #3399ff;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }

    }

    .fr-color-light {
        margin: 5px;
        float: left;
        width: 27%;
        height: 70px;
        background-color: #5cadff;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-dark {
        margin: 5px;
        float: left;
        width: 27%;
        height: 70px;
        background-color: #3091f2;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-all-police {
        width: 100%;
        height: 80px;
    }

    .fr-color-info {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #3399ff;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-success {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #00cc66;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }

    }

    .fr-color-warning {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #ff9900;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-error {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #ff6600;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-all-black {
        width: 100%;
        height: 160px;
    }

    .fr-color-title {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #464c5b;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-content {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #657180;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-subcolor {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #9ea7b4;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-disabled {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #c3cbd6;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-border {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #d7dde4;
        color: #464c5b;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-divider {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #e3e8ee;
        color: #464c5b;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    .fr-color-bgc {
        margin: 5px;
        float: left;
        width: 20%;
        height: 70px;
        background-color: #f5f7f9;
        color: #464c5b;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;

        > span {
            font-size: 17px;
        }
    }

    @media (max-width: 500px) {
        .fr-color-all-basics, .fr-color-all-black, .fr-color-all-police, .fr-color-all-blue {
            span {
                font-size: 10px;
            }
        }
    }


</style>
