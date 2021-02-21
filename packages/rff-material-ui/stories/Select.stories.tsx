import { ComponentProps } from 'react';
import { Form, Field } from 'react-final-form';
import { Story } from '@storybook/react';

import { Select } from '../src';

// This default export determines where your story goes in the story list
export default {
  title: 'Select',
  component: Select,
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

const Template: Story<ComponentProps<typeof Select>> = (args) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <Field
          {...args}
          name={args.name}
          variant={args.variant}
          options={args.options}
          component={Select}
          validate={(value) => (value ? undefined : 'Required field')}
          style={{ width: 200 }}
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
  name: 'difficult',
  label: 'Difficult',
  variant: 'filled',
  options: [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ],
};
