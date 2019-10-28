import React from 'react';
import { Field } from 'react-final-form';

export interface ConditionalFieldProps {
  when: string;
  is: any;
  children: any;
}

export const ConditionalField: React.FunctionComponent<
  ConditionalFieldProps
> = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

ConditionalField.displayName = 'ConditionalField';
