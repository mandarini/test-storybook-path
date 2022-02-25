import { Story, Meta } from '@storybook/react';
import { Bb, BbProps } from './bb';

export default {
  component: Bb,
  title: 'Bb',
} as Meta;

const Template: Story<BbProps> = (args) => <Bb {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
