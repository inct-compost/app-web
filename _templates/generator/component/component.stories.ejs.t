---
to: <%= atomic %>/<%= h.changeCase.pascal(componentName) %>/<%= h.changeCase.pascal(componentName) %>.stories.ts
---
import type { Meta, Story } from '@storybook/vue3'
import <%= h.changeCase.pascal(componentName) %> from './<%= h.changeCase.pascal(componentName) %>.vue'

export default {
  title: '<%= atomic %>/<%= h.changeCase.pascal(componentName) %>',
  component: <%= h.changeCase.pascal(componentName) %>,
  argTypes: {
  }
} as Meta

const Template: Story = args => ({
  components: { <%= h.changeCase.pascal(componentName) %> },
  setup () {
    return { args }
  },
  template: '<<%= h.changeCase.pascal(componentName) %> v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
}
