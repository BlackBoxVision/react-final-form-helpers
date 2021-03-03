import 'date-fns';

import esLocale from 'date-fns/locale/es';

import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import DateFnsUtils from '@date-io/date-fns';
import { Form, Field } from 'react-final-form';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { Datepicker } from '../src';

// This default export determines where your story goes in the story list
export default {
  title: 'Datepicker',
  component: Datepicker,
};

const onSubmit = async (values) =>
  window.alert(JSON.stringify(values, null, 2));

const Template: Story<ComponentProps<typeof Datepicker>> = (args) => (
  <MuiPickersUtilsProvider locale={esLocale} utils={DateFnsUtils}>
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
  label: 'Fecha',
  variant: 'inline',
  margin: 'normal',
  inputVariant: 'filled',
  mask: '__/__/____',
  formatDate: 'dd/MM/yyyy',
  placeholder: 'dd/mm/yyyy',
  initialFocusedDate: new Date(),
};
