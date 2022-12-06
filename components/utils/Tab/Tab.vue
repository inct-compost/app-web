<template>
  <div id="tab">
    <Button
      v-for="(name, index) in tabNames"
      :key="index"
      color="transprerent"
      :icon="name.icon"
      :icon-props="{
        size: '20px'
      }"
      size="small"
      class="button"
      @click="select(index)"
    >
      <span
        class="tab-name"
        :style="{
          fontWeight: vModel.index === index ? 600 : 500
        }"
      >
        {{ name.name }}
      </span>
      <div
        v-if="vModel.index === index"
        class="select-bar"
      />
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;

  width: auto;
  margin-bottom: 2em;

  .button {
    margin: 0px 1em;

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
