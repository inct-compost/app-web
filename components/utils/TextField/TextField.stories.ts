import type { Meta, Story } from '@storybook/vue3'
import TextField from './TextField.vue'

export default {
  title: 'components/utils/TextField',
  component: TextField,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextField },
  setup () {
    return { args }
  },
  template: '<TextField v-bind="args">{{ args.default }}</TextField>'
})

export const Primary = Template.bind({})
Primary.args = {
}
