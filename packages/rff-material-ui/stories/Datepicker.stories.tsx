import 'date-fns';

import { ComponentProps } from 'react';
import { Form, Field } from 'react-final-form';
import { Story } from '@storybook/react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { esES } from '@material-ui/core/locale';


import { Datepicker } from '../src';

// This default export determines where your story goes in the story list
export default {
  title: 'Datepicker',
  component: Datepicker,
};

const onSubmit = async (values) =>
  window.alert(JSON.stringify(values, null, 2));

const Template: Story<ComponentProps<typeof Datepicker>> = (args) => (
  <MuiPickersUtilsProvider locale={esES} utils={DateFnsUtils}>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
          <Field
            {...args}
            name={args.name}
            label={args.label}
            value={new Date()}
            component={Datepicker}
          />
          <button type="submit" style={{ marginLeft: 16 }}>
            Send
          </button>
        </form>
      )}
    />
  </MuiPickersUtilsProvider>
);

export const SimpleExample = Template.bind({});

SimpleExample.args = {
  name: 'date',
  label: 'Date',
  variant: "inline",
  inputVariant: "filled",
  placeholder: 'dd/mm/yyyy'
};
