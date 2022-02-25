import { Story, Meta } from '@storybook/react';
import { Fourreact, FourreactProps } from './fourreact';

export default {
  component: Fourreact,
  title: 'Fourreact',
} as Meta;

const Template: Story<FourreactProps> = (args) => <Fourreact {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
