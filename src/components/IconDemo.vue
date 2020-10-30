<template>
    <div>
        <h1>
            Icon字体图标
        </h1>
        <br>
        <h4>为了方便用户使用，icon图标默认不带任何css样式</h4>
        <Demo :component="Icon1"/>
        <div class="iconPress">
            <ul class="icons">
                <li class="is-icon"><Icon name="user-outline"/> <span>user-outline</span></li>
                <li class="is-icon"><Icon name="user"/> <span>user</span></li>
                <li class="is-icon"><Icon name="lock-outline"/> <span>lock-outline</span></li>
                <li class="is-icon"><Icon name="lock"/> <span>lock</span></li>
                <li class="is-icon"><Icon name="key-outline"/> <span>key-outline</span></li>
                <li class="is-icon"><Icon name="key"/> <span>key</span></li>
                <li class="is-icon"><Icon name="warning-outline"/> <span>warning-outline</span></li>
                <li class="is-icon"><Icon name="warning"/> <span>warning</span></li>
                <li class="is-icon"><Icon name="go-up"/> <span>go-up</span></li>
                <li class="is-icon"><Icon name="go-down"/> <span>go-down</span></li>
                <li class="is-icon"><Icon name="go-left"/> <span>go-left</span></li>
                <li class="is-icon"><Icon name="go-right"/> <span>go-right</span></li>
                <li class="is-icon"><Icon name="up"/> <span>up</span></li>
                <li class="is-icon"><Icon name="down"/> <span>down</span></li>
                <li class="is-icon"><Icon name="left"/> <span>left</span></li>
                <li class="is-icon"><Icon name="right"/> <span>right</span></li>
                <li class="is-icon"><Icon name="up-solid"/> <span>up-solid</span></li>
                <li class="is-icon"><Icon name="down-solid"/> <span>down-solid</span></li>
                <li class="is-icon"><Icon name="left-solid"/> <span>left-solid</span></li>
                <li class="is-icon"><Icon name="right-solid"/> <span>right-solid</span></li>
                <li class="is-icon"><Icon name="folder"/> <span>folder</span></li>
                <li class="is-icon"><Icon name="folder-add"/> <span>folder-add</span></li>
                <li class="is-icon"><Icon name="folder-delete"/> <span>folder-delete</span></li>
                <li class="is-icon"><Icon name="folder-checked"/> <span>folder-checked</span></li>
                <li class="is-icon"><Icon name="folder-warning"/> <span>floder-warning</span></li>
                <li class="is-icon"><Icon name="clock-outline"/> <span>clock-outline</span></li>
                <li class="is-icon"><Icon name="clock"/> <span>clock</span></li>
                <li class="is-icon"><Icon name="watch"/> <span>watch</span></li>
                <li class="is-icon"><Icon name="palyer"/> <span>palyer</span></li>
                <li class="is-icon"><Icon name="paly"/> <span>paly</span></li>
                <li class="is-icon"><Icon name="pause-outline"/> <span>pause-outline</span></li>
                <li class="is-icon"><Icon name="yes-solid"/> <span>yes-solid</span></li>
                <li class="is-icon"><Icon name="shop"/> <span>shop</span></li>
                <li class="is-icon"><Icon name="goods"/> <span>goods</span></li>
                <li class="is-icon"><Icon name="goods-body"/> <span>goods-body</span></li>
                <li class="is-icon"><Icon name="phone"/> <span>phone</span></li>
                <li class="is-icon"><Icon name="iphone"/> <span>iPhone</span></li>
                <li class="is-icon"><Icon name="ipad"/> <span>ipad</span></li>
                <li class="is-icon"><Icon name="view"/> <span>view</span></li>
                <li class="is-icon"><Icon name="picture"/> <span>picture</span></li>
                <li class="is-icon"><Icon name="date"/> <span>date</span></li>
                <li class="is-icon"><Icon name="delete-solid"/> <span>delete-solid</span></li>
                <li class="is-icon"><Icon name="picture-outline"/> <span>picture-outline</span></li>
                <li class="is-icon"><Icon name="search"/> <span>search</span></li>
                <li class="is-icon"><Icon name="goods-outline"/> <span>goods-outline</span></li>
                <li class="is-icon"><Icon name="goback"/> <span>goback</span></li>
                <li class="is-icon"><Icon name="more"/> <span>more</span></li>
                <li class="is-icon"><Icon name="more-outline"/> <span>more-outline</span></li>
                <li class="is-icon"><Icon name="option"/> <span>option</span></li>
                <li class="is-icon"><Icon name="reset"/> <span>areset</span></li>
                <li class="is-icon"><Icon name="tools-outline"/> <span>tools-outline</span></li>
                <li class="is-icon"><Icon name="tools"/> <span>tools</span></li>
                <li class="is-icon"><Icon name="mac"/> <span>mac</span></li>
                <li class="is-icon"><Icon name="setting"/> <span>setting</span></li>
                <li class="is-icon"><Icon name="apple"/> <span>apple</span></li>
            </ul>
        </div>
        <BottmoTouch go="/doc/switch" goback="/doc/color" gotext="Switch组件" gobacktext="Color色彩"/>
    </div>
</template>


<script lang="ts">
    import Icon from "../lib/Icon.vue";
    import Icon1 from './Icon1.demo.vue'
    import Demo from './Demo.vue';
    import BottmoTouch from './BottmoTouch.vue';
    export default {
        name: "IconDemo",
        components: {BottmoTouch, Demo, Icon},
        data(){
            return{Icon1}
        }
    }
</script>

<style scoped lang="scss">
    .iconPress{
        width: 92.59%;
        height: 200em;
    }
    .icons{
        display: grid;
        grid-template-columns: repeat(6, 18%);
        grid-template-rows: repeat(13, 13%);
        > .is-icon{
            border: 1px #d7dde4 dotted;
            text-align: center;
            > .g-icon {
                margin-top: 20%;
                transform: translateY(-20%);
                width: 50px;
                height: 50px;
            }
            > span{
                display: block;
                margin: 5% auto;
                color: #9ea7b4;
            }
        }
    }
</style>
