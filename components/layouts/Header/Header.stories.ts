import type { Meta, Story } from '@storybook/vue3'
import Header from './Header.vue'

export default {
  title: 'components/layouts/Header',
  component: Header,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  setup () {
    return { args }
  },
  template: '<Header v-bind="args">{{ args.default }}</Header>'
})

export const Primary = Template.bind({})
Primary.args = {
}
