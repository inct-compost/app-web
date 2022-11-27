import type { Meta, Story } from '@storybook/vue3'
import BottomNavigationBar from './BottomNavigationBar.vue'

export default {
  title: 'components/layouts/BottomNavigationBar',
  component: BottomNavigationBar,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BottomNavigationBar },
  setup () {
    return { args }
  },
  template: '<BottomNavigationBar v-bind="args">{{ args.default }}</BottomNavigationBar>'
})

export const Primary = Template.bind({})
Primary.args = {
}
