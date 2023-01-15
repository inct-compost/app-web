import type { Meta, Story } from '@storybook/vue3'
import ColorModeButton from './ColorModeButton.vue'

export default {
  title: 'components/layouts/ColorModeButton',
  component: ColorModeButton,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ColorModeButton },
  setup () {
    return { args }
  },
  template: '<ColorModeButton v-bind="args">{{ args.default }}</ColorModeButton>'
})

export const Primary = Template.bind({})
Primary.args = {
}
