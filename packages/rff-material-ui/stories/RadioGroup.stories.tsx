import { ComponentProps } from 'react';
import { Form, Field } from 'react-final-form';
import { Story } from '@storybook/react';

import { RadioGroup } from '../src';

// This default export determines where your story goes in the story list
export default {
  title: 'RadioGroup',
  component: RadioGroup,
};

const onSubmit = async (values) =>
  window.alert(JSON.stringify(values, null, 2));

const Template: Story<ComponentProps<typeof RadioGroup>> = (args) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          {...args}
          name={args.name}
          component={RadioGroup}
          validate={(value) => (value ? undefined : 'Required field')}
          options={args.options}
          helperText={args.helperText}
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
  name: 'gender',
  label: 'Gender',
  helperText: 'Campo requerido',
  options: [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'disabled', label: 'Disabled field', disabled: true },
  ],
};
