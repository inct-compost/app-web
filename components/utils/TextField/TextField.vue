<template>
  <div id="textField">
    <input
      v-model="value"
      :type="type"
      :name="labelText"
      :placeholder="placeholder"
    >
    <label>{{ labelText }}</label>
    <small v-if="errorMessage">
      <Icon
        icon="error"
        size="16px"
        :color="colorStore.color.red.default"
        fill
      />
      <span class="error-text">
        {{ errorMessage }}
      </span>
    </small>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'

/* -- type, interface -- */
export interface ITextFieldProps {
  modelValue: string
  type?: 'text' | 'password'
  labelText: string
  placeholder: string
}

export interface ITextFieldEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<ITextFieldProps>(), {
  modelValue: '',
  type: 'text',
  labelText: 'label',
  placeholder: 'プライスホルダー'
})

const emit = defineEmits<ITextFieldEmits>()

/* -- variable(ref, reactive, computed) -- */
const vModel = useVModel(props, 'modelValue', emit)

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
const { value, errorMessage } = useField(vModel, 'required')
</script>

<style lang="scss" scoped>
#textField {
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  position: relative;
  width: fit-content;
  margin: 2em 0px 1em;

  &-icon {
    margin: 0px 8px;
  }

  small {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding-top: 0.25rem;
    padding-left: 0.5rem;

    color: v-bind("colorStore.color.red.default");
    font-size: 14px;

    .error-text {
      margin-left: 0.5rem;
    }
  }

  input {
    flex-grow: 1;

    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 100%;
    min-height: 56px;
    padding: 0.75rem 1rem;

    transition: 0.2s;
    font: 15px/24px 'Noto Sans JP', sans-serif;
    box-sizing: border-box;
    border: 0px solid v-bind("colorStore.color.black.lighten[2]");
    border-radius: 8px;
    background-color: #bec6cf50;
    resize: vertical;

    &::placeholder {
      color: transparent;
    }

    &:focus {
      outline: none;

      &::placeholder {
        color: v-bind("colorStore.color.theme.subText");
      }

      & ~ label {
        top: 0px;
        left: 0.5rem;

        line-height: 14px;
        font-size: 14px;
        transition: 0.2s;
        color: v-bind("colorStore.color.black.lighten[1]");
      }
    }

    &:valid ~ label {
      top: -24px;
      left: 0.5rem;

      line-height: 14px;
      font-size: 14px;
      transition: 0.2s;
      color: v-bind("colorStore.color.black.lighten[1]");
    }

    /* & ~ label {
      position: absolute;
      z-index: 0;
      line-height: 56px;
      top: 24px;
      left: 1rem;

      transition: 0.2s;
      letter-spacing: 0.5px;
      color: v-bind("colorStore.color.theme.text");
    } */

    & ~ label {
      position: absolute;
      z-index: 0;
      top: -24px;
      left: 0.5rem;

      line-height: 14px;
      font-size: 14px;
      transition: 0.2s;
      color: v-bind("colorStore.color.black.lighten[1]");
    }
  }
}
</style>
