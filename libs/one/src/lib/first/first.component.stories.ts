import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FirstComponent } from './first.component';

export default {
  title: 'FirstComponent',
  component: FirstComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FirstComponent>;

const Template: Story<FirstComponent> = (args: FirstComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}