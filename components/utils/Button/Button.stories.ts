import type { Meta, Story } from '@storybook/vue3'
import Button from './Button.vue'

export default {
  title: 'components/utils/Button',
  component: Button,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  setup () {
    return { args }
  },
  template: '<Button v-bind="args">{{ args.default }}</Button>'
})

export const Primary = Template.bind({})
Primary.args = {
  default: 'Button text'
}
