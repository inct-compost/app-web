<template>
  <span
    id="Icon"
    class="material-symbols-rounded"
  >
    {{ icon }}
  </span>
</template>

<script lang="ts" setup>
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
export interface IIconProps {
  icon?: IconNameType | null
  size?: string
  color?: string | null
  fill?: boolean
  wght?: number
  grad?: number
  opsz?: number
}

/* -- props, emit -- */
const props = withDefaults(defineProps<IIconProps>(), {
  icon: null,
  size: '24px',
  color: null,
  fill: false,
  wght: 500,
  grad: 0,
  opsz: 48
})

/* -- store -- */
const colorStore = useColorStore()

/* -- variable(ref, reactive, computed) -- */
const iconColor = computed(() => {
  console.log(props.color)
  return props.color ? props.color : colorStore.color.theme.subText
})

/* -- function -- */
/* -- watch -- */
/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.material-symbols-rounded {
  font-variation-settings: 'FILL' v-bind('props.fill ? 1 : 0'), 'wght' v-bind('props.wght'), 'GRAD' v-bind('props.grad'), 'opsz' v-bind('props.opsz');
  font-size: v-bind('props.size');
  color: v-bind("iconColor");
  text-align: center;
  user-select: none;
}
</style>
