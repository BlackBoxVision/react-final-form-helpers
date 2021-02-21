import { ComponentProps } from 'react';
import { Form, Field } from 'react-final-form';
import { Story } from '@storybook/react';

import { Checkbox } from '../src';

// This default export determines where your story goes in the story list
export default {
  title: 'Checkbox',
  component: Checkbox,
};

const onSubmit = async (values) =>
  window.alert(JSON.stringify(values, null, 2));

const Template: Story<ComponentProps<typeof Checkbox>> = (args) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <Field
          {...args}
          name={args.name}
          label={args.label}
          component={Checkbox}
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
  name: 'required',
  label: 'Required',
};
