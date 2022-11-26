<template>
  <span :class="`material-icons-${props.fill ? 'round' : 'outlined'}`">
    {{ props.icon }}
  </span>
</template>

<script lang="ts" setup>
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
export interface IIconProps {
  icon: IconNameType
  size?: string
  color?: string
  fill?: boolean
  wght?: number
}

/* -- props, emit -- */
const props = withDefaults(defineProps<IIconProps>(), {
  icon: undefined,
  size: '24px',
  color: undefined,
  fill: false,
  wght: 500
})

/* -- store -- */
const colorStore = useColorStore()

/* -- variable(ref, reactive, computed) -- */
/* -- function -- */
/* -- watch -- */
/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.material-icons-outlined, .material-icons-round {
  font-size: v-bind("props.size");
  font-weight: v-bind('props.wght');
  color: v-bind("props.color ? props.color : colorStore.color.theme.text");
  user-select: none;
}
</style>
