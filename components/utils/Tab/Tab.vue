<template>
  <div id="tab">
    <Button
      v-for="(name, index) in tabNames"
      :key="index"
      :is-icon="index !== modelValue.index"
      :color="colorStore.color.theme.background"
      :icon="name.icon"
      :icon-props="{
        size: '20px',
        color: index !== modelValue.index ? colorStore.color.theme.background : null
      }"
      class="button"
      @click="select(index)"
    >
      <span
        class="tab-name"
        :style="{
          fontWeight: vModel.index === index ? 600 : 500
        }"
      >
        {{ index !== modelValue.index ? null : name.name }}
      </span>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
export interface ITabProps {
  modelValue: {
    name: string
    index: number
  }
  tabNames: Array<{
    name: string
    icon: IconNameType
  }>
}

export interface ITabEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<ITabProps>(), {
})

const emit = defineEmits<ITabEmits>()

/* -- variable(ref, reactive, computed) -- */
const vModel = useVModel(props, 'modelValue', emit)
// const selectBar = ref<HTMLElement>()

/* -- function -- */
const select = (index: number) => {
  vModel.value = {
    name: props.tabNames[index].name,
    index
  }

  /* selectBar.value?.style = {

  } as StyleValue */
}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#tab {
  display: flex;
  column-gap: 1rem;

  z-index: 99;
  position: absolute;
  bottom: 64px;
  left: 50%;
  width: auto;
  margin-bottom: 0.5em;
  padding: 0.25rem 1.25rem;

  transform: translateX(-50%);
  background-color: v-bind("colorStore.color.theme.text + 'd0'");
  border-radius: 0.5rem;

  .button {
    .tab-name{
      font-weight: 500;
    }
  }

  .select-bar {
    position: absolute;

    width: calc(100% + 0.8em);
    height: 2px;
    bottom: -8px;

    background-color: v-bind("colorStore.color.green.default");
    border-radius: 8px;
  }
}
</style>
