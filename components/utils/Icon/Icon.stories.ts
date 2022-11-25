import type { Meta, Story } from '@storybook/vue3'
import Icon from './Icon.vue'

export default {
  title: 'components/utils/Icon',
  component: Icon
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  setup () {
    return { args }
  },
  template: '<Icon v-bind="args">{{ args.default }}</Icon>'
})

export const Primary = Template.bind({})
Primary.args = {
  icon: 'face'
}
