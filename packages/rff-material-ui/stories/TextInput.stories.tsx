import { ComponentProps } from 'react';
import { Form, Field } from 'react-final-form';
import { Story } from '@storybook/react';

import { TextInput } from '../src';

// This default export determines where your story goes in the story list
export default {
  title: 'TextInput',
  component: TextInput,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['standard', 'filled', 'outlined'],
      },
    },
  },
};

const onSubmit = async (values) =>
  window.alert(JSON.stringify(values, null, 2));

const Template: Story<ComponentProps<typeof TextInput>> = (args) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <Field
          {...args}
          name={args.name}
          variant={args.variant}
          component={TextInput}
          validate={(value) => (value ? undefined : 'Required field')}
        />
        <button type="submit" style={{ marginLeft: 16 }}>
          Send
        </button>
      </form>
    )}
  />
);

export const SimpleExample = Template.bind({});

SimpleExample.args = {
  name: 'email',
  label: 'Email',
  variant: 'standard',
};
