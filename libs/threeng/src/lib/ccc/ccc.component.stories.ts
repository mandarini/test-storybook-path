import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CccComponent } from './ccc.component';

export default {
  title: 'CccComponent',
  component: CccComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CccComponent>;

const Template: Story<CccComponent> = (args: CccComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}