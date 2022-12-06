import type { Meta, Story } from '@storybook/vue3'
import BriefInfoCard from './BriefInfoCard.vue'

export default {
  title: 'components/dashboard/BriefInfoCard',
  component: BriefInfoCard,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BriefInfoCard },
  setup () {
    return { args }
  },
  template: '<BriefInfoCard v-bind="args">{{ args.default }}</BriefInfoCard>'
})

export const Primary = Template.bind({})
Primary.args = {
}
