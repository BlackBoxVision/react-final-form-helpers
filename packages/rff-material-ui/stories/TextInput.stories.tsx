import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { TextInput } from '../src/index';

// This default export determines where your story goes in the story list
export default {
  title: 'TextInput',
  component: TextInput,
};

const Template: Story<ComponentProps<typeof TextInput>> = (args) => (
  <TextInput {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /* the args you need here will depend on your component */
};
