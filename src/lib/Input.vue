<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled"
               :readonly="readonly" :placeholder="placeholder"
               @input="$emit('update:value',$event.target.value)">
        <template v-if="error">
            <Icon name="warning" class="icon-error"></Icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script lang="ts">
    import Icon from './Icon.vue';

    export default {
        components: {Icon},
        name: 'Input',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            },
            placeholder: {
                type: String
            }
        }
    };
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        margin: 1em;

        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            height: 32px;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red;
            }
        }

        .icon-error {
            fill: $red;
        }

        .errorMessage {
            color: $red;
        }
    }
</style>
