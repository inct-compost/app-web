import type { Meta, Story } from '@storybook/vue3'
import Card from './Card.vue'

export default {
  title: 'components/utils/Card',
  component: Card,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  setup () {
    return { args }
  },
  template: '<Card v-bind="args">{{ args.default }}</Card>'
})

export const Primary = Template.bind({})
Primary.args = {
}
