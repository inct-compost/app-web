<template>
  <div id="card">
    <slot />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface ICardProps {
  width: string
  height: string
  backgroundColor?: string
  borderColor?: string
}

export interface ICardEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<ICardProps>(), {
  width: 'auto',
  height: 'auto'
})

defineEmits<ICardEmits>()

/* -- variable(ref, reactive, computed) -- */
/* const vModel = useVModel(props, 'modelValue', emit) */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#card {
  width: v-bind("props.width");
  height: v-bind("props.height");
  max-width: calc(100% - 2em - 3px);
  padding: 1em;

  background-color: v-bind("props.backgroundColor ? props.backgroundColor : colorStore.color.theme.card");
  border: solid 1.5px v-bind("props.borderColor ? props.borderColor : colorStore.color.theme.complementaryDarken[2]");
  border-radius: 8px;
}
</style>
