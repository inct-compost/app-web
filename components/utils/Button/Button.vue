<template>
  <button
    id="Button"
    :disabled="disabled"
    :size="size"
    :fab="fab"
    :icon="isIcon"
    :outlined="outlined"
    @click="click()"
  >
    <div class="text">
      <Icon
        v-if="icon"
        :icon="icon"
        :color="iconProps?.color ? iconProps.color : outlined || isIcon || color === 'transparent' ? null : dependsLuminanceColor(color)"
        size="24px"
        :fill="props.iconProps?.fill"
        :wght="500"
        :style="!isIcon && 'margin-right: 0.75rem'"
      />
      <p>
        <slot />
      </p>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { IIconProps } from '../Icon/Icon.vue'
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
export interface IButtonEmits {
  (e: 'click'): void
}

export interface IButtonProps {
  disabled?: boolean
  icon?: IconNameType
  iconProps?: IIconProps
  color?: 'transparent' | string
  size?: 'small' | 'normal' | 'large'
  fab?: boolean
  isIcon?: boolean
  outlined? :boolean
  fitContent?: boolean
  to?: string
}

/* -- props, emit -- */
const props = withDefaults(defineProps<IButtonProps>(), {
  icon: undefined,
  iconProps: undefined,
  color: '#5498ff',
  size: 'normal',
  to: undefined
})

const emit = defineEmits<IButtonEmits>()

/* -- store -- */
const colorStore = useColorStore()

/* -- state -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */
const click = () => {
  props.to ? navigateTo(props.to, { external: true }) : emit('click')
}

/* -- watch -- */
/* -- life cycle -- */

</script>

<style lang="scss" scoped>
#Button {
  position: relative;
  width: v-bind("props.fitContent ? 'fit-content' : 'auto'");
  height: 100%;

  border: none;
  border-radius: 0.5rem;
  background-color: v-bind("props.color");
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);

  .text {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    position: relative;
    z-index: 1;
    height: 24px;
    margin: 0rem 0.4em;

    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: v-bind("props.color === 'transparent' ? colorStore.color.theme.text : dependsLuminanceColor(props.color)");
    white-space: nowrap;

    p {
      vertical-align: text-top;
      margin: 0px;
    }

    span {
      line-height: 24px;
    }
  }

  &:hover::before {
    position: absolute;
    z-index: 2;
    content: '';
    width: 100%;
    height: 100%;

    top: 0%;
    left: 0%;

    border-radius: 8px;
    background-color: #CCCCCC2D;
  }

  &:disabled {
    color: rgba(16, 16, 16, 0.5);
    cursor: not-allowed;

    .text {
      color: rgba(16, 16, 16, 0.5);
    }

    svg path {
      fill: rgba(16, 16, 16, 0.5);
    }

    &::after {
      position: absolute;
      z-index: 0;
      content: '';
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;

      border-radius: 8px;
      background-color: v-bind('colorStore.color.black.lighten[2]');
    }
  }

  &:disabled:hover::before {
    position: absolute;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;

    top: 0%;
    left: 0%;

    border-radius: 8px;
    background-color: #CCCCCC00;
  }

  &[fab] {
    .text {
      height: calc(100% - 16px);
      padding: 8px;
    }
  }

  &[outlined = true] {
    background-color: transparent;

    border: solid 2px v-bind("props.color");
    .text {
      color: v-bind("colorStore.color.theme.text");
      font-weight: 600;
    }
  }

  &[size = "small"] {
    width: v-bind("props.fitContent ? 'fit-content' : 'auto'");
    height: 32px;

    border-radius: 0.4em;
    &:hover::before {
      border-radius: 0.3em;
    }

    .text {
      font-weight: 500;
    }
  }

  &[size = "normal"] {
    width: v-bind("props.fitContent ? 'fit-content' : 'auto'");
    height: 40px;
  }

  &[size = "large"] {
    width: v-bind("props.fitContent ? 'fit-content' : 'auto'");
    height: 64px;
    border-radius: 16px;

    &:hover::before {
      border-radius: 16px;
    }
  }

  &[icon = true] {
    width: 40px;
    height: 40px;
    padding: 0px;

    background-color: transparent;
    border-radius: 0.4em;

    &:hover::before {
      border-radius: 25%;
    }

    .text {
      height: calc(100%);

      padding: 0px;
      margin: 0px;
    }

    &[size = "small"] {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
