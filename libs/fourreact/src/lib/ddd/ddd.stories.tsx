import { Story, Meta } from '@storybook/react';
import { Ddd, DddProps } from './ddd';

export default {
  component: Ddd,
  title: 'Ddd',
} as Meta;

const Template: Story<DddProps> = (args) => <Ddd {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
