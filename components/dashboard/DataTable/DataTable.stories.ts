import type { Meta, Story } from '@storybook/vue3'
import DataTable from './DataTable.vue'

export default {
  title: 'components/dashboard/DataTable',
  component: DataTable,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DataTable },
  setup () {
    return { args }
  },
  template: '<DataTable v-bind="args">{{ args.default }}</DataTable>'
})

export const Primary = Template.bind({})
Primary.args = {
}
