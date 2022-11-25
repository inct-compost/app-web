import type { Meta, Story } from '@storybook/vue3'
import Button from './Button.vue'

export default {
  title: 'components/utils/Button',
  component: Button,
  argTypes: {
  }
} as Meta

const Template: Story = args => ({
  components: { Button },
  setup () {
    return { args }
  },
  template: '<Button v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
}
