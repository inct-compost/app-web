<template>
  <div id="card">
    <slot />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface ICardProps {
  modelValue: any;
}

export interface ICardEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<ICardProps>(), {
  modelValue: false
})

const emit = defineEmits<ICardEmits>()

/* -- variable(ref, reactive, computed) -- */
const vModel = useVModel(props, 'modelValue', emit)

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#card {
  max-width: calc(100% - 2em - 3px);
  padding: 1em;

  background-color: v-bind("colorStore.color.white.default");
  border: solid 1.5px v-bind("colorStore.color.theme.complementaryDarken[2]");
  border-radius: 8px;
}
</style>
