import type { Meta, Story } from '@storybook/vue3'
import MaturityLevelCard from './MaturityLevelCard.vue'

export default {
  title: 'components/index/MaturityLevelCard',
  component: MaturityLevelCard,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MaturityLevelCard },
  setup () {
    return { args }
  },
  template: '<MaturityLevelCard v-bind="args">{{ args.default }}</MaturityLevelCard>'
})

export const Primary = Template.bind({})
Primary.args = {
}
