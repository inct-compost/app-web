import type { Meta, Story } from '@storybook/vue3'
import Chart from './Chart.vue'

export default {
  title: 'components/utils/Chart',
  component: Chart,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Chart },
  setup () {
    return { args }
  },
  template: '<Chart v-bind="args">{{ args.default }}</Chart>'
})

export const Primary = Template.bind({})
Primary.args = {
}
