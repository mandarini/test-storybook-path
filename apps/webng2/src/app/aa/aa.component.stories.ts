import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AaComponent } from './aa.component';

export default {
  title: 'AaComponent',
  component: AaComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AaComponent>;

const Template: Story<AaComponent> = (args: AaComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}