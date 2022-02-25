import { Story, Meta } from '@storybook/react';
import { Second, SecondProps } from './second';

export default {
  component: Second,
  title: 'Second',
} as Meta;

const Template: Story<SecondProps> = (args) => <Second {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
