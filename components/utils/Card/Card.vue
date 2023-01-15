<template>
  <div id="card">
    <div class="title">
      <Icon
        v-if="icon"
        :icon="icon"
      />
      <p v-text="title" />
    </div>
    <div class="contents">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
export interface ICardProps {
  title: string
  icon?: IconNameType
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
  title: 'タイトル',
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
  display: grid;
  grid-template-rows: min-content 1fr;
  row-gap: 0.5rem;

  width: v-bind("props.width");
  height: v-bind("props.height");

  box-sizing: border-box;
  background-color: v-bind("props.backgroundColor ? props.backgroundColor : colorStore.color.theme.background");
  border-radius: 8px;

  .title {
    display: inline-flex;
    align-items: center;
    column-gap: 0.25rem;

    color: v-bind("colorStore.color.theme.subText");

    p {
      margin: 0px;
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  .contents {
    height: 100%;
  }
}
</style>
