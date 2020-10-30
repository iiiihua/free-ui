<template>
    <div>
        <a :href="href" :class="[type? type: '',underline? 'underline':'']" >
            <Icon v-if="iconleft" :name="iconleft"/>
            <slot/>
            <Icon v-if="iconright" :name="iconright"/>
        </a>
    </div>
</template>

<script lang="ts">
    import Icon from './Icon.vue';
    export default {
        name: 'LinkFont',
        components: {Icon},
        props: {
            href: {
                type: String
            },
            type: {
                type: String
            },
            iconleft: {
                type: String
            },
            iconright: {
                type: String
            },
            underline: {
                type: Boolean || String
            }
        },
        setup(props) {
            console.log(props);
        }
    };
</script>

<style scoped lang="scss">
    a:hover{
        color: #5cadff;
        text-decoration: underline #5cadff;
        transition: 250ms;
    }
    .primary{
        color: #5cadff;
        &:hover{
            text-decoration: underline #5cadff;
        }
    }
    .success{
        color: #00cc66;
        &:hover{
            color: #00cc66;
            text-decoration: underline #00cc66;
        }
    }
    .warning{
        color: #ff9900;
        &:hover{
            color: #ff9900;
            text-decoration: underline #ff9900;
        }
    }
    .danger{
        color: #FF3333;
        &:hover{
            color: #FF3333;
            text-decoration: underline #FF3333;
        }
    }
    .info{
        color: #c3cbd6;
        &:hover{
            color: #c3cbd6;
            text-decoration: underline #c3cbd6;
        }
    }
    .g-icon{
        margin: 0 .5em;
    }
    .underline{
        text-decoration: none;
        &:hover{
            text-decoration: none;
        }
    }

</style>
