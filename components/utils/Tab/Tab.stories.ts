import type { Meta, Story } from '@storybook/vue3'
import Tab from './Tab.vue'

export default {
  title: 'components/utils/Tab',
  component: Tab,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tab },
  setup () {
    return { args }
  },
  template: '<Tab v-bind="args">{{ args.default }}</Tab>'
})

export const Primary = Template.bind({})
Primary.args = {
}
