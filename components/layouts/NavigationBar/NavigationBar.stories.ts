import type { Meta, Story } from '@storybook/vue3'
import NavigationBar from './NavigationBar.vue'

export default {
  title: 'components/layouts/NavigationBar',
  component: NavigationBar,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavigationBar },
  setup () {
    return { args }
  },
  template: '<NavigationBar v-bind="args">{{ args.default }}</NavigationBar>'
})

export const Primary = Template.bind({})
Primary.args = {
}
