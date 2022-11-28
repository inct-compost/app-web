import type { Meta, Story } from '@storybook/vue3'
import SignInButton from './SignInButton.vue'

export default {
  title: 'components/utils/SignInButton',
  component: SignInButton,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SignInButton },
  setup () {
    return { args }
  },
  template: '<SignInButton v-bind="args">{{ args.default }}</SignInButton>'
})

export const Primary = Template.bind({})
Primary.args = {
}
